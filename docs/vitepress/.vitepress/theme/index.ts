import DefaultTheme from 'vitepress/theme'
import CodePreview from '../components/CodePreview.vue'
import type { Theme } from 'vitepress'

import { ustaticCss } from 'ustatic-css/scripts'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ustaticCss)
    // Регистрируем компонент CodePreview
    app.component('CodePreview', CodePreview)
  },
} satisfies Theme
