import { loadStyles, getModulesFromClasses } from './utils/styleLoader'
import type { IStyleLoaderOptions } from './utils/styleLoader'

interface PluginOptions extends IStyleLoaderOptions {
  prefix?: string
}

const plugin = {
  install(app: never, options?: PluginOptions) {
    // Проверяем, что document доступен
    if (typeof document === 'undefined') return

    console.log('plugin options', options)
    // Загружаем стили через новый модуль
    loadStyles(options)
  }
}

export {
  plugin as ustaticCss,
  type PluginOptions,
  loadStyles,

  getModulesFromClasses
}