import { loadStyles } from './utils/styleLoader'

interface PluginOptions {
  prefix?: string
}

const plugin = {
  install(app: any, options?: PluginOptions) {
    // Проверяем, что document доступен
    if (typeof document === 'undefined') return

    // Загружаем стили через новый модуль
    loadStyles()
  }
}

export {
  plugin as ustaticCss,
  type PluginOptions,
  loadStyles
}