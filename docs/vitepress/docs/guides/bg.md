---
title: Фон (Background)
outline:
  level: 2
---

# Фон (Background)

Классы для управления фоном элементов.

## Цвет фона

Все цвета палитры доступны через класс `.bg-{color}-{brightness}`:

::: component-view
<div class="flex gap-2">
  <div class="w-16 h-16 bg-gray-100 rounded-base"></div>
  <div class="w-16 h-16 bg-gray-300 rounded-base"></div>
  <div class="w-16 h-16 bg-gray-500 rounded-base"></div>
  <div class="w-16 h-16 bg-gray-700 rounded-base"></div>
  <div class="w-16 h-16 bg-gray-900 rounded-base"></div>
</div>
:::

```html
<div class="bg-gray-100">Светлый фон</div>
<div class="bg-gray-500">Средний фон</div>
<div class="bg-gray-900">Тёмный фон</div>
```

## Прозрачность фона

| Класс | Описание |
|-------|----------|
| `.bg-opacity-0` | Полностью прозрачный |
| `.bg-opacity-25` | 25% непрозрачности |
| `.bg-opacity-50` | 50% непрозрачности |
| `.bg-opacity-75` | 75% непрозрачности |
| `.bg-opacity-100` | Полностью непрозрачный |

## Примеры

::: component-view
<div class="flex gap-4">
  <div class="p-4 bg-blue-500 text-white rounded-base">
    Основной фон
  </div>
  <div class="p-4 bg-blue-500 bg-opacity-50 text-white rounded-base">
    Полупрозрачный
  </div>
</div>
:::

```html
<div class="bg-blue-500">Основной фон</div>
<div class="bg-blue-500 bg-opacity-50">Полупрозрачный</div>
```
