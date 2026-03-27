---
title: Sizing
description: Справочник по модулю sizing
---

# Размеры (sizing)

Классы для управления шириной и высотой элементов.

## Ширина (width)

### Фиксированные значения

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.w-1` | 4px | `.w-32` | 128px |
| `.w-2` | 8px | `.w-40` | 160px |
| `.w-4` | 16px | `.w-48` | 192px |
| `.w-8` | 32px | `.w-56` | 224px |
| `.w-16` | 64px | `.w-64` | 256px |

```html
<div class="flex gap-4 items-end">
  <div class="w-8 h-8 bg-primary-500">w-8</div>
  <div class="w-16 h-16 bg-primary-500">w-16</div>
  <div class="w-24 h-24 bg-primary-500">w-24</div>
  <div class="w-32 h-32 bg-primary-500">w-32</div>
</div>
```

### Проценты

| Класс | Значение |
|-------|----------|
| `.w-1/4` | 25% |
| `.w-1/3` | 33.333% |
| `.w-1/2` | 50% |
| `.w-2/3` | 66.666% |
| `.w-3/4` | 75% |
| `.w-4/5` | 80% |
| `.w-full` | 100% |

```html
<div class="border">
  <div class="w-1/4 bg-primary-100 p-2">25%</div>
  <div class="w-1/2 bg-primary-200 p-2">50%</div>
  <div class="w-3/4 bg-primary-300 p-2">75%</div>
  <div class="w-full bg-primary-400 p-2">100%</div>
</div>
```

### Специальные значения

| Класс | Значение |
|-------|----------|
| `.w-auto` | auto |
| `.w-px` | 1px |
| `.w-0d5` | 2px |
| `.w-none` | none |
| `.w-fit` | fit-content |
| `.w-screen` | 100vw |

```html
<div>
  <div class="w-auto bg-primary-100 p-2 inline-block">
    По контенту
  </div>
  <div class="w-screen bg-primary-200 p-2">
    100% ширины экрана
  </div>
</div>
```

## Высота (height)

### Фиксированные значения

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.h-1` | 4px | `.h-32` | 128px |
| `.h-2` | 8px | `.h-40` | 160px |
| `.h-4` | 16px | `.h-48` | 192px |
| `.h-8` | 32px | `.h-56` | 224px |
| `.h-16` | 64px | `.h-64` | 256px |

```html
<div class="flex gap-4">
  <div class="w-16 h-8 bg-primary-500">h-8</div>
  <div class="w-16 h-16 bg-primary-500">h-16</div>
  <div class="w-16 h-24 bg-primary-500">h-24</div>
  <div class="w-16 h-32 bg-primary-500">h-32</div>
</div>
```

### Проценты

| Класс | Значение |
|-------|----------|
| `.h-1/4` | 25% |
| `.h-1/2` | 50% |
| `.h-2/3` | 66.666% |
| `.h-3/4` | 75% |
| `.h-full` | 100% |

```html
<div class="h-64 border relative">
  <div class="absolute h-1/4 w-full bg-primary-100 bottom-0">25%</div>
  <div class="absolute h-1/2 w-full bg-primary-200 bottom-0">50%</div>
</div>
```

### Специальные значения

| Класс | Значение |
|-------|----------|
| `.h-auto` | auto |
| `.h-px` | 1px |
| `.h-screen` | 100vh |

```html
<div class="h-screen bg-primary-50">
  <h1>Полноэкранная секция</h1>
</div>
```

## Min/Max размеры

### Min-width

```html
<div class="flex gap-4">
  <div class="min-w-64 bg-primary-100 p-4">
    Минимальная ширина 256px
  </div>
  <div class="min-w-screen bg-primary-100 p-4">
    Мин. ширина экрана
  </div>
</div>
```

### Min-height

```html
<div class="min-h-screen bg-primary-50">
  <h1>Минимальная высота экрана</h1>
  <p>Контент может быть больше</p>
</div>
```

### Max-width

| Класс | Значение |
|-------|----------|
| `.max-w-0` | 0 |
| `.max-w-xs` | 320px |
| `.max-w-sm` | 640px |
| `.max-w-md` | 768px |
| `.max-w-lg` | 1024px |
| `.max-w-xl` | 1280px |
| `.max-w-2xl` | 1536px |
| `.max-w-full` | 100% |

```html
<div class="max-w-md mx-auto bg-white p-6">
  <h2 class="text-xl font-bold">Ограниченная ширина</h2>
  <p>Максимальная ширина 768px</p>
</div>
```

### Max-height

```html
<div class="max-h-64 overflow-y-auto border">
  <p>Контент с ограниченной высотой</p>
  <p>При превышении появится скролл</p>
</div>
```

## Квадратные размеры (size)

Установка одинаковой ширины и высоты:

| Класс | Размер |
|-------|--------|
| `.size-4` | 4x4px |
| `.size-8` | 8x8px |
| `.size-16` | 16x16px |
| `.size-32` | 32x32px |
| `.size-64` | 64x64px |
| `.size-full` | 100%x100% |
| `.size-screen` | 100vw x 100vh |

```html
<div class="flex gap-4">
  <div class="size-8 bg-primary-500 rounded"></div>
  <div class="size-16 bg-primary-500 rounded"></div>
  <div class="size-32 bg-primary-500 rounded"></div>
</div>
```

## Примеры использования

### Контейнер ограниченной ширины

```html
<div class="max-w-4xl mx-auto px-4">
  <h1 class="text-3xl font-bold mb-4">Заголовок</h1>
  <p class="text-gray-600">
    Контент ограниченной ширины для удобного чтения
  </p>
</div>
```

### Полноэкранная секция

```html
<section class="h-screen flex items-center justify-center bg-primary-500">
  <div class="text-center text-white">
    <h1 class="text-4xl font-bold mb-4">Добро пожаловать</h1>
    <p>Полноэкранный баннер</p>
  </div>
</section>
```

### Аватар

```html
<!-- Круглый аватар -->
<img 
  src="avatar.jpg" 
  alt="Аватар" 
  class="size-16 rounded-full object-cover"
>

<!-- Большой аватар -->
<img 
  src="avatar.jpg" 
  alt="Аватар" 
  class="size-32 rounded-full object-cover"
>
```

### Изображение на всю ширину

```html
<img 
  src="hero.jpg" 
  alt="Hero" 
  class="w-full h-96 object-cover"
>
```

### Карточка с фиксированной высотой

```html
<div class="w-64 h-96 border rounded-lg p-4">
  <img src="product.jpg" class="w-full h-48 object-cover rounded mb-4">
  <h3 class="font-bold">Товар</h3>
  <p class="text-primary-500">$99</p>
</div>
```

### Минимальная высота для футера

```html
<footer class="min-h-32 bg-gray-900 text-white p-8">
  <div class="max-w-4xl mx-auto">
    <p>&copy; 2024 Компания</p>
  </div>
</footer>
```

### Галерея с одинаковыми размерами

```html
<div class="grid grid-cols-3 gap-4">
  <img src="photo1.jpg" class="w-full h-48 object-cover rounded">
  <img src="photo2.jpg" class="w-full h-48 object-cover rounded">
  <img src="photo3.jpg" class="w-full h-48 object-cover rounded">
</div>
```

### Прогресс-бар

```html
<div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
  <div class="h-full bg-primary-500 w-3/4"></div>
</div>
```

## Таблица классов

### Ширина

| Категория | Классы |
|-----------|--------|
| **Фиксированные** | `w-1`, `w-2`, `w-4`, `w-8`, `w-16`, `w-24`, `w-32`, `w-40`, `w-48`, `w-56`, `w-64` ... `w-256` |
| **Проценты** | `w-1/4`, `w-1/3`, `w-1/2`, `w-2/3`, `w-3/4`, `w-4/5`, `w-full` |
| **Спец.** | `w-auto`, `w-px`, `w-0d5`, `w-none`, `w-fit`, `w-screen` |

### Высота

| Категория | Классы |
|-----------|--------|
| **Фиксированные** | `h-1`, `h-2`, `h-4`, `h-8`, `h-16`, `h-24`, `h-32`, `h-40`, `h-48`, `h-56`, `h-64` ... `h-256` |
| **Проценты** | `h-1/4`, `h-1/2`, `h-2/3`, `h-3/4`, `h-full` |
| **Спец.** | `h-auto`, `h-px`, `h-screen` |

### Min/Max

| Категория | Классы |
|-----------|--------|
| **Min-width** | `min-w-0`, `min-w-1` ... `min-w-256`, `min-w-screen` |
| **Min-height** | `min-h-0`, `min-h-1` ... `min-h-256`, `min-h-screen` |
| **Max-width** | `max-w-0`, `max-w-xs`, `max-w-sm`, `max-w-md`, `max-w-lg`, `max-w-xl`, `max-w-2xl`, `max-w-full` |
| **Max-height** | `max-h-0`, `max-h-1` ... `max-h-256`, `max-h-screen` |

### Квадратные

| Классы |
|--------|
| `size-1`, `size-2`, `size-4`, `size-8`, `size-16`, `size-24`, `size-32`, `size-40`, `size-48`, `size-56`, `size-64`, `size-full`, `size-screen` |

## См. также

- [Отступы](../spacing/index.md) — margin и padding
- [Flexbox](../flexbox/index.md) — для гибких макетов
- [Grid](../grid/index.md) — для сеточных макетов
