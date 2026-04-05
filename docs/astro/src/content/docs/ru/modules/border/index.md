---
title: Border
description: Справочник по модулю border
---

# Границы (border)

Модуль предоставляет классы для управления границами элементов: толщина, цвет, стиль, скругление.

## Толщина границ

### Все стороны

```html
<div class="flex gap-4 items-end">
  <div class="border p-4 bg-white">border (1px)</div>
  <div class="border-0 p-4 bg-white">border-0</div>
  <div class="border-1 p-4 bg-white">border-1</div>
  <div class="border-2 p-4 bg-white">border-2</div>
  <div class="border-3 p-4 bg-white">border-3</div>
  <div class="border-4 p-4 bg-white">border-4</div>
  <div class="border-5 p-4 bg-white">border-5</div>
</div>
```

### Отдельные стороны

```html
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <!-- Горизонтальные -->
  <div class="border-x p-4 bg-white">border-x (слева и справа)</div>
  <div class="border-x-2 p-4 bg-white">border-x-2</div>

  <!-- Вертикальные -->
  <div class="border-y p-4 bg-white">border-y (сверху и снизу)</div>
  <div class="border-y-2 p-4 bg-white">border-y-2</div>

  <!-- Верх -->
  <div class="border-t p-4 bg-white">border-t</div>
  <div class="border-t-2 p-4 bg-white">border-t-2</div>

  <!-- Низ -->
  <div class="border-b p-4 bg-white">border-b</div>
  <div class="border-b-2 p-4 bg-white">border-b-2</div>

  <!-- Лево -->
  <div class="border-l p-4 bg-white">border-l</div>
  <div class="border-l-2 p-4 bg-white">border-l-2</div>

  <!-- Право -->
  <div class="border-r p-4 bg-white">border-r</div>
  <div class="border-r-2 p-4 bg-white">border-r-2</div>
</div>
```

## Цвета границ

### Основные цвета

```html
<div class="flex gap-4 flex-wrap">
  <div class="border border-primary p-4">border-primary</div>
  <div class="border border-secondary p-4">border-secondary</div>
  <div class="border border-success p-4">border-success</div>
  <div class="border border-danger p-4">border-danger</div>
  <div class="border border-warning p-4">border-warning</div>
  <div class="border border-info p-4">border-info</div>
</div>
```

### Цвета по сторонам

```html
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="border-t-primary p-4 bg-white">border-t-primary</div>
  <div class="border-b-danger p-4 bg-white">border-b-danger</div>
  <div class="border-l-success p-4 bg-white">border-l-success</div>
  <div class="border-r-warning p-4 bg-white">border-r-warning</div>
</div>
```

### Оттенки серого

```html
<div class="flex gap-4 items-end">
  <div class="border border-gray-200 p-4 bg-white">gray-200</div>
  <div class="border border-gray-300 p-4 bg-white">gray-300</div>
  <div class="border border-gray-400 p-4 bg-white">gray-400</div>
  <div class="border border-gray-500 p-4 bg-white">gray-500</div>
</div>
```

### Специальные

```html
<div class="flex gap-4">
  <div class="border border-transparent p-4 bg-white">border-transparent</div>
  <div class="border border-dashed p-4 bg-white">border-dashed (пунктир)</div>
</div>
```

## Разделители

### Горизонтальные разделители

```html
<div>
  <section class="p-4">
    <h3>Секция 1</h3>
    <p>Содержимое первой секции</p>
  </section>

  <hr class="divider-x" />

  <section class="p-4">
    <h3>Секция 2</h3>
    <p>Содержимое второй секции</p>
  </section>

  <hr class="divider-x--small" />

  <section class="p-4">
    <h3>Секция 3 (маленький отступ)</h3>
  </section>

  <hr class="divider-x--medium" />

  <section class="p-4">
    <h3>Секция 4 (средний отступ)</h3>
  </section>

  <hr class="divider-x--large" />

  <section class="p-4">
    <h3>Секция 5 (большой отступ)</h3>
  </section>
</div>
```

### Вертикальные разделители

```html
<nav class="flex items-center">
  <a href="#" class="px-4 py-2 hover:bg-gray-100">Главная</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2 hover:bg-gray-100">О нас</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2 hover:bg-gray-100">Контакты</a>
</nav>
```

**Размеры отступов разделителей:**

| Класс                                      | Отступ |
| ------------------------------------------ | ------ |
| `.divider-x`, `.divider-y`                 | 20px   |
| `.divider-x--small`, `.divider-y--small`   | 10px   |
| `.divider-x--medium`, `.divider-y--medium` | 20px   |
| `.divider-x--large`, `.divider-y--large`   | 30px   |

## Стили границ

```html
<div class="flex gap-4 flex-wrap">
  <div class="border p-4 bg-white">solid (по умолчанию)</div>
  <div class="border border-dashed p-4 bg-white">dashed (пунктир)</div>
</div>
```

> Библиотека предоставляет только `border-dashed` как дополнительный стиль. По умолчанию все границы — `solid`.

## Примеры использования

### Карточка с границей

```html
<div class="border border-gray-200 rounded-lg p-6 bg-white max-w-sm">
  <h3 class="text-lg font-bold mb-2">Заголовок карточки</h3>
  <p class="text-gray-600">Описание карточки с границей</p>
</div>
```

### Поле ввода с подсветкой

```html
<input
  type="text"
  class="border border-gray-300 rounded px-4 py-2 
         focus:outline-none focus:border-primary-500 focus:ring-2 
         focus:ring-primary-200"
  placeholder="Введите текст"
/>
```

### Таблица с границами

```html
<table class="border border-gray-200 w-full">
  <thead>
    <tr class="bg-gray-50">
      <th class="border border-gray-200 p-2">Заголовок 1</th>
      <th class="border border-gray-200 p-2">Заголовок 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-200 p-2">Ячейка 1</td>
      <td class="border border-gray-200 p-2">Ячейка 2</td>
    </tr>
  </tbody>
</table>
```

### Кнопка с границей

```html
<button
  class="border border-primary-500 text-primary-500 px-4 py-2 rounded 
               hover:bg-primary-50 cursor-pointer"
>
  Кнопка с границей
</button>
```

### Разделитель контента

```html
<article class="prose">
  <p>Первый абзац текста...</p>

  <hr class="divider-x--medium my-8" />

  <p>Второй абзац текста после разделителя...</p>
</article>
```

## Таблица классов

| Категория       | Классы                                                                       |
| --------------- | ---------------------------------------------------------------------------- |
| **Толщина**     | `border`, `border-0`, `border-1` ... `border-5`                              |
| **Стороны**     | `border-x`, `border-y`, `border-t`, `border-b`, `border-l`, `border-r`       |
| **Цвета**       | `border-{primary,secondary,success,danger,warning,info}`                     |
| **Оттенки**     | `border-gray-{200-900}`, `border-{color}-{shade}`                            |
| **По сторонам** | `border-{t,b,l,r}-{color}`                                                   |
| **Стиль**       | `border-dashed`                                                              |
| **Спец.**       | `border-transparent`, `border-none`                                          |
| **Разделители** | `divider-x`, `divider-y` (с модификаторами `--small`, `--medium`, `--large`) |

## См. также

- [Скругление](./rounded.md) — для скругления углов
- [Контур](../outline/index.md) — для обводки элементов
- [Фон](../bg/index.md) — для фона элементов
