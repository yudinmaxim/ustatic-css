---
title: Style
description: Стили границ
---

# Начертание границ (border style)

Классы для управления стилем границ элементов.

## Стили границ

Библиотека предоставляет один дополнительный стиль границы — `border-dashed`.
По умолчанию все границы используют `border-style: solid`.

### Dashed (пунктирная)

```html
<div class="border border-dashed p-4 bg-white">
  border-dashed — пунктирная линия
</div>
```

## Примеры использования

### Зона для перетаскивания файлов

```html
<div
  class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 cursor-pointer"
>
  <svg
    class="w-12 h-12 text-gray-400 mx-auto mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
  <p class="text-gray-600">Перетащите файлы сюда или кликните для выбора</p>
  <p class="text-sm text-gray-400 mt-2">PNG, JPG, GIF до 10MB</p>
</div>
```

### Карточка с пунктирной границей

```html
<div class="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
  <h3 class="font-bold text-gray-700 mb-2">Дополнительная информация</h3>
  <p class="text-gray-600 text-sm">
    Этот блок содержит дополнительную информацию с пунктирной границей
  </p>
</div>
```

### Форма с пунктирными полями

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
    <input
      type="email"
      class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
             focus:outline-none focus:border-primary-500"
      placeholder="you@example.com"
    />
  </div>
</form>
```

### Чекбокс с пунктирной границей

```html
<label class="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    class="border-2 border-dashed border-gray-300 rounded"
  />
  <span class="text-gray-700">Согласен с условиями</span>
</label>
```

## Таблица классов

| Класс           | CSS свойство           | Описание         |
| --------------- | ---------------------- | ---------------- |
| `border-dashed` | `border-style: dashed` | Пунктирная линия |

> По умолчанию все границы используют `border-style: solid` (задано в базовом классе `.border`).

## Пример CSS

```scss
// Пунктирная граница
.border-dashed {
  border-style: dashed;
}
```

## См. также

- [Границы](./index.md) — для управления толщиной и цветом границ
- [Контур](../outline/index.md) — для обводки элементов
- [Эффекты](../effects/index.md) — для интерактивных состояний
