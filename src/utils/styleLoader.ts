export interface IStyleLoaderOptions {
  modules?: string[];
  classes?: string[];
}

let icssLoaded = false

// Карта соответствия классов модулям
const classToModuleMap: Record<string, string> = {
  // flexbox
  'flex': 'flexbox',
  'flex-column': 'flexbox',
  'flex-row': 'flexbox',
  'flex-wrap': 'flexbox',
  'flex-nowrap': 'flexbox',
  'items': 'flexbox',
  'justify': 'flexbox',
  'content': 'flexbox',
  'self': 'flexbox',
  'shrink': 'flexbox',
  'grow': 'flexbox',
  'order': 'flexbox',

  // display
  'inline': 'display',
  'block': 'display',
  'inline-block': 'display',
  'table': 'display',
  'table-cell': 'display',
  'overflow': 'display',

  // align
  'align': 'align',

  // position
  'position': 'position',
  'top': 'position',
  'right': 'position',
  'bottom': 'position',
  'left': 'position',

  // border
  'border': 'border',
  'rounded': 'border',
  'divider': 'border',

  // typography
  'text': 'typography',
  'font': 'typography',
  'leading': 'typography',
  'tracking': 'typography',

  // spacing
  'm': 'spacing',
  'mx': 'spacing',
  'my': 'spacing',
  'mt': 'spacing',
  'mr': 'spacing',
  'mb': 'spacing',
  'ml': 'spacing',
  'p': 'spacing',
  'px': 'spacing',
  'py': 'spacing',
  'pt': 'spacing',
  'pr': 'spacing',
  'pb': 'spacing',
  'pl': 'spacing',

  // sizing
  'w': 'sizing',
  'h': 'sizing',
  'min-w': 'sizing',
  'min-h': 'sizing',
  'max-w': 'sizing',
  'max-h': 'sizing',

  // bg
  'bg': 'bg',

  // effects
  'shadow': 'effects',
  'opacity': 'effects',

  // interactivity
  'cursor': 'interactivity',
  'pointer-events': 'interactivity',
  'resize': 'interactivity',

  // scroll
  'scroll': 'scroll',

  // animations
  'animate': 'animations',

  // outline
  'outline': 'outline',

  // grid
  'grid': 'grid',
  'col': 'grid',
  'row': 'grid',

  // filters
  'filter': 'filters',
  'blur': 'filters',
  'brightness': 'filters',
  'contrast': 'filters',
  'grayscale': 'filters',
  'hue-rotate': 'filters',
  'invert': 'filters',
  'saturate': 'filters',
  'sepia': 'filters',

  // hide
  'hide': 'hide',
  'show': 'hide',
}

export const getModulesFromClasses = (classes: string | string[]): string[] => {
  if (!classes) return []

  let _classes = Array.isArray(classes) ? classes : []

  if (classes?.length > 0 && !Array.isArray(classes)) {
    _classes = classes?.replaceAll(' ', '')?.split(',')
  }
  const modules = new Set<string>()

  _classes.forEach(className => {
    // Проверяем точные соответствия
    if (classToModuleMap[className]) {
      modules.add(classToModuleMap[className])
      return
    }

    // Проверяем частичные соответствия (префиксы)
    for (const [ prefix, module ] of Object.entries(classToModuleMap)) {
      // проверим классы на совпадение с префиксом в модуле
      if (className.split('-')?.[0] === prefix?.split('-')?.[0]) {
        modules.add(module)
        break
      }
    }
  })

  return Array.from(modules)
}

export interface IStyleLink {
  href: string
  rel: string
  type: string
}

export interface IStyleLinksOptions extends IStyleLoaderOptions {
  /**
   * Базовый путь для CSS файлов
   * По умолчанию используется для SSR: пути относительно public папки
   * Для браузера: используется import(...?url) для получения правильного URL
   */
  basePath?: string
  /**
   * Режим работы: 'ssr' | 'browser'
   * Если не указан, определяется автоматически
   */
  mode?: 'ssr' | 'browser'
}

/**
 * Определяет режим работы автоматически
 */
const detectMode = (): 'ssr' | 'browser' => {
  return typeof document === 'undefined' ? 'ssr' : 'browser'
}

/**
 * Возвращает список ссылок на CSS файлы для SSR и браузера
 * Использует ту же логику формирования путей, что и loadStyles
 * 
 * @param options - опции загрузчика стилей
 * @param options.mode - режим работы ('ssr' или 'browser'), по умолчанию определяется автоматически
 * @param options.basePath - базовый путь для CSS файлов (для SSR режима)
 * @returns Promise с массивом объектов IStyleLink для вставки в <head>
 */
export const getStyleLinks = async (options?: IStyleLinksOptions): Promise<IStyleLink[]> => {
  const mode = options?.mode ?? detectMode()
  const basePath = options?.basePath ?? '/ustatic-css'

  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  // Если переданы модули, используем их
  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(options.modules
      .filter((module: string) => {
        return !modulesToLoad.includes(module)
      })
    )
  }

  const linkPromises: Promise<IStyleLink>[] = []

  // Функция для получения URL в зависимости от режима
  const getHref = async (modulePath: string, moduleName: string): Promise<string> => {
    if (mode === 'browser') {
      // В браузере используем import(...?url) для получения правильного URL от Vite
      try {
        const { default: css } = await import(/* @vite-ignore */ `${modulePath}?url`)
        return css
      } catch (error) {
        console.error('Failed to get CSS URL:', error)
        throw error
      }
    } else {
      // В SSR режиме возвращаем путь относительно public папки
      // moduleName - это имя файла без .css или имя модуля
      return `${basePath}/${moduleName}`
    }
  }

  // Если ничего не передано, загружаем все модули
  if (modulesToLoad?.length === 0) {
    linkPromises.push(
      getHref('../css/ustatic.css', 'ustatic.css').then(href => ({ href, rel: 'stylesheet', type: 'text/css' })),
      getHref('../css/vars.css', 'vars.css').then(href => ({ href, rel: 'stylesheet', type: 'text/css' }))
    )
  } else if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
    // Загружаем основные CSS файлы
    linkPromises.push(
      getHref('../css/ustatic.css', 'ustatic.css').then(href => ({ href, rel: 'stylesheet', type: 'text/css' })),
      getHref('../css/vars.css', 'vars.css').then(href => ({ href, rel: 'stylesheet', type: 'text/css' }))
    )
  } else {
    // Загружаем модули по отдельности
    modulesToLoad.forEach(module => {
      if (module === 'ustatic.css' || module === 'vars.css') {
        return
      }
      linkPromises.push(
        getHref(`../css/modules/${module}.css`, `modules/${module}.css`).then(href => ({ href, rel: 'stylesheet', type: 'text/css' }))
      )
    })

    // Всегда добавляем vars.css
    linkPromises.push(
      getHref('../css/vars.css', 'vars.css').then(href => ({ href, rel: 'stylesheet', type: 'text/css' }))
    )
  }

  return Promise.all(linkPromises)
}

const loadCSS = (cssPath: string): Promise<void> => {
  return getCssUrl(cssPath)
    .then((css) => {
      // Проверяем, что document доступен
      if (typeof document === 'undefined') return

      const head = document.head

      // Проверяем, существует ли уже ссылка на этот CSS (игнорируя параметры)
      const existingLink = Array.from(head.getElementsByTagName('link')).find(
        (linkElement) => {
          const href = linkElement.getAttribute('href')
          if (!href) return false
          // Извлекаем базовый URL без параметров
          const baseUrl = href.split('?')[0]
          const baseCss = css.split('?')[0]
          return baseUrl === baseCss
        }
      )

      if (!existingLink) {
        const linkEl = document.createElement('link')
        linkEl.type = 'text/css'
        linkEl.rel = 'stylesheet'
        linkEl.setAttribute('async', '')
        // Vite заменит этот импорт на правильный URL во время сборки
        linkEl.href = `${css}?nocache=${Date.now()}`
        head.appendChild(linkEl)
      }
    })
    .catch((error) => {
      console.error('Failed to load CSS:', error)
    })
}

/**
 * Получает URL CSS файла через Vite import
 * @param cssPath - путь к CSS файлу
 * @returns Promise с URL файла
 */
const getCssUrl = (cssPath: string): Promise<string> => {
  return import(/* @vite-ignore */ `${cssPath}?url`)
    .then(({ default: css }) => css)
    .catch((error) => {
      console.error('Failed to get CSS URL:', error)
      throw error
    })
}

export const loadStyles = async (options?: IStyleLoaderOptions): Promise<void> => {
  console.log('ustatic-css - loadStyles', { options })
  // Проверяем, что document доступен
  if (typeof document === 'undefined') return

  if (icssLoaded) return
  icssLoaded = true

  console.log('ustatic-css - loadStyles - start loading', { options })

  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  // Если переданы модули, используем их
  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(options.modules
      .filter((module: string) => {
        return !modulesToLoad.includes(module)
      })
    )
  }
  // Если ничего не передано, загружаем все модули
  if (modulesToLoad?.length === 0) {
    modulesToLoad = [
      'ustatic.css',
      'vars.css'
    ]
  }

  console.info('uCSS modules for load', { modulesToLoad, options })

  try {
    if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
      // Загружаем основные CSS файлы
      await Promise.all([
        loadCSS('../css/ustatic.css'),
        loadCSS('../css/vars.css')
      ])
    } else if (modulesToLoad?.length > 0) {
      // Загружаем модули по отдельности
      const modulePromises: Promise<void>[] = []

      modulesToLoad.forEach(module => {
        if (module === 'ustatic.css' || module === 'vars.css') {
          return
        }

        // Формируем путь к модулю
        const modulePath = `../css/modules/${module}.css`
        modulePromises.push(loadCSS(modulePath))
      })

      modulePromises.push(loadCSS('../css/vars.css'))

      await Promise.all(modulePromises)
    } else {
      console.log('No css for load')
    }
  } catch (error) {
    console.error('Failed to load CSS files:', error)
  }
}
