# Установка uStatic CSS

uStatic CSS — это легковесная CSS-библиотека утилитарных классов для быстрой разработки интерфейсов.

## Требования

- Node.js 16+
- Менеджер пакетов: npm, yarn, pnpm или bun

## Установка через npm

```bash
npm install ustatic-css
```

## Установка через yarn

```bash
yarn add ustatic-css
```

## Установка через pnpm

```bash
pnpm add ustatic-css
```

## Установка через bun

```bash
bun add ustatic-css
```

## Подключение стилей

### В Vite проектах

```typescript
// main.ts или main.js
import 'ustatic-css/dist/ustatic-index.scss'
```

### В Webpack проектах

```scss
// В вашем главном SCSS файле
@import 'ustatic-css/dist/ustatic-index.scss';
```

### Через CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ustatic-css/dist/ustatic-index.css">
```

## Подключение Vue плагина

Для Vue 3 проектов доступен плагин для автоматической загрузки стилей:

```typescript
// main.ts
import { createApp } from 'vue'
import { ustaticCss } from 'ustatic-css'
import App from './App.vue'

const app = createApp(App)

// Подключение плагина
app.use(ustaticCss, {
  autoLoad: true, // Автоматическая загрузка стилей
  modules: ['flexbox', 'grid'], // Опционально: конкретные модули
  classes: ['flex', 'grid'] // Опционально: классы для определения модулей
})

app.mount('#app')
```

## Настройка префикса

По умолчанию все CSS переменные используют префикс `u-`. Для изменения префикса:

```scss
// В вашем файле переменных (до импорта uStatic CSS)
$prefix: "my-";

@import 'ustatic-css/dist/ustatic-index.scss';
```

Теперь переменные будут иметь вид:
- `--my-base-color-primary`
- `--my-base-size-4`

## Структура пакета

```
ustatic-css/
├── dist/
│   ├── ustatic-index.scss    # Главный файл стилей
│   ├── ustatic-index.css     # Скомпилированный CSS
│   └── modules/              # Отдельные модули
├── src/
│   ├── css/
│   │   ├── utils/            # Утилиты (token.scss)
│   │   ├── modules/          # Модули стилей
│   │   └── assets/tokens/    # CSS переменные
│   └── lib/                  # TypeScript утилиты и хуки
└── package.json
```

## Следующие шаги

- [Введение](./introduction.md) — обзор возможностей библиотеки
- [Быстрый старт](./quick-start.md) — первые шаги использования
