---
title: Установка
description: Как установить и настроить uStatic CSS
---

## Требования

- Node.js 18+
- npm, pnpm или yarn

## Установка пакета

:::tab-group
:::tab[npm]
```bash
npm install ustatic-css
```
:::
:::tab[pnpm]
```bash
pnpm add ustatic-css
```
:::
:::tab[yarn]
```bash
yarn add ustatic-css
```
:::
:::

## Подключение в проекте

:::tab-group
:::tab[ESM]
```javascript
import 'ustatic-css';
```
:::
:::tab[CJS]
```javascript
require('ustatic-css');
```
:::
:::

## Использование с фреймворками

:::tab-group
:::tab[Vue 3]
Добавьте плагин в `main.js`:

```javascript
import { createApp } from "vue";
import { ustaticCss } from "ustatic-css/scripts";
import App from "./App.vue";

const app = createApp(App);
app.use(ustaticCss);
app.mount("#app");
```
:::
:::tab[React / Svelte / Vanilla JS]
Используйте функцию `loadStyles`:

```javascript
import { loadStyles } from "ustatic-css/scripts";

// Загрузите необходимые модули
await loadStyles({ modules: ["flexbox", "spacing", "typography"] });
```
:::
:::

## Следующие шаги

- [Быстрый старт](/ru/getting-started/quick-start) — первый пример
- [Использование CSS-классов](/ru/guides/css-classes) — полный справочник классов