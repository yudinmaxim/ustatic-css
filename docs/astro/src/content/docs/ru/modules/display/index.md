---
title: Display
description: Справочник по модулю display
---

# Тип отображения (display)

Классы для управления свойством `display` и переполнением `overflow`.

## Display классы

### Основные классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.inline` | `display: inline` | Строчный элемент |
| `.block` | `display: block` | Блочный элемент |
| `.inline-block` | `display: inline-block` | Строчно-блочный элемент |
| `.table` | `display: table` | Таблица |
| `.table-cell` | `display: table-cell` | Ячейка таблицы |

### Примеры

```html
<!-- Строчный элемент -->
<span class="inline bg-primary-500 px-2 py-1">Inline</span>
<span class="inline bg-primary-500 px-2 py-1">Inline</span>

<!-- Блочный элемент -->
<div class="block bg-primary-500 p-2 mb-2">Block</div>
<div class="block bg-primary-500 p-2">Block</div>

<!-- Строчно-блочный -->
<button class="inline-block bg-primary-500 text-white px-4 py-2">
  Кнопка
</button>
```

## Overflow классы

### Управление переполнением

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.overflow-hidden` | `overflow: hidden` | Скрыть всё переполнение |
| `.overflow-scroll` | `overflow: scroll` | Всегда показывать скролл |
| `.overflow-auto` | `overflow: auto` | Автоматически при необходимости |
| `.overflow-x-hidden` | `overflow-x: hidden` | Скрыть горизонтальное |
| `.overflow-y-hidden` | `overflow-y: hidden` | Скрыть вертикальное |
| `.overflow-x-scroll` | `overflow-x: scroll` | Горизонтальный скролл |
| `.overflow-y-scroll` | `overflow-y: scroll` | Вертикальный скролл |
| `.overflow-x-auto` | `overflow-x: auto` | Авто горизонтальный |
| `.overflow-y-auto` | `overflow-y: auto` | Авто вертикальный |

### Примеры

```html
<!-- Скрытие переполнения -->
<div class="overflow-hidden w-64 border">
  <p>Длинный текст, который не помещается в контейнер...</p>
</div>

<!-- Вертикальный скролл -->
<div class="overflow-y-auto h-48 border">
  <p>Много контента...</p>
  <p>Ещё контент...</p>
  <p>И ещё...</p>
</div>

<!-- Горизонтальный скролл -->
<div class="overflow-x-auto border">
  <div class="flex gap-4 min-w-max p-4">
    <div class="w-32 h-32 bg-primary-100">1</div>
    <div class="w-32 h-32 bg-primary-100">2</div>
    <div class="w-32 h-32 bg-primary-100">3</div>
    <div class="w-32 h-32 bg-primary-100">4</div>
  </div>
</div>
```

## Примеры использования

### Модальное окно

```html
<!-- Затемнение фона -->
<div class="fixed inset-0 z-i-modal overflow-hidden bg-black bg-opacity-50 flex items-center justify-center">
  <!-- Модальное окно -->
  <div class="bg-white rounded-lg p-6 max-w-lg mx-4 max-h-[80vh] overflow-y-auto">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">
      Длинный контент модального окна, который может прокручиваться...
    </p>
    <button class="bg-primary-500 text-white px-4 py-2 rounded">
      Закрыть
    </button>
  </div>
</div>
```

### Текст с обрезкой и многоточием

```html
<!-- Обрезка с многоточием -->
<div class="w-64 overflow-hidden whitespace-nowrap text-ellipsis border">
  Очень длинный текст, который будет обрезан и заменён многоточием...
</div>

<!-- Многострочная обрезка -->
<div class="w-64 overflow-hidden line-clamp-3 border">
  Текст, который будет обрезан после трёх строк с многоточием в конце...
</div>
```

### Табличная вёрстка

```html
<!-- Таблица -->
<div class="table w-full border">
  <div class="table-row bg-gray-50">
    <div class="table-cell border p-2 font-bold">Заголовок 1</div>
    <div class="table-cell border p-2 font-bold">Заголовок 2</div>
    <div class="table-cell border p-2 font-bold">Заголовок 3</div>
  </div>
  <div class="table-row">
    <div class="table-cell border p-2">Ячейка 1</div>
    <div class="table-cell border p-2">Ячейка 2</div>
    <div class="table-cell border p-2">Ячейка 3</div>
  </div>
</div>
```

### Карусель/слайдер

```html
<!-- Горизонтальная прокрутка -->
<div class="overflow-x-auto whitespace-nowrap pb-4">
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
</div>
```

### Сайдбар с прокруткой

```html
<div class="flex h-screen">
  <!-- Сайдбар -->
  <aside class="w-64 bg-white border-r overflow-y-auto">
    <nav class="p-4">
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
      <!-- Много пунктов -->
    </nav>
  </aside>
  
  <!-- Основной контент -->
  <main class="flex-1 overflow-y-auto p-8">
    <h1 class="text-2xl font-bold mb-4">Заголовок</h1>
    <p>Основной контент страницы...</p>
  </main>
</div>
```

### Выпадающее меню

```html
<div class="relative inline-block">
  <!-- Кнопка -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Меню
  </button>
  
  <!-- Выпадающий список -->
  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg overflow-hidden z-i-menu">
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 2</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 3</a>
  </div>
</div>
```

## Таблица классов

### Display

| Класс | CSS |
|-------|-----|
| `.inline` | `display: inline` |
| `.block` | `display: block` |
| `.inline-block` | `display: inline-block` |
| `.table` | `display: table` |
| `.table-cell` | `display: table-cell` |

### Overflow

| Класс | CSS |
|-------|-----|
| `.overflow-hidden` | `overflow: hidden` |
| `.overflow-scroll` | `overflow: scroll` |
| `.overflow-auto` | `overflow: auto` |
| `.overflow-x-hidden` | `overflow-x: hidden` |
| `.overflow-y-hidden` | `overflow-y: hidden` |
| `.overflow-x-scroll` | `overflow-x: scroll` |
| `.overflow-y-scroll` | `overflow-y: scroll` |
| `.overflow-x-auto` | `overflow-x: auto` |
| `.overflow-y-auto` | `overflow-y: auto` |

## См. также

- [Скролл](../scroll/index.md) — для стилизации скроллбара
- [Скрытие](../hide/index.md) — для скрытия элементов на брейкпоинтах
- [Позиционирование](../position/index.md) — для позиционирования элементов
