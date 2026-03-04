# ustatic-css

> **u**tility **static** **css** framework — набор утилитарных CSS-классов для быстрой разработки интерфейсов.

<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.1-blue" alt="Версия">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="Лицензия">
  <img src="https://img.shields.io/badge/module-ESM%20%7C%20CJS-lightgrey" alt="Модули">
</p>

## 📦 Обзор

**ustatic-css** — утилитарный CSS-фреймворк для создания современных интерфейсов. Основан на токенах дизайн-системы.

### Почему ustatic-css?

В микрофронтендах типичные утилитарные фреймворки (Tailwind, UnoCSS) создают сложности:
- Сложные конфигурации, требующие синхронизации между командами
- Дублирование стилей между модулями, увеличивающее размер бандла

**ustatic-css** решает эти проблемы:
- Единая система токенов для консистентности между микрофронтендами
- Модульная загрузка только нужных стилей
- Возможность активации классов в рантайме

### Проект включает

- 🎨 Утилитарные CSS-классы для типографики, отступов, позиционирования, цветов
- 🧩 Хуки `useCssProperties` и `useTokens` для управления стилями в JavaScript
- 🌐 Адаптивный дизайн с брейкпоинтами `xs`, `md`, `def`, `lg`
- 🔌 Экспорт модулей как ESM и CJS

## 🌐 Документация

Подробная документация доступна в директории `@/help`:

- [📘 `useCssProperties` — Управление CSS-свойствами](./help/useCssProperties_help.md)
- [📘 `useTokens` — Работа с токенами CSS](./help/useTokens_help.md)
- [📘 Утилитарные классы](./help/ustatic_utility_help.md)

## 🚀 Быстрый старт

### Установка

```bash
npm install ustatic-css
```

### Использование

#### CSS-классы

Подключите основной файл стилей:

```js
import 'ustatic-css';
```

Или импортируйте отдельные модули:

```js
import 'ustatic-css/base';
import 'ustatic-css/typography';
import 'ustatic-css/spacing';
import 'ustatic-css/flexbox';
```

Используйте классы в разметке:

```html
<div class="flex justify-between items-center p-4 bg-primary text-white rounded-lg">
  <span class="text-lg font-semibold">Заголовок</span>
  <button class="px-3 py-1 bg-white text-primary rounded hover:bg-gray-100">
    Кнопка
  </button>
</div>
```

#### Активация стилей в рантайме

Для загрузки стилей используйте готовый Vue-плагин или универсальный метод. Прямой динамический импорт CSS через `import()` не требуется.

#### Vue 3 плагин (готовый)

Пакет предоставляет готовый плагин для активации стилей на лету.

```js
// main.js / main.ts
import { createApp } from 'vue';
import { ustaticCss } from 'ustatic-css/scripts';
import App from './App.vue';

const app = createApp(App);

// Вариант 1: загрузить конкретные модули фреймворка
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography'] // см. список модулей ниже
});

// Вариант 2: автоподбор модулей по используемым классам
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg']
});

app.mount('#app');
```

Опции плагина/загрузчика:

| Опция | Тип | Описание |
|-------|-----|----------|
| `modules` | `string[]` | Список модулей для подключения |
| `classes` | `string[]` | Список классов для автоподбора модулей |

**Доступные модули:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

Если опции не заданы — подключаются базовые стили и переменные.

#### Использование без фреймворков (универсальный метод)

Для активации стилей из любого приложения (Vanilla JS, React, Svelte, Nuxt, SSR) используйте универсальный метод загрузчика:

```js
import { loadStyles } from 'ustatic-css/scripts';

// Явно указать модули
await loadStyles({ modules: ['typography', 'spacing'] });

// Или автоподбор по используемым классам
loadStyles({ classes: ['flex', 'p-4', 'text-lg'] });
```

Примечания:

- Метод безопасно работает при SSR: если document недоступен, загрузка пропускается на сервере и выполняется в браузере.
- Если опции не заданы, будут подключены базовые стили и переменные.

## 🧩 Особенности

- **Готовый Vue-плагин** — активация и подгрузка модульных стилей в рантайме
- **Универсальный загрузчик стилей** — метод `loadStyles` для любых сред (Vanilla/React/Svelte/Nuxt/SSR)
- **Токены дизайн-системы** — все стили основаны на единой системе токенов
- **Утилитарные классы** — более 20 модулей для типографики, отступов, позиционирования и других стилей
- **Динамические хуки** — `useCssProperties` и `useTokens` для управления стилями в JavaScript
- **Адаптивность** — поддержка брейкпоинтов `xs`, `md`, `def`, `lg`
- **Мультиязычность** — документация на русском языке, легко расширяемая
- **Модульность** — импорт только нужных компонентов
- **Поддержка современных стандартов** — ESM, TypeScript, SCSS

## TODO
[ ] Разработка интерактивных примеров и документации на работу с библиотекой

[ ] Публикация в публичных сервисах


## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](./LICENSE).

---

🤖 *Часть документации создана с применением искусственного интеллекта для улучшения читаемости и полноты.*

