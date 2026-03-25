import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'
import { withI18n } from 'vitepress-i18n'
import { withSidebar } from 'vitepress-sidebar'
import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'
import type { VitePressI18nOptions } from 'vitepress-i18n/types'

const defaultLocale: string = 'ru'
const defineSupportLocales = [ defaultLocale, 'en' ]

const commonSidebarConfig: VitePressSidebarOptions = {
  debugPrint: true,
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true
}
const vitePressSidebarConfig = [
  ...defineSupportLocales.map((lang) => {
    return {
      ...commonSidebarConfig,
      documentRootPath: `/docs/${lang}`,
      resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
    }
  })
]

const vitePressI18nOptions: VitePressI18nOptions = {
  locales: [ ...defineSupportLocales ],
  rootLocale: defaultLocale,
  searchProvider: 'local',
  description: {
    ru: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
    en: 'Utility CSS framework for rapid UI development',
  },
  themeConfig: {
    ru: {
      nav: [
        { text: 'Главная', link: '/ru/' },
        { text: 'С чего начать?', link: '/ru/getting-started/introduction/' },
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
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  themeConfig: {
    outline: {
      level: 2,
    },

    sidebar: {
      '/ru/': [
        {
          text: 'Начало работы',
          items: [
            { text: 'Введение', link: '/ru/getting-started/introduction' },
            { text: 'Установка', link: '/ru/getting-started/installation' },
            { text: 'Быстрый старт', link: '/ru/getting-started/quick-start' },
          ],
        },
        {
          text: 'Описание',
          items: [
            { text: 'Обзор', link: '/ru/guides/css-classes' },
            {
              text: 'Модули',
              items: [
                { text: 'Выравнивание', link: '/ru/guides/align' },
                { text: 'Базовые стили', link: '/ru/guides/base' },
                { text: 'Фон', link: '/ru/guides/bg' },
                { text: 'Границы', link: '/ru/guides/border' },
                { text: 'Курсор', link: '/ru/guides/cursor' },
                { text: 'Отображение', link: '/ru/guides/display' },
                { text: 'Эффекты', link: '/ru/guides/effects' },
                { text: 'Фильтры', link: '/ru/guides/filters' },
                { text: 'Flexbox', link: '/ru/guides/flexbox' },
                { text: 'Grid', link: '/ru/guides/grid' },
                { text: 'Скрытие', link: '/ru/guides/hide' },
                { text: 'Интерактивность', link: '/ru/guides/interactivity' },
                { text: 'Контур', link: '/ru/guides/outline' },
                { text: 'Позиционирование', link: '/ru/guides/position' },
                { text: 'Прокрутка', link: '/ru/guides/scroll' },
                { text: 'Размеры', link: '/ru/guides/sizing' },
                { text: 'Отступы', link: '/ru/guides/spacing' },
                { text: 'Типографика', link: '/ru/guides/typography' },
              ],
            },
            { text: 'Рантайм загрузка', link: '/ru/guides/runtime-loading' },
          ],
        },
        {
          text: 'API',
          items: [
            { text: 'useCssProperties', link: '/ru/api/use-css-properties' },
            { text: 'useTokens', link: '/ru/api/use-tokens' },
          ],
        },
        {
          text: 'Палитра',
          items: [
            { text: 'Цвета', link: '/ru/reference/colors-palette' },
            { text: 'Примеры', link: '/ru/reference/colors-examples' },
            { text: 'Акцентные цвета', link: '/ru/reference/variants' },
          ],
        },
        {
          text: 'Анимации',
          items: [
            { text: 'Обзор', link: '/ru/reference/animations' },
          ],
        },
        {
          text: 'Справочник',
          items: [
            { text: 'Классы', link: '/ru/reference/classes' },
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

export default defineConfig(
  withSidebar(
    withI18n(
      vitePressOptions,
      vitePressI18nOptions
    ),
    vitePressSidebarConfig
  )
)
