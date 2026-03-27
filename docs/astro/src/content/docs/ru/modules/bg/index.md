---
title: Bg
description: Справочник по модулю bg
---

# Фон (bg)

Модуль предоставляет классы для управления фоном элементов: цвета, прозрачность, размытие.

## Цвета фона

### Основные цвета (Primary)

```html
<div class="flex gap-2">
  <div class="bg-primary-50 p-4">50</div>
  <div class="bg-primary-100 p-4">100</div>
  <div class="bg-primary-200 p-4">200</div>
  <div class="bg-primary-300 p-4">300</div>
  <div class="bg-primary-400 p-4">400</div>
  <div class="bg-primary-500 p-4 text-white">500</div>
  <div class="bg-primary-600 p-4 text-white">600</div>
  <div class="bg-primary-700 p-4 text-white">700</div>
  <div class="bg-primary-800 p-4 text-white">800</div>
  <div class="bg-primary-900 p-4 text-white">900</div>
</div>
```

### Семантические цвета

```html
<div class="flex gap-4">
  <div class="bg-success text-white p-4">Успех</div>
  <div class="bg-danger text-white p-4">Опасность</div>
  <div class="bg-warning text-white p-4">Предупреждение</div>
  <div class="bg-info text-white p-4">Информация</div>
</div>
```

### Нейтральные цвета (Gray)

```html
<div class="flex gap-2">
  <div class="bg-gray-50 p-4 border">50</div>
  <div class="bg-gray-100 p-4 border">100</div>
  <div class="bg-gray-200 p-4 border">200</div>
  <div class="bg-gray-300 p-4 border">300</div>
  <div class="bg-gray-400 p-4 text-white">400</div>
  <div class="bg-gray-500 p-4 text-white">500</div>
  <div class="bg-gray-600 p-4 text-white">600</div>
  <div class="bg-gray-700 p-4 text-white">700</div>
  <div class="bg-gray-800 p-4 text-white">800</div>
  <div class="bg-gray-900 p-4 text-white">900</div>
</div>
```

### Дополнительные цвета

```html
<div class="flex gap-4 flex-wrap">
  <div class="bg-red-500 text-white p-4">Red</div>
  <div class="bg-orange-500 text-white p-4">Orange</div>
  <div class="bg-yellow-500 p-4">Yellow</div>
  <div class="bg-green-500 text-white p-4">Green</div>
  <div class="bg-sky-500 text-white p-4">Sky</div>
  <div class="bg-blue-500 text-white p-4">Blue</div>
</div>
```

### Специальные значения

```html
<div class="flex gap-4">
  <div class="bg-white p-4 border">Белый</div>
  <div class="bg-black text-white p-4">Чёрный</div>
  <div class="bg-transparent p-4 border">Прозрачный</div>
  <div class="bg-none p-4 border">Нет фона</div>
</div>
```

## Прозрачность фона

Классы для управления прозрачностью фона:

```html
<div class="flex gap-4 items-end">
  <div class="bg-primary-500 bg-opacity-0 p-4 border">0%</div>
  <div class="bg-primary-500 bg-opacity-25 p-4">25%</div>
  <div class="bg-primary-500 bg-opacity-50 p-4">50%</div>
  <div class="bg-primary-500 bg-opacity-75 p-4">75%</div>
  <div class="bg-primary-500 bg-opacity-100 p-4">100%</div>
</div>
```

## Размытие фона (Backdrop Filter)

Эффект матового стекла:

```html
<div class="relative">
  <!-- Фоновое изображение -->
  <img src="background.jpg" class="w-full h-64 object-cover">
  
  <!-- Размытая панель поверх изображения -->
  <div class="absolute inset-0 bg-filter-blur-5 bg-white/50 p-8">
    <h3 class="text-xl font-bold">Заголовок</h3>
    <p>Текст на размытом фоне</p>
  </div>
</div>
```

**Доступные классы размытия:**

| Класс | Размытие |
|-------|----------|
| `.bg-filter-blur-1` | 1px |
| `.bg-filter-blur-2` | 2px |
| `.bg-filter-blur-5` | 5px |
| `.bg-filter-blur-10` | 10px |

## Интерактивные классы (hover)

Изменение фона при наведении:

```html
<div class="flex gap-4">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
    Кнопка
  </button>
  
  <div class="bg-gray-100 hover:bg-gray-200 p-4 rounded cursor-pointer">
    Наведи на меня
  </div>
  
  <div class="bg-success hover:bg-success/80 text-white p-4 rounded cursor-pointer">
    Успех при наведении
  </div>
</div>
```

## Примеры использования

### Карточка товара

```html
<div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-sm">
  <h3 class="text-lg font-bold mb-2">Название товара</h3>
  <p class="text-gray-600 mb-4">Описание товара</p>
  <div class="flex justify-between items-center">
    <span class="text-2xl font-bold text-primary-500">$99.99</span>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
      Купить
    </button>
  </div>
</div>
```

### Хедер с градиентом

```html
<header class="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6">
  <h1 class="text-2xl font-bold">Заголовок</h1>
</header>
```

### Модальное окно с затемнением

```html
<div class="fixed inset-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg p-6 max-w-md mx-4">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">Содержимое модального окна</p>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
      Закрыть
    </button>
  </div>
</div>
```

### Бейдж статуса

```html
<span class="bg-success text-white px-2 py-1 rounded text-sm">Активен</span>
<span class="bg-warning text-white px-2 py-1 rounded text-sm">Ожидание</span>
<span class="bg-danger text-white px-2 py-1 rounded text-sm">Ошибка</span>
```

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Primary** | `bg-primary-{50-950}`, `bg-primary` |
| **Secondary** | `bg-secondary-{50-950}`, `bg-secondary` |
| **Success** | `bg-success-{50-950}`, `bg-success` |
| **Danger** | `bg-danger-{50-950}`, `bg-danger` |
| **Warning** | `bg-warning-{50-950}`, `bg-warning` |
| **Info** | `bg-info-{50-950}`, `bg-info` |
| **Gray** | `bg-gray-{50-900}` |
| **Цвета** | `bg-red-*`, `bg-orange-*`, `bg-yellow-*`, `bg-green-*`, `bg-sky-*`, `bg-blue-*` |
| **Спец.** | `bg-white`, `bg-black`, `bg-transparent`, `bg-none` |
| **Opacity** | `bg-opacity-{0,25,50,75,100}` |
| **Blur** | `bg-filter-blur-{1,2,5,10}` |
| **Hover** | `hover:bg-{color}` |

## См. также

- [Цвета текста](../typography/index.md#цвет-текста) — для окраски текста
- [Прозрачность](../effects/index.md#прозрачность-opacity) — для общей прозрачности элементов
- [Границы](../border/index.md) — для добавления границ к фону
