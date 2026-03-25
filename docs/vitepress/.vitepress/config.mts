import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'
import { withI18n } from 'vitepress-i18n'

import type { VitePressI18nOptions } from 'vitepress-i18n/types'

const vitePressI18nOptions: VitePressI18nOptions = {
  locales: [ 'en', 'ru' ],
  rootLocale: 'ru',
  searchProvider: 'local',
  description: {
    ru: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
  },
  themeConfig: {
    ru: {
      nav: [
        { text: 'Главная', link: '/' },
        { text: 'С чего начать?', link: '/getting-started/introduction/' },
      ],
    },
    en: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Getting Started', link: '/en/getting-started/introduction/' },
      ],
    },
  }
}

const vitePressOptions = {
  vite: {
    optimizeDeps: {
      include: [ 'ustatic-css' ],
    },
    css: {
      devSourcemap: false,
    },
    build: {
      cssCodeSplit: true,
      assetsInlineLimit: 0,
    },
    publicDir: './public',
  },
  srcDir: './docs',
  base: '/ustatic-css/',
  title: 'uStatic CSS',
  // locales: {
  //   ru: {
  //     lang: 'ru-RU',
  //     label: 'Русский',
  //     title: 'uStatic CSS',
  //     description: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
  //     link: '/ru/',
  //   },
  //   en: {
  //     lang: 'en-US',
  //     label: 'English',
  //     title: 'uStatic CSS',
  //     description: 'Utility CSS framework for rapid UI development',
  //     link: '/en/',
  //   },
  // },
  themeConfig: {
    outline: {
      level: 2,
    },

    sidebar: {
      '/': [
        {
          text: 'Начало работы',
          items: [
            { text: 'Введение', link: '/getting-started/introduction' },
            { text: 'Установка', link: '/getting-started/installation' },
            { text: 'Быстрый старт', link: '/getting-started/quick-start' },
          ],
        },
        {
          text: 'Описание',
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
        {
          text: 'Справочник',
          items: [
            { text: 'Классы', link: '/reference/classes' },
          ],
        },
      ],
      '/en/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/en/getting-started/introduction' },
            { text: 'Installation', link: '/en/getting-started/installation' },
            { text: 'Quick Start', link: '/en/getting-started/quick-start' },
          ],
        },
        {
          text: 'Overview',
          items: [
            { text: 'CSS Classes', link: '/en/guides/css-classes' },
            {
              text: 'Modules',
              items: [
                { text: 'Align', link: '/en/guides/align' },
                { text: 'Base', link: '/en/guides/base' },
                { text: 'Background', link: '/en/guides/bg' },
                { text: 'Border', link: '/en/guides/border' },
                { text: 'Cursor', link: '/en/guides/cursor' },
                { text: 'Display', link: '/en/guides/display' },
                { text: 'Effects', link: '/en/guides/effects' },
                { text: 'Filters', link: '/en/guides/filters' },
                { text: 'Flexbox', link: '/en/guides/flexbox' },
                { text: 'Grid', link: '/en/guides/grid' },
                { text: 'Visibility', link: '/en/guides/hide' },
                { text: 'Interactivity', link: '/en/guides/interactivity' },
                { text: 'Outline', link: '/en/guides/outline' },
                { text: 'Position', link: '/en/guides/position' },
                { text: 'Scroll', link: '/en/guides/scroll' },
                { text: 'Sizing', link: '/en/guides/sizing' },
                { text: 'Spacing', link: '/en/guides/spacing' },
                { text: 'Typography', link: '/en/guides/typography' },
              ],
            },
            { text: 'Runtime Loading', link: '/en/guides/runtime-loading' },
          ],
        },
        {
          text: 'API',
          items: [
            { text: 'useCssProperties', link: '/en/api/use-css-properties' },
            { text: 'useTokens', link: '/en/api/use-tokens' },
          ],
        },
        {
          text: 'Color Palette',
          items: [
            { text: 'Colors', link: '/en/reference/colors-palette' },
            { text: 'Examples', link: '/en/reference/colors-examples' },
            { text: 'Accent Colors', link: '/en/reference/variants' },
          ],
        },
        {
          text: 'Animations',
          items: [
            { text: 'Overview', link: '/en/reference/animations' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Classes', link: '/en/reference/classes' },
          ],
        },
      ],
    },
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
}

export default defineConfig(withI18n(vitePressOptions, vitePressI18nOptions))
