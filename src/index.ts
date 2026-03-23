import { loadStyles } from './utils/styleLoader'
import type { IStyleLoaderOptions } from './utils/styleLoader'

export * from './utils/styleLoader'
export * from './utils/useCssProperties'
export * from './utils/useTokens'

export interface PluginOptions extends IStyleLoaderOptions {
  /**
   * Загружать ли стили автоматически при установке плагина
   * @default true
   */
  autoLoad?: boolean
}

/**
 * Vue плагин для загрузки uStatic CSS
 *
 * @example
 * app.use(ustaticCss, { basePath: '/my-app' })
 */
const ustaticCss = {
  install(app: any, options?: PluginOptions) {
    // Проверяем, что document доступен (не SSR)
    if (typeof document === 'undefined') return

    const autoLoad = options?.autoLoad ?? true

    // Предоставляем глобальную функцию для загрузки стилей
    app.config.globalProperties.$loadUStaticStyles = (opts?: IStyleLoaderOptions) => {
      return loadStyles({ ...options, ...opts })
    }

    // Автозагрузка при установке плагина
    if (autoLoad) {
      loadStyles(options)
    }
  }
}

/**
 * Композиция функция для загрузки стилей
 *
 * @example
 * useUStaticStyles({ modules: ['flexbox', 'spacing'] })
 */
export const useUStaticStyles = (options?: IStyleLoaderOptions): void => {
  if (typeof document === 'undefined') return

  loadStyles(options)
}

export {
  ustaticCss,
  loadStyles
}