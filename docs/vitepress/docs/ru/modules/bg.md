---
title: Фон (Background)
outline:
  level: 2
---

# Фон (bg)

Модуль предоставляет классы для управления фоном элементов: цвета, прозрачность, размытие.

## Цвета фона

### Основные цвета (Primary)

::: component-view
<div class="flex gap-2 flex-wrap">
  <div class="bg-primary-50 p-3 rounded text-center text-sm border border-gray-200">50</div>
  <div class="bg-primary-100 p-3 rounded text-center text-sm border border-gray-200">100</div>
  <div class="bg-primary-200 p-3 rounded text-center text-sm border border-gray-200">200</div>
  <div class="bg-primary-300 p-3 rounded text-center text-sm border border-gray-200">300</div>
  <div class="bg-primary-400 p-3 rounded text-center text-sm border border-gray-200">400</div>
  <div class="bg-primary-500 p-3 rounded text-center text-sm text-white">500</div>
  <div class="bg-primary-600 p-3 rounded text-center text-sm text-white">600</div>
  <div class="bg-primary-700 p-3 rounded text-center text-sm text-white">700</div>
  <div class="bg-primary-800 p-3 rounded text-center text-sm text-white">800</div>
  <div class="bg-primary-900 p-3 rounded text-center text-sm text-white">900</div>
</div>
:::

### Семантические цвета

::: component-view
<div class="flex gap-4 flex-wrap">
  <div class="bg-success text-white p-4 rounded-lg">
    <p class="font-bold">✓ Успех</p>
  </div>
  <div class="bg-danger text-white p-4 rounded-lg">
    <p class="font-bold">✗ Опасность</p>
  </div>
  <div class="bg-warning text-white p-4 rounded-lg">
    <p class="font-bold">⚠ Предупреждение</p>
  </div>
  <div class="bg-info text-white p-4 rounded-lg">
    <p class="font-bold">ℹ Информация</p>
  </div>
</div>
:::

### Нейтральные цвета (Gray)

::: component-view
<div class="flex gap-2 flex-wrap">
  <div class="bg-gray-50 p-3 rounded text-center text-sm border border-gray-200">50</div>
  <div class="bg-gray-100 p-3 rounded text-center text-sm border border-gray-200">100</div>
  <div class="bg-gray-200 p-3 rounded text-center text-sm border border-gray-200">200</div>
  <div class="bg-gray-300 p-3 rounded text-center text-sm border border-gray-200">300</div>
  <div class="bg-gray-400 p-3 rounded text-center text-sm text-white">400</div>
  <div class="bg-gray-500 p-3 rounded text-center text-sm text-white">500</div>
  <div class="bg-gray-600 p-3 rounded text-center text-sm text-white">600</div>
  <div class="bg-gray-700 p-3 rounded text-center text-sm text-white">700</div>
  <div class="bg-gray-800 p-3 rounded text-center text-sm text-white">800</div>
  <div class="bg-gray-900 p-3 rounded text-center text-sm text-white">900</div>
</div>
:::

## Прозрачность фона

::: component-view
<div class="flex gap-4 items-end bg-gray-100 p-4 rounded-lg">
  <div class="bg-primary-500 bg-opacity-0 p-4 border border-gray-300 text-white">
    0%
  </div>
  <div class="bg-primary-500 bg-opacity-25 p-4 text-white">
    25%
  </div>
  <div class="bg-primary-500 bg-opacity-50 p-4 text-white">
    50%
  </div>
  <div class="bg-primary-500 bg-opacity-75 p-4 text-white">
    75%
  </div>
  <div class="bg-primary-500 bg-opacity-100 p-4 text-white">
    100%
  </div>
</div>
:::

## Интерактивные классы (hover)

::: component-view
<div class="flex gap-4 flex-wrap">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
    Кнопка
  </button>
  
  <div class="bg-gray-100 hover:bg-gray-200 p-4 rounded cursor-pointer transition-colors">
    Наведи на меня
  </div>
  
  <div class="bg-success hover:bg-success/80 text-white p-4 rounded cursor-pointer transition-colors">
    Успех при наведении
  </div>
</div>
:::

## Примеры использования

### Карточка товара

::: component-view
<div class="bg-white border border-gray-200 rounded-lg p-6 max-w-sm shadow-sm">
  <h3 class="text-lg font-bold text-gray-900 mb-2">Название товара</h3>
  <p class="text-gray-600 mb-4">Краткое описание товара</p>
  <div class="flex justify-between items-center">
    <span class="text-2xl font-bold text-primary-500">$99.99</span>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors">
      Купить
    </button>
  </div>
</div>
:::

### Модальное окно с затемнением

::: component-view
<div class="relative h-64 border border-gray-200 rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
  <div class="absolute inset-0 flex items-center justify-center z-20">
    <div class="bg-white rounded-lg p-6 max-w-md mx-4">
      <h2 class="text-xl font-bold mb-4">Заголовок</h2>
      <p class="text-gray-600 mb-6">Содержимое модального окна</p>
      <button class="bg-primary-500 text-white px-4 py-2 rounded">
        Закрыть
      </button>
    </div>
  </div>
  <div class="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200"></div>
</div>
:::

### Бейдж статуса

::: component-view
<div class="flex gap-2">
  <span class="bg-success text-white px-3 py-1 rounded-full text-sm font-medium">
    Активен
  </span>
  <span class="bg-warning text-white px-3 py-1 rounded-full text-sm font-medium">
    Ожидание
  </span>
  <span class="bg-danger text-white px-3 py-1 rounded-full text-sm font-medium">
    Ошибка
  </span>
  <span class="bg-info text-white px-3 py-1 rounded-full text-sm font-medium">
    Новое
  </span>
</div>
:::

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
| **Hover** | `hover:bg-{color}` |

## См. также

- [Цвет текста](/ru/modules/typography/#цвет-текста) — для окраски текста
- [Прозрачность](/ru/modules/effects/#прозрачность-opacity) — для общей прозрачности элементов
- [Границы](/ru/modules/border/) — для добавления границ к фону
