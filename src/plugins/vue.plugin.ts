import type { IStyleLoaderOptions } from '@/utils/styleLoader'

export interface PluginOptions extends IStyleLoaderOptions {
  /**
   * Загружать ли стили автоматически при установке плагина
   * @default true
   */
  autoLoad?: boolean

  modules?: string[]

  classes?: string[]
}

export const ustaticCss = {
  install(app: any, options?: PluginOptions) {
    // Проверяем, что document доступен (не SSR)
    if (typeof document === 'undefined') return

    const {
      autoLoad = true,
      modules
    } = options ?? {}

    // // Предоставляем глобальную функцию для загрузки стилей
    // app.config.globalProperties.$loadUStaticStyles = (opts?: IStyleLoaderOptions) => {
    //   return loadStyles({ ...options, ...opts })
    // }

    // Автозагрузка при установке плагина
    if (document && autoLoad) {

      /* @ts-expect-error чему тут вариант записи УРЛ не нравится */
      import('@css/ustatic-index.scss?url')
        .then(({ default: css }) => {
          const head = document.head
          const existingLink = Array.from(head.getElementsByTagName('link')).find(
            (linkElement) => linkElement.getAttribute('href')?.includes(css)
          )
          if (!existingLink) {
            const linkEl = document.createElement('link')
            linkEl.type = 'text/css'
            linkEl.rel = 'preload stylesheet'
            linkEl.setAttribute('async', '')
            linkEl.setAttribute('ustatic', '')
            // Vite заменит этот импорт на правильный URL во время сборки
            linkEl.href = `${css}?nocache=${Date.now()}`
            head.appendChild(linkEl)
          }
        })
        .catch((error) => {
          console.error('[uStaticCSS load base styles ERROR: ', error)
        })
      /* @ts-expect-error чему тут вариант записи УРЛ не нравится */
      import('@css/assets/tokens/_ustatic-vars.scss?url')
        .then(({ default: css }) => {
          const head = document.head
          const existingLink = Array.from(head.getElementsByTagName('link')).find(
            (linkElement) => linkElement.getAttribute('href')?.includes(css)
          )
          if (!existingLink) {
            const linkEl = document.createElement('link')
            linkEl.type = 'text/css'
            linkEl.rel = 'stylesheet'
            linkEl.setAttribute('async', '')
            linkEl.setAttribute('ustatic', '')
            // Vite заменит этот импорт на правильный URL во время сборки
            linkEl.href = `${css}?nocache=${Date.now()}`
            head.appendChild(linkEl)
          }
        })
        .catch((error) => {
          console.error('[uStaticCSS load variables for styles ERROR: ', error)
        })
    }
  }
}