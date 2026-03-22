import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'

export default defineConfig({
  lang: 'ru-RU',
  srcDir: './docs',
  base: '/ustatic-css/',
  title: 'uStatic CSS',
  description: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
  themeConfig: {
    outline: {
      level: 2,
      label: 'На этой странице',
    },
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
          { text: 'Обзор', link: '/guides/css-classes' },
          {
            text: 'Модули',
            items: [
              { text: 'Выравнивание', link: '/guides/align' },
              { text: 'Базовые стили', link: '/guides/base' },
              { text: 'Фон', link: '/guides/bg' },
              { text: 'Границы', link: '/guides/border' },
              { text: 'Курсор', link: '/guides/cursor' },
              { text: 'Отображение', link: '/guides/display' },
              { text: 'Эффекты', link: '/guides/effects' },
              { text: 'Фильтры', link: '/guides/filters' },
              { text: 'Flexbox', link: '/guides/flexbox' },
              { text: 'Grid', link: '/guides/grid' },
              { text: 'Скрытие', link: '/guides/hide' },
              { text: 'Интерактивность', link: '/guides/interactivity' },
              { text: 'Контур', link: '/guides/outline' },
              { text: 'Позиционирование', link: '/guides/position' },
              { text: 'Прокрутка', link: '/guides/scroll' },
              { text: 'Размеры', link: '/guides/sizing' },
              { text: 'Отступы', link: '/guides/spacing' },
              { text: 'Типографика', link: '/guides/typography' },
            ],
          },
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
        text: 'Палитра',
        items: [
          { text: 'Цвета', link: '/reference/colors-palette' },
          { text: 'Примеры', link: '/reference/colors-examples' },
          { text: 'Акцентные цвета', link: '/reference/variants' },
        ],
      },
      {
        text: 'Анимации',
        items: [
          { text: 'Обзор', link: '/reference/animations' },
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
