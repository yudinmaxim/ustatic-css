---
title: Отображение (Display)
outline:
  level: 2
---

# Отображение (Display)

Классы для управления типом отображения элементов и переполнением.

## Display классы

| Класс | CSS | Описание |
|-------|-----|----------|
| `.block` | `display: block` | Блочный элемент |
| `.inline` | `display: inline` | Строчный элемент |
| `.inline-block` | `display: inline-block` | Строчно-блочный элемент |
| `.flex` | `display: flex` | Flexbox контейнер |
| `.grid` | `display: grid` | Grid контейнер |
| `.table` | `display: table` | Таблица |
| `.table-cell` | `display: table-cell` | Ячейка таблицы |

## Примеры

::: component-view
<div class="space-y-4">
  <div>
    <span class="block bg-blue-100 p-2 border border-blue-300">block (с новой строки)</span>
    <span class="block bg-blue-100 p-2 border border-blue-300">block (ещё один)</span>
  </div>
  
  <div>
    <span class="inline-block bg-green-100 p-2 border border-green-300">inline-block</span>
    <span class="inline-block bg-green-100 p-2 border border-green-300">inline-block</span>
  </div>
  
  <div>
    <span class="inline bg-yellow-100 p-2 border border-yellow-300">inline</span>
    <span class="inline bg-yellow-100 p-2 border border-yellow-300">inline</span>
  </div>
</div>
:::

## Скрытие элементов

Для скрытия элементов используйте класс `.hide`:

::: component-view
<div class="space-y-4">
  <div class="hide p-3 bg-red-100 border border-red-300 rounded">
    Этот элемент скрыт через .hide
  </div>
  
  <div class="block p-3 bg-green-100 border border-green-300 rounded">
    Этот элемент виден
  </div>
</div>
:::

```html
<!-- Полное скрытие элемента -->
<div class="hide">Скрытый элемент</div>
```

## Overflow (Переполнение)

| Класс | CSS | Описание |
|-------|-----|----------|
| `.overflow-hidden` | `overflow: hidden` | Скрыть переполнение |
| `.overflow-scroll` | `overflow: scroll` | Всегда показывать скролл |
| `.overflow-auto` | `overflow: auto` | Автоскролл при необходимости |
| `.overflow-x-hidden` | `overflow-x: hidden` | Скрыть горизонтальное |
| `.overflow-y-hidden` | `overflow-y: hidden` | Скрыть вертикальное |
| `.overflow-x-scroll` | `overflow-x: scroll` | Горизонтальный скролл |
| `.overflow-y-scroll` | `overflow-y: scroll` | Вертикальный скролл |
| `.overflow-x-auto` | `overflow-x: auto` | Авто горизонтальный |
| `.overflow-y-auto` | `overflow-y: auto` | Авто вертикальный |

## Примеры overflow

### Скрытие переполнения

::: component-view
<div class="overflow-hidden w-48 h-20 border border-gray-300 rounded bg-gray-50">
  <p class="text-sm text-gray-600">
    Этот текст очень длинный и не помещается в контейнер, поэтому он обрезается...
  </p>
</div>
:::

### Вертикальный скролл

::: component-view
<div class="overflow-y-auto h-32 border border-gray-300 rounded bg-gray-50 p-2">
  <p class="text-sm text-gray-600 mb-2">Прокрути меня вниз ↓</p>
  <p class="text-sm text-gray-600">Ещё текст...</p>
  <p class="text-sm text-gray-600">И ещё...</p>
  <p class="text-sm text-gray-600">И немного больше...</p>
  <p class="text-sm text-gray-600">Продолжение...</p>
</div>
:::

### Горизонтальный скролл

::: component-view
<div class="overflow-x-auto border border-gray-300 rounded bg-gray-50 p-2">
  <div class="flex gap-2 min-w-max">
    <div class="bg-blue-100 p-3 rounded border border-blue-300">Элемент 1</div>
    <div class="bg-green-100 p-3 rounded border border-green-300">Элемент 2</div>
    <div class="bg-yellow-100 p-3 rounded border border-yellow-300">Элемент 3</div>
    <div class="bg-purple-100 p-3 rounded border border-purple-300">Элемент 4</div>
    <div class="bg-pink-100 p-3 rounded border border-pink-300">Элемент 5</div>
  </div>
</div>
:::

## См. также

- [Скрытие](/ru/guides/hide/) — адаптивное скрытие элементов
- [Прокрутка](/ru/guides/scroll/) — стилизация скроллбара
- [Flexbox](/ru/guides/flexbox/) — flexbox раскладка
