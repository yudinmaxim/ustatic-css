// из-за конфликтов сборщика vitepress
import 'ustatic-css/ustatic'
import 'ustatic-css/vars'

import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { enhanceAppWithComponentView } from 'vitepress-plugin-component/client'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

import ColorSwatch from '../components/ColorSwatch.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {

    enhanceAppWithComponentView(app, {
      localeMappings: {
        ru: {
          previewLabel: 'Предпросмотр',
          codeLabel: 'Код',
        },
      },
    })

    enhanceAppWithTabs(app)

    // Регистрируем компонент ColorSwatch
    app.component('ColorSwatch', ColorSwatch)

    // Добавляем класс для восстановления прокрутки
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('overflow-y-auto')
      document.body.classList.add('overflow-y-auto', 'min-h-screen')
    }
  },
} satisfies Theme
