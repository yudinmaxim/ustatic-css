---
title: Flexbox
outline:
  level: 2
---

# Flexbox

Классы для управления flexbox-контейнерами и элементами.

## Контейнер

| Класс | CSS | Описание |
|-------|-----|----------|
| `.flex` | `display: flex` | Включает flexbox |
| `.flex-column` | `flex-direction: column` | Вертикальное направление |
| `.flex-column-reverse` | `flex-direction: column-reverse` | Обратное вертикальное |
| `.flex-row` | `flex-direction: row` | Горизонтальное направление |
| `.flex-row-reverse` | `flex-direction: row-reverse` | Обратное горизонтальное |
| `.flex-wrap` | `flex-wrap: wrap` | Перенос элементов |
| `.flex-nowrap` | `flex-wrap: nowrap` | Без переноса |

## Примеры контейнера

::: component-view
<div class="space-y-4">
  <!-- Горизонтальный ряд -->
  <div class="flex gap-2 p-3 bg-gray-50 rounded border">
    <div class="bg-primary-100 p-3 rounded">1</div>
    <div class="bg-primary-100 p-3 rounded">2</div>
    <div class="bg-primary-100 p-3 rounded">3</div>
  </div>
  
  <!-- Вертикальная колонка -->
  <div class="flex-column gap-2 p-3 bg-gray-50 rounded border">
    <div class="bg-primary-100 p-3 rounded">1</div>
    <div class="bg-primary-100 p-3 rounded">2</div>
    <div class="bg-primary-100 p-3 rounded">3</div>
  </div>
</div>
:::

## Выравнивание (Alignment)

### По вертикали (items)

| Класс | CSS | Описание |
|-------|-----|----------|
| `.items-start` | `align-items: flex-start` | По верхнему краю |
| `.items-center` | `align-items: center` | По центру |
| `.items-end` | `align-items: flex-end` | По нижнему краю |
| `.items-baseline` | `align-items: baseline` | По базовой линии |
| `.items-stretch` | `align-items: stretch` | Растянуть |

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

### По горизонтали (justify)

| Класс | CSS | Описание |
|-------|-----|----------|
| `.justify-start` | `justify-content: flex-start` | По левому краю |
| `.justify-center` | `justify-content: center` | По центру |
| `.justify-end` | `justify-content: flex-end` | По правому краю |
| `.justify-between` | `justify-content: space-between` | Между элементами |
| `.justify-around` | `justify-content: space-around` | Вокруг элементов |
| `.justify-evenly` | `justify-content: space-evenly` | Равномерно |

::: component-view
<div class="space-y-4">
  <div>
    <p class="text-sm text-gray-600 mb-2">justify-between</p>
    <div class="flex justify-between gap-2 border border-gray-200 rounded bg-gray-50 p-2">
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
</div>
:::

## Gap (Отступы между элементами)

Доступные значения: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `auto`

| Класс | Описание |
|-------|----------|
| `.gap-0` | Без отступа (0) |
| `.gap-1` | Отступ 4px |
| `.gap-2` | Отступ 8px |
| `.gap-3` | Отступ 12px |
| `.gap-4` | Отступ 16px |
| `.gap-5` | Отступ 20px |
| `.gap-6` | Отступ 24px |
| `.gap-8` | Отступ 32px |
| `.gap-10` | Отступ 40px |
| `.gap-auto` | Автоматический отступ |

### gap-y и gap-x

| Класс | Описание |
|-------|----------|
| `.gap-y-*` | Отступ только по вертикали (row-gap) |
| `.gap-x-*` | Отступ только по горизонтали (column-gap) |

::: component-view
<div class="space-y-4">
  <!-- Разные значения gap -->
  <div>
    <p class="text-sm text-gray-600 mb-2">gap-1 (4px)</p>
    <div class="flex gap-1 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded text-xs">1</div>
      <div class="bg-primary-100 p-2 rounded text-xs">2</div>
      <div class="bg-primary-100 p-2 rounded text-xs">3</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">gap-4 (16px)</p>
    <div class="flex gap-4 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded">1</div>
      <div class="bg-primary-100 p-2 rounded">2</div>
      <div class="bg-primary-100 p-2 rounded">3</div>
    </div>
  </div>
  
  <div>
    <p class="text-sm text-gray-600 mb-2">gap-8 (32px)</p>
    <div class="flex gap-8 border border-gray-200 rounded bg-gray-50 p-2">
      <div class="bg-primary-100 p-2 rounded">1</div>
      <div class="bg-primary-100 p-2 rounded">2</div>
      <div class="bg-primary-100 p-2 rounded">3</div>
    </div>
  </div>
</div>
:::

## Flex элементы

| Класс | CSS | Описание |
|-------|-----|----------|
| `.flex-0` | `flex: 0 0 auto` | Не растягивается |
| `.flex-auto` | `flex: 1 1 auto` | Автоматически |
| `.flex-1` | `flex: 1` | Занимает всё место |
| `.flex-none` | `flex: none` | Запрет растяжения |

::: component-view
<div class="flex gap-2 border border-gray-200 rounded bg-gray-50 p-2 h-24">
  <div class="flex-0 bg-primary-100 p-3 rounded">
    <span class="text-xs">flex-0</span>
  </div>
  <div class="flex-1 bg-primary-200 p-3 rounded">
    <span class="text-xs">flex-1 (растягивается)</span>
  </div>
  <div class="flex-0 bg-primary-100 p-3 rounded">
    <span class="text-xs">flex-0</span>
  </div>
</div>
:::

## Примеры использования

### Хедер с навигацией

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
  <span class="text-lg font-bold text-primary-500">Логотип</span>
  <nav class="flex gap-4">
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
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm">
      Купить
    </button>
  </div>
</div>
:::

### Центрирование

::: component-view
<div class="flex items-center justify-center h-48 bg-gray-100 rounded-lg border border-gray-200">
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <p class="font-bold text-gray-900">По центру</p>
    <p class="text-sm text-gray-600">Flexbox центрирование</p>
  </div>
</div>
:::

## См. также

- [Gap](/ru/guides/flexbox/) — отступы между элементами
- [Grid](/ru/guides/grid/) — сеточная раскладка
- [Отступы](/ru/guides/spacing/) — margin и padding
