---
title: Интерактивность (Interactivity)
outline:
  level: 2
---

# Интерактивность (Interactivity)

Классы для управления взаимодействием с элементами.

## Pointer Events

| Класс | Описание |
|-------|----------|
| `.pointer-events-none` | Отключить события указателя |
| `.pointer-events-auto` | Включить события указателя |

## Выбор текста (User Select)

| Класс | Описание |
|-------|----------|
| `.select-none` | Запретить выделение текста |
| `.select-auto` | Разрешить выделение текста |
| `.select-all` | Выделить всё при клике |
| `.select-text` | Разрешить выделение текста |

## Примеры

::: component-view
<div class="flex flex-column gap-4">
  <button class="px-4 py-2 bg-gray-200 rounded-base pointer-events-none">
    Неактивная кнопка
  </button>
  <p class="select-none p-2 bg-gray-100 rounded-base">
    Текст, который нельзя выделить
  </p>
</div>
:::

```html
<button class="pointer-events-none">Неактивная кнопка</button>
<p class="select-none">Нельзя выделить</p>
<p class="select-auto">Можно выделить</p>
```
