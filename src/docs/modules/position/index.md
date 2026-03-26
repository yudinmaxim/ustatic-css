# Позиционирование (position)

Классы для управления позиционированием элементов: тип позиционирования, координаты, z-index.

## Типы позиционирования

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.relative` | `position: relative` | Относительное позиционирование |
| `.absolute` | `position: absolute` | Абсолютное позиционирование |
| `.fixed` | `position: fixed` | Фиксированное позиционирование |
| `.sticky` | `position: sticky` | Липкое позиционирование |
| `.absolute-center` | — | Абсолютное центрирование |

```html
<!-- Относительное -->
<div class="relative">
  <p>Родительский элемент</p>
  <div class="absolute top-0 right-0">Абсолютный потомок</div>
</div>

<!-- Фиксированное -->
<div class="fixed top-0 left-0 right-0">
  Фиксированный хедер
</div>

<!-- Абсолютное центрирование -->
<div class="relative h-64">
  <div class="absolute-center">По центру</div>
</div>
```

## Координаты (top, right, bottom, left)

### Значения в пикселях

| Класс | Значение |
|-------|----------|
| `top-0`, `right-0`, `bottom-0`, `left-0` | 0 |
| `top-px`, `right-px`, `bottom-px`, `left-px` | 1px |
| `top-1`, `right-1`, `bottom-1`, `left-1` | 4px |
| `top-2`, `right-2`, `bottom-2`, `left-2` | 8px |
| `top-4`, `right-4`, `bottom-4`, `left-4` | 16px |
| `top-8`, `right-8`, `bottom-8`, `left-8` | 32px |
| `top-64`, `right-64`, `bottom-64`, `left-64` | 256px |

### Проценты

| Класс | Значение |
|-------|----------|
| `top-1/4`, `right-1/4`, `bottom-1/4`, `left-1/4` | 25% |
| `top-1/2`, `right-1/2`, `bottom-1/2`, `left-1/2` | 50% |
| `top-3/4`, `right-3/4`, `bottom-3/4`, `left-3/4` | 75% |
| `top-full`, `right-full`, `bottom-full`, `left-full` | 100% |

### Специальные значения

| Класс | Значение |
|-------|----------|
| `top-auto`, `right-auto`, `bottom-auto`, `left-auto` | auto |

```html
<!-- Позиционирование по углам -->
<div class="relative h-64 border">
  <div class="absolute top-0 left-0 bg-primary-100 p-2">Верх-лево</div>
  <div class="absolute top-0 right-0 bg-primary-100 p-2">Верх-право</div>
  <div class="absolute bottom-0 left-0 bg-primary-100 p-2">Низ-лево</div>
  <div class="absolute bottom-0 right-0 bg-primary-100 p-2">Низ-право</div>
</div>

<!-- Центрирование -->
<div class="relative h-64 border">
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-primary-100 p-4">
    По центру
  </div>
</div>
```

## Z-index

### Числовые значения

| Класс | Z-index |
|-------|---------|
| `.z-0` | 0 |
| `.z-10` | 10 |
| `.z-20` | 20 |
| `.z-30` | 30 |
| `.z-40` | 40 |
| `.z-50` | 50 |
| `.z-60` | 60 |
| `.z-70` | 70 |
| `.z-80` | 80 |
| `.z-90` | 90 |
| `.z-100` | 100 |

### Предопределённые значения

| Класс | Z-index | Назначение |
|-------|---------|------------|
| `.z-auto` | auto | Автоматически |
| `.z-i-hidden` | -1 | Скрытый |
| `.z-i-icon` | 1 | Иконки |
| `.z-i-menu` | 20 | Меню |
| `.z-i-teleport` | 20 | Телепорт |
| `.z-i-load` | 30 | Загрузка |
| `.z-i-tip` | 50 | Подсказки |
| `.z-i-mobile-menu` | 50 | Мобильное меню |
| `.z-i-modal` | 60 | Модальные окна |
| `.z-i-notice` | 100 | Уведомления |
| `.z-i-fullpage-load` | 100 | Загрузка страницы |

```html
<!-- Слои элементов -->
<div class="relative h-64">
  <div class="absolute z-10 bg-red-100 p-4">Слой 10</div>
  <div class="absolute z-20 bg-blue-100 p-4">Слой 20</div>
  <div class="absolute z-30 bg-green-100 p-4">Слой 30</div>
</div>
```

## Примеры использования

### Фиксированный хедер

```html
<header class="fixed top-0 left-0 right-0 z-i-menu bg-white border-b">
  <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <a href="/" class="text-xl font-bold">Логотип</a>
    <nav class="flex items-center gap-6">
      <a href="/about" class="hover:text-primary-500">О нас</a>
      <a href="/products" class="hover:text-primary-500">Продукты</a>
      <a href="/contact" class="hover:text-primary-500">Контакты</a>
    </nav>
  </div>
</header>

<!-- Основной контент с отступом -->
<main class="pt-16">
  <h1>Заголовок</h1>
  <p>Контент страницы...</p>
</main>
```

### Модальное окно

```html
<!-- Затемнение фона -->
<div class="fixed inset-0 z-i-modal bg-black bg-opacity-50 
            flex items-center justify-center">
  <!-- Модальное окно -->
  <div class="bg-white rounded-lg p-6 max-w-md mx-4 relative z-i-modal">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">Содержимое модального окна</p>
    
    <!-- Кнопка закрытия -->
    <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    
    <button class="bg-primary-500 text-white px-4 py-2 rounded">
      Закрыть
    </button>
  </div>
</div>
```

### Тултип (подсказка)

```html
<div class="relative inline-block">
  <!-- Элемент -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Наведи на меня
  </button>
  
  <!-- Тултип -->
  <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              px-3 py-2 bg-gray-900 text-white text-sm rounded 
              whitespace-nowrap z-i-tip">
    Это подсказка
    <div class="absolute top-full left-1/2 -translate-x-1/2 
                border-4 border-transparent border-t-gray-900"></div>
  </div>
</div>
```

### Плавающая кнопка

```html
<!-- Кнопка в правом нижнем углу -->
<button class="fixed bottom-8 right-8 z-i-notice 
               bg-primary-500 text-white w-14 h-14 rounded-full 
               shadow-lg flex items-center justify-center hover:bg-primary-600">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M12 4v16m8-8H4"/>
  </svg>
</button>
```

### Липкий сайдбар

```html
<div class="flex">
  <!-- Липкий сайдбар -->
  <aside class="sticky top-4 w-64 h-fit">
    <nav class="bg-white border rounded-lg p-4">
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
    </nav>
  </aside>
  
  <!-- Основной контент -->
  <main class="flex-1 p-4">
    <h1 class="text-2xl font-bold mb-4">Заголовок</h1>
    <p class="mb-4">Длинный контент...</p>
    <!-- Много контента для прокрутки -->
  </main>
</div>
```

### Бейдж уведомления

```html
<button class="relative">
  <!-- Иконка -->
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
  </svg>
  
  <!-- Бейдж -->
  <span class="absolute -top-2 -right-2 bg-danger text-white 
               w-5 h-5 rounded-full text-xs flex items-center justify-center">
    3
  </span>
</button>
```

### Выпадающее меню

```html
<div class="relative">
  <!-- Кнопка -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Меню
  </button>
  
  <!-- Выпадающий список -->
  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg 
              shadow-lg z-i-menu">
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 2</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 3</a>
  </div>
</div>
```

## Таблица классов

### Позиционирование

| Классы |
|--------|
| `relative`, `absolute`, `fixed`, `sticky`, `absolute-center` |

### Координаты

| Категория | Классы |
|-----------|--------|
| **Top** | `top-0`, `top-px`, `top-1` ... `top-64`, `top-1/2`, `top-full`, `top-auto` |
| **Right** | `right-0`, `right-px`, `right-1` ... `right-64`, `right-1/2`, `right-full`, `right-auto` |
| **Bottom** | `bottom-0`, `bottom-px`, `bottom-1` ... `bottom-64`, `bottom-1/2`, `bottom-full`, `bottom-auto` |
| **Left** | `left-0`, `left-px`, `left-1` ... `left-64`, `left-1/2`, `left-full`, `left-auto` |
| **Inset** | `inset-0` (все стороны) |

### Z-index

| Категория | Классы |
|-----------|--------|
| **Числа** | `z-0`, `z-10`, `z-20`, `z-30`, `z-40`, `z-50`, `z-60`, `z-70`, `z-80`, `z-90`, `z-100` |
| **Предопределённые** | `z-auto`, `z-i-hidden`, `z-i-icon`, `z-i-menu`, `z-i-teleport`, `z-i-load`, `z-i-tip`, `z-i-mobile-menu`, `z-i-modal`, `z-i-notice`, `z-i-fullpage-load` |

## См. также

- [Размеры](../sizing/index.md) — ширина и высота
- [Скрытие](../hide/index.md) — скрытие элементов
- [Тип отображения](../display/index.md) — display и overflow
