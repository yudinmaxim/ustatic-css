---
title: Interactivity
description: Справочник по модулю interactivity
---

# Интерактивность (interactivity)

Классы для управления интерактивным поведением элементов: pointer-events и select.

## Pointer events

Управление событиями мыши и касания.

### Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.pointer-events-none` | `pointer-events: none` | Отключить события мыши |
| `.pointer-events-auto` | `pointer-events: auto` | Включить события мыши |

### Примеры

```html
<!-- Отключить клики на элементе -->
<div class="pointer-events-none opacity-50">
  <button disabled>Недоступно</button>
  <p>Текст, который нельзя выделить</p>
</div>

<!-- Overlay, пропускающий клики -->
<div class="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 pointer-events-none">
  <div class="pointer-events-auto bg-white p-6 rounded-lg">
    <!-- Этот блок получает клики -->
    <h2 class="text-xl font-bold">Модальное окно</h2>
    <p>Кликайте здесь</p>
  </div>
</div>
```

## User select

Управление выделением текста.

### Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.select-none` | `select: none` | Запретить выделение |
| `.select-auto` | `select: auto` | Разрешить выделение (по умолчанию) |
| `.select-all` | `select: all` | Выделить всё при клике |
| `.select-text` | `select: text` | Разрешить выделение текста |

### Примеры

```html
<!-- Защита от копирования -->
<article class="select-none">
  <h1>Защищённый контент</h1>
  <p>Этот текст нельзя выделить и скопировать</p>
</article>

<!-- Кнопка "Выделить всё" -->
<textarea class="select-all border rounded p-2 w-full">
Текст для копирования. Кликните для выделения всего содержимого.
</textarea>

<!-- Элемент интерфейса без выделения -->
<button class="select-none bg-primary-500 text-white px-4 py-2 rounded">
  Кнопка без выделения
</button>
```

## Примеры использования

### Модальное окно с затемнением

```html
<!-- Затемнение фона (пропускает клики) -->
<div class="fixed top-0 right-0 bottom-0 left-0 z-i-modal bg-black bg-opacity-50 pointer-events-none flex items-center justify-center">
  <!-- Модальное окно (получает клики) -->
  <div class="pointer-events-auto bg-white rounded-lg p-6 max-w-96 mx-4">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">Содержимое модального окна</p>
    <button class="bg-primary-500 text-white px-4 py-2 rounded">
      Закрыть
    </button>
  </div>
</div>
```

### Выпадающее меню

```html
<div class="relative">
  <!-- Кнопка меню -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Меню
  </button>
  
  <!-- Выпадающий список -->
  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg pointer-events-auto z-i-menu">
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 2</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 3</a>
  </div>
</div>
```

### Защита контента

```html
<div class="border rounded-lg p-6">
  <h1 class="text-2xl font-bold select-none">Заголовок</h1>
  
  <!-- Защищённый текст -->
  <div class="select-none mt-4 p-4 bg-gray-50 rounded">
    <p>Этот контент защищён от копирования</p>
    <p class="text-sm text-gray-500 mt-2">
      Выделение текста отключено для защиты авторских прав
    </p>
  </div>
  
  <!-- Разрешённый текст -->
  <div class="select-auto mt-4 p-4 bg-blue-50 rounded">
    <p>Этот текст можно выделять и копировать</p>
    <code class="select-all bg-white px-2 py-1 rounded mt-2 block">
      npm install ustatic-css
    </code>
  </div>
</div>
```

### Интерактивная карта

```html
<div class="relative w-full h-96 border rounded-lg overflow-hidden">
  <!-- Карта (пропускает клики) -->
  <div class="absolute top-0 right-0 bottom-0 left-0 bg-gray-200 pointer-events-none">
    <img src="map.jpg" alt="Карта" class="w-full h-full">
  </div>
  
  <!-- Маркеры (получают клики) -->
  <div class="absolute top-1/4 left-1/4 pointer-events-auto">
    <div class="bg-primary-500 text-white px-2 py-1 rounded text-sm">
      Точка 1
    </div>
  </div>
  
  <div class="absolute bottom-1/4 right-1/4 pointer-events-auto">
    <div class="bg-primary-500 text-white px-2 py-1 rounded text-sm">
      Точка 2
    </div>
  </div>
  
  <!-- Элементы управления (получают клики) -->
  <div class="absolute top-4 right-4 flex flex-col gap-2 pointer-events-auto">
    <button class="bg-white border rounded p-2 hover:bg-gray-50">+</button>
    <button class="bg-white border rounded p-2 hover:bg-gray-50">-</button>
  </div>
</div>
```

### Drag-and-drop зона

```html
<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center pointer-events-none">
  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" 
       viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
  </svg>
  <p class="text-gray-600 pointer-events-auto">
    Перетащите файлы сюда или 
    <span class="text-primary-500 underline cursor-pointer">выберите файлы</span>
  </p>
  <p class="text-sm text-gray-400 mt-2">PNG, JPG, GIF до 10MB</p>
</div>
```

### Копирование кода

```html
<div class="relative">
  <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
    <code class="select-all">npm install ustatic-css</code>
  </pre>
  
  <!-- Кнопка копирования -->
  <button 
    class="absolute top-2 right-2 bg-white bg-opacity-25 hover:bg-opacity-25 text-white px-2 py-1 rounded text-sm opacity-0 hover:opacity-100 pointer-events-auto"
  >
    Копировать
  </button>
</div>
```

### Тултип с подсказкой

```html
<div class="relative inline-block">
  <!-- Элемент с подсказкой -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded select-none">
    Наведи на меня
  </button>
  
  <!-- Тултип -->
  <div class="absolute bottom-full left-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded nowrap opacity-0 hover:opacity-100 pointer-events-none">
    Это подсказка
    <div class="absolute top-full left-1/2 border-4 border-transparent border-t-gray-900"></div>
  </div>
</div>
```

## Таблица классов

### Pointer events

| Класс | CSS | Когда использовать |
|-------|-----|-------------------|
| `.pointer-events-none` | `pointer-events: none` | Overlay, фоны, декоративные элементы |
| `.pointer-events-auto` | `pointer-events: auto` | Элементы внутри pointer-events-none контейнера |

### User select

| Класс | CSS | Когда использовать |
|-------|-----|-------------------|
| `.select-none` | `select: none` | Кнопки, элементы интерфейса, защита контента |
| `.select-auto` | `select: auto` | Сброс к поведению по умолчанию |
| `.select-all` | `select: all` | Код, команды для копирования |
| `.select-text` | `select: text` | Явное разрешение выделения текста |

## См. также

- [Курсор](../cursor/index.md) — управление видом курсора
- [Эффекты](../effects/index.md) — прозрачность и трансформации
- [Контур](../outline/index.md) — обводка элементов
