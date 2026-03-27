import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { withI18n } from 'vitepress-i18n'

import { nav } from './nav.ru'
import { sidebar } from './sidebar.ru'

import * as enNav from './nav.en'
import * as enSidebar from './sidebar.en'

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
      nav,
      sidebar,
    },
    en: {
      nav: enNav.nav,
      sidebar: enSidebar.sidebar
    },
  },
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
