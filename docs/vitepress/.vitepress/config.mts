import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withI18n } from 'vitepress-i18n'

const defaultLocale = 'ru'
const supportedLocales = [
  { path: 'ru', locale: 'ru' },
  { path: 'en', locale: 'en' },
]

const vitePressI18nOptions = {
  locales: supportedLocales,
  rootLocale: defaultLocale,
  searchProvider: 'local',
  label: {
    ru: 'Русский',
    en: 'English',
  },
  link: {
    ru: '/ru/',
    en: '/en/',
  },
  description: {
    ru: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
    en: 'Utility CSS framework for rapid UI development',
  },
  ui: {
    ru: {
      sidebarMenuLabel: 'Меню',
      returnToTopLabel: 'Вернуться наверх',
      lastUpdated: {
        text: 'Последнее обновление',
        timeFormat: 'dd.MM.yyyy',
      },
      langMenuLabel: 'Сменить язык',
      darkModeSwitchLabel: 'Тема',
      lightModeSwitchTitle: 'Светлая тема',
      darkModeSwitchTitle: 'Тёмная тема',
    },
    en: {
      sidebarMenuLabel: 'Menu',
      returnToTopLabel: 'Return to top',
      lastUpdated: {
        text: 'Last updated',
        timeFormat: 'dd.MM.yyyy',
      },
      langMenuLabel: 'Change language',
      darkModeSwitchLabel: 'Theme',
      lightModeSwitchTitle: 'Light mode',
      darkModeSwitchTitle: 'Dark mode',
    },
  },
  themeConfig: {
    ru: {
      nav: [
        { text: 'Главная', link: '/ru/' },
        { text: 'Начало работы', link: '/ru/getting-started/installation/' },
        { text: 'Модули', link: '/ru/guides/align/' },
        { text: 'API', link: '/ru/api/use-tokens/' },
      ],
      sidebar: [
        {
          text: 'Начало работы',
          collapsed: false,
          items: [
            { text: 'Установка', link: '/ru/getting-started/installation' },
            { text: 'Введение', link: '/ru/getting-started/introduction' },
            { text: 'Быстрый старт', link: '/ru/getting-started/quick-start' },
          ],
        },
        {
          text: 'Модули',
          collapsed: false,
          items: [
            { text: 'Выравнивание', link: '/ru/modules/align' },
            { text: 'Базовые стили', link: '/ru/guides/base' },
            { text: 'Фон', link: '/ru/modules/bg' },
            { text: 'Границы', link: '/ru/guides/border' },
            { text: 'Курсор', link: '/ru/guides/cursor' },
            { text: 'Тип отображения', link: '/ru/guides/display' },
            { text: 'Эффекты', link: '/ru/guides/effects' },
            { text: 'Фильтры', link: '/ru/guides/filters' },
            { text: 'Flexbox', link: '/ru/guides/flexbox' },
            { text: 'Grid', link: '/ru/guides/grid' },
            { text: 'Интерактивность', link: '/ru/guides/interactivity' },
            { text: 'Контур', link: '/ru/guides/outline' },
            { text: 'Позиционирование', link: '/ru/guides/position' },
            { text: 'Прокрутка', link: '/ru/guides/scroll' },
            { text: 'Размеры', link: '/ru/guides/sizing' },
            { text: 'Отступы', link: '/ru/guides/spacing' },
            { text: 'Типографика', link: '/ru/guides/typography' },
          ],
        },
        {
          text: 'Справочник',
          collapsed: false,
          items: [
            { text: 'CSS классы', link: '/ru/guides/css-classes' },
            { text: 'Анимации', link: '/ru/reference/animations' },
            { text: 'Палитра цветов', link: '/ru/reference/colors-palette' },
            { text: 'Примеры цветов', link: '/ru/reference/colors-examples' },
            { text: 'Варианты', link: '/ru/reference/variants' },
          ],
        },
        {
          text: 'API',
          collapsed: false,
          items: [
            { text: 'useCssProperties', link: '/ru/api/use-css-properties' },
            { text: 'useTokens', link: '/ru/api/use-tokens' },
            { text: 'Runtime загрузка', link: '/ru/guides/runtime-loading' },
          ],
        },
      ],
    },
    en: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Getting Started', link: '/en/getting-started/installation' },
        { text: 'Modules', link: '/en/guides/align' },
        { text: 'API', link: '/en/api/use-tokens' },
      ],
      sidebar: [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/en/getting-started/installation' },
            { text: 'Introduction', link: '/en/getting-started/introduction' },
            { text: 'Quick Start', link: '/en/getting-started/quick-start' },
          ],
        },
        {
          text: 'Modules',
          collapsed: false,
          items: [
            { text: 'Align', link: '/en/guides/align' },
            { text: 'Background', link: '/en/guides/bg' },
            { text: 'Border', link: '/en/guides/border' },
            { text: 'Cursor', link: '/en/guides/cursor' },
            { text: 'Display', link: '/en/guides/display' },
            { text: 'Effects', link: '/en/guides/effects' },
            { text: 'Flexbox', link: '/en/guides/flexbox' },
            { text: 'Grid', link: '/en/guides/grid' },
            { text: 'Hide', link: '/en/guides/hide' },
            { text: 'Interactivity', link: '/en/guides/interactivity' },
            { text: 'Outline', link: '/en/guides/outline' },
            { text: 'Position', link: '/en/guides/position' },
            { text: 'Scroll', link: '/en/guides/scroll' },
            { text: 'Sizing', link: '/en/guides/sizing' },
            { text: 'Spacing', link: '/en/guides/spacing' },
            { text: 'Typography', link: '/en/guides/typography' },
          ],
        },
        {
          text: 'Reference',
          collapsed: false,
          items: [
            { text: 'CSS Classes', link: '/en/guides/css-classes/' },
            { text: 'Animations', link: '/en/reference/animations/' },
            { text: 'Color Palette', link: '/en/reference/colors-palette/' },
          ],
        },
        {
          text: 'API',
          collapsed: false,
          items: [
            { text: 'useCssProperties', link: '/en/api/use-css-properties/' },
            { text: 'useTokens', link: '/en/api/use-tokens/' },
          ],
        },
      ],
    },
  },
}

const vitePressOptions = {
  vite: {
    optimizeDeps: {
      include: ['ustatic-css'],
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
    'ru/:rest*': 'ru/:rest*',
    'en/:rest*': 'en/:rest*',
  },
  themeConfig: {
    outline: {
      level: 2,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yudinmaxim/ustatic-css' },
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2026',
    },
  },
  lastUpdatedText: 'Последнее обновление',
  markdown: {
    config: (md) => {
      md.use(componentViewMarkdownPlugin)
      md.use(tabsMarkdownPlugin)
    },
  },
}

export default defineConfig(
  withI18n(vitePressOptions, vitePressI18nOptions)
)
