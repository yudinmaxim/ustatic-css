# Скрытие (hide)

Классы для скрытия элементов на разных брейкпоинтах (адаптивное скрытие).

## Классы

### Скрытие на всех размерах

```html
<div class="hidden">
  Этот элемент никогда не отображается
</div>
```

### Скрытие на брейкпоинтах

| Класс | Диапазон | Описание |
|-------|----------|----------|
| `.hidden-md` | 768px - 1279px | Скрыт на экранах ≥ 768px |
| `.hidden-lg` | 1280px - 1919px | Скрыт на экранах ≥ 1280px |
| `.hidden-full` | ≥ 1920px | Скрыт на больших экранах |

```html
<!-- Скрыт на планшетах и десктопах -->
<div class="hidden-md">
  Видно только на мобильных (< 768px)
</div>

<!-- Скрыт на десктопах -->
<div class="hidden-lg">
  Видно на мобильных и планшетах (< 1280px)
</div>

<!-- Скрыт на очень больших экранах -->
<div class="hidden-full">
  Видно на экранах < 1920px
</div>
```

## Примеры использования

### Мобильное меню

```html
<!-- Кнопка гамбургер (видна только на мобильных) -->
<button class="hidden-lg cursor-pointer p-2">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16"/>
  </svg>
</button>

<!-- Десктопное меню (скрыто на мобильных) -->
<nav class="hidden-md hidden-full">
  <a href="/" class="px-4 py-2 hover:bg-gray-100">Главная</a>
  <a href="/about" class="px-4 py-2 hover:bg-gray-100">О нас</a>
  <a href="/products" class="px-4 py-2 hover:bg-gray-100">Продукты</a>
  <a href="/contact" class="px-4 py-2 hover:bg-gray-100">Контакты</a>
</nav>
```

### Адаптивная боковая панель

```html
<div class="flex">
  <!-- Сайдбар (скрыт на мобильных) -->
  <aside class="hidden-md w-64 bg-white border-r p-4">
    <nav class="space-y-2">
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 1</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 2</a>
      <a href="#" class="block py-2 hover:bg-gray-50">Пункт 3</a>
    </nav>
  </aside>
  
  <!-- Основной контент -->
  <main class="flex-1 p-4">
    <h1 class="text-2xl font-bold">Заголовок</h1>
    <p>Основной контент страницы...</p>
  </main>
</div>
```

### Адаптивные карточки

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- Карточки видны на всех экранах -->
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 1</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 2</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 3</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="border rounded-lg p-4">
    <h3 class="font-bold">Карточка 4</h3>
    <p class="text-gray-600">Описание</p>
  </div>
</div>
```

### Промо-блок для мобильных

```html
<!-- Промо-блок (только мобильные) -->
<div class="hidden-lg bg-primary-500 text-white p-4 text-center">
  <p>🎉 Специальное предложение для мобильных пользователей!</p>
  <button class="mt-2 bg-white text-primary-500 px-4 py-2 rounded">
    Узнать больше
  </button>
</div>

<!-- Основной контент -->
<div class="p-4">
  <h1 class="text-2xl font-bold">Добро пожаловать</h1>
  <p>Основной контент для всех устройств</p>
</div>
```

### Адаптивная таблица

```html
<div>
  <!-- Мобильный вид (карточки) -->
  <div class="hidden-lg space-y-4">
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">Товар 1</h3>
      <p class="text-primary-500">$99</p>
      <p class="text-gray-600">Описание товара</p>
    </div>
    <div class="border rounded-lg p-4">
      <h3 class="font-bold">Товар 2</h3>
      <p class="text-primary-500">$149</p>
      <p class="text-gray-600">Описание товара</p>
    </div>
  </div>
  
  <!-- Десктопный вид (таблица) -->
  <table class="hidden-md w-full border">
    <thead>
      <tr class="bg-gray-50">
        <th class="border p-2">Название</th>
        <th class="border p-2">Цена</th>
        <th class="border p-2">Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Товар 1</td>
        <td class="border p-2">$99</td>
        <td class="border p-2">Описание товара</td>
      </tr>
      <tr>
        <td class="border p-2">Товар 2</td>
        <td class="border p-2">$149</td>
        <td class="border p-2">Описание товара</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Брейкпоинты

```html
<div class="flex flex-column gap-4">
  <!-- Только мобильные -->
  <div class="hidden-md bg-primary-100 p-4 rounded">
    <strong>Только мобильные</strong>
    <p>Видно на экранах &lt; 768px</p>
  </div>
  
  <!-- Мобильные и планшеты -->
  <div class="hidden-lg bg-primary-200 p-4 rounded">
    <strong>Мобильные и планшеты</strong>
    <p>Видно на экранах &lt; 1280px</p>
  </div>
  
  <!-- Все кроме больших экранов -->
  <div class="hidden-full bg-primary-300 p-4 rounded">
    <strong>Все кроме больших экранов</strong>
    <p>Видно на экранах &lt; 1920px</p>
  </div>
</div>
```

## Логика работы

| Класс | Min-width | Max-width | Когда виден |
|-------|-----------|-----------|-------------|
| `.hidden` | — | — | Никогда |
| `.hidden-md` | 768px | 1279px | < 768px |
| `.hidden-lg` | 1280px | 1919px | < 1280px |
| `.hidden-full` | 1920px | — | < 1920px |

## CSS свойства

```scss
.hidden {
  display: none !important;
}

@media (min-width: 768px) and (max-width: 1279px) {
  .hidden-md {
    display: none !important;
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .hidden-lg {
    display: none !important;
  }
}

@media (min-width: 1920px) {
  .hidden-full {
    display: none !important;
  }
}
```

## Таблица классов

| Класс | Описание |
|-------|----------|
| `.hidden` | Скрыт всегда |
| `.hidden-md` | Скрыт на экранах ≥ 768px |
| `.hidden-lg` | Скрыт на экранах ≥ 1280px |
| `.hidden-full` | Скрыт на экранах ≥ 1920px |

## См. также

- [Display](../display/index.md) — управление отображением
- [Flexbox](../flexbox/index.md) — для адаптивных макетов
- [Grid](../grid/index.md) — для адаптивных сеток
