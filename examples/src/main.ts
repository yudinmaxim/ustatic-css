import { createApp } from 'vue'
import App from './App.vue'
import { ustaticCss } from 'ustatic-css/scripts'

createApp(App)
  .use(ustaticCss)
  .mount('#app')