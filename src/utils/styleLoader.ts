import { classMap } from './styleloader.classmap'

export interface IStyleLoaderOptions {
  modules?: string[]
  classes?: string[]
  basePath?: string
}

let globalConfig: { basePath?: string } = {}

export const configureUstaticCss = (config: { basePath?: string }): void => {
  globalConfig = { ...globalConfig, ...config }
}

function isLinkLoaded(href: string): boolean {
  if (typeof document === 'undefined') return true
  const cleanHref = href.split('?')[0]
  return Array.from(document.head.getElementsByTagName('link')).some(link => {
    const linkHref = link.getAttribute('href')
    return linkHref && linkHref.split('?')[0] === cleanHref
  })
}

function normalizeClasses(input: string | string[]): string[] {
  if (Array.isArray(input)) return input.flatMap(s => s.split(/\s+/)).filter(Boolean)
  return input.replace(/,/g, ' ').split(/\s+/).filter(Boolean)
}

function stripVariants(className: string): string {
  if (className.startsWith('animation:') || className.startsWith('animation-')) {
    return className
  }
  return className.replace(/^(?:[\w-]+:)+/, '')
}

export const getModulesFromClasses = (classes: string | string[]): string[] => {
  if (!classes || (Array.isArray(classes) && classes.length === 0)) return []

  const _classes = normalizeClasses(classes)
  const modules = new Set<string>()

  _classes.forEach(rawClassName => {
    const className = stripVariants(rawClassName)

    if (classMap[className]) {
      modules.add(classMap[className])
      return
    }

    const classFirstSegment = className.split(/[-:]/)[0]
    for (const [mapKey, module] of Object.entries(classMap)) {
      if (classFirstSegment === mapKey.split('-')[0]) {
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
  basePath?: string
  mode?: 'ssr' | 'browser'
}

const detectMode = (): 'ssr' | 'browser' => {
  return typeof document === 'undefined' ? 'ssr' : 'browser'
}

function resolveBasePath(options?: IStyleLoaderOptions): string | undefined {
  if (options?.basePath) return options.basePath
  if (globalConfig.basePath) return globalConfig.basePath
  return undefined
}

function getModuleCssUrl(moduleName: string, basePath?: string): string {
  if (basePath) {
    return `${basePath.replace(/\/$/, '')}/${moduleName}`
  }
  return `/ustatic-css/${moduleName}`
}

export const getStyleLinks = (options?: IStyleLinksOptions): IStyleLink[] => {
  const mode = options?.mode ?? detectMode()
  const basePath = options?.basePath ?? globalConfig.basePath ?? (mode === 'ssr' ? '/ustatic-css' : undefined)

  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(
      options.modules.filter(m => !modulesToLoad.includes(m))
    )
  }

  const links: IStyleLink[] = []

  const addLink = (moduleName: string) => {
    links.push({
      href: getModuleCssUrl(moduleName, basePath),
      rel: 'stylesheet',
      type: 'text/css'
    })
  }

  if (modulesToLoad.length === 0) {
    addLink('ustatic.css')
    addLink('vars.css')
  } else if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
    addLink('ustatic.css')
    addLink('vars.css')
  } else {
    modulesToLoad.forEach(mod => {
      if (mod === 'ustatic.css' || mod === 'vars.css') return
      addLink(`modules/${mod}.css`)
    })
    addLink('vars.css')
  }

  return links
}

const loadCSS = (href: string): void => {
  if (typeof document === 'undefined') return
  if (isLinkLoaded(href)) return

  const linkEl = document.createElement('link')
  linkEl.type = 'text/css'
  linkEl.rel = 'stylesheet'
  linkEl.href = href
  linkEl.onerror = () => {
    if (typeof process !== 'undefined' && process.env?.VITEST) return
    console.warn(`[ustatic-css] Stylesheet failed to load: ${href}`)
  }
  try {
    document.head.appendChild(linkEl)
  } catch (e) {
    console.warn(`[ustatic-css] Failed to append stylesheet link: ${href}`, e)
  }
}

export const loadStyles = (options?: IStyleLoaderOptions): void => {
  if (typeof document === 'undefined') return

  let basePath = resolveBasePath(options) ?? ''

  if (!basePath) {
    const baseElement = document.querySelector('base')
    if (baseElement) {
      basePath = baseElement.getAttribute('href')?.replace(/\/$/, '') || ''
    }
  }

  let modulesToLoad: string[] = getModulesFromClasses(options?.classes ?? [])

  if (options?.modules && options.modules.length > 0) {
    modulesToLoad = modulesToLoad.concat(
      options.modules.filter(m => !modulesToLoad.includes(m))
    )
  }

  if (modulesToLoad.length === 0) {
    loadCSS(getModuleCssUrl('ustatic.css', basePath || undefined))
    loadCSS(getModuleCssUrl('vars.css', basePath || undefined))
    return
  }

  if (modulesToLoad.includes('ustatic.css') || modulesToLoad.includes('vars.css')) {
    loadCSS(getModuleCssUrl('ustatic.css', basePath || undefined))
    loadCSS(getModuleCssUrl('vars.css', basePath || undefined))
    return
  }

  modulesToLoad.forEach(mod => {
    if (mod === 'ustatic.css' || mod === 'vars.css') return
    loadCSS(getModuleCssUrl(`modules/${mod}.css`, basePath || undefined))
  })
  loadCSS(getModuleCssUrl('vars.css', basePath || undefined))
}
