# Быстрый старт

Это руководство покажет основы работы с uStatic CSS на практических примерах.

## Подключение библиотеки

### Шаг 1: Установка

```bash
npm install ustatic-css
```

### Шаг 2: Импорт стилей

```typescript
// main.ts
import 'ustatic-css/dist/ustatic-index.scss'
```

Или для Vue проектов:

```typescript
// main.ts
import { ustaticCss } from 'ustatic-css'
app.use(ustaticCss)
```

## Базовые примеры

### 1. Карточка товара

```html
<div class="bg-white rounded-lg shadow border border-gray-200 p-6 max-w-sm">
  <!-- Изображение -->
  <img 
    src="product.jpg" 
    alt="Товар" 
    class="w-full h-48 object-cover rounded-t-lg mb-4"
  >
  
  <!-- Заголовок -->
  <h3 class="text-xl font-bold text-gray-900 mb-2">
    Название товара
  </h3>
  
  <!-- Описание -->
  <p class="text-gray-600 text-sm mb-4">
    Краткое описание товара...
  </p>
  
  <!-- Цена и кнопка -->
  <div class="flex items-center justify-between">
    <span class="text-2xl font-bold text-primary-500">
      $99.99
    </span>
    <button 
      class="bg-primary-500 text-white px-4 py-2 rounded 
             hover:bg-primary-600 cursor-pointer"
    >
      В корзину
    </button>
  </div>
</div>
```

**Используемые модули:**
- `bg` — фоны (bg-white, bg-primary-500)
- `border` — границы (rounded-lg, border)
- `spacing` — отступы (p-6, m-4, px-4)
- `typography` — текст (text-xl, font-bold, text-gray-900)
- `sizing` — размеры (w-full, h-48, max-w-sm)
- `flexbox` — flexbox (flex, items-center, justify-between)
- `effects` — эффекты (shadow, hover:bg-primary-600)
- `cursor` — курсор (cursor-pointer)

### 2. Навигационная панель

```html
<header class="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-i-menu">
  <div class="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
    <!-- Логотип -->
    <a href="/" class="text-xl font-bold text-primary-500">
      Логотип
    </a>
    
    <!-- Меню для десктопа -->
    <nav class="hidden md:flex items-center gap-6">
      <a href="/about" class="text-gray-600 hover:text-primary-500">
        О нас
      </a>
      <a href="/products" class="text-gray-600 hover:text-primary-500">
        Продукты
      </a>
      <a href="/contact" class="text-gray-600 hover:text-primary-500">
        Контакты
      </a>
    </nav>
    
    <!-- Кнопка мобильного меню -->
    <button class="md:hidden cursor-pointer">
      <svg class="w-6 h-6">...</svg>
    </button>
  </div>
</header>
```

**Используемые модули:**
- `position` — позиционирование (fixed, top-0, left-0, z-i-menu)
- `flexbox` — flexbox (flex, items-center, justify-between)
- `spacing` — отступы (px-6, py-4)
- `sizing` — размеры (max-w-7xl, w-6, h-6)
- `hidden` — скрытие (hidden, md:flex)
- `typography` — текст (text-xl, font-bold, text-gray-600)
- `bg` — фон (bg-white)
- `border` — границы (border-b)
- `cursor` — курсор (cursor-pointer)

### 3. Форма входа

```html
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
    <h2 class="text-2xl font-bold text-center mb-6">
      Вход в систему
    </h2>
    
    <form class="space-y-4">
      <!-- Email -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input 
          type="email" 
          class="w-full px-4 py-2 border border-gray-300 rounded 
                 focus:outline-none focus:border-primary-500"
          placeholder="you@example.com"
        >
      </div>
      
      <!-- Пароль -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Пароль
        </label>
        <input 
          type="password" 
          class="w-full px-4 py-2 border border-gray-300 rounded 
                 focus:outline-none focus:border-primary-500"
          placeholder="••••••••"
        >
      </div>
      
      <!-- Кнопка -->
      <button 
        type="submit" 
        class="w-full bg-primary-500 text-white py-2 rounded 
               hover:bg-primary-600 cursor-pointer font-medium"
      >
        Войти
      </button>
    </form>
  </div>
</div>
```

### 4. Сетка товаров (Grid)

```html
<div class="grid grid-columns--4-256 gap-4 p-4">
  <!-- Товар 1 -->
  <div class="bg-white rounded-lg shadow p-4">
    <img src="product1.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 1</h3>
    <p class="text-primary-500">$99</p>
  </div>
  
  <!-- Товар 2 -->
  <div class="bg-white rounded-lg shadow p-4">
    <img src="product2.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 2</h3>
    <p class="text-primary-500">$149</p>
  </div>
  
  <!-- Товар 3 -->
  <div class="bg-white rounded-lg shadow p-4">
    <img src="product3.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 3</h3>
    <p class="text-primary-500">$199</p>
  </div>
  
  <!-- Товар 4 -->
  <div class="bg-white rounded-lg shadow p-4">
    <img src="product4.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 4</h3>
    <p class="text-primary-500">$249</p>
  </div>
</div>
```

### 5. Модальное окно

```html
<!-- Затемнение фона -->
<div class="fixed inset-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center">
  <!-- Модальное окно -->
  <div class="bg-white rounded-lg shadow-xl p-6 max-w-lg mx-4">
    <!-- Заголовок -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-xl font-bold">Заголовок</h3>
      <button class="cursor-pointer text-gray-400 hover:text-gray-600">
        <svg class="w-5 h-5">...</svg>
      </button>
    </div>
    
    <!-- Контент -->
    <p class="text-gray-600 mb-6">
      Содержимое модального окна...
    </p>
    
    <!-- Кнопки -->
    <div class="flex justify-end gap-2">
      <button class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
        Отмена
      </button>
      <button class="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600">
        Сохранить
      </button>
    </div>
  </div>
</div>
```

## Динамическая загрузка модулей

Для оптимизации размера подключаемых стилей используйте динамическую загрузку:

```typescript
import { loadStyles } from 'ustatic-css'

// Загрузить стили на основе используемых классов
await loadStyles({
  classes: ['flex', 'grid', 'text-center', 'bg-white']
})

// Или явно указать модули
await loadStyles({
  modules: ['flexbox', 'grid', 'typography', 'bg']
})
```

## Работа с CSS переменными

### Изменение темы

```typescript
import { useTokens } from 'ustatic-css'

const { setCssToken } = useTokens()

// Переключение на тёмную тему
setCssToken('base.color.background', '#1a1a1a')
setCssToken('base.color.text', '#ffffff')
```

### Получение значения токена

```typescript
const { getCssToken } = useTokens()

const primaryColor = getCssToken('base.color.primary')
// Результат: '#5993d9'
```

## Полезные комбинации классов

### Центрирование элемента

```html
<!-- Flexbox центрирование -->
<div class="flex items-center justify-center">
  <div>По центру</div>
</div>

<!-- Абсолютное центрирование -->
<div class="relative">
  <div class="absolute-center">По центру</div>
</div>
```

### Обрезка текста с многоточием

```html
<div class="w-64 truncate">
  Очень длинный текст, который будет обрезан...
</div>
```

### Адаптивная сетка

```html
<div class="grid grid-columns--4-64 gap-4">
  <!-- Адаптивные колонки -->
</div>
```

### Кнопка с состояниями

```html
<button 
  class="bg-primary-500 text-white px-4 py-2 rounded 
         cursor-pointer hover:bg-primary-600 
         disabled:bg-gray-300 disabled:cursor-not-allowed"
  disabled
>
  Кнопка
</button>
```

## Следующие шаги

Изучите доступные модули:

- [Выравнивание](../modules/align/index.md)
- [Flexbox](../modules/flexbox/index.md)
- [Grid](../modules/grid/index.md)
- [Типографика](../modules/typography/index.md)
- [Отступы](../modules/spacing/index.md)
