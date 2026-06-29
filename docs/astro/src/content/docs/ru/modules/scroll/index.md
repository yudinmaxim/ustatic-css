---
title: Scroll
description: Справочник по модулю scroll
---

# Прокрутка (scroll)

Классы для управления полосой прокрутки и её стилизации.

## Основные классы

### Стилизованный скроллбар

```html
<!-- Область со стилизованным скроллом -->
<div class="z-scroll h-64 overflow-y-auto">
  <p>Контент...</p>
  <p>Ещё контент...</p>
  <p>И ещё...</p>
</div>
```

## Модификаторы

### Тонкий скролл

```html
<div class="z-scroll--thin h-64 overflow-y-auto">
  <p>Контент с тонким скроллбаром</p>
  <p>Много текста для прокрутки...</p>
</div>
```

### Скролл при наведении

```html
<div class="z-scroll--hovered h-64 overflow-y-auto">
  <p>Скроллбар увеличивается при наведении</p>
  <p>Наведи курсор на эту область...</p>
</div>
```

## Примеры использования

### Сайдбар с прокруткой

```html
<aside class="w-64 h-screen z-scroll overflow-y-auto bg-white border-r">
  <nav class="p-4">
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 4</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 5</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 6</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 7</a>
    <a href="#" class="block py-2 hover:bg-gray-50">Пункт 8</a>
  </nav>
</aside>
```

### Модальное окно с прокруткой

```html
<div class="fixed top-0 right-0 bottom-0 left-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg max-w-128 mx-4 max-h-80vh z-scroll overflow-y-auto">
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Заголовок</h2>
      <p class="text-gray-600 mb-4">
        Длинный контент модального окна...
      </p>
      <p class="text-gray-600 mb-4">
        Ещё больше текста для демонстрации прокрутки...
      </p>
      <p class="text-gray-600 mb-4">
        Продолжение содержимого...
      </p>
      <button class="bg-primary-500 text-white px-4 py-2 rounded">
        Закрыть
      </button>
    </div>
  </div>
</div>
```

### Горизонтальная прокрутка

```html
<!-- Горизонтальный скролл -->
<div class="z-scroll overflow-x-auto nowrap pb-4">
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
  <div class="inline-block w-48 h-64 bg-primary-100 m-2 rounded-lg"></div>
</div>
```

### Блок кода с прокруткой

```html
<pre class="z-scroll--thin overflow-auto bg-gray-900 text-gray-100 p-4 rounded-lg">
  <code>
// Длинный код для демонстрации прокрутки
function example() {
  const data = [1, 2, 3, 4, 5];
  
  data.forEach(item => {
    console.log(item);
    
    if (item > 2) {
      return item * 2;
    }
  });
  
  // Ещё код...
  return data.map(x => x * 2);
}

// Продолжение...
const result = example();
console.log(result);
  </code>
</pre>
```

### Таблица с прокруткой

```html
<div class="z-scroll overflow-auto max-h-96 border rounded-lg">
  <table class="w-full">
    <thead class="bg-gray-50 relative top-0">
      <tr>
        <th class="border-b p-2 text-left">Заголовок 1</th>
        <th class="border-b p-2 text-left">Заголовок 2</th>
        <th class="border-b p-2 text-left">Заголовок 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border-b p-2">Ячейка 1</td>
        <td class="border-b p-2">Ячейка 2</td>
        <td class="border-b p-2">Ячейка 3</td>
      </tr>
      <!-- Много строк -->
    </tbody>
  </table>
</div>
```

### Чат с прокруткой

```html
<div class="flex flex-col h-96 border rounded-lg">
  <!-- Сообщения -->
  <div class="flex-1 z-scroll overflow-y-auto p-4 flex flex-col gap-4">
    <div class="flex">
      <div class="bg-primary-100 rounded-lg p-3 max-w-80">
        <p class="text-sm">Привет! Как дела?</p>
      </div>
    </div>
    <div class="flex justify-end">
      <div class="bg-gray-100 rounded-lg p-3 max-w-80">
        <p class="text-sm">Отлично! Спасибо</p>
      </div>
    </div>
    <div class="flex">
      <div class="bg-primary-100 rounded-lg p-3 max-w-80">
        <p class="text-sm">Что делаешь?</p>
      </div>
    </div>
    <!-- Больше сообщений -->
  </div>
  
  <!-- Поле ввода -->
  <div class="border-t p-4">
    <input 
      type="text" 
      class="border rounded px-4 py-2 w-full"
      placeholder="Введите сообщение..."
    >
  </div>
</div>
```

## CSS свойства

```scss
// Стилизованный скроллбар
.z-scroll {
  -ms-overflow-style: none;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--u-base-color-gray-100);
    border-radius: 40px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--u-base-color-gray-400);
    border-radius: 40px;
  }
}

// Тонкий скролл
.z-scroll--thin {
  scrollbar-width: thin;
}

// Скролл при наведении
.z-scroll--hovered:hover {
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
}
```

## Стили по умолчанию

### Скроллбар

```scss
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
```

### Трек (фон)

```scss
::-webkit-scrollbar-track {
  background: #d1d5db;
  border-radius: 40px;
}
```

### Ползунок (thumb)

```scss
::-webkit-scrollbar-thumb {
  background: #9ca3af;
  border-radius: 40px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
```

## Таблица классов

| Класс | Описание |
|-------|----------|
| `.z-scroll` | Стилизованный скроллбар |
| `.z-scroll--thin` | Тонкий скроллбар |
| `.z-scroll--hovered` | Увеличивается при наведении |

## Поддержка браузеров

| Браузер | Поддержка |
|---------|-----------|
| Chrome, Edge, Safari | ✅ Полная (webkit) |
| Firefox | ✅ Ограниченная (scrollbar-width) |
| IE | ❌ Не поддерживается |

## Кастомизация

Для изменения стилей переопределите CSS переменные:

```scss
:root {
  --u-base-scroll-width: 8px;
  --u-base-scroll-height: 8px;
  --u-base-scroll-track-color: #f3f4f6;
  --u-base-scroll-thumb-color: #9ca3af;
}
```

## См. также

- [Тип отображения](../display/index.md) — overflow свойства
- [Эффекты](../effects/index.md) — визуальные эффекты
