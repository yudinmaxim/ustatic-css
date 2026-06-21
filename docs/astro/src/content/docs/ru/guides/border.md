---
title: Границы (Border)
outline:
  level: 2
---

# Границы (Border)

Классы для управления границами элементов.

## Ширина границ

| Класс | Описание |
|-------|----------|
| `.border-0` | Без границы |
| `.border` | Граница 1px |
| `.border-2` | Граница 2px |
| `.border-3` | Граница 3px |
| `.border-4` | Граница 4px |
| `.border-5` | Граница 5px |

::: component-view
<div class="flex gap-4 items-end">
  <div class="border-0 p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border-0</span>
  </div>
  <div class="border p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border</span>
  </div>
  <div class="border-2 p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border-2</span>
  </div>
  <div class="border-3 p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border-3</span>
  </div>
  <div class="border-4 p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border-4</span>
  </div>
  <div class="border-5 p-2 bg-gray-50 rounded-base">
    <span class="text-xs text-gray-500">border-5</span>
  </div>
</div>
:::

## Границы по сторонам

| Класс | Описание |
|-------|----------|
| `.border-t` | Верхняя граница |
| `.border-r` | Правая граница |
| `.border-b` | Нижняя граница |
| `.border-l` | Левая граница |
| `.border-x` | Горизонтальные границы |
| `.border-y` | Вертикальные границы |

::: component-view
<div class="flex gap-4 flex-wrap">
  <div class="border-t-2 border-t-blue-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-t</span>
  </div>
  <div class="border-r-2 border-r-green-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-r</span>
  </div>
  <div class="border-b-2 border-b-yellow-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-b</span>
  </div>
  <div class="border-l-2 border-l-red-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-l</span>
  </div>
  <div class="border-x-2 border-x-purple-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-x</span>
  </div>
  <div class="border-y-2 border-y-orange-500 p-2 bg-gray-50">
    <span class="text-xs text-gray-500">border-y</span>
  </div>
</div>
:::

## Цвет границ

### Все стороны

Все цвета палитры доступны через `.border-{color}-{brightness}`:

::: component-view
<div class="flex gap-2">
  <div class="w-16 h-16 border-2 border-gray-200 rounded-base"></div>
  <div class="w-16 h-16 border-2 border-gray-400 rounded-base"></div>
  <div class="w-16 h-16 border-2 border-gray-600 rounded-base"></div>
  <div class="w-16 h-16 border-2 border-blue-500 rounded-base"></div>
</div>
:::

### По сторонам

Можно окрасить только конкретную сторону:

| Класс | Описание |
|-------|----------|
| `.border-t-{color}` | Верхняя граница |
| `.border-r-{color}` | Правая граница |
| `.border-b-{color}` | Нижняя граница |
| `.border-l-{color}` | Левая граница |

::: component-view
<div class="flex gap-4">
  <div class="w-20 h-20 border-t-2 border-t-red-500 flex items-center justify-center">
    <span class="text-xs text-red-500">top</span>
  </div>
  <div class="w-20 h-20 border-r-2 border-r-blue-500 flex items-center justify-center">
    <span class="text-xs text-blue-500">right</span>
  </div>
  <div class="w-20 h-20 border-b-2 border-b-green-500 flex items-center justify-center">
    <span class="text-xs text-green-500">bottom</span>
  </div>
  <div class="w-20 h-20 border-l-2 border-l-yellow-500 flex items-center justify-center">
    <span class="text-xs text-yellow-500">left</span>
  </div>
</div>
:::

## Скругление углов

| Класс | Описание |
|-------|----------|
| `.rounded-none` | Без скругления |
| `.rounded-sm` | Маленькое скругление |
| `.rounded-base` | Базовое скругление |
| `.rounded-lg` | Большое скругление |
| `.rounded-xl` | Очень большое скругление |
| `.rounded-full` | Полное скругление (круг) |

**Важно:** Используйте `.rounded` для базового скругления или `.rounded-base` для 4px.

::: component-view
<div class="flex gap-4 items-center flex-wrap">
  <div class="rounded-none w-16 h-16 bg-blue-500 flex items-center justify-center">
    <span class="text-xs text-white">none</span>
  </div>
  <div class="rounded-sm w-16 h-16 bg-green-500 flex items-center justify-center">
    <span class="text-xs text-white">sm</span>
  </div>
  <div class="rounded-base w-16 h-16 bg-yellow-500 flex items-center justify-center">
    <span class="text-xs text-white">base</span>
  </div>
  <div class="rounded-lg w-16 h-16 bg-sky-500 flex items-center justify-center">
    <span class="text-xs text-white">lg</span>
  </div>
  <div class="rounded-xl w-16 h-16 bg-red-500 flex items-center justify-center">
    <span class="text-xs text-white">xl</span>
  </div>
  <div class="rounded-full w-16 h-16 bg-orange-500 flex items-center justify-center">
    <span class="text-xs text-white">full</span>
  </div>
</div>
:::

## Примеры

::: component-view
<div class="flex gap-4 items-center">
  <div class="p-4 border border-gray-200 rounded-base">
    Базовое скругление
  </div>
  <div class="p-4 border-2 border-blue-500 rounded-full">
    Круглая граница
  </div>
</div>
:::
