---
title: Скругление (Rounded)
outline:
  level: 2
---

# Скругление углов (rounded)

Классы для скругления углов элементов.

## Основные классы

::: component-view
<div class="flex gap-4 items-end flex-wrap bg-white p-4 rounded-lg border border-gray-200">
  <div class="rounded-none bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">none</div>
  <div class="rounded-sm bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">sm</div>
  <div class="rounded-base bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">base</div>
  <div class="rounded-md bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">md</div>
  <div class="rounded-lg bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">lg</div>
  <div class="rounded-xl bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">xl</div>
  <div class="rounded-2xl bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">2xl</div>
  <div class="rounded-full bg-primary-500 w-16 h-16 flex items-center justify-center text-white text-xs">full</div>
</div>
:::

| Класс | Радиус |
|-------|--------|
| `.rounded-none` | 0 |
| `.rounded-sm` | 2px |
| `.rounded-base` | 4px |
| `.rounded-md` | 6px |
| `.rounded-lg` | 8px |
| `.rounded-xl` | 12px |
| `.rounded-2xl` | 16px |
| `.rounded-3xl` | 24px |
| `.rounded-full` | 9999px |

## Скругление по углам

::: component-view
<div class="flex gap-4 flex-wrap bg-white p-4 rounded-lg border border-gray-200">
  <div class="rounded-t-lg bg-primary-500 w-24 h-24 flex items-center justify-center text-white text-xs">top</div>
  <div class="rounded-r-lg bg-primary-500 w-24 h-24 flex items-center justify-center text-white text-xs">right</div>
  <div class="rounded-b-lg bg-primary-500 w-24 h-24 flex items-center justify-center text-white text-xs">bottom</div>
  <div class="rounded-l-lg bg-primary-500 w-24 h-24 flex items-center justify-center text-white text-xs">left</div>
</div>
:::

## Примеры использования

### Карточка

::: component-view
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm max-w-sm">
  <h3 class="text-lg font-bold text-gray-900 mb-2">Заголовок</h3>
  <p class="text-gray-600">Описание карточки</p>
</div>
:::

### Кнопка

::: component-view
<div class="flex gap-4">
  <button class="rounded-md bg-primary-500 text-white px-4 py-2 hover:bg-primary-600 transition-colors">
    Кнопка
  </button>
  <button class="rounded-full bg-primary-500 text-white px-6 py-2 hover:bg-primary-600 transition-colors">
    Круглая
  </button>
</div>
:::

### Бейдж

::: component-view
<div class="flex gap-2">
  <span class="rounded-full bg-primary-100 text-primary-700 px-3 py-1 text-sm font-medium">
    Новый
  </span>
  <span class="rounded-full bg-success text-white px-3 py-1 text-sm font-medium">
    Активен
  </span>
</div>
:::

### Аватар

::: component-view
<div class="flex gap-4 items-center">
  <div class="rounded-full bg-primary-500 w-12 h-12 flex items-center justify-center text-white font-bold">
    U
  </div>
  <div>
    <p class="font-bold text-gray-900">User Name</p>
    <p class="text-sm text-gray-600">@username</p>
  </div>
</div>
:::

## См. также

- [Границы](/ru/modules/border/) — для добавления границ
- [Размеры](/ru/modules/sizing/) — для создания круглых элементов
- [Контур](/ru/modules/outline/) — для обводки элементов
