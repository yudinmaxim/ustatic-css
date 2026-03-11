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
      if (className.startsWith(prefix)) {
        modules.add(module)
        break
      }
    }
  })

  return Array.from(modules)
}

const loadCSS = (cssPath: string): Promise<void> => {
  return import(/* @vite-ignore */ `${cssPath}?url`)
    .then(({ default: css }) => {
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

export const loadStyles = async (options?: IStyleLoaderOptions): Promise<void> => {
  // Проверяем, что document доступен
  if (typeof document === 'undefined') return

  if (icssLoaded) return
  icssLoaded = true

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
