import { modules } from './sidebar.en'

const LANG = 'en'

export const API = {
  text: 'API',
  collapsed: false,
  items: [
    { text: 'useCssProperties', link: `/${LANG}/api/use-css-properties` },
    { text: 'useTokens', link: `/${LANG}/api/use-tokens` },
    { text: 'Runtime loading', link: `/${LANG}/guides/runtime-loading` },
  ],
}

export const nav = [
  { text: 'Home', link: `/${LANG}/` },
  { text: 'Getting Started', link: `/${LANG}/getting-started/installation/` },
  modules,
  API
]