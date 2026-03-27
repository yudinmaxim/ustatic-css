import { modules } from './sidebar.ru'

export const API = {
  text: 'API',
  collapsed: false,
  items: [
    { text: 'useCssProperties', link: '/ru/api/use-css-properties' },
    { text: 'useTokens', link: '/ru/api/use-tokens' },
    { text: 'Runtime загрузка', link: '/ru/guides/runtime-loading' },
  ],
}

export const nav = [
  { text: 'Главная', link: '/ru/' },
  { text: 'Начало работы', link: '/ru/getting-started/installation/' },
  modules,
  API
]