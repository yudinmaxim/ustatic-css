---
title: Filters
description: Справочник по модулю filters
---

# Фильтры (filters)

CSS классы для применения фильтров к изображениям и элементам.

## Оттенки серого (grayscale)

### Преобразование в чёрно-белое

```html
<!-- Полностью чёрно-белый -->
<img class="grayscale" src="photo.jpg" alt="Ч/Б фото">

<!-- Частичный эффект -->
<img class="grayscale-50" src="photo.jpg" alt="50% ч/б">

<!-- Цветной (сброс фильтра) -->
<img class="grayscale-0" src="photo.jpg" alt="Цветное">
```

### Интерактивный эффект

```html
<!-- Ч/Б при наведении становится цветным -->
<img 
  class="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer" 
  src="photo.jpg" 
  alt="Наведи для цвета"
>

<!-- Цветной при наведении становится Ч/Б -->
<img 
  class="grayscale-0 hover:grayscale transition-all duration-300 cursor-pointer" 
  src="photo.jpg" 
  alt="Наведи для ч/б"
>
```

## Сброс фильтров

```html
<!-- Без фильтра -->
<div class="no-filter">Оригинальный вид</div>

<!-- Сброс фильтра при наведении -->
<div class="grayscale hover:no-filter transition-all">
  При наведении сбрасывается фильтр
</div>
```

## Примеры использования

### Галерея с эффектом при наведении

```html
<div class="grid grid-cols-4 gap-4">
  <div class="overflow-hidden rounded-lg">
    <img 
      class="grayscale hover:grayscale-0 transition-all duration-300 w-full h-48 object-cover" 
      src="photo1.jpg" 
      alt="Фото 1"
    >
  </div>
  <div class="overflow-hidden rounded-lg">
    <img 
      class="grayscale hover:grayscale-0 transition-all duration-300 w-full h-48 object-cover" 
      src="photo2.jpg" 
      alt="Фото 2"
    >
  </div>
  <div class="overflow-hidden rounded-lg">
    <img 
      class="grayscale hover:grayscale-0 transition-all duration-300 w-full h-48 object-cover" 
      src="photo3.jpg" 
      alt="Фото 3"
    >
  </div>
  <div class="overflow-hidden rounded-lg">
    <img 
      class="grayscale hover:grayscale-0 transition-all duration-300 w-full h-48 object-cover" 
      src="photo4.jpg" 
      alt="Фото 4"
    >
  </div>
</div>
```

### Карточка товара с изображением

```html
<div class="border rounded-lg overflow-hidden">
  <div class="relative">
    <img 
      class="grayscale-0 hover:grayscale transition-all duration-300 w-full h-64 object-cover" 
      src="product.jpg" 
      alt="Товар"
    >
    <div class="absolute top-2 right-2 bg-danger text-white px-2 py-1 rounded text-sm">
      -20%
    </div>
  </div>
  <div class="p-4">
    <h3 class="font-bold text-lg mb-2">Название товара</h3>
    <p class="text-gray-600 mb-4">Описание товара</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary-500">$99.99</span>
      <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
        Купить
      </button>
    </div>
  </div>
</div>
```

### Портфолио с фильтрами

```html
<div class="grid grid-cols-3 gap-6">
  <!-- Проект 1 -->
  <div class="group relative overflow-hidden rounded-lg cursor-pointer">
    <img 
      class="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-64 object-cover" 
      src="project1.jpg" 
      alt="Проект 1"
    >
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100 font-bold">
        Смотреть проект
      </span>
    </div>
  </div>
  
  <!-- Проект 2 -->
  <div class="group relative overflow-hidden rounded-lg cursor-pointer">
    <img 
      class="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-64 object-cover" 
      src="project2.jpg" 
      alt="Проект 2"
    >
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100 font-bold">
        Смотреть проект
      </span>
    </div>
  </div>
  
  <!-- Проект 3 -->
  <div class="group relative overflow-hidden rounded-lg cursor-pointer">
    <img 
      class="grayscale group-hover:grayscale-0 transition-all duration-500 w-full h-64 object-cover" 
      src="project3.jpg" 
      alt="Проект 3"
    >
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100 font-bold">
        Смотреть проект
      </span>
    </div>
  </div>
</div>
```

### Сравнение до/после

```html
<div class="flex gap-8 items-center">
  <!-- До -->
  <div>
    <p class="text-center mb-2 font-medium">До</p>
    <img 
      class="grayscale border rounded-lg w-64 h-48 object-cover" 
      src="before.jpg" 
      alt="До обработки"
    >
  </div>
  
  <!-- Стрелка -->
  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
  
  <!-- После -->
  <div>
    <p class="text-center mb-2 font-medium">После</p>
    <img 
      class="grayscale-0 border rounded-lg w-64 h-48 object-cover" 
      src="after.jpg" 
      alt="После обработки"
    >
  </div>
</div>
```

### Аватары пользователей

```html
<div class="flex gap-4">
  <!-- Активный пользователь -->
  <img 
    class="grayscale-0 w-12 h-12 rounded-full object-cover border-2 border-success" 
    src="user1.jpg" 
    alt="Активный"
  >
  
  <!-- Неактивные пользователи -->
  <img 
    class="grayscale w-12 h-12 rounded-full object-cover opacity-50" 
    src="user2.jpg" 
    alt="Неактивный"
  >
  <img 
    class="grayscale w-12 h-12 rounded-full object-cover opacity-50" 
    src="user3.jpg" 
    alt="Неактивный"
  >
</div>
```

## CSS свойства

```scss
// Чёрно-белый фильтр
.grayscale {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
}

// Частичный фильтр
.grayscale-50 {
  filter: grayscale(50%);
  -webkit-filter: grayscale(50%);
}

// Без фильтра
.grayscale-0, .no-filter {
  filter: none;
  -webkit-filter: none;
}

// Плавный переход
.transition-all {
  transition: all 0.3s ease;
}
```

## Таблица классов

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.grayscale` | `filter: grayscale(100%)` | Полное Ч/Б преобразование |
| `.grayscale-50` | `filter: grayscale(50%)` | 50% Ч/Б преобразование |
| `.grayscale-0` | `filter: none` | Без фильтра |
| `.no-filter` | `filter: none` | Сброс фильтров |
| `.hover:grayscale` | При наведении | Ч/Б при наведении |
| `.hover:grayscale-0` | При наведении | Цветное при наведении |

## Поддержка браузеров

| Браузер | Поддержка |
|---------|-----------|
| Chrome | ✅ Полная |
| Firefox | ✅ Полная |
| Safari | ✅ Полная |
| Edge | ✅ Полная |
| IE 11 | ⚠️ Частичная |

## См. также

- [Эффекты](../effects/index.md) — для прозрачности и трансформаций
- [Анимации](../animations/index.md) — для анимации фильтров
- [Фон](../bg/index.md) — для фоновых эффектов
