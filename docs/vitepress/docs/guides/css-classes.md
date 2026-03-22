---
title: CSS-классы — Обзор
outline: false
---

# Использование CSS-классов

uStatic CSS предоставляет более 350 утилитарных классов для быстрой разработки интерфейсов.

## Основные модули

### [Типографика](/guides/typography)

Размеры, вес и цвет текста:

```html
<p class="text-sm font-medium">Текст</p>
<p class="text-lg font-bold">Заголовок</p>
<span class="text-blue-500">Акцентный текст</span>
```

### [Отступы](/guides/spacing)

Margin и padding:

```html
<div class="p-4 m-2">Отступы</div>
<div class="px-4 py-2">Горизонтальные и вертикальные</div>
<div class="-mt-4">Отрицательный margin</div>
```

### [Flexbox](/guides/flexbox)

Flexbox-контейнеры:

```html
<div class="flex justify-between items-center gap-4">Контейнер</div>
```

### [Grid](/guides/grid)

Grid-сетки:

```html
<div class="grid grid-columns--1fr-1fr gap-4">Сетка</div>
```

### [Позиционирование](/guides/position)

Позиционирование элементов:

```html
<div class="relative">
  <div class="absolute top-0 right-0">Абсолютный элемент</div>
</div>
```

### [Границы](/guides/border)

Границы и скругления:

```html
<div class="border border-gray-200 rounded-base">Карточка</div>
```

### [Фон](/guides/bg)

Цвет и прозрачность фона:

```html
<div class="bg-blue-500 bg-opacity-50">Фон</div>
```

### [Эффекты](/guides/effects)

Прозрачность и поворот:

```html
<div class="opacity-50 rotate-45">Эффект</div>
```

### [Курсор](/guides/cursor)

Вид курсора:

```html
<button class="cursor-pointer">Кнопка</button>
```

### [Отображение](/guides/display)

Тип отображения:

```html
<div class="hidden">Скрыто</div>
<div class="inline-block">Строчно-блочный</div>
```

### [Выравнивание](/guides/align)

Вертикальное выравнивание:

```html
<span class="align-middle">По центру</span>
```

## Примеры

### Карточка

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Заголовок</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer active:pulse">
    Кнопка
  </button>
</div>
:::

### Сетка

::: component-view
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="p-4 bg-gray-100 rounded-base">Элемент 1</div>
  <div class="p-4 bg-gray-100 rounded-base">Элемент 2</div>
</div>
:::

## Навигация по модулям

Выберите модуль в левом меню для подробной документации.
