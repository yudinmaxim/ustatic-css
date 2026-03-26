# Установка

## Требования

- Node.js 18+
- npm, pnpm или yarn

## Установка

:::tabs
== npm
```bash
npm install ustatic-css
```

== pnpm
```bash
pnpm add ustatic-css
```

== yarn
```bash
yarn add ustatic-css
```
:::

## Подключение в проекте

:::tabs
== ESM
```javascript
import 'ustatic-css';
```

== CJS
```javascript
require('ustatic-css');
```
:::

## Использование с фреймворками

:::tabs
== Vue 3
Добавьте плагин в `main.js`:

```javascript
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);
app.use(ustaticCss);
app.mount('#app');
```

== React / Svelte / Vanilla JS
Используйте функцию `loadStyles`:

```javascript
import { loadStyles } from 'ustatic-css/scripts';

// Загрузка нужных модулей
await loadStyles({ modules: ['flexbox', 'spacing', 'typography'] });
```
:::
