import type { IStyleLoaderOptions } from '@/utils/styleLoader'
import { loadStyles } from '@/utils/styleLoader'

export interface PluginOptions extends IStyleLoaderOptions {
  autoLoad?: boolean
  modules?: string[]
  classes?: string[]
}

export const ustaticCss = {
  install(_app: any, options?: PluginOptions) {
    if (typeof document === 'undefined') return

    const { autoLoad = true, ...loaderOptions } = options ?? {}

    if (autoLoad) {
      loadStyles(loaderOptions)
    }
  }
}
