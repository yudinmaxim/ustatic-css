import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { enhanceAppWithComponentView } from 'vitepress-plugin-component/client'

import { ustaticCss } from 'ustatic-css/scripts'
import ColorSwatch from '../components/ColorSwatch.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Устанавливаем плагин uStatic CSS с базовым путём для GitHub Pages
    app.use(ustaticCss, { basePath: '/ustatic-css' })

    enhanceAppWithComponentView(app, {
      localeMappings: {
        ru: {
          previewLabel: 'Предпросмотр',
          codeLabel: 'Код',
        },
      },
    })

    // Регистрируем компонент ColorSwatch
    app.component('ColorSwatch', ColorSwatch)

    // Добавляем класс для восстановления прокрутки
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('overflow-y-auto')
      document.body.classList.add('overflow-y-auto', 'min-h-screen')
    }
  },
} satisfies Theme
