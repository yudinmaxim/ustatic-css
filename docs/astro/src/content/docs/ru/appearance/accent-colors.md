---
title: Акцентные цвета
outline:
  level: 2
---

# Акцентные цвета

Акцентные цвета используются для выделения важных элементов интерфейса и привлечения внимания пользователя.

Цветовые утилитарные классы: `bg-{color}` для фона, `text-{color}` для текста, `border-{color}` для границ.

## Назначение акцентных цветов

Акцентные цвета применяются для:

- **Кнопок действий (CTA)** — основные действия на странице
- **Ссылок** — интерактивные элементы
- **Индикаторов** — активные состояния
- **Бейджей** — статусы и уведомления
- **Иконок** — важные иконки

## Основные акцентные цвета

### Primary (Основной акцент)

Используется для главных действий и элементов бренда.

::: component-view
<div class="space-y-4">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
    Начать бесплатно
  </button>
  
  <a href="#" class="text-primary-500 hover:text-primary-600 font-medium">
    Главная ссылка
  </a>
  
  <div class="flex items-center gap-2">
    <span class="text-gray-600">Статус:</span>
    <div class="w-3 h-3 bg-primary-500 rounded-full"></div>
  </div>
</div>
:::

**Оттенки для акцентов:**
- `primary-500` — основной акцент
- `primary-600` — при наведении
- `primary-700` — активное состояние

## Семантические акценты

### Success (Успех)

Зелёный цвет для положительных действий и статусов.

::: component-view
<div class="space-y-4">
  <button class="bg-success text-white px-4 py-2 rounded transition-colors">
    ✓ Подтвердить
  </button>
  
  <span class="bg-success bg-opacity-25 text-success px-3 py-1 rounded-full text-sm font-medium">
    Активен
  </span>
  
  <div class="bg-success bg-opacity-25 border-l-4 border-success p-4 rounded">
    <p class="text-success font-medium">✓ Операция выполнена успешно</p>
  </div>
</div>
:::

### Danger (Опасность)

Красный цвет для предупреждений и деструктивных действий.

::: component-view
<div class="space-y-4">
  <button class="bg-danger text-white px-4 py-2 rounded transition-colors">
    ✗ Удалить
  </button>
  
  <span class="bg-danger bg-opacity-25 text-danger px-3 py-1 rounded-full text-sm font-medium">
    Ошибка
  </span>
  
  <div class="bg-danger bg-opacity-25 border-l-4 border-danger p-4 rounded">
    <p class="text-danger font-medium">✗ Произошла ошибка</p>
  </div>
</div>
:::

### Warning (Предупреждение)

Жёлтый/оранжевый цвет для предупреждений.

::: component-view
<div class="space-y-4">
  <button class="bg-warning text-white px-4 py-2 rounded transition-colors">
    ⚠ Внимание
  </button>
  
  <span class="bg-warning bg-opacity-25 text-warning px-3 py-1 rounded-full text-sm font-medium">
    Ожидание
  </span>
  
  <div class="bg-warning bg-opacity-25 border-l-4 border-warning p-4 rounded">
    <p class="text-warning font-medium">⚠ Важная информация</p>
  </div>
</div>
:::

### Info (Информация)

Голубой цвет для информационных элементов.

::: component-view
<div class="space-y-4">
  <div class="bg-info bg-opacity-25 border-l-4 border-info p-4 rounded">
    <p class="text-info font-medium">ℹ Полезная информация</p>
  </div>
  
  <span class="bg-info bg-opacity-25 text-info px-3 py-1 rounded-full text-sm font-medium">
    Новое
  </span>
</div>
:::

## Примеры использования

### Группа кнопок

::: component-view
<div class="flex gap-2">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded font-medium transition-colors">
    Сохранить
  </button>
  <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded font-medium transition-colors">
    Отмена
  </button>
  <button class="bg-danger text-white px-4 py-2 rounded font-medium transition-colors">
    Удалить
  </button>
</div>
:::

### Форма с валидацией

::: component-view
<div class="space-y-4 max-w-sm">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
    <input 
      type="email" 
      value="user@example.com"
      class="w-full px-4 py-2 border border-success rounded focus:outline-none focus:border-success"
    >
    <p class="text-success text-sm mt-1">✓ Корректный email</p>
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
    <input 
      type="password" 
      class="w-full px-4 py-2 border border-danger rounded focus:outline-none focus:border-danger"
      placeholder="Минимум 8 символов"
    >
    <p class="text-danger text-sm mt-1">✗ Пароль слишком короткий</p>
  </div>
</div>
:::

### Карточка товара с акцентами

::: component-view
<div class="border border-gray-200 overflow-hidden bg-white max-w-sm shadow-sm hover:shadow-lg transition-shadow">
  <div class="h-40 bg-gradient-to-br from-primary-100 to-primary-200 relative">
    <span class="absolute top-2 right-2 bg-danger text-white px-2 py-1 rounded text-sm font-medium">
      -20%
    </span>
  </div>
  <div class="p-4">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-lg font-bold text-gray-900">Товар</h3>
      <span class="bg-success bg-opacity-25 text-success px-2 py-1 rounded text-sm font-medium">
        В наличии
      </span>
    </div>
    <p class="text-gray-600 text-sm mb-4">Описание товара</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary-500">$99.99</span>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm transition-colors">
        В корзину
      </button>
    </div>
  </div>
</div>
:::

### Навигация с активным пунктом

::: component-view
<nav class="flex gap-1 bg-gray-100 p-1 rounded">
  <a href="#" class="px-4 py-2 text-gray-600 hover:text-gray-900 rounded">Главная</a>
  <a href="#" class="px-4 py-2 bg-primary-500 text-white rounded font-medium">Продукты</a>
  <a href="#" class="px-4 py-2 text-gray-600 hover:text-gray-900 rounded">О нас</a>
</nav>
:::

### Прогресс-бар

::: component-view
<div class="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
  <div class="h-full bg-primary-500 w-3/4 transition-all duration-500"></div>
</div>
:::

### Бейджи уведомлений

::: component-view
<div class="flex gap-4">
  <button class="relative">
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
    </svg>
    <span class="absolute -top-2 -right-2 bg-danger text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium">
      3
    </span>
  </button>
  
  <button class="relative">
    <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
    <span class="absolute -top-2 -right-2 bg-primary-500 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium">
      5
    </span>
  </button>
</div>
:::

## Рекомендации по использованию

### 1. Иерархия акцентов

::: component-view
<div class="flex gap-2">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded font-medium transition-colors">
    Главное действие
  </button>
  <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded font-medium transition-colors">
    Вторичное
  </button>
</div>
:::

### 2. Консистентность

Используйте один цвет для одинаковых действий на всём сайте:
- `primary-500` — для основных кнопок
- `danger` — для удаления
- `success` — для подтверждения

### 3. Доступность

Проверяйте контрастность текста на цветном фоне. Белый текст хорошо читается на тёмных цветах (`primary-500`, `danger`, `success`), чёрный текст — на светлых (`warning-50`, `info-50`).

## Таблица акцентных цветов

| Назначение | Цвет | Классы |
|------------|------|--------|
| **Основной** | Primary | `bg-primary-500`, `text-primary-500`, `border-primary-500` |
| **Вторичный** | Secondary | `bg-secondary-500`, `text-secondary-500` |
| **Успех** | Success | `bg-success`, `text-success`, `border-success` |
| **Ошибка** | Danger | `bg-danger`, `text-danger`, `border-danger` |
| **Предупреждение** | Warning | `bg-warning`, `text-warning`, `border-warning` |
| **Информация** | Info | `bg-info`, `text-info`, `border-info` |

## См. также

- [Палитра цветов](/ru/appearance/color-palette/) — полная цветовая палитра
- [Фон](/ru/modules/bg/) — классы для фона
- [Границы](/ru/modules/border/) — классы для границ
- [Справочник цветов](/ru/reference/colors-palette/) — значения токенов цветов
