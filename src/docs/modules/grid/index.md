# Grid

Модуль для работы с CSS Grid раскладкой — двумерная сетка для сложных макетов.

## Основные классы

### Контейнер

```html
<!-- Grid контейнер -->
<div class="grid">
  <div>Ячейка 1</div>
  <div>Ячейка 2</div>
  <div>Ячейка 3</div>
</div>

<!-- Grid с container-type -->
<div class="grid-container">
  <div>Ячейка 1</div>
  <div>Ячейка 2</div>
</div>
```

## Шаблоны колонок

### Простые шаблоны

| Класс | CSS свойство |
|-------|--------------|
| `.grid-columns` | `grid-template-columns: 1fr` |
| `.grid-columns--1fr-auto` | `1fr auto` |
| `.grid-columns--auto-1fr` | `auto 1fr` |
| `.grid-columns--1fr-1fr` | `1fr 1fr` |
| `.grid-columns--1fr-2fr` | `1fr 2fr` |
| `.grid-columns--1fr-1fr-1fr` | `1fr 1fr 1fr` |

```html
<!-- Две равные колонки -->
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="bg-primary-100 p-4">Колонка 1</div>
  <div class="bg-primary-100 p-4">Колонка 2</div>
</div>

<!-- Три равные колонки -->
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- 1fr + auto -->
<div class="grid grid-columns--1fr-auto gap-4">
  <div class="bg-primary-100 p-4">Растягивается</div>
  <div class="bg-primary-100 p-4">По контенту</div>
</div>
```

### Адаптивные шаблоны с minmax

| Класс | CSS свойство |
|-------|--------------|
| `.grid-columns--2-64` | `repeat(2, minmax(64px, 1fr))` |
| `.grid-columns--3-128` | `repeat(3, minmax(128px, 1fr))` |
| `.grid-columns--4-256` | `repeat(4, minmax(256px, 1fr))` |

```html
<!-- 2 колонки мин 64px -->
<div class="grid grid-columns--2-64 gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
</div>

<!-- 3 колонки мин 128px -->
<div class="grid grid-columns--3-128 gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- 4 колонки мин 256px -->
<div class="grid grid-columns--4-256 gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
  <div class="bg-primary-100 p-4">4</div>
</div>
```

## Шаблоны строк

### Простые шаблоны

| Класс | CSS свойство |
|-------|--------------|
| `.grid-rows` | `grid-template-rows: 1fr` |
| `.grid-rows--auto-1fr-auto` | `auto 1fr auto` |
| `.grid-rows--1fr-auto` | `1fr auto` |
| `.grid-rows--auto-1fr` | `auto 1fr` |
| `.grid-rows--1fr-1fr-1fr` | `1fr 1fr 1fr` |
| `.grid-rows--1fr-1fr` | `1fr 1fr` |

```html
<!-- Макет страницы -->
<div class="grid grid-rows--auto-1fr-auto min-h-screen">
  <header class="bg-gray-100 p-4">Хедер</header>
  <main class="p-4">Основной контент</main>
  <footer class="bg-gray-100 p-4">Подвал</footer>
</div>

<!-- Две строки -->
<div class="grid grid-rows--1fr-1fr h-64 gap-2">
  <div class="bg-primary-100 p-4">Строка 1</div>
  <div class="bg-primary-100 p-4">Строка 2</div>
</div>
```

## Объединение колонок (grid-column)

| Класс | CSS свойство |
|-------|--------------|
| `.grid-col-span-1` | `grid-column: span 1` |
| `.grid-col-span-2` | `grid-column: span 2` |
| `.grid-col-span-3` | `grid-column: span 3` |

```html
<!-- Объединение колонок -->
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <div class="grid-col-span-2 bg-primary-100 p-4">
    Занимает 2 колонки
  </div>
  <div class="bg-primary-100 p-4">Обычная</div>
  <div class="bg-primary-100 p-4">Обычная</div>
  <div class="bg-primary-100 p-4">Обычная</div>
  <div class="bg-primary-100 p-4">Обычная</div>
</div>
```

## Примеры использования

### Галерея изображений

```html
<div class="grid grid-columns--4-256 gap-4">
  <img src="photo1.jpg" alt="Фото 1" class="w-full h-48 object-cover rounded-lg">
  <img src="photo2.jpg" alt="Фото 2" class="w-full h-48 object-cover rounded-lg">
  <img src="photo3.jpg" alt="Фото 3" class="w-full h-48 object-cover rounded-lg">
  <img src="photo4.jpg" alt="Фото 4" class="w-full h-48 object-cover rounded-lg">
</div>
```

### Карточки товаров

```html
<div class="grid grid-columns--3-256 gap-6 p-4">
  <div class="border rounded-lg overflow-hidden">
    <img src="product1.jpg" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-bold">Товар 1</h3>
      <p class="text-primary-500">$99</p>
    </div>
  </div>
  <div class="border rounded-lg overflow-hidden">
    <img src="product2.jpg" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-bold">Товар 2</h3>
      <p class="text-primary-500">$149</p>
    </div>
  </div>
  <div class="border rounded-lg overflow-hidden">
    <img src="product3.jpg" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-bold">Товар 3</h3>
      <p class="text-primary-500">$199</p>
    </div>
  </div>
</div>
```

### Dashboard макет

```html
<div class="grid grid-columns--1fr-1fr-1fr gap-4 p-4">
  <!-- Большая карточка -->
  <div class="grid-col-span-2 bg-white border rounded-lg p-6">
    <h3 class="text-lg font-bold mb-4">Основная статистика</h3>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-primary-50 p-4 rounded">
        <p class="text-sm text-gray-600">Посетители</p>
        <p class="text-2xl font-bold">1,234</p>
      </div>
      <div class="bg-primary-50 p-4 rounded">
        <p class="text-sm text-gray-600">Заказы</p>
        <p class="text-2xl font-bold">56</p>
      </div>
    </div>
  </div>
  
  <!-- Боковая панель -->
  <div class="bg-white border rounded-lg p-6">
    <h3 class="text-lg font-bold mb-4">Активность</h3>
    <ul class="space-y-2">
      <li class="text-sm">Новый заказ</li>
      <li class="text-sm">Оплата получена</li>
      <li class="text-sm">Доставлен товар</li>
    </ul>
  </div>
</div>
```

### Форма с grid

```html
<form class="grid grid-columns--1fr-1fr gap-4">
  <div>
    <label class="block text-sm font-medium mb-1">Имя</label>
    <input type="text" class="border rounded px-4 py-2 w-full">
  </div>
  <div>
    <label class="block text-sm font-medium mb-1">Фамилия</label>
    <input type="text" class="border rounded px-4 py-2 w-full">
  </div>
  <div class="grid-col-span-2">
    <label class="block text-sm font-medium mb-1">Email</label>
    <input type="email" class="border rounded px-4 py-2 w-full">
  </div>
  <div class="grid-col-span-2">
    <button type="submit" class="bg-primary-500 text-white px-4 py-2 rounded">
      Отправить
    </button>
  </div>
</form>
```

### Блог с сайдбаром

```html
<div class="grid grid-columns--1fr-auto gap-6 max-w-6xl mx-auto">
  <!-- Основной контент -->
  <main class="grid grid-rows--auto-1fr gap-4">
    <article class="border rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Заголовок статьи</h2>
      <p class="text-gray-600">Содержимое статьи...</p>
    </article>
    <article class="border rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Другая статья</h2>
      <p class="text-gray-600">Содержимое статьи...</p>
    </article>
  </main>
  
  <!-- Сайдбар -->
  <aside class="w-64">
    <div class="border rounded-lg p-4 mb-4">
      <h3 class="font-bold mb-2">Категории</h3>
      <ul class="space-y-1">
        <li><a href="#" class="hover:text-primary-500">Технологии</a></li>
        <li><a href="#" class="hover:text-primary-500">Дизайн</a></li>
        <li><a href="#" class="hover:text-primary-500">Маркетинг</a></li>
      </ul>
    </div>
  </aside>
</div>
```

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Display** | `grid`, `grid-container` |
| **Колонки** | `grid-columns`, `grid-columns--1fr-auto`, `grid-columns--auto-1fr`, `grid-columns--1fr-1fr`, `grid-columns--1fr-2fr`, `grid-columns--1fr-1fr-1fr`, `grid-columns--2-64`, `grid-columns--3-128`, `grid-columns--4-256` |
| **Строки** | `grid-rows`, `grid-rows--auto-1fr-auto`, `grid-rows--1fr-auto`, `grid-rows--auto-1fr`, `grid-rows--1fr-1fr-1fr`, `grid-rows--1fr-1fr` |
| **Объединение** | `grid-col-span-1`, `grid-col-span-2`, `grid-col-span-3` |

## CSS свойства

```scss
.grid {
  display: grid;
}

.grid-columns {
  grid-template-columns: 1fr;
}

.grid-columns--1fr-1fr {
  grid-template-columns: 1fr 1fr;
}

.grid-columns--4-256 {
  grid-template-columns: repeat(4, minmax(256px, 1fr));
}

.grid-rows--auto-1fr-auto {
  grid-template-rows: auto 1fr auto;
}

.grid-col-span-2 {
  grid-column: span 2;
}
```

## См. также

- [Flexbox](../flexbox/index.md) — flexbox раскладка
- [Gap](../flexbox/gap.md) — отступы между элементами
- [Размеры](../sizing/index.md) — ширина и высота
