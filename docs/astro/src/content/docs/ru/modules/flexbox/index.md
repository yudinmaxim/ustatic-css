---
title: Flexbox
description: Справочник по модулю flexbox
---

# Flexbox

Модуль для работы с flexbox раскладкой — гибкое выравнивание и распределение элементов.

## Основные классы

### Контейнер

```html
<!-- Flex контейнер -->
<div class="flex">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>

<!-- Вертикальная колонка -->
<div class="flex-column">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>

<!-- Горизонтальный ряд -->
<div class="flex-row">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
</div>

<!-- С переносом -->
<div class="flex-wrap">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```

## Направление (flex-direction)

| Класс                                        | CSS свойство                     |
| -------------------------------------------- | -------------------------------- |
| `.flex-row`                                  | `flex-direction: row`            |
| `.flex-row-reverse`                          | `flex-direction: row-reverse`    |
| `.flex-column` (`.flex-col`)                 | `flex-direction: column`         |
| `.flex-column-reverse` (`.flex-col-reverse`) | `flex-direction: column-reverse` |

```html
<!-- Ряд (по умолчанию) -->
<div class="flex flex-row gap-2">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- Колонка -->
<div class="flex flex-column gap-2">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>
```

## Выравнивание элементов (align-items)

| Класс             | CSS свойство              |
| ----------------- | ------------------------- |
| `.items-start`    | `align-items: flex-start` |
| `.items-end`      | `align-items: flex-end`   |
| `.items-center`   | `align-items: center`     |
| `.items-baseline` | `align-items: baseline`   |
| `.items-stretch`  | `align-items: stretch`    |

```html
<!-- По центру вертикально -->
<div class="flex items-center h-32 border">
  <div class="bg-primary-100 p-4">По центру</div>
</div>

<!-- По верху -->
<div class="flex items-start h-32 border">
  <div class="bg-primary-100 p-4">По верху</div>
</div>

<!-- По низу -->
<div class="flex items-end h-32 border">
  <div class="bg-primary-100 p-4">По низу</div>
</div>
```

## Выравнивание контента (justify-content)

| Класс              | CSS свойство                     |
| ------------------ | -------------------------------- |
| `.justify-start`   | `justify-content: flex-start`    |
| `.justify-end`     | `justify-content: flex-end`      |
| `.justify-center`  | `justify-content: center`        |
| `.justify-between` | `justify-content: space-between` |
| `.justify-around`  | `justify-content: space-around`  |
| `.justify-evenly`  | `justify-content: space-evenly`  |

```html
<!-- По центру горизонтально -->
<div class="flex justify-center gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- Распределение с промежутками -->
<div class="flex justify-between gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- По правому краю -->
<div class="flex justify-end gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
</div>
```

## Выравнивание контента (align-content)

Для многократно обёрнутого flex-контейнера:

| Класс               | CSS свойство                   |
| ------------------- | ------------------------------ |
| `.content-start`    | `align-content: flex-start`    |
| `.content-end`      | `align-content: flex-end`      |
| `.content-center`   | `align-content: center`        |
| `.content-between`  | `align-content: space-between` |
| `.content-around`   | `align-content: space-around`  |
| `.content-baseline` | `align-content: baseline`      |
| `.content-stretch`  | `align-content: stretch`       |

```html
<!-- Центрирование нескольких строк -->
<div class="flex flex-wrap content-center h-64 border gap-2">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
  <div class="bg-primary-100 p-4">4</div>
</div>
```

## Выравнивание отдельного элемента (align-self)

| Класс            | CSS свойство             |
| ---------------- | ------------------------ |
| `.self-start`    | `align-self: flex-start` |
| `.self-end`      | `align-self: flex-end`   |
| `.self-center`   | `align-self: center`     |
| `.self-baseline` | `align-self: baseline`   |
| `.self-stretch`  | `align-self: stretch`    |

```html
<div class="flex items-center h-32 border gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="self-start bg-primary-100 p-4">2 (по верху)</div>
  <div class="self-end bg-primary-100 p-4">3 (по низу)</div>
  <div class="bg-primary-100 p-4">4</div>
</div>
```

##伸缩 (flex)

| Класс        | CSS свойство     |
| ------------ | ---------------- |
| `.flex-0`    | `flex: 0 0 auto` |
| `.flex-auto` | `flex: 1 1 auto` |
| `.flex-1`    | `flex: 1`        |
| `.flex-none` | `flex: none`     |

```html
<!-- Равномерное распределение -->
<div class="flex gap-4">
  <div class="flex-1 bg-primary-100 p-4">1</div>
  <div class="flex-1 bg-primary-100 p-4">2</div>
  <div class="flex-1 bg-primary-100 p-4">3</div>
</div>

<!-- Элемент фиксированной ширины + растягивающийся -->
<div class="flex gap-4">
  <div class="flex-none w-32 bg-primary-100 p-4">Фиксированный</div>
  <div class="flex-1 bg-primary-100 p-4">Растягивающийся</div>
</div>
```

## Grow (растяжение)

| Класс     | CSS свойство   |
| --------- | -------------- |
| `.grow-0` | `flex-grow: 0` |
| `.grow-1` | `flex-grow: 1` |
| `.grow-2` | `flex-grow: 2` |
| `.grow-3` | `flex-grow: 3` |

```html
<!-- Второй элемент растягивается больше -->
<div class="flex gap-4">
  <div class="grow-1 bg-primary-100 p-4">1</div>
  <div class="grow-2 bg-primary-100 p-4">2 (больше)</div>
  <div class="grow-1 bg-primary-100 p-4">3</div>
</div>
```

## Shrink (сжатие)

| Класс       | CSS свойство     |
| ----------- | ---------------- |
| `.shrink-0` | `flex-shrink: 0` |
| `.shrink-1` | `flex-shrink: 1` |
| `.shrink-2` | `flex-shrink: 2` |

```html
<!-- Первый элемент не сжимается -->
<div class="flex gap-4">
  <div class="shrink-0 w-48 bg-primary-100 p-4">Не сжимается</div>
  <div class="shrink-1 bg-primary-100 p-4">Сжимается</div>
</div>
```

## Порядок (order)

| Класс                      | CSS свойство        |
| -------------------------- | ------------------- |
| `.order-0` ... `.order-10` | `order: 0` ... `10` |
| `.order-last`              | `order: 99999`      |

```html
<!-- Изменение порядка -->
<div class="flex gap-4">
  <div class="order-2 bg-primary-100 p-4">1 (третий)</div>
  <div class="order-1 bg-primary-100 p-4">2 (второй)</div>
  <div class="order-0 bg-primary-100 p-4">3 (первый)</div>
</div>
```

## Примеры использования

### Хедер с навигацией

```html
<header class="flex items-center justify-between px-6 py-4 border-b">
  <a href="/" class="text-xl font-bold">Логотип</a>
  <nav class="flex items-center gap-6">
    <a href="/about" class="hover:text-primary-500">О нас</a>
    <a href="/products" class="hover:text-primary-500">Продукты</a>
    <a href="/contact" class="hover:text-primary-500">Контакты</a>
  </nav>
</header>
```

### Карточка с футером

```html
<div class="border rounded-lg overflow-hidden">
  <img src="image.jpg" alt="Изображение" class="w-full h-48 object-cover" />
  <div class="p-4">
    <h3 class="text-lg font-bold mb-2">Заголовок</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="flex justify-between items-center px-4 py-3 bg-gray-50 border-t">
    <span class="text-primary-500 font-bold">$99.99</span>
    <button
      class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600"
    >
      Купить
    </button>
  </div>
</div>
```

### Форма с лейблами

```html
<form class="flex flex-column gap-4">
  <div class="flex flex-column gap-1">
    <label class="text-sm font-medium">Email</label>
    <input type="email" class="border rounded px-4 py-2" />
  </div>
  <div class="flex flex-column gap-1">
    <label class="text-sm font-medium">Пароль</label>
    <input type="password" class="border rounded px-4 py-2" />
  </div>
  <button type="submit" class="bg-primary-500 text-white px-4 py-2 rounded">
    Войти
  </button>
</form>
```

### Галерея с подписями

```html
<div class="flex flex-wrap gap-4">
  <div class="w-48">
    <img src="photo1.jpg" class="w-full h-32 object-cover rounded" />
    <p class="text-center mt-2 text-sm">Подпись 1</p>
  </div>
  <div class="w-48">
    <img src="photo2.jpg" class="w-full h-32 object-cover rounded" />
    <p class="text-center mt-2 text-sm">Подпись 2</p>
  </div>
  <div class="w-48">
    <img src="photo3.jpg" class="w-full h-32 object-cover rounded" />
    <p class="text-center mt-2 text-sm">Подпись 3</p>
  </div>
</div>
```

## Таблица классов

| Категория         | Классы                                                                                                   |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **Display**       | `flex`, `flex-column`, `flex-row`, `flex-wrap`, `flex-nowrap`                                            |
| **Direction**     | `flex-row`, `flex-row-reverse`, `flex-column`, `flex-column-reverse`                                     |
| **Align Items**   | `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`                            |
| **Justify**       | `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`  |
| **Align Content** | `content-start`, `content-end`, `content-center`, `content-between`, `content-around`, `content-stretch` |
| **Align Self**    | `self-start`, `self-end`, `self-center`, `self-baseline`, `self-stretch`                                 |
| **Flex**          | `flex-0`, `flex-auto`, `flex-1`, `flex-none`                                                             |
| **Grow**          | `grow`, `grow-0`, `grow-1`, `grow-2`, `grow-3`                                                           |
| **Shrink**        | `shrink`, `shrink-0`, `shrink-1`, `shrink-2`, `shrink-3`                                                 |
| **Order**         | `order-0` ... `order-11`, `order-last`                                                                   |

## См. также

- [Gap](./gap.md) — отступы между элементами
- [Grid](../grid/index.md) — сеточная раскладка
- [Отступы](../spacing/index.md) — margin и padding
