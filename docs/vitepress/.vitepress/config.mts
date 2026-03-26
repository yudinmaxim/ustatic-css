import { defineConfig } from 'vitepress'
import { componentViewMarkdownPlugin } from 'vitepress-plugin-component'
import { withI18n } from 'vitepress-i18n'
import { withSidebar } from 'vitepress-sidebar'
import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'
import type { VitePressI18nOptions } from 'vitepress-i18n/types'

const defaultLocale = 'ru'
// Используем формат объектов для явного указания путей и локалей
const supportedLocales = [
  { path: 'ru', locale: 'ru' },
  { path: 'en', locale: 'en' },
]

/**
 * Настройки сайдбара для каждой локали
 */
const commonSidebarConfig: VitePressSidebarOptions = {
  debugPrint: false,
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeByPrefix: [ 'node_modules', '.git' ],
}

const vitePressSidebarConfig = supportedLocales.map((langObj) => {
  const lang = typeof langObj === 'string' ? langObj : langObj.path
  return {
    ...commonSidebarConfig,
    documentRootPath: `/docs/${lang}`,
    resolvePath: `/${lang}/`,
    basePath: `/${lang}/`,
  }
})

/**
 * Настройки i18n
 */
const vitePressI18nOptions: VitePressI18nOptions = {
  locales: supportedLocales,
  rootLocale: defaultLocale,
  searchProvider: 'local',
  // Названия для переключателя языков
  label: {
    ru: 'Русский',
    en: 'English',
  },
  // Ссылки на главные страницы локалей (для переключения языков)
  // Важно: указываем пути ОТНОСИТЕЛЬНО base
  link: {
    ru: '/ru/',
    en: '/en/',
  },
  description: {
    ru: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
    en: 'Utility CSS framework for rapid UI development',
  },
  // Переводы для UI элементов (кнопки, лейблы и т.д.)
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
        { text: 'С чего начать?', link: '/ru/getting-started/introduction/' },
      ],
    },
    en: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Getting Started', link: '/en/getting-started/introduction/' },
      ],
    },
  },
}

/**
 * Базовые настройки VitePress
 */
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
  // Важно: srcDir указывает на корень с документами
  srcDir: './docs',
  base: '/ustatic-css/',
  title: 'uStatic CSS',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  // Редирект для правильного маппинга путей
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
  markdown: {
    config: (md) => {
      md.use(componentViewMarkdownPlugin)
    },
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
