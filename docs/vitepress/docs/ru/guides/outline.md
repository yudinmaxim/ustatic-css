---
title: Контур (Outline)
outline:
  level: 2
---

# Контур (Outline)

Классы для управления контуром элементов (обычно используется для фокуса).

## Ширина контура

| Класс | Описание |
|-------|----------|
| `.outline-0` | Без контура |
| `.outline` | Контур 1px |
| `.outline-2` | Контур 2px |
| `.outline-4` | Контур 4px |

## Цвет контура

Все цвета палитры доступны через `.outline-{color}`:

## Примеры

::: component-view
<div class="flex gap-4">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base outline outline-2 outline-blue-300">
    С контуром
  </button>
  <button class="px-4 py-2 bg-gray-200 rounded-base outline-0">
    Без контура
  </button>
</div>
:::

```html
<button class="outline outline-2 outline-blue-300">С контуром</button>
<button class="outline-0">Без контура</button>
```
