---
title: Divider
description: Границы-разделители
---

# Разделители (divider)

Горизонтальные и вертикальные линии-разделители для визуального разделения контента.

## Горизонтальные разделители

### Базовое использование

```html
<section class="p-4">
  <h2>Секция 1</h2>
  <p>Содержимое первой секции</p>
</section>

<hr class="divider-x">

<section class="p-4">
  <h2>Секция 2</h2>
  <p>Содержимое второй секции</p>
</section>
```

### Размеры отступов

```html
<div>
  <div class="p-4 bg-gray-50">Контент</div>
  
  <hr class="divider-x--small">
  
  <div class="p-4 bg-gray-50">
    Маленький отступ (10px)
  </div>
  
  <hr class="divider-x--medium">
  
  <div class="p-4 bg-gray-50">
    Средний отступ (20px)
  </div>
  
  <hr class="divider-x--large">
  
  <div class="p-4 bg-gray-50">
    Большой отступ (30px)
  </div>
</div>
```

## Вертикальные разделители

### Базовое использование

```html
<div class="flex h-32">
  <div class="w-32 p-4 bg-gray-50">Меню 1</div>
  <div class="divider-y"></div>
  <div class="w-32 p-4 bg-gray-50">Меню 2</div>
  <div class="divider-y"></div>
  <div class="w-32 p-4 bg-gray-50">Меню 3</div>
</div>
```

### Размеры отступов

```html
<div class="flex h-48">
  <div class="w-24 p-2">
    <hr class="divider-y--small">
    <p class="text-xs mt-2">Маленький (10px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y--medium">
    <p class="text-xs mt-2">Средний (20px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y--large">
    <p class="text-xs mt-2">Большой (30px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y">
    <p class="text-xs mt-2">По умолчанию (20px)</p>
  </div>
</div>
```

## Примеры использования

### Навигационное меню

```html
<nav class="flex items-center bg-white border-b border-gray-200 px-6 py-4">
  <a href="/" class="text-gray-700 hover:text-primary-500 px-4">
    Главная
  </a>
  <div class="divider-y--small"></div>
  <a href="/about" class="text-gray-700 hover:text-primary-500 px-4">
    О нас
  </a>
  <div class="divider-y--small"></div>
  <a href="/products" class="text-gray-700 hover:text-primary-500 px-4">
    Продукты
  </a>
  <div class="divider-y--small"></div>
  <a href="/contact" class="text-gray-700 hover:text-primary-500 px-4">
    Контакты
  </a>
</nav>
```

### Разделитель секций статьи

```html
<article class="max-w-192 mx-auto">
  <h1 class="text-2xl font-bold mb-4">Заголовок статьи</h1>
  <p class="text-gray-600 mb-8">Введение...</p>
  
  <hr class="divider-x--medium">
  
  <h2 class="text-2xl font-bold mt-8 mb-4">Основная часть</h2>
  <p>Содержимое...</p>
  
  <hr class="divider-x--large my-12">
  
  <h2 class="text-2xl font-bold mt-8 mb-4">Заключение</h2>
  <p>Выводы...</p>
</article>
```

### Карточки с разделителями

```html
<div class="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Функция 1</h3>
    <p class="text-gray-600 text-sm">Описание функции</p>
  </div>
  <div class="divider-y"></div>
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Функция 2</h3>
    <p class="text-gray-600 text-sm">Описание функции</p>
  </div>
  <div class="divider-y"></div>
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Функция 3</h3>
    <p class="text-gray-600 text-sm">Описание функции</p>
  </div>
</div>
```

### Боковая панель с разделителями

```html
<aside class="w-64 bg-white border-r border-gray-200">
  <div class="p-4">
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
    <hr class="divider-x--small">
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
    <hr class="divider-x--small">
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
  </div>
</aside>
```

### Список с разделителями

```html
<ul>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Элемент 1</span>
      <span class="text-gray-500">$100</span>
    </div>
  </li>
  <li>
    <hr class="divider-x">
  </li>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Элемент 2</span>
      <span class="text-gray-500">$200</span>
    </div>
  </li>
  <li>
    <hr class="divider-x">
  </li>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Элемент 3</span>
      <span class="text-gray-500">$300</span>
    </div>
  </li>
</ul>
```

## Таблица классов

| Класс | Тип | Отступы | Описание |
|-------|-----|---------|----------|
| `.divider-x` | Горизонтальный | 20px сверху/снизу | Базовый |
| `.divider-x--small` | Горизонтальный | 10px сверху/снизу | Маленький |
| `.divider-x--medium` | Горизонтальный | 20px сверху/снизу | Средний |
| `.divider-x--large` | Горизонтальный | 30px сверху/снизу | Большой |
| `.divider-y` | Вертикальный | 20px слева/справа | Базовый |
| `.divider-y--small` | Вертикальный | 10px слева/справа | Маленький |
| `.divider-y--medium` | Вертикальный | 20px слева/справа | Средний |
| `.divider-y--large` | Вертикальный | 30px слева/справа | Большой |

## CSS свойства

```scss
// Горизонтальный разделитель
.divider-x {
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 20px 0;
}

// Вертикальный разделитель
.divider-y {
  width: 1px;
  height: 100%;
  background-color: #000;
  margin: 0 20px;
}
```

## См. также

- [Границы](./index.md) — для создания границ элементов
- [Отступы](../spacing/index.md) — для управления отступами
