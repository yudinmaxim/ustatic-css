import { classMap } from './styleloader.classmap'

export interface IStyleLoaderOptions {
  modules?: string[];
  classes?: string[];
}

let icssLoaded = false

export const getModulesFromClasses = (classes: string | string[]): string[] => {
  if (!classes) return []

  let _classes = Array.isArray(classes) ? classes : []

  if (classes?.length > 0 && !Array.isArray(classes)) {
    _classes = classes?.replaceAll(' ', '')?.split(',')
  }
  const modules = new Set<string>()

  _classes.forEach(className => {
    // Проверяем точные соответствия
    if (classMap[className]) {
      modules.add(classMap[className])
      return
    }

    // Проверяем частичные соответствия (префиксы)
    for (const [ prefix, module ] of Object.entries(classMap)) {
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
        const { default: css } = await import(`${modulePath}?url`)
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

/**
 * Добавляет <link> на CSS файл в <head>
 * @param href - URL CSS файла
 */
const loadCSS = (href: string): void => {
  if (typeof document === 'undefined') return

  const head = document.head

  // Проверяем, существует ли уже ссылка на этот CSS
  const existingLink = Array.from(head.getElementsByTagName('link')).find(
    (linkElement) => {
      const linkHref = linkElement.getAttribute('href')
      if (!linkHref) return false
      
      // Сравниваем пути без параметров и timestamp
      const cleanHref = linkHref.split('?')[0]
      const cleanNewHref = href.split('?')[0]
      
      return cleanHref === cleanNewHref
    }
  )

  if (!existingLink) {
    const linkEl = document.createElement('link')
    linkEl.type = 'text/css'
    linkEl.rel = 'stylesheet'
    linkEl.href = href
    head.appendChild(linkEl)
  }
}

/**
 * Формирует URL CSS файла на основе basePath
 * @param cssPath - относительный путь к CSS файлу
 * @param basePath - базовый путь из options
 * @returns URL CSS файла
 */
const getCssUrl = (cssPath: string, basePath: string): string => {
  // Убираем ведущие "../" из пути
  const cleanPath = cssPath.replace(/^\.\.\//, '')
  
  // Формируем полный путь
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
}

export const loadStyles = async (options?: IStyleLoaderOptions): Promise<void> => {
  console.log('ustatic-css - loadStyles', { options })
  // Проверяем, что document доступен
  if (typeof document === 'undefined') return

  if (icssLoaded) return
  icssLoaded = true

  console.log('ustatic-css - loadStyles - start loading', { options })

  // Определяем basePath из options или из <base> тега
  let basePath = options?.basePath || ''
  
  if (!basePath && typeof document !== 'undefined') {
    const baseElement = document.querySelector('base')
    if (baseElement) {
      basePath = baseElement.getAttribute('href')?.replace(/\/$/, '') || ''
    }
  }

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

  console.info('uCSS modules for load', { modulesToLoad, basePath, options })

  try {
    if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
      // Загружаем основные CSS файлы
      loadCSS(getCssUrl('../css/ustatic.css', basePath))
      loadCSS(getCssUrl('../css/vars.css', basePath))
    } else if (modulesToLoad?.length > 0) {
      // Загружаем модули по отдельности
      const modulePromises: Promise<void>[] = []

      modulesToLoad.forEach(module => {
        if (module === 'ustatic.css' || module === 'vars.css') {
          return
        }

        // Формируем путь к модулю
        const modulePath = getCssUrl(`../css/modules/${module}.css`, basePath)
        modulePromises.push(loadCSS(modulePath))
      })

      modulePromises.push(loadCSS(getCssUrl('../css/vars.css', basePath)))

      await Promise.all(modulePromises)
    } else {
      console.log('No css for load')
    }
  } catch (error) {
    console.error('Failed to load CSS files:', error)
  }
}
