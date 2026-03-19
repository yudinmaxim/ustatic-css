import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'

export default defineConfig({
  lang: 'ru-RU',
  srcDir: './docs',
  title: 'uStatic CSS',
  description: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Getting Started', link: '/getting-started/introduction' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Введение', link: '/getting-started/introduction' },
          { text: 'Установка', link: '/getting-started/installation' },
          { text: 'Быстрый старт', link: '/getting-started/quick-start' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'CSS-классы', link: '/guides/css-classes' },
          { text: 'Рантайм загрузка', link: '/guides/runtime-loading' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'useCssProperties', link: '/api/use-css-properties' },
          { text: 'useTokens', link: '/api/use-tokens' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Словарь классов', link: '/reference/classes' },
          { text: 'Палитра цветов', link: '/reference/colors' },
          { text: 'Акцентные цвета', link: '/reference/variants' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yudinmaxim/ustatic-css' },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2026',
    },
  },
  markdown: {
    config: (md) => {
      md.use(componentViewMarkdownPlugin)
    }
  },
})
