---
title: Presets
description: Справочник по модулю presets
---

# Предустановки

Предустановки uStatic CSS — готовые комбинации классов для типовых элементов интерфейса.

## Что такое предустановки

Предустановки — это готовые наборы классов для часто используемых компонентов:

- Карточки
- Кнопки
- Формы
- Навигация
- Модальные окна
- Уведомления

## Карточки

### Базовая карточка

```html
<div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
  <h3 class="text-lg font-bold mb-2">Заголовок</h3>
  <p class="text-gray-600">Описание карточки</p>
</div>
```

### Карточка с изображением

```html
<div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
  <img src="image.jpg" alt="Изображение" class="w-full h-48 object-cover">
  <div class="p-4">
    <h3 class="text-lg font-bold mb-2">Заголовок</h3>
    <p class="text-gray-600 mb-4">Описание</p>
    <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
      Действие
    </button>
  </div>
</div>
```

### Карточка товара

```html
<div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
  <img src="product.jpg" alt="Товар" class="w-full h-48 object-cover">
  <div class="p-4">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-lg font-bold text-gray-900">Название</h3>
      <span class="bg-success/10 text-success px-2 py-1 rounded text-sm font-medium">
        В наличии
      </span>
    </div>
    <p class="text-gray-600 text-sm mb-4">Краткое описание товара</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary-500">$99.99</span>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm">
        В корзину
      </button>
    </div>
  </div>
</div>
```

## Кнопки

### Основная кнопка

```html
<button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded font-medium transition-colors">
  Кнопка
</button>
```

### Контурная кнопка

```html
<button class="border border-primary-500 text-primary-500 px-4 py-2 rounded font-medium hover:bg-primary-50 transition-colors">
  Кнопка
</button>
```

### Кнопка с иконкой

```html
<button class="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded font-medium">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
  </svg>
  Добавить
</button>
```

### Группа кнопок

```html
<div class="flex gap-2">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded font-medium">
    Сохранить
  </button>
  <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded font-medium">
    Отмена
  </button>
</div>
```

## Формы

### Поле ввода

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <input 
    type="email" 
    class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
    placeholder="you@example.com"
  >
</div>
```

### Поле с ошибкой

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Пароль
  </label>
  <input 
    type="password" 
    class="w-full px-4 py-2 border border-danger rounded focus:outline-none focus:border-danger focus:ring-2 focus:ring-danger/20"
    placeholder="Минимум 8 символов"
  >
  <p class="text-danger text-sm mt-1">✗ Пароль слишком короткий</p>
</div>
```

### Поле с успехом

```html
<div>
  <label class="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <input 
    type="email" 
    value="user@example.com"
    class="w-full px-4 py-2 border border-success rounded focus:outline-none focus:border-success focus:ring-2 focus:ring-success/20"
  >
  <p class="text-success text-sm mt-1">✓ Корректный email</p>
</div>
```

### Форма входа

```html
<form class="max-w-md mx-auto p-6 bg-white border rounded-lg">
  <h2 class="text-xl font-bold mb-6 text-center">Вход</h2>
  
  <div class="mb-4">
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input 
      type="email" 
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
      placeholder="you@example.com"
    >
  </div>
  
  <div class="mb-6">
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Пароль
    </label>
    <input 
      type="password" 
      class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary-500"
      placeholder="••••••••"
    >
  </div>
  
  <button 
    type="submit" 
    class="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded font-medium"
  >
    Войти
  </button>
</form>
```

## Навигация

### Хедер

```html
<header class="bg-white border-b border-gray-200 sticky top-0 z-i-menu">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <a href="/" class="text-xl font-bold text-primary-500">Логотип</a>
      
      <nav class="hidden md:flex items-center gap-6">
        <a href="/about" class="text-gray-600 hover:text-primary-500 font-medium">
          О нас
        </a>
        <a href="/products" class="text-gray-600 hover:text-primary-500 font-medium">
          Продукты
        </a>
        <a href="/contact" class="text-gray-600 hover:text-primary-500 font-medium">
          Контакты
        </a>
      </nav>
      
      <button class="md:hidden cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</header>
```

### Сайдбар

```html
<aside class="w-64 h-screen bg-white border-r border-gray-200 overflow-y-auto">
  <nav class="p-4">
    <a href="#" class="flex items-center gap-3 px-4 py-3 bg-primary-50 text-primary-600 rounded-lg mb-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
      Главная
    </a>
    <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
      </svg>
      Профиль
    </a>
    <a href="#" class="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
      Настройки
    </a>
  </nav>
</aside>
```

## Уведомления

### Успех

```html
<div class="bg-success/10 border-l-4 border-success p-4 rounded">
  <div class="flex items-center gap-2">
    <svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
    </svg>
    <p class="text-success font-medium">Операция выполнена успешно</p>
  </div>
</div>
```

### Ошибка

```html
<div class="bg-danger/10 border-l-4 border-danger p-4 rounded">
  <div class="flex items-center gap-2">
    <svg class="w-5 h-5 text-danger" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
    </svg>
    <p class="text-danger font-medium">Произошла ошибка</p>
  </div>
</div>
```

### Предупреждение

```html
<div class="bg-warning/10 border-l-4 border-warning p-4 rounded">
  <div class="flex items-center gap-2">
    <svg class="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
    </svg>
    <p class="text-warning font-medium">Внимание! Важная информация</p>
  </div>
</div>
```

## Модальные окна

### Базовое модальное окно

```html
<div class="fixed inset-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-lg p-6 max-w-md w-full">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">Содержимое модального окна</p>
    <div class="flex justify-end gap-2">
      <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded">
        Отмена
      </button>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
        Сохранить
      </button>
    </div>
  </div>
</div>
```

## Таблицы

### Базовая таблица

```html
<table class="w-full border-collapse">
  <thead>
    <tr class="bg-gray-50">
      <th class="border-b border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Заголовок 1</th>
      <th class="border-b border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Заголовок 2</th>
      <th class="border-b border-gray-200 p-3 text-left text-sm font-semibold text-gray-700">Заголовок 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-gray-200 p-3 text-sm text-gray-600">Ячейка 1</td>
      <td class="border-b border-gray-200 p-3 text-sm text-gray-600">Ячейка 2</td>
      <td class="border-b border-gray-200 p-3 text-sm text-gray-600">Ячейка 3</td>
    </tr>
  </tbody>
</table>
```

## См. также

- [Модули](../modules/align/index.md) — документация по модулям
- [Быстрый старт](../getting-started/quick-start.md) — практические примеры
