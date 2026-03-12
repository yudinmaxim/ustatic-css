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

Полная документация доступна в директории `help/`:

- [📘 `useCssProperties` — Управление CSS-свойствами](./help/useCssProperties_help.md)
- [📘 `useTokens` — Работа с токенами CSS](./help/useTokens_help.md)
- [📘 Утилитарные классы (подробно)](./help/ustatic_utility_help.md)
- [📗 Словарь всех классов](./help/ustatic_classes.md) — полный список с примерами использования

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
<!-- Карточка с flexbox -->
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Заголовок</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer">
    Кнопка
  </button>
</div>

<!-- Бейдж -->
<span class="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-base">
  New
</span>

<!-- Анимация вращения -->
<div class="animation:spin-4">⚙️</div>
```

### Доступные классы

**Основные модули:**
- **Типографика**: `.text-{size}`, `.font-{weight}`, `.text-{color}-{brightness}`
- **Отступы**: `.m-{space}`, `.p-{space}`, `.mt-{space}`, `.px-{space}` и т.д.
- **Flexbox**: `.flex`, `.items-center`, `.justify-between`, `.gap-{size}`
- **Позиционирование**: `.relative`, `.absolute`, `.z-{index}`
- **Фон**: `.bg-{color}-{brightness}`, `.bg-opacity-{0|25|50|75|100}`
- **Границы**: `.border`, `.border-{color}-{brightness}`, `.rounded-{size}` (например, `.rounded-base`, `.rounded-lg`)
- **Размеры**: `.w-{size}`, `.h-{size}`, `.min-w-{size}`, `.max-h-{size}`
- **Эффекты**: `.opacity-{0-100}`, `.rotate-{angle}`
- **Анимации**: `.blink`, `.animation:spin-{1-10}`, `.active:pulse`

**Цвета с яркостью:** Все цветовые классы поддерживают указания яркости через дефис:
- `.bg-red-500`, `.bg-blue-300`, `.bg-green-700`
- `.text-gray-600`, `.text-primary-400`
- `.border-purple-500`, `.border-orange-200`

Полный список из 350+ классов см. в [Словаре утилитарных классов](./help/ustatic_classes.md).

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

Если опции не заданы — подключаются базовые стили (`ustatic.css`) и переменные (`vars.css`).

#### Примеры использования загрузчика

```js
// Vue 3: загрузить конкретные модули
app.use(ustaticCss, {
  modules: ['flexbox', 'spacing', 'typography', 'border']
});

// Vue 3: автоподбор по классам
app.use(ustaticCss, {
  classes: ['flex', 'p-4', 'text-lg', 'bg-blue-500']
});

// Vanilla JS / React / Svelte: явная загрузка
import { loadStyles } from 'ustatic-css/scripts';

await loadStyles({ modules: ['typography', 'spacing'] });

// Автоподбор по классам
await loadStyles({ classes: ['flex', 'justify-between', 'items-center'] });
```

#### SSR-совместимость

Метод `loadStyles` безопасно работает при SSR: если `document` недоступен, загрузка пропускается на сервере и выполняется в браузере.

## 🧩 Особенности

- **Готовый Vue-плагин** — активация и подгрузка модульных стилей в рантайме
- **Универсальный загрузчик** — метод `loadStyles` для любых сред (Vanilla/React/Svelte/Nuxt/SSR)
- **Автоподбор модулей** — загрузчик автоматически определит нужные модули по списку классов
- **Токены дизайн-системы** — все стили основаны на единой системе токенов
- **350+ утилитарных классов** — 19 модулей для типографики, отступов, позиционирования, цветов и эффектов
- **Цвета с яркостью** — поддержка оттенков вида `{color}-{brightness}` (red-500, blue-300, green-700)
- **Динамические хуки** — `useCssProperties` и `useTokens` для управления стилями в JavaScript
- **Адаптивность** — поддержка брейкпоинтов `xs`, `md`, `def`, `lg`
- **Модульность** — импорт только нужных компонентов для уменьшения размера бандла
- **SSR-совместимость** — безопасная работа на сервере и в браузере
- **ESM и CJS** — поддержка современных стандартов модулей

## TODO
[ ] Разработка интерактивных примеров и документации на работу с библиотекой

[ ] Публикация в публичных сервисах


## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробнее см. в файле [LICENSE](./LICENSE).

---

🤖 *Часть документации создана с применением искусственного интеллекта для улучшения читаемости и полноты.*

