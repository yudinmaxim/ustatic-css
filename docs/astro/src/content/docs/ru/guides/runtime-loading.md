---
title: Загрузка стилей в рантайме
description: Динамическая загрузка модулей uStatic CSS
---

# Загрузка стилей в рантайме

## Vue 3 плагин

Пакет предоставляет готовый Vue-плагин для активации стилей на лету.

```javascript
// main.js / main.ts
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);

// Вариант 1: загрузить конкретные модули
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography']
});

// Вариант 2: автоподбор модулей по используемым классам
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg']
});

app.mount('#app');
```

## Опции плагина

| Опция | Тип | Описание |
|-------|-----|----------|
| `modules` | `string[]` | Список модулей для подключения |
| `classes` | `string[]` | Список классов для автоподбора модулей |

**Доступные модули:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

Если опции не заданы — подключаются базовые стили (`ustatic.css`) и переменные (`vars.css`).

## Универсальный загрузчик

Метод `loadStyles` работает в любых средах: Vanilla JS, React, Svelte, Nuxt, SSR.

```javascript
import { loadStyles } from 'ustatic-css/scripts';

// Явная загрузка модулей
await loadStyles({ modules: ['typography', 'spacing', 'border'] });

// Автоподбор по классам
await loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });
```

## SSR-совместимость

Метод `loadStyles` безопасно работает при SSR: если `document` недоступен, загрузка пропускается на сервере и выполняется в браузере.

```javascript
// Этот код безопасен для SSR
await loadStyles({ modules: ['flexbox', 'spacing'] });
```
