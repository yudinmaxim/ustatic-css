# Документация по утилитарным CSS-классам

## Оглавление
- [Общее описание](#общее-описание)
- [Структура классов](#структура-классов)
- [Модули](#модули)
  - [1. Типографика (typography)](#1-типографика-typography)
    - [Размеры текста](#размеры-текста)
    - [Цвета текста](#цвета-текста)
    - [Начертание шрифта](#начертание-шрифта)
    - [Выравнивание текста](#выравнивание-текста)
    - [Вертикальное выравнивание](#вертикальное-выравнивание)
  - [2. Отступы (spacing)](#2-отступы-spacing)
    - [Margin (внешние отступы)](#margin-внешние-отступы)
    - [Padding (внутренние отступы)](#padding-внутренние-отступы)
  - [3. Размеры (sizing)](#3-размеры-sizing)
    - [Ширина](#ширина)
    - [Высота](#высота)
    - [Минимальные размеры](#минимальные-размеры)
    - [Максимальные размеры](#максимальные-размеры)
  - [4. Позиционирование (position)](#4-позиционирование-position)
    - [Типы позиционирования](#типы-позиционирования)
    - [Координаты](#координаты)
    - [Z-index](#z-index)
  - [5. Flexbox (flexbox)](#5-flexbox-flexbox)
    - [Основные свойства](#основные-свойства)
    - [Выравнивание](#выравнивание)
    - [Порядок элементов](#порядок-элементов)
  - [6. Grid (grid)](#6-grid-grid)
    - [Основные свойства](#основные-свойства-1)
    - [Шаблоны колонок](#шаблоны-колонок)
    - [Промежутки (gap)](#промежутки-gap)
  - [7. Границы (border)](#7-границы-border)
    - [Типы границ](#типы-границ)
    - [Толщина границ](#толщина-границ)
    - [Цвета границ](#цвета-границ)
    - [Стили границ](#стили-границ)
  - [8. Скругления (rounded)](#8-скругления-rounded)
    - [Все углы](#все-углы)
    - [Отдельные углы](#отдельные-углы)
  - [9. Фон (bg)](#9-фон-bg)
    - [Цвета фона](#цвета-фона)
    - [Прозрачность фона](#прозрачность-фона)
  - [10. Эффекты (effects)](#10-эффекты-effects)
    - [Прозрачность](#прозрачность)
    - [Поворот](#поворот)
  - [11. Анимации (animations)](#11-анимации-animations)
    - [Поворот](#поворот-1)
    - [Подчеркивание при наведении](#подчеркивание-при-наведении)
  - [12. Интерактивность (interactivity)](#12-интерактивность-interactivity)
    - [События указателя](#события-указателя)
    - [Выделение текста](#выделение-текста)
  - [13. Курсор (cursor)](#13-курсор-cursor)
  - [14. Отображение (display)](#14-отображение-display)
  - [15. Переполнение (overflow)](#15-переполнение-overflow)
- [Адаптивность](#адаптивность)
- [Псевдоклассы](#псевдоклассы)

## Общее описание

Эта библиотека предоставляет набор утилитарных CSS-классов для быстрого стилизования элементов интерфейса. Все классы генерируются на основе токенов дизайн-системы, что обеспечивает консистентность и легкость поддержки.

## Структура классов

Классы следуют паттерну: `[имя-модуля][модификатор]`, где:

- имя-модуля: название модуля (например, `text`, `bg`, `m`)
- модификатор: значение или вариация (например, `primary`, `1`, `md`)

## Модули

### 1. Типографика (typography)

#### Размеры текста

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .text-2xs | { font-size: 0.5rem; line-height: 0.75rem; } |
| .text-xs | { font-size: 0.75rem; line-height: 1rem; } |
| .text-sm | { font-size: 0.875rem; line-height: 1.25rem; } |
| .text-base | { font-size: 1rem; line-height: 1.5rem; } |
| .text-lg | { font-size: 1.125rem; line-height: 1.75rem; } |
| .text-xl | { font-size: 1.25rem; line-height: 1.75rem; } |
| .text-2xl | { font-size: 1.5rem; line-height: 2rem; } |

Пример:

```html
<p class="text-lg">Большой текст</p>
<p class="text-sm">Маленький текст</p>
```

#### Цвета текста

Доступны цвета из палитры дизайн-системы:

- `text-primary`, `text-primary-50`, `text-primary-100`, ..., `text-primary-950`
- `text-secondary`, `text-success`, `text-info`, `text-warning`, `text-danger`
- `text-gray`, `text-red`, `text-orange`, `text-yellow`, `text-green`, `text-sky`, `text-blue`
- `text-black`, `text-white`

Пример:

```html
<p class="text-primary">Основной цвет</p>
<p class="text-success">Успешный цвет</p>
<p class="text-gray-500">Серый цвет</p>
```

#### Начертание шрифта

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .font-thin | { font-weight: 100; } |
| .font-extralight | { font-weight: 200; } |
| .font-light | { font-weight: 300; } |
| .font-regular | { font-weight: 400; } |
| .font-medium | { font-weight: 500; } |
| .font-semibold | { font-weight: 600; } |
| .font-bold | { font-weight: 700; } |
| .font-extrabold | { font-weight: 800; } |
| .font-black | { font-weight: 900; } |

Пример:

```html
<p class="font-bold">Жирный текст</p>
<p class="font-light">Тонкий текст</p>
```

#### Выравнивание текста

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .text-left | { text-align: left; } |
| .text-center | { text-align: center; } |
| .text-right | { text-align: right; } |
| .text-justify | { text-align: justify; } |
| .text-start | { text-align: start; } |
| .text-end | { text-align: end; } |

Пример:

```html
<p class="text-center">Центрированный текст</p>
<p class="text-right">Выравненный по правому краю</p>
```

#### Вертикальное выравнивание

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .text-baseline | { vertical-align: baseline; } |
| .text-top | { vertical-align: top; } |
| .text-middle | { vertical-align: middle; } |
| .text-bottom | { vertical-align: bottom; } |
| .text-text-top | { vertical-align: text-top; } |
| .text-text-bottom | { vertical-align: text-bottom; } |
| .text-sub | { vertical-align: sub; } |
| .text-super | { vertical-align: super; } |

Пример:

```html
<span class="text-top">Выравненный по верху</span>
<span class="text-middle">Выравненный по середине</span>
```

### 2. Отступы (spacing)

#### Margin (внешние отступы)

Классы формируются по шаблону: `m{направление}-{размер}`

Направления:

- без направления: все стороны
- `t`: top (сверху)
- `b`: bottom (снизу)
- `l`: left (слева)
- `r`: right (справа)
- `x`: left и right (горизонтальные)
- `y`: top и bottom (вертикальные)

Размеры (примеры):

- `0`: 0px
- `0d5`: 2px
- `1`: 4px
- `2`: 8px
- `3`: 12px
- `4`: 16px
- `5`: 20px
- `6`: 24px
- `8`: 32px
- `9`: 36px
- `10`: 40px
- `12`: 48px
- `16`: 64px
- `20`: 80px
- `24`: 96px
- `32`: 128px
- `40`: 160px
- `48`: 192px
- `56`: 224px
- `64`: 256px
- `1/2`: 50%
- `1/3`: 33.333%
- `2/3`: 66.666%
- `3/4`: 75%
- `full`: 100%

Примеры:

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .m-0 | { margin: 0; } |
| .m-4 | { margin: 16px; } |
| .mt-2 | { margin-top: 8px; } |
| .mx-4 | { margin-left: 16px; margin-right: 16px; } |
| .my-auto | { margin-top: auto; margin-bottom: auto; } |
| .-m-4 | { margin: -16px; } /*Отрицательные значения*/ |

Пример использования:

```html
<div class="m-4">Блок с отступами 16px со всех сторон</div>
<div class="mt-2">Блок с отступом сверху 8px</div>
<div class="mx-auto">Блок с автоматическими боковыми отступами (центрирование)</div>
```

#### Padding (внутренние отступы)

Аналогично margin, но с префиксом `p`:

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .p-0 | { padding: 0; } |
| .p-4 | { padding: 16px; } |
| .pt-2 | { padding-top: 8px; } |
| .px-4 | { padding-left: 16px; padding-right: 16px; } |
| .py-8 | { padding-top: 32px; padding-bottom: 32px; } |

Пример использования:

```html
<div class="p-4">Блок с внутренними отступами 16px</div>
<div class="pt-2 pb-4">Блок с отступами сверху 8px и снизу 16px</div>
```

### 3. Размеры (sizing)

#### Ширина

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .w-0 | { width: 0px; } |
| .w-4 | { width: 16px; } |
| .w-1/2 | { width: 50%; } |
| .w-1/3 | { width: 33.3333%; } |
| .w-full | { width: 100%; } |
| .w-screen | { width: 100vw; } |

Пример:

```html
<div class="w-1/2">Блок шириной 50%</div>
<div class="w-full">Блок шириной 100%</div>
<div class="w-64">Блок шириной 256px</div>
```

#### Высота

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .h-0 | { height: 0px; } |
| .h-4 | { height: 16px; } |
| .h-1/2 | { height: 50%; } |
| .h-full | { height: 100%; } |
| .h-screen | { height: 100vh; } |

Пример:

```html
<div class="h-64">Блок высотой 256px</div>
<div class="h-full">Блок высотой 100%</div>
```

#### Минимальные размеры

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .min-w-0 | { min-width: 0px; } |
| .min-w-full | { min-width: 100%; } |
| .min-w-screen | { min-width: 100vw; } |
| .min-h-0 | { min-height: 0px; } |
| .min-h-full | { min-height: 100%; } |
| .min-h-screen | { min-height: 100vh; } |

#### Максимальные размеры

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .max-w-0 | { max-width: 0px; } |
| .max-w-full | { max-width: 100%; } |
| .max-w-screen | { max-width: 100vw; } |
| .max-h-0 | { max-height: 0px; } |
| .max-h-full | { max-height: 100%; } |
| .max-h-screen | { max-height: 100vh; } |

### 4. Позиционирование (position)

#### Типы позиционирования

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .relative | { position: relative; } |
| .absolute | { position: absolute; } |
| .fixed | { position: fixed; } |

Пример:

```html
<div class="relative">
  <div class="absolute top-0 right-0">Абсолютно спозиционированный элемент</div>
</div>
```

#### Координаты

Классы формируются по шаблону: `{позиция}-{значение}`

Позиции:

- `top`: сверху
- `right`: справа
- `bottom`: снизу
- `left`: слева

Значения (примеры):

- `0`: 0px
- `1`: 4px
- `2`: 8px
- `4`: 16px
- `8`: 32px
- `16`: 64px
- `1/2`: 50%
- `full`: 100%
- `auto`: auto

Пример:

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .top-0 | { top: 0; } |
| .right-4 | { right: 16px; } |
| .bottom-1/2 | { bottom: 50%; } |
| .left-full | { left: 100%; } |

Пример использования:

```html
<div class="relative h-64">
  <div class="absolute top-4 left-4">Элемент в 16px от верха и левого края</div>
  <div class="absolute bottom-0 right-0">Элемент в правом нижнем углу</div>
</div>
```

#### Z-index

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .z-0 | { z-index: 0; } |
| .z-10 | { z-index: 10; } |
| .z-20 | { z-index: 20; } |
| .z-30 | { z-index: 30; } |
| .z-40 | { z-index: 40; } |
| .z-50 | { z-index: 50; } |
| .z-auto | { z-index: auto; } |

Пример:

```html
<div class="relative z-10">Элемент с z-index 10</div>
```

### 5. Flexbox (flexbox)

#### Основные свойства

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .flex | { display: flex; } |
| .inline-flex | { display: inline-flex; } |
| .flex-row | { flex-direction: row; } |
| .flex-row-reverse | { flex-direction: row-reverse; } |
| .flex-col | { flex-direction: column; } |
| .flex-col-reverse | { flex-direction: column-reverse; } |
| .flex-wrap | { flex-wrap: wrap; } |
| .flex-nowrap | { flex-wrap: nowrap; } |
| .flex-wrap-reverse | { flex-wrap: wrap-reverse; } |
| .flex-1 | { flex: 1 1 0%; } |
| .flex-auto | { flex: 1 1 auto; } |
| .flex-initial | { flex: 0 1 auto; } |
| .flex-none | { flex: none; } |

Пример:

```html
<div class="flex flex-row">
  <div class="flex-1">Элемент, занимающий доступное пространство</div>
  <div class="flex-none">Элемент фиксированного размера</div>
</div>
```

#### Выравнивание

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .items-start | { align-items: flex-start; } |
| .items-end | { align-items: flex-end; } |
| .items-center | { align-items: center; } |
| .items-baseline | { align-items: baseline; } |
| .items-stretch | { align-items: stretch; } |
| .justify-start | { justify-content: flex-start; } |
| .justify-end | { justify-content: flex-end; } |
| .justify-center | { justify-content: center; } |
| .justify-between | { justify-content: space-between; } |
| .justify-around | { justify-content: space-around; } |
| .justify-evenly | { justify-content: space-evenly; } |

Пример:

```html
<div class="flex items-center justify-between">
  <div>Элемент слева</div>
  <div>Элемент справа</div>
</div>
```

#### Порядок элементов

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .order-1 | { order: 1; } |
| .order-2 | { order: 2; } |
| .order-last | { order: 99999; } |

Пример:

```html
<div class="flex">
  <div class="order-2">Второй по порядку</div>
  <div class="order-1">Первый по порядку</div>
</div>
```

### 6. Grid (grid)

#### Основные свойства

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .grid | { display: grid; } |

#### Шаблоны колонок

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .grid-cols-1 | { grid-template-columns: repeat(1, minmax(0, 1fr)); } |
| .grid-cols-2 | { grid-template-columns: repeat(2, minmax(0, 1fr)); } |
| .grid-cols-3 | { grid-template-columns: repeat(3, minmax(0, 1fr)); } |
| .grid-cols-4 | { grid-template-columns: repeat(4, minmax(0, 1fr)); } |
| .grid-cols-6 | { grid-template-columns: repeat(6, minmax(0, 1fr)); } |
| .grid-cols-12 | { grid-template-columns: repeat(12, minmax(0, 1fr)); } |

Пример:

```html
<div class="grid grid-cols-3 gap-4">
  <div>Колонка 1</div>
  <div>Колонка 2</div>
  <div>Колонка 3</div>
</div>
```

#### Промежутки (gap)

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .gap-0 | { gap: 0px; } |
| .gap-1 | { gap: 4px; } |
| .gap-2 | { gap: 8px; } |
| .gap-4 | { gap: 16px; } |
| .gap-8 | { gap: 32px; } |

Пример:

```html
<div class="grid grid-cols-3 gap-4">
  <div>Элементы с промежутком 16px</div>
  <div>Элементы с промежутком 16px</div>
  <div>Элементы с промежутком 16px</div>
</div>
```

### 7. Границы (border)

#### Типы границ

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .border | { border: 1px solid; } |
| .border-0 | { border: 0; } |
| .border-t | { border-top: 1px solid; } |
| .border-r | { border-right: 1px solid; } |
| .border-b | { border-bottom: 1px solid; } |
| .border-l | { border-left: 1px solid; } |

Пример:

```html
<div class="border">Элемент с границей со всех сторон</div>
<div class="border-t">Элемент с верхней границей</div>
```

#### Толщина границ

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .border-0 | { border-width: 0; } |
| .border-1 | { border-width: 1px; } |
| .border-2 | { border-width: 2px; } |
| .border-4 | { border-width: 4px; } |
| .border-8 | { border-width: 8px; } |

Пример:

```html
<div class="border border-2">Элемент с границей 2px</div>
```

#### Цвета границ

Аналогично цветам текста:

```css
.border-primary { border-color: #5993d9; }
.border-gray-300 { border-color: #d1d5db; }
```

Пример:

```html
<div class="border border-primary">Элемент с синей границей</div>
```

#### Стили границ

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .border-solid | { border-style: solid; } |
| .border-dashed | { border-style: dashed; } |
| .border-dotted | { border-style: dotted; } |
| .border-double | { border-style: double; } |
| .border-none | { border-style: none; } |

Пример:

```html
<div class="border border-dashed">Элемент с пунктирной границей</div>
```

### 8. Скругления (rounded)

#### Все углы

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .rounded-none | { border-radius: 0px; } |
| .rounded-sm | { border-radius: 0.125rem; } /*2px*/ |
| .rounded | { border-radius: 0.25rem; } /*4px*/ |
| .rounded-md | { border-radius: 0.375rem; } /*6px*/ |
| .rounded-lg | { border-radius: 0.5rem; } /*8px*/ |
| .rounded-xl | { border-radius: 0.75rem; } /*12px*/ |
| .rounded-2xl | { border-radius: 1rem; } /*16px*/ |
| .rounded-3xl | { border-radius: 1.5rem; } /*24px*/ |
| .rounded-full | { border-radius: 9999px; } |

Пример:

```html
<div class="rounded-lg">Элемент со скругленными углами</div>
<div class="rounded-full">Элемент с полностью скругленными углами (круг/овал)</div>
```

#### Отдельные углы

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .rounded-t-lg | { border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem; } |
| .rounded-r-lg | { border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem; } |
| .rounded-b-lg | { border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem; } |
| .rounded-l-lg | { border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem; } |
| .rounded-tl-lg | { border-top-left-radius: 0.5rem; } |
| .rounded-tr-lg | { border-top-right-radius: 0.5rem; } |
| .rounded-br-lg | { border-bottom-right-radius: 0.5rem; } |
| .rounded-bl-lg | { border-bottom-left-radius: 0.5rem; } |

Пример:

```html
<div class="rounded-t-lg">Элемент со скругленными верхними углами</div>
```

### 9. Фон (bg)

#### Цвета фона

Аналогично цветам текста:

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .bg-primary | { background-color: #5993d9; } |
| .bg-gray-100 | { background-color: #f3f4f6; } |
| .bg-white | { background-color: #ffffff; } |
| .bg-black | { background-color: #000000; } |

Пример:

```html
<div class="bg-primary text-white">Элемент с синим фоном и белым текстом</div>
```

#### Прозрачность фона

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .bg-opacity-0 | { --u-color-opacity: 0.0; } |
| .bg-opacity-25 | { --u-color-opacity: 0.25; } |
| .bg-opacity-50 | { --u-color-opacity: 0.5; } |
| .bg-opacity-75 | { --u-color-opacity: 0.75; } |
| .bg-opacity-100 | { --u-color-opacity: 1.0; } |

Пример:

```html
<div class="bg-primary bg-opacity-50">Полупрозрачный синий фон</div>
```

### 10. Эффекты (effects)

#### Прозрачность

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .opacity-0 | { opacity: 0; } |
| .opacity-25 | { opacity: 0.25; } |
| .opacity-50 | { opacity: 0.5; } |
| .opacity-75 | { opacity: 0.75; } |
| .opacity-100 | { opacity: 1; } |

Пример:

```html
<div class="opacity-50">Полупрозрачный элемент</div>
```

#### Поворот

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .rotate-0 | { transform: rotate(0deg); } |
| .rotate-45 | { transform: rotate(45deg); } |
| .rotate-90 | { transform: rotate(90deg); } |
| .rotate-180 | { transform: rotate(180deg); } |

Пример:

```html
<div class="rotate-90">Повернутый на 90 градусов элемент</div>
```

### 11. Анимации (animations)

#### Поворот

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .animate-spin | { animation: spin 1s linear infinite; } |

Пример:

```html
<div class="animate-spin">Вращающийся элемент</div>
```

#### Подчеркивание при наведении

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .hover:underline--primary:hover | { text-decoration: underline; } |

Пример:

```html
<a class="hover:underline--primary">Ссылка с подчеркиванием при наведении</a>
```

### 12. Интерактивность (interactivity)

#### События указателя

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .pointer-events-none | { pointer-events: none; } |
| .pointer-events-auto | { pointer-events: auto; } |

Пример:

```html
<button class="pointer-events-none">Неактивная кнопка</button>
```

#### Выделение текста

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .user-select-none | { user-select: none; } |
| .user-select-auto | { user-select: auto; } |
| .user-select-all | { user-select: all; } |
| .user-select-text | { user-select: text; } |

Пример:

```html
<div class="user-select-none">Текст, который нельзя выделить</div>
```

### 13. Курсор (cursor)

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .cursor-pointer | { cursor: pointer; } |
| .cursor-move | { cursor: move; } |
| .cursor-default | { cursor: auto; } |
| .cursor-disabled | { cursor: not-allowed; } |
| .cursor-wait | { cursor: wait; } |
| .cursor-help | { cursor: help; } |

Пример:

```html
<button class="cursor-pointer">Кнопка с указателем</button>
<div class="cursor-help">Элемент с курсором помощи</div>
```

### 14. Отображение (display)

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .block | { display: block; } |
| .inline | { display: inline; } |
| .inline-block | { display: inline-block; } |
| .flex | { display: flex; } |
| .inline-flex | { display: inline-flex; } |
| .grid | { display: grid; } |
| .inline-grid | { display: inline-grid; } |
| .hidden | { display: none; } |

Пример:

```html
<div class="hidden">Скрытый элемент</div>
<div class="inline-block">Элемент с inline-block отображением</div>
```

### 15. Переполнение (overflow)

| Утилитарный класс | CSS-имплементация |
|------------------|------------------|
| .overflow-auto | { overflow: auto; } |
| .overflow-hidden | { overflow: hidden; } |
| .overflow-visible | { overflow: visible; } |
| .overflow-scroll | { overflow: scroll; } |
| .overflow-x-auto | { overflow-x: auto; } |
| .overflow-x-hidden | { overflow-x: hidden; } |
| .overflow-x-visible | { overflow-x: visible; } |
| .overflow-x-scroll | { overflow-x: scroll; } |
| .overflow-y-auto | { overflow-y: auto; } |
| .overflow-y-hidden | { overflow-y: hidden; } |
| .overflow-y-visible | { overflow-y: visible; } |
| .overflow-y-scroll | { overflow-y: scroll; } |

Пример:

```html
<div class="overflow-hidden">Элемент с скрытым переполнением</div>
<div class="overflow-x-auto">Элемент с горизонтальной прокруткой</div>
```

## Адаптивность

Библиотека поддерживает адаптивные классы на основе контрольных точек:

- `xs`: 0px и выше
- `md`: 768px и выше
- `def`: 1024px и выше
- `lg`: 1280px и выше

Примеры:

```html
<div class="text-base md:text-lg lg:text-xl">
  Текст размером base на мобильных устройствах, 
  lg на планшетах и xl на десктопах
</div>

<div class="hidden md:block">
  Элемент скрыт на мобильных устройствах и виден на планшетах и выше
</div>
```

## Псевдоклассы

Некоторые классы поддерживают псевдоклассы:

- `hover:` - при наведении мыши
- `focus:` - при фокусе

Пример:

```html
<button class="bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary">
  Кнопка с изменением фона при наведении и фокусе
</button>