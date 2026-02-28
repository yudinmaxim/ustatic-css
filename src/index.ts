
interface PluginOptions {
  prefix?: string
}

let isCSSLoaded = false

const plugin = {
  install(app: any, options?: PluginOptions) {

    // Проверяем, что document доступен
    if (typeof document === 'undefined') return

    if (isCSSLoaded) return
    isCSSLoaded = true

    // Загружаем оба CSS файла
    const loadCSS = (cssPath: string) => {
      return import(`${cssPath}?url`)
        .then(({ default: css }) => {
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

    // Загружаем оба CSS файла
    Promise.all([
      loadCSS('./utility-css.scss'),
      loadCSS('./assets/tokens/_vars.scss')
    ]).catch((error) => {
      console.error('Failed to load CSS files:', error)
    })
  }
}

export {
  plugin as ustaticCss,
  type PluginOptions
}