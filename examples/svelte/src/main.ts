import { mount } from 'svelte'
import App from './App.svelte'
import { loadStyles } from 'ustatic-css/scripts'

// Подключаем ustatic-css
loadStyles()

const app = mount(App, {
  target: document.getElementById('app')!
})

export default app
