---
title: Flexbox
outline:
  level: 2
---

# Flexbox

Модуль для работы с flexbox раскладкой — гибкое выравнивание и распределение элементов.

## Основные классы

### Контейнер

::: component-view
<div class="flex gap-2 bg-white p-4 rounded-lg border border-gray-200">
  <div class="bg-primary-100 p-4 rounded">1</div>
  <div class="bg-primary-100 p-4 rounded">2</div>
  <div class="bg-primary-100 p-4 rounded">3</div>
</div>
:::

### Вертикальная колонка

::: component-view
<div class="flex-column gap-2 bg-white p-4 rounded-lg border border-gray-200">
  <div class="bg-primary-100 p-4 rounded">1</div>
  <div class="bg-primary-100 p-4 rounded">2</div>
  <div class="bg-primary-100 p-4 rounded">3</div>
</div>
:::

## Выравнивание элементов (align-items)

::: component-view
<div class="space-y-4">
  <div>
    <p class="text-sm text-gray-600 mb-2">items-start</p>
    <div class="flex items-start h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div class="bg-primary-100 p-3 rounded">1</div>
      <div class="bg-primary-100 p-3 rounded">2</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">items-center</p>
    <div class="flex items-center h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div class="bg-primary-100 p-3 rounded">1</div>
      <div class="bg-primary-100 p-3 rounded">2</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">items-end</p>
    <div class="flex items-end h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div class="bg-primary-100 p-3 rounded">1</div>
      <div class="bg-primary-100 p-3 rounded">2</div>
    </div>
  </div>
</div>
:::

## Выравнивание justify (justify-content)

::: component-view
<div class="space-y-4">
  <div>
    <p class="text-sm text-gray-600 mb-2">justify-start</p>
    <div class="flex justify-start gap-2 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded">1</div>
      <div class="bg-primary-100 p-2 rounded">2</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">justify-center</p>
    <div class="flex justify-center gap-2 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded">1</div>
      <div class="bg-primary-100 p-2 rounded">2</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">justify-between</p>
    <div class="flex justify-between gap-2 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded">1</div>
      <div class="bg-primary-100 p-2 rounded">2</div>
    </div>
  </div>
</div>
:::

## Примеры использования

### Хедер с навигацией

::: component-view
<div class="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4">
  <a href="#" class="text-xl font-bold text-primary-500">Логотип</a>
  <nav class="flex items-center gap-4">
    <a href="#" class="text-gray-600 hover:text-primary-500">О нас</a>
    <a href="#" class="text-gray-600 hover:text-primary-500">Продукты</a>
    <a href="#" class="text-gray-600 hover:text-primary-500">Контакты</a>
  </nav>
</div>
:::

### Карточка с футером

::: component-view
<div class="border border-gray-200 rounded-lg overflow-hidden bg-white max-w-sm">
  <div class="h-32 bg-gradient-to-br from-primary-100 to-primary-200"></div>
  <div class="p-4">
    <h3 class="text-lg font-bold text-gray-900 mb-2">Заголовок</h3>
    <p class="text-gray-600 text-sm">Описание</p>
  </div>
  <div class="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200">
    <span class="text-primary-500 font-bold">$99.99</span>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm transition-colors">
      Купить
    </button>
  </div>
</div>
:::

### Центрирование элемента

::: component-view
<div class="flex items-center justify-center h-48 bg-gray-100 rounded-lg border border-gray-200">
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <p class="font-bold text-gray-900">По центру</p>
    <p class="text-sm text-gray-600">Flexbox центрирование</p>
  </div>
</div>
:::

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Display** | `flex`, `flex-column`, `flex-row`, `flex-wrap`, `flex-nowrap` |
| **Align Items** | `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch` |
| **Justify** | `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly` |
| **Flex** | `flex-0`, `flex-auto`, `flex-1`, `flex-none` |
| **Grow** | `grow`, `grow-0`, `grow-1`, `grow-2`, `grow-3` |
| **Shrink** | `shrink`, `shrink-0`, `shrink-1`, `shrink-2`, `shrink-3` |

## См. также

- [Gap](/ru/modules/flexbox/gap/) — отступы между элементами
- [Grid](/ru/modules/grid/) — сеточная раскладка
- [Отступы](/ru/modules/spacing/) — margin и padding
