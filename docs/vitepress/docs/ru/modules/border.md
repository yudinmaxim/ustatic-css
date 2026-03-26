---
title: Границы (Border)
outline:
  level: 2
---

# Границы (border)

Модуль предоставляет классы для управления границами элементов: толщина, цвет, стиль, скругление.

## Толщина границ

### Все стороны

::: component-view
<div class="flex gap-4 items-end flex-wrap bg-white p-4 rounded-lg border border-gray-200">
  <div class="border p-3 bg-gray-50">border (1px)</div>
  <div class="border-0 p-3 bg-gray-50">border-0</div>
  <div class="border-2 p-3 bg-gray-50">border-2</div>
  <div class="border-4 p-3 bg-gray-50">border-4</div>
</div>
:::

### Отдельные стороны

::: component-view
<div class="grid grid-cols-2 gap-4 bg-white p-4 rounded-lg border border-gray-200">
  <div class="border-x border-gray-300 p-3">border-x (слева и справа)</div>
  <div class="border-y border-gray-300 p-3">border-y (сверху и снизу)</div>
  <div class="border-t border-gray-300 p-3">border-t (верх)</div>
  <div class="border-b border-gray-300 p-3">border-b (низ)</div>
</div>
:::

## Цвета границ

::: component-view
<div class="flex gap-4 flex-wrap bg-white p-4 rounded-lg border border-gray-200">
  <div class="border border-primary p-3 rounded">border-primary</div>
  <div class="border border-secondary p-3 rounded">border-secondary</div>
  <div class="border border-success p-3 rounded">border-success</div>
  <div class="border border-danger p-3 rounded">border-danger</div>
  <div class="border border-warning p-3 rounded">border-warning</div>
  <div class="border border-info p-3 rounded">border-info</div>
</div>
:::

## Разделители

### Горизонтальный разделитель

::: component-view
<div class="bg-white p-4 rounded-lg border border-gray-200">
  <section class="p-4">
    <h3 class="font-bold">Секция 1</h3>
    <p class="text-gray-600">Содержимое первой секции</p>
  </section>
  
  <hr class="divider-x">
  
  <section class="p-4">
    <h3 class="font-bold">Секция 2</h3>
    <p class="text-gray-600">Содержимое второй секции</p>
  </section>
  
  <hr class="divider-x--small">
  
  <section class="p-4">
    <h3 class="font-bold">Секция 3 (маленький отступ)</h3>
  </section>
  
  <hr class="divider-x--large">
  
  <section class="p-4">
    <h3 class="font-bold">Секция 4 (большой отступ)</h3>
  </section>
</div>
:::

### Вертикальный разделитель

::: component-view
<nav class="flex items-center bg-white p-4 rounded-lg border border-gray-200">
  <a href="#" class="px-4 py-2 hover:bg-gray-100 rounded">Главная</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2 hover:bg-gray-100 rounded">О нас</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2 hover:bg-gray-100 rounded">Контакты</a>
</nav>
:::

## Примеры использования

### Карточка с границей

::: component-view
<div class="border border-gray-200 rounded-lg p-6 bg-white max-w-sm">
  <h3 class="text-lg font-bold text-gray-900 mb-2">Заголовок карточки</h3>
  <p class="text-gray-600">Описание карточки с границей</p>
</div>
:::

### Поле ввода с подсветкой

::: component-view
<div class="space-y-4 max-w-sm">
  <input 
    type="text" 
    class="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-primary-500"
    placeholder="Обычное поле"
  >
  <input 
    type="text" 
    class="border border-success rounded px-4 py-2 w-full focus:outline-none focus:border-success"
    value="Успешная валидация"
  >
  <input 
    type="text" 
    class="border border-danger rounded px-4 py-2 w-full focus:outline-none focus:border-danger"
    placeholder="Ошибка валидации"
  >
</div>
:::

### Кнопка с границей

::: component-view
<div class="flex gap-4">
  <button class="border border-primary-500 text-primary-500 px-4 py-2 rounded hover:bg-primary-50 transition-colors">
    Кнопка с границей
  </button>
  <button class="border-2 border-primary-500 text-primary-500 px-4 py-2 rounded hover:bg-primary-50 transition-colors">
    Толстая граница
  </button>
</div>
:::

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Толщина** | `border`, `border-0`, `border-1` ... `border-5` |
| **Стороны** | `border-x`, `border-y`, `border-t`, `border-b`, `border-l`, `border-r` |
| **Цвета** | `border-{primary,secondary,success,danger,warning,info}` |
| **Оттенки** | `border-gray-{200-900}`, `border-{color}-{shade}` |
| **По сторонам** | `border-{t,b,l,r}-{color}` |
| **Стиль** | `border-solid`, `border-dashed`, `border-dotted` |
| **Спец.** | `border-transparent`, `border-none` |
| **Разделители** | `divider-x`, `divider-y` (с модификаторами `--small`, `--medium`, `--large`) |

## См. также

- [Скругление](/ru/modules/border/rounded/) — для скругления углов
- [Контур](/ru/modules/outline/) — для обводки элементов
- [Фон](/ru/modules/bg/) — для фона элементов
