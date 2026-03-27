---
title: Cursor
description: Справочник по модулю cursor
---

# Курсор (cursor)

Классы для управления видом курсора мыши.

## Классы

| Класс | CSS свойство | Описание | Пример |
|-------|--------------|----------|--------|
| `.cursor-pointer` | `cursor: pointer` | Рука (как на ссылке) | 🔗 Клик |
| `.cursor-move` | `cursor: move` | Перемещение (крестовина) | ✛ Перетащи |
| `.cursor-default` | `cursor: default` | Стандартная стрелка | → Обычно |
| `.cursor-disabled` | `cursor: not-allowed` | Запрещено (перечёркнутый круг) | 🚫 Нельзя |
| `.cursor-resize-x` | `cursor: ew-resize` | Горизонтальное изменение размера | ↔ Тяни |
| `.cursor-resize-y` | `cursor: ns-resize` | Вертикальное изменение размера | ↕₍ Тяни |
| `.cursor-wait` | `cursor: wait` | Ожидание (песочные часы) | ⏳ Жди |
| `.cursor-help` | `cursor: help` | Справка (вопросительный знак) | ❓ Помощь |

## Примеры использования

### Интерактивные элементы

```html
<!-- Кнопка -->
<button class="cursor-pointer bg-primary-500 text-white px-4 py-2 rounded">
  Нажми меня
</button>

<!-- Ссылка -->
<a href="#" class="cursor-pointer text-primary-500 hover:underline">
  Кликни здесь
</a>

<!-- Карточка с действием -->
<div class="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow">
  <h3 class="font-bold">Карточка</h3>
  <p class="text-gray-600">Кликни для действий</p>
</div>
```

### Перетаскиваемые элементы

```html
<!-- Элемент для перемещения -->
<div class="cursor-move bg-gray-100 p-4 rounded border">
  <h4 class="font-bold mb-2">📌 Перетащи меня</h4>
  <p class="text-sm text-gray-600">Этот элемент можно перемещать</p>
</div>

<!-- Изменение размера по горизонтали -->
<div class="cursor-resize-x h-full w-2 bg-gray-200 hover:bg-gray-300"></div>

<!-- Изменение размера по вертикали -->
<div class="cursor-resize-y w-full h-2 bg-gray-200 hover:bg-gray-300"></div>
```

### Состояния элементов

```html
<!-- Отключённая кнопка -->
<button disabled class="cursor-disabled bg-gray-300 text-gray-500 px-4 py-2 rounded">
  Недоступно
</button>

<!-- Ожидание загрузки -->
<div class="cursor-wait p-4 bg-yellow-50 border border-yellow-200 rounded">
  <span class="mr-2">⏳</span>
  Загрузка данных...
</div>

<!-- Справка -->
<a href="#" class="cursor-help text-info-500">
  <span>❓</span>
  Наведи для справки
</a>
```

## Примеры использования

### Изменение размера окна

```html
<div class="relative border rounded-lg overflow-hidden">
  <!-- Контент -->
  <div class="p-4">
    <h3>Изменяемое окно</h3>
    <p>Потяни за края для изменения размера</p>
  </div>
  
  <!-- Ручки для изменения размера -->
  <div class="absolute right-0 top-0 bottom-0 w-2 cursor-resize-x hover:bg-primary-200"></div>
  <div class="absolute bottom-0 left-0 right-0 h-2 cursor-resize-y hover:bg-primary-200"></div>
  <div class="absolute bottom-0 right-0 w-4 h-4 cursor-resize-x hover:bg-primary-200"></div>
</div>
```

### Drag-and-drop зона

```html
<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center 
            cursor-move hover:border-primary-500 transition-colors">
  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
  </svg>
  <p class="text-gray-600">Перетащите файлы сюда</p>
</div>
```

### Интерактивная галерея

```html
<div class="grid grid-cols-3 gap-4">
  <div class="relative group cursor-pointer">
    <img src="image1.jpg" alt="Фото 1" class="w-full h-48 object-cover rounded-lg">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
                transition-opacity rounded-lg flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100">
        🔍 Увеличить
      </span>
    </div>
  </div>
  
  <div class="relative group cursor-pointer">
    <img src="image2.jpg" alt="Фото 2" class="w-full h-48 object-cover rounded-lg">
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
                transition-opacity rounded-lg flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100">
        🔍 Увеличить
      </span>
    </div>
  </div>
</div>
```

### Форма с подсказками

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
      <span class="cursor-help text-gray-400 ml-1" title="Мы не передадим ваш email третьим лицам">❓</span>
    </label>
    <input 
      type="email" 
      class="border border-gray-300 rounded px-4 py-2 w-full"
      placeholder="you@example.com"
    >
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Пароль
      <span class="cursor-help text-gray-400 ml-1" title="Минимум 8 символов">❓</span>
    </label>
    <input 
      type="password" 
      class="border border-gray-300 rounded px-4 py-2 w-full"
      placeholder="••••••••"
    >
  </div>
  
  <button type="submit" class="cursor-pointer bg-primary-500 text-white px-4 py-2 rounded">
    Отправить
  </button>
  
  <button type="button" disabled class="cursor-disabled bg-gray-300 text-gray-500 px-4 py-2 rounded ml-2">
    Отменено
  </button>
</form>
```

## Сочетание с другими модулями

### С интерактивностью

```html
<!-- Элемент с pointer-events и cursor -->
<div class="pointer-events-none cursor-not-allowed opacity-50">
  Недоступный элемент
</div>

<!-- Элемент с hover эффектами -->
<button class="cursor-pointer hover:lift hover:shadow-lg transition-all">
  Кнопка с эффектами
</button>
```

### С анимациями

```html
<!-- Вращающийся индикатор загрузки -->
<div class="cursor-wait flex items-center gap-2">
  <div class="animation:spin-2 w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full"></div>
  <span>Загрузка...</span>
</div>
```

## Таблица классов

| Класс | CSS | Когда использовать |
|-------|-----|-------------------|
| `.cursor-pointer` | `cursor: pointer` | Кнопки, ссылки, кликабельные элементы |
| `.cursor-move` | `cursor: move` | Перетаскиваемые элементы |
| `.cursor-default` | `cursor: default` | Сброс курсора к стандартному |
| `.cursor-disabled` | `cursor: not-allowed` | Отключённые элементы |
| `.cursor-resize-x` | `cursor: ew-resize` | Горизонтальное изменение размера |
| `.cursor-resize-y` | `cursor: ns-resize` | Вертикальное изменение размера |
| `.cursor-wait` | `cursor: wait` | Индикатор загрузки/ожидания |
| `.cursor-help` | `cursor: help` | Элементы справки |

## См. также

- [Интерактивность](../interactivity/index.md) — для управления событиями мыши
- [Анимации](../animations/index.md) — для анимации элементов
- [Эффекты](../effects/index.md) — для визуальных эффектов
