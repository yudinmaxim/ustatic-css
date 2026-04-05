# uStatic CSS — Справочник библиотеки

> Utility Static CSS framework — утилитарные CSS-классы для быстрой разработки интерфейсов на основе дизайн-токенов.

## Что это

ustatic-css — это CSS-библиотека утилитарных классов, вдохновлённая Tailwind CSS и Bootstrap, но с собственной архитектурой на основе дизайн-токенов. В отличие от Tailwind, все стили **уже предопределены** и всегда поставляются — не требуется конфиг-файл или сборка. Библиотека решает проблемы микрофронтов: единая система токенов, модульная загрузка только нужных стилей, рантайм-активация классов.

- **Версия:** 0.0.1
- **Лицензия:** MIT
- **Модули:** ESM + CJS
- **Размер:** ~50KB (minified)
- **Документация:** https://yudinmaxim.github.io/ustatic-css/
- **Исходники:** /home/maxim/Projects/personal-projects/ustatic-css/src

---

## Архитектура

```
┌─────────────────────────────────────────┐
│         uStatic CSS                     │
├─────────────────────────────────────────┤
│  Дизайн-токены (CSS переменные)         │
│  ┌─────────────────────────────────┐    │
│  │ base.color.*                    │    │
│  │ base.size.*                     │    │
│  │ base.border.radius.*            │    │
│  │ base.text.size.*                │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  SCSS утилиты                           │
│  ┌─────────────────────────────────┐    │
│  │ token() - преобразование токенов│    │
│  │ set-token() - установка значений│    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  Модули (CSS классы)                    │
│  ┌─────────────────────────────────┐    │
│  │ flexbox, grid, typography...    │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  TypeScript утилиты                     │
│  ┌─────────────────────────────────┐    │
│  │ useCssProperties, useTokens     │    │
│  │ styleLoader, Vue Plugin         │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

---

## Установка

```bash
npm install ustatic-css
# или
yarn add ustatic-css
pnpm add ustatic-css
bun add ustatic-css
```

### Подключение стилей

```typescript
// Vite
import 'ustatic-css/dist/ustatic-index.scss'

// Webpack/SCSS
@import 'ustatic-css/dist/ustatic-index.scss';

// CDN
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ustatic-css/dist/ustatic-index.css">
```

---

## Модули CSS (19 штук)

| Модуль          | Описание                  | Ключевые классы                                                                                                         | Документация                               |
| --------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `base`          | Базовые стили и CSS reset | —                                                                                                                       | `/src/css/ustatic-index.scss`              |
| `flexbox`       | Flexbox раскладка         | `flex`, `flex-column`, `items-center`, `justify-between`, `flex-1`, `grow-*`, `shrink-*`, `order-*`                     | `/src/docs/modules/flexbox/index.md`       |
| `grid`          | CSS Grid раскладка        | `grid`, `grid-columns--1fr-1fr`, `grid-columns--4-256`, `grid-rows--auto-1fr-auto`, `grid-col-span-*`                   | `/src/docs/modules/grid/index.md`          |
| `typography`    | Типографика               | `text-{size}`, `font-{weight}`, `text-{color}`, `text-center`, `italic`, `underline`, `truncate`, `uppercase`           | `/src/docs/modules/typography/index.md`    |
| `spacing`       | Отступы (margin/padding)  | `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`            | `/src/docs/modules/spacing/index.md`       |
| `border`        | Границы и скругления      | `border`, `border-{t,b,l,r,x,y}`, `border-{color}`, `rounded-*`, `divider-x`, `divider-y`, `border-solid/dashed/dotted` | `/src/docs/modules/border/index.md`        |
| `bg`            | Фоны и цвета              | `bg-{color}-{shade}`, `bg-opacity-*`, `bg-filter-blur-*`, `hover:bg-*`                                                  | `/src/docs/modules/bg/index.md`            |
| `position`      | Позиционирование          | `relative`, `absolute`, `fixed`, `sticky`, `absolute-center`, `top-*`, `right-*`, `bottom-*`, `left-*`, `z-*`, `z-i-*`  | `/src/docs/modules/position/index.md`      |
| `sizing`        | Размеры (width/height)    | `w-*`, `h-*`, `min-w-*`, `min-h-*`, `max-w-*`, `max-h-*`, `size-*`, `w-full`, `h-screen`                                | `/src/docs/modules/sizing/index.md`        |
| `effects`       | Эффекты                   | `opacity-*`, `rotate-*`, `required`                                                                                     | `/src/docs/modules/effects/index.md`       |
| `animations`    | Анимации                  | `animation:spin-{1-10}`, `blink`, `active:pulse`                                                                        | `/src/docs/appearance/animations/index.md` |
| `interactivity` | Интерактивность           | `pointer-events-none/auto`, `user-select-none/auto/all/text`                                                            | `/src/docs/modules/interactivity/index.md` |
| `scroll`        | Стилизованный скроллбар   | `z-scroll`, `z-scroll--thin`, `z-scroll--hovered`                                                                       | `/src/docs/modules/scroll/index.md`        |
| `cursor`        | Виды курсора              | `cursor-pointer`, `cursor-move`, `cursor-default`, `cursor-disabled`, `cursor-resize-x/y`, `cursor-wait`, `cursor-help` | `/src/docs/modules/cursor/index.md`        |
| `outline`       | Обводка                   | `outline-none`, `outline-*`, `outline-{color}`, `outline-style--*`, `outline-offset-*`                                  | `/src/docs/modules/outline/index.md`       |
| `hide`          | Скрытие на брейкпоинтах   | `hide`, `hide-md`, `hide-lg`, `hide-full`                                                                               | `/src/docs/modules/hide/index.md`          |
| `display`       | Display и Overflow        | `inline`, `block`, `inline-block`, `table`, `table-cell`, `overflow-*`, `overflow-x-*`, `overflow-y-*`                  | `/src/docs/modules/display/index.md`       |
| `align`         | Вертикальное выравнивание | `align-*`                                                                                                               | `/src/docs/modules/align/index.md`         |
| `filters`       | CSS фильтры               | `grayscale`, `grayscale-50`, `grayscale-0`, `no-filter`                                                                 | `/src/docs/modules/filters/index.md`       |

---

## Цветовая палитра

### Основные цвета (с оттенками 50-950)

- **Primary** — `#5993d9` (500) — основной цвет бренда
- **Secondary** — `#e53206` (500) — вторичный цвет

### Семантические цвета (с оттенками 50-900)

- **Success** — успешные действия
- **Danger** — ошибки и опасные действия
- **Warning** — предупреждения
- **Info** — информационные сообщения

### Нейтральные (Gray 50-900)

- `gray-50` (#f9fafb) ... `gray-900` (#111827)

### Дополнительные цвета (с оттенками 50-900)

- `red`, `orange`, `yellow`, `green`, `sky`, `blue`

### Специальные

- `white`, `black`, `transparent`

### Применение цветов

- Фон: `bg-{color}-{shade}` (например, `bg-primary-500`, `bg-gray-100`)
- Текст: `text-{color}-{shade}` (например, `text-gray-600`, `text-primary`)
- Границы: `border-{color}-{shade}` (например, `border-gray-200`)
- Обводка: `outline-{color}` (например, `outline-primary`)

---

## Брейкпоинты

| Имя | Min-width | Описание       |
| --- | --------- | -------------- |
| xs  | < 768px   | Мобильные      |
| md  | >= 768px  | Планшеты       |
| def | >= 1280px | Десктоп        |
| lg  | >= 1920px | Большие экраны |

---

## Дизайн-токены

Все значения берутся из централизованной системы токенов, преобразуемых в CSS-переменные:

```
token("base.color.primary") → var(--u-base-color-primary)
token("base.size.4") → var(--u-base-size-4)
```

### Токен-файлы (SCSS)

- `/src/css/assets/tokens/_ustatic-vars.md` — основные переменные токенов
- `/src/css/assets/tokens/_ustatic-prefix.md` — префикс токенов (по умолчанию `u-`)
- `/src/css/assets/tokens/_ustatic-list.md` — список всех токенов

### Переопределение через CSS-переменные

```scss
:root {
  --u-base-color-primary: #3b82f6;
  --u-base-border-radius: 8px;
}
```

### Настройка префикса

```scss
$prefix: "my-";
@import "ustatic-css/dist/ustatic-index.scss";
// Переменные станут: --my-base-color-primary
```

---

## TypeScript API

### Экспорты (src/index.ts)

```typescript
export * from "./utils/useCssProperties";
export * from "./utils/useTokens";
export * from "./plugins/vue.plugin";
```

### useTokens — работа с CSS-токенами

**Файл:** `/src/utils/useTokens.ts`

```typescript
import { useTokens } from "ustatic-css";

const {
  setCssToken, // Установить токен глобально: setCssToken('base.color.primary', '#3b82f6')
  getCssToken, // Получить токен глобально: getCssToken('base.color.primary')
  removeCssToken, // Удалить токен глобально
  clearCssTokens, // Очистить все глобальные токены
  setCssTokenViaClass, // Установить токены через CSS-класс
  getCssTokenViaClass, // Получить токен из класса
  removeClassWithTokens, // Удалить класс с токенами
  clearClassWithTokens, // Очистить все классы с токенами
  getCssTokenVar, // Получить var(--token) для использования в стилях
  setCssTokenVar, // Создать --token: value для атрибута style
  clearAll, // Полная очистка
} = useTokens();
```

**Формат токена:** `"foo.bar.field"` → CSS-переменная `--foo-bar-field`
**Код токена:** значение с префиксом `T:` означает ссылку на другой токен, например `T:base.color.primary`

### useCssProperties — управление CSS-свойствами

**Файл:** `/src/utils/useCssProperties.ts`

```typescript
import { useCssProperties } from "ustatic-css";

const {
  setCssProperty, // Установить CSS-свойство глобально
  removeCssProperty, // Удалить CSS-свойство глобально
  clearCssProperties, // Очистить все глобальные свойства
  setCssPropertiesViaClass, // Установить свойства через CSS-класс
  getCssPropertyViaClass, // Получить свойство из класса
  removeClassWithProperties, // Удалить класс со свойствами
  clearClassWithProperties, // Очистить все классы
  clearAll, // Полная очистка
} = useCssProperties();
```

### loadStyles — динамическая загрузка CSS

**Файл:** `/src/utils/styleLoader.ts`

```typescript
import { loadStyles } from "ustatic-css";

// Загрузить по классам (автоопределение модулей)
await loadStyles({ classes: ["flex", "grid", "text-center", "bg-white"] });

// Загрузить конкретные модули
await loadStyles({ modules: ["flexbox", "grid", "typography", "bg"] });

// Без параметров — загрузит всё
await loadStyles();
```

**Доступные модули:** `align`, `animations`, `base`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hide`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`

### getStyleLinks — получение ссылок на CSS (для SSR)

```typescript
import { getStyleLinks } from "ustatic-css";

const links = await getStyleLinks({
  classes: ["flex", "text-lg"],
  mode: "ssr", // или 'browser'
  basePath: "/ustatic-css",
});
// Возвращает: [{ href: '/ustatic-css/modules/flexbox.css', rel: 'stylesheet', type: 'text/css' }, ...]
```

### getModulesFromClasses — определение модулей по классам

```typescript
import { getModulesFromClasses } from "ustatic-css";

const modules = getModulesFromClasses(["flex", "p-4", "text-lg"]);
// → ['flexbox', 'spacing', 'typography']
```

### Vue Plugin

**Файл:** `/src/plugins/vue.plugin.ts`

```typescript
import { ustaticCss } from "ustatic-css";

app.use(ustaticCss, {
  autoLoad: true, // Автозагрузка стилей (по умолчанию true)
  modules: ["flexbox", "grid"], // Конкретные модули
  classes: ["flex", "grid"], // Автоопределение по классам
});
```

---

## Class Map (автоопределение модулей)

**Файл:** `/src/utils/styleloader.classmap.ts`

Маппинг префиксов классов к модулям:

- `flex`, `items`, `justify`, `content`, `self`, `shrink`, `grow`, `order` → `flexbox`
- `inline`, `block`, `overflow` → `display`
- `text`, `font`, `leading`, `tracking` → `typography`
- `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml`, `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` → `spacing`
- `w`, `h`, `min-w`, `min-h`, `max-w`, `max-h` → `sizing`
- `border`, `rounded`, `divider` → `border`
- `bg` → `bg`
- `shadow`, `opacity` → `effects`
- `cursor`, `pointer-events`, `resize` → `interactivity`
- `grid`, `col`, `row` → `grid`
- `filter`, `blur`, `brightness`, `contrast`, `grayscale`, `hue-rotate`, `invert`, `saturate`, `sepia` → `filters`
- `hide`, `show` → `hide`
- `position`, `top`, `right`, `bottom`, `left` → `position`
- `scroll` → `scroll`
- `animate` → `animations`
- `outline` → `outline`
- `align` → `align`

---

## Значения отступов и размеров

### Spacing scale

| Значение | Пиксели |
| -------- | ------- |
| 0        | 0       |
| px       | 1px     |
| 0d5      | 2px     |
| 1        | 4px     |
| 2        | 8px     |
| 3        | 12px    |
| 4        | 16px    |
| 5        | 20px    |
| 6        | 24px    |
| 8        | 32px    |
| 10       | 40px    |
| 12       | 48px    |
| 64       | 256px   |

### Typography sizes

| Класс     | Размер | Высота строки |
| --------- | ------ | ------------- |
| text-2xs  | 10px   | 12px          |
| text-xs   | 12px   | 16px          |
| text-sm   | 14px   | 20px          |
| text-base | 16px   | 24px          |
| text-lg   | 18px   | 28px          |
| text-xl   | 20px   | 28px          |
| text-2xl  | 24px   | 32px          |

### Font weights

`font-thin`(100), `font-extralight`(200), `font-light`(300), `font-regular`(400), `font-medium`(500), `font-semibold`(600), `font-bold`(700), `font-extrabold`(800), `font-black`(900)

### Z-index presets

`z-i-hidden`(-1), `z-i-icon`(1), `z-i-menu`(20), `z-i-teleport`(20), `z-i-load`(30), `z-i-tip`(50), `z-i-mobile-menu`(50), `z-i-modal`(60), `z-i-notice`(100), `z-i-fullpage-load`(100)

---

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
│   ├── utils/                # TypeScript утилиты
│   │   ├── useTokens.ts
│   │   ├── useCssProperties.ts
│   │   ├── styleLoader.ts
│   │   └── styleloader.classmap.ts
│   └── plugins/
│       └── vue.plugin.ts
└── package.json
```

---

## Сравнение с аналогами

| Особенность           | uStatic CSS      | Tailwind CSS | Bootstrap       |
| --------------------- | ---------------- | ------------ | --------------- |
| Дизайн-токены         | ✅               | ✅           | ⚠️              |
| Динамическая загрузка | ✅               | ❌           | ❌              |
| Vue плагин            | ✅               | ❌           | ❌              |
| CSS переменные        | ✅               | ✅           | ✅              |
| Размер (minified)     | ~50KB            | ~300KB       | ~200KB          |
| Кастомизация          | CSS переменные   | Конфиг       | SCSS переменные |
| Конфигурация          | Не нужна         | Требуется    | Требуется       |
| Микрофронты           | ✅ Оптимизирован | ❌           | ❌              |

---

## Ключевые файлы документации

### В src/docs/

- `/src/docs/getting-started/introduction.md` — Введение
- `/src/docs/getting-started/installation.md` — Установка
- `/src/docs/getting-started/quick-start.md` — Быстрый старт
- `/src/docs/modules/*/index.md` — Документация каждого модуля
- `/src/docs/appearance/color-palette/index.md` — Палитра цветов
- `/src/docs/appearance/animations/index.md` — Анимации
- `/src/docs/api/variables-tokens/index.md` — API токенов
- `/src/docs/api/utils/tokens/index.md` — Утилиты токенов
- `/src/docs/api/utils/style-loading/index.md` — Загрузка стилей
- `/src/docs/api/plugins/vue/index.md` — Vue плагин

### В src/mardown/

- `/src/mardown/src.md` — Исходники
- `/src/mardown/css_variables.md` — CSS переменные
- `/src/mardown/typography.md` — Типографика
- `/src/mardown/spacing.md` — Отступы
- `/src/mardown/sizing.md` — Размеры
- `/src/mardown/flexbox.md` — Flexbox
- `/src/mardown/grid.md` — Grid
- `/src/mardown/hide.md` — Скрытие
- `/src/mardown/scroll.md` — Скролл
- `/src/mardown/position.md` — Позиционирование
- `/src/mardown/outline.md` — Обводка
- `/src/mardown/interactivity.md` — Интерактивность
- `/src/mardown/filters.md` — Фильтры
- `/src/mardown/utils_useTokens.md` — useTokens
- `/src/mardown/utils_useCssProperties.md` — useCssProperties
- `/src/mardown/utils_styleLoader.md` — styleLoader
- `/src/mardown/plugins_vue.plugin.md` — Vue плагин

### В help/

- `/help/ustatic_utility_help.md` — Справка по утилитам
- `/help/ustatic_classes.md` — Словарь классов
- `/help/useTokens_help.md` — Справка useTokens
- `/help/useCssProperties_help.md` — Справка useCssProperties

---

## SSR совместимость

`loadStyles` безопасно работает с SSR: если `document` недоступен, загрузка пропускается на сервере и выполняется в браузере. `getStyleLinks` позволяет получить ссылки на CSS для вставки в `<head>` на сервере.
