---
title: Spacing
description: Справочник по модулю spacing
---

# Отступы (spacing)

Классы для управления внешними (margin) и внутренними (padding) отступами.

## Margin (внешние отступы)

### Все стороны

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.m-0` | 0 | `.m-6` | 24px |
| `.m-px` | 1px | `.m-8` | 32px |
| `.m-1` | 4px | `.m-10` | 40px |
| `.m-2` | 8px | `.m-12` | 48px |
| `.m-3` | 12px | `.m-64` | 256px |
| `.m-4` | 16px | `.m-auto` | auto |
| `.m-5` | 20px | | |

```html
<div class="m-4 bg-primary-100 p-4">
  Отступ 16px со всех сторон
</div>
```

### Горизонтальные (x)

```html
<div class="mx-4">
  margin-left: 16px; margin-right: 16px
</div>

<!-- Центрирование -->
<div class="mx-auto w-64">
  Центрированный элемент
</div>
```

### Вертикальные (y)

```html
<div class="my-4">
  margin-top: 16px; margin-bottom: 16px
</div>
```

### Отдельные стороны

| Класс | Сторона | Класс | Сторона |
|-------|---------|-------|---------|
| `.mt-*` | top | `.ml-*` | left |
| `.mr-*` | right | `.mb-*` | bottom |

```html
<div class="mt-4">margin-top: 16px</div>
<div class="mr-4">margin-right: 16px</div>
<div class="mb-4">margin-bottom: 16px</div>
<div class="ml-4">margin-left: 16px</div>
```

### Отрицательные отступы

```html
<div class="-m-4">margin: -16px</div>
<div class="-mx-4">margin-left: -16px; margin-right: -16px</div>
<div class="-mt-4">margin-top: -16px</div>
<div class="-ml-4">margin-left: -16px</div>
```

## Padding (внутренние отступы)

### Все стороны

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.p-0` | 0 | `.p-6` | 24px |
| `.p-px` | 1px | `.p-8` | 32px |
| `.p-1` | 4px | `.p-10` | 40px |
| `.p-2` | 8px | `.p-12` | 48px |
| `.p-3` | 12px | `.p-64` | 256px |
| `.p-4` | 16px | | |
| `.p-5` | 20px | | |

```html
<div class="p-4 bg-primary-100">
  Внутренние отступы 16px
</div>
```

### Горизонтальные (x)

```html
<div class="px-4">
  padding-left: 16px; padding-right: 16px
</div>
```

### Вертикальные (y)

```html
<div class="py-4">
  padding-top: 16px; padding-bottom: 16px
</div>
```

### Отдельные стороны

| Класс | Сторона | Класс | Сторона |
|-------|---------|-------|---------|
| `.pt-*` | top | `.pl-*` | left |
| `.pr-*` | right | `.pb-*` | bottom |

```html
<div class="pt-4">padding-top: 16px</div>
<div class="pr-4">padding-right: 16px</div>
<div class="pb-4">padding-bottom: 16px</div>
<div class="pl-4">padding-left: 16px</div>
```

## Соответствие значений

| Класс | Пиксели | Класс | Пиксели |
|-------|---------|-------|---------|
| `*-0` | 0 | `*-6` | 24px |
| `*-px` | 1px | `*-8` | 32px |
| `*-0d5` | 2px | `*-10` | 40px |
| `*-1` | 4px | `*-12` | 48px |
| `*-2` | 8px | `*-64` | 256px |
| `*-3` | 12px | `*-auto` | auto |
| `*-4` | 16px | | |
| `*-5` | 20px | | |

## Примеры использования

### Карточка

```html
<div class="bg-white border rounded-lg p-6 m-4">
  <h3 class="text-lg font-bold mb-2">Заголовок</h3>
  <p class="text-gray-600">
    Карточка с внутренними отступами 24px и внешними 16px
  </p>
</div>
```

### Кнопка

```html
<button class="bg-primary-500 text-white px-6 py-3 rounded">
  Кнопка с отступами
</button>
```

### Центрирование контейнера

```html
<div class="max-w-192 mx-auto px-4">
  <h1>Центрированный контент</h1>
</div>
```

### Разделитель секций

```html
<section class="py-12">
  <h2 class="text-2xl font-bold mb-4">Секция 1</h2>
  <p>Контент с вертикальными отступами</p>
</section>

<section class="py-12">
  <h2 class="text-2xl font-bold mb-4">Секция 2</h2>
  <p>Другая секция</p>
</section>
```

### Отрицательный margin для наложения

```html
<div class="flex">
  <div class="bg-primary-100 p-4">Элемент 1</div>
  <div class="bg-primary-200 p-4 -ml-4">
    Наложение на 16px
  </div>
</div>
```

### Форма

```html
<form class="flex flex-col gap-4">
  <div>
    <label class="block text-sm font-medium mb-1">Email</label>
    <input 
      type="email" 
      class="border rounded px-4 py-2 w-full"
    >
  </div>
  
  <div>
    <label class="block text-sm font-medium mb-1">Пароль</label>
    <input 
      type="password" 
      class="border rounded px-4 py-2 w-full"
    >
  </div>
  
  <button 
    type="submit" 
    class="bg-primary-500 text-white px-4 py-2 rounded mt-4"
  >
    Войти
  </button>
</form>
```

### Навигация

```html
<nav class="flex items-center gap-6 px-6 py-4 border-b">
  <a href="/" class="font-bold">Логотип</a>
  <div class="flex gap-4 ml-auto">
    <a href="/about" class="px-2 py-1 hover:bg-gray-100">О нас</a>
    <a href="/products" class="px-2 py-1 hover:bg-gray-100">Продукты</a>
    <a href="/contact" class="px-2 py-1 hover:bg-gray-100">Контакты</a>
  </div>
</nav>
```

### Grid с отступами

```html
<div class="grid grid-columns--3-32 gap-4 p-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>
```

### Хедер с отступами

```html
<header class="py-4 px-6 border-b">
  <div class="max-w-256 mx-auto flex items-center justify-between">
    <a href="/" class="text-xl font-bold">Логотип</a>
    <nav class="flex gap-4">
      <a href="#" class="hover:text-primary-500">Меню</a>
    </nav>
  </div>
</header>
```

### Футер

```html
<footer class="bg-gray-900 text-white py-12 px-4">
  <div class="max-w-192 mx-auto">
    <div class="grid grid-columns--3-32 gap-8 mb-8">
      <div>
        <h3 class="font-bold mb-4">Раздел 1</h3>
        <ul class="flex flex-col gap-2">
          <li><a href="#" class="hover:text-white">Ссылка 1</a></li>
          <li><a href="#" class="hover:text-white">Ссылка 2</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t pt-8">
      <p>&copy; 2024 Компания</p>
    </div>
  </div>
</footer>
```

## Таблица классов

### Margin

| Категория | Классы |
|-----------|--------|
| **Все стороны** | `m-0`, `m-px`, `m-0d5`, `m-1`, `m-2`, `m-3`, `m-4`, `m-5`, `m-6`, `m-8`, `m-10`, `m-12`, `m-64`, `m-auto` |
| **Горизонтальные** | `mx-0`, `mx-px`, `mx-1` ... `mx-64`, `mx-auto` |
| **Вертикальные** | `my-0`, `my-px`, `my-1` ... `my-64`, `my-auto` |
| **Top** | `mt-0`, `mt-px`, `mt-1` ... `mt-64`, `mt-auto` |
| **Right** | `mr-0`, `mr-px`, `mr-1` ... `mr-64`, `mr-auto` |
| **Bottom** | `mb-0`, `mb-px`, `mb-1` ... `mb-64`, `mb-auto` |
| **Left** | `ml-0`, `ml-px`, `ml-1` ... `ml-64`, `ml-auto` |
| **Отрицательные** | `-m-1`, `-m-2`, `-m-4`, `-mx-1`, `-mx-2`, `-mx-4`, `-mt-1`, `-mt-2`, `-mt-4`, `-ml-1`, `-ml-2`, `-ml-4` |

### Padding

| Категория | Классы |
|-----------|--------|
| **Все стороны** | `p-0`, `p-px`, `p-0d5`, `p-1`, `p-2`, `p-3`, `p-4`, `p-5`, `p-6`, `p-8`, `p-10`, `p-12`, `p-64` |
| **Горизонтальные** | `px-0`, `px-px`, `px-1` ... `px-64` |
| **Вертикальные** | `py-0`, `py-px`, `py-1` ... `py-64` |
| **Top** | `pt-0`, `pt-px`, `pt-1` ... `pt-64` |
| **Right** | `pr-0`, `pr-px`, `pr-1` ... `pr-64` |
| **Bottom** | `pb-0`, `pb-px`, `pb-1` ... `pb-64` |
| **Left** | `pl-0`, `pl-px`, `pl-1` ... `pl-64` |

## См. также

- [Размеры](../sizing/index.md) — ширина и высота
- [Flexbox](../flexbox/index.md) — gap для отступов между элементами
- [Grid](../grid/index.md) — gap для отступов в сетке
