import { classMap } from './styleloader.classmap'

export interface IStyleLoaderOptions {
  modules?: string[];
  classes?: string[];
  basePath?: string;
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

/**
 * Определяет базовый путь для загрузки CSS
 * @param options - опции загрузчика
 * @returns базовый путь
 */
const getBasePath = (options?: IStyleLoaderOptions): string => {
  // Если передан basePath явно — используем его
  if (options?.basePath) {
    return options.basePath.replace(/\/$/, '')
  }

  // Пытаемся определить из <base> тега
  const baseElement = document.querySelector('base')
  if (baseElement) {
    const href = baseElement.getAttribute('href')
    if (href) {
      return href.replace(/\/$/, '')
    }
  }

  // По умолчанию — корень сайта
  return ''
}

/**
 * Формирует полный URL до CSS файла
 * @param cssPath - относительный путь к CSS файлу
 * @param basePath - базовый путь
 * @returns полный URL
 */
const getCssUrl = (cssPath: string, basePath: string): string => {
  // Убираем ведущие "../" из пути
  const cleanPath = cssPath.replace(/^\.\.\//, '')

  // Формируем полный путь
  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`
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
 * Загружает CSS стили согласно конфигурации
 *
 * @param options - опции загрузчика
 * @param options.modules - список модулей для загрузки
 * @param options.classes - список классов для определения модулей
 * @param options.basePath - базовый путь для CSS файлов
 */
export const loadStyles = async (options?: IStyleLoaderOptions): Promise<void> => {
  // Проверяем, что document доступен
  if (typeof document === 'undefined') return

  if (icssLoaded) return
  icssLoaded = true

  const basePath = getBasePath(options)
  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  // Если переданы модули, используем их
  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(
      options.modules.filter(module => !modulesToLoad.includes(module))
    )
  }

  // Если ничего не передано, загружаем все модули
  if (modulesToLoad?.length === 0) {
    modulesToLoad = [ 'ustatic.css', 'vars.css' ]
  }

  try {
    if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
      // Загружаем основные CSS файлы
      loadCSS(getCssUrl('../css/ustatic.css', basePath))
      loadCSS(getCssUrl('../css/vars.css', basePath))
    } else if (modulesToLoad?.length > 0) {
      // Загружаем модули по отдельности
      modulesToLoad.forEach(module => {
        if (module === 'ustatic.css' || module === 'vars.css') {
          return
        }
        loadCSS(getCssUrl(`../css/modules/${module}.css`, basePath))
      })

      // Всегда добавляем vars.css
      loadCSS(getCssUrl('../css/vars.css', basePath))
    }
  } catch (error) {
    console.error('Failed to load CSS files:', error)
  }
}

/**
 * Получает список ссылок на CSS файлы (для SSR)
 *
 * @param options - опции загрузчика
 * @returns Promise с массивом ссылок
 */
export const getStyleLinks = async (options?: IStyleLoaderOptions & { mode?: 'ssr' | 'browser' }): Promise<{ href: string; rel: string; type: string }[]> => {
  const basePath = getBasePath(options)
  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(
      options.modules.filter(module => !modulesToLoad.includes(module))
    )
  }

  const links: { href: string; rel: string; type: string }[] = []

  if (modulesToLoad?.length === 0 || modulesToLoad.includes('ustatic.css')) {
    links.push({
      href: getCssUrl('../css/ustatic.css', basePath),
      rel: 'stylesheet',
      type: 'text/css'
    })
  }

  if (modulesToLoad?.length === 0 || !modulesToLoad.includes('ustatic.css')) {
    links.push({
      href: getCssUrl('../css/vars.css', basePath),
      rel: 'stylesheet',
      type: 'text/css'
    })
  }

  modulesToLoad.forEach(module => {
    if (module === 'ustatic.css' || module === 'vars.css') {
      return
    }
    links.push({
      href: getCssUrl(`../css/modules/${module}.css`, basePath),
      rel: 'stylesheet',
      type: 'text/css'
    })
  })

  return links
}
