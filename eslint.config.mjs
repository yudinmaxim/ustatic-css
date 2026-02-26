import baseConfig from './eslint/base.js'
import tsConfig from './eslint/ts.js'
import vueConfig from './eslint/vue.js'
import vueI18nConfig from './eslint/i18.js'

export default [
  ...baseConfig,
  ...tsConfig,
  ...vueConfig,
  ...vueI18nConfig
]