# Отступы между элементами (gap)

Классы для управления отступами между элементами во flexbox и grid контейнерах.

## Основные классы gap

### Все стороны

| Класс | Значение | Класс | Значение |
|-------|----------|-------|----------|
| `.gap-0` | 0 | `.gap-6` | 24px |
| `.gap-1` | 4px | `.gap-7` | 28px |
| `.gap-2` | 8px | `.gap-8` | 32px |
| `.gap-3` | 12px | `.gap-9` | 36px |
| `.gap-4` | 16px | `.gap-10` | 40px |
| `.gap-5` | 20px | `.gap-auto` | auto |

### Примеры

```html
<!-- Flex с gap -->
<div class="flex gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- Grid с gap -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>
```

## Вертикальные отступы (row-gap)

### Классы

| Класс | CSS свойство |
|-------|--------------|
| `.gap-y-0` | `row-gap: 0` |
| `.gap-y-1` | `row-gap: 4px` |
| `.gap-y-2` | `row-gap: 8px` |
| `.gap-y-3` | `row-gap: 12px` |
| `.gap-y-4` | `row-gap: 16px` |
| `.gap-y-5` | `row-gap: 20px` |
| `.gap-y-6` | `row-gap: 24px` |
| `.gap-y-8` | `row-gap: 32px` |
| `.gap-y-10` | `row-gap: 40px` |

### Примеры

```html
<!-- Только вертикальные отступы -->
<div class="flex flex-column gap-y-4">
  <div class="bg-primary-100 p-4">Элемент 1</div>
  <div class="bg-primary-100 p-4">Элемент 2</div>
  <div class="bg-primary-100 p-4">Элемент 3</div>
</div>

<!-- Grid с вертикальными отступами -->
<div class="grid grid-cols-3 gap-y-6">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
  <div class="bg-primary-100 p-4">4</div>
  <div class="bg-primary-100 p-4">5</div>
  <div class="bg-primary-100 p-4">6</div>
</div>
```

## Горизонтальные отступы (column-gap)

### Классы

| Класс | CSS свойство |
|-------|--------------|
| `.gap-x-0` | `column-gap: 0` |
| `.gap-x-1` | `column-gap: 4px` |
| `.gap-x-2` | `column-gap: 8px` |
| `.gap-x-3` | `column-gap: 12px` |
| `.gap-x-4` | `column-gap: 16px` |
| `.gap-x-5` | `column-gap: 20px` |
| `.gap-x-6` | `column-gap: 24px` |
| `.gap-x-8` | `column-gap: 32px` |
| `.gap-x-10` | `column-gap: 40px` |

### Примеры

```html
<!-- Только горизонтальные отступы -->
<div class="flex gap-x-4">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
</div>

<!-- Grid с горизонтальными отступами -->
<div class="grid grid-cols-4 gap-x-6">
  <div class="bg-primary-100 p-4">1</div>
  <div class="bg-primary-100 p-4">2</div>
  <div class="bg-primary-100 p-4">3</div>
  <div class="bg-primary-100 p-4">4</div>
</div>
```

## Примеры использования

### Карточки товаров

```html
<div class="grid grid-cols-4 gap-6 p-4">
  <div class="border rounded-lg p-4">
    <img src="product1.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 1</h3>
    <p class="text-primary-500">$99</p>
  </div>
  <div class="border rounded-lg p-4">
    <img src="product2.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 2</h3>
    <p class="text-primary-500">$149</p>
  </div>
  <div class="border rounded-lg p-4">
    <img src="product3.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 3</h3>
    <p class="text-primary-500">$199</p>
  </div>
  <div class="border rounded-lg p-4">
    <img src="product4.jpg" class="w-full h-40 object-cover rounded mb-2">
    <h3 class="font-bold">Товар 4</h3>
    <p class="text-primary-500">$249</p>
  </div>
</div>
```

### Навигация с кнопками

```html
<div class="flex gap-x-4">
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Главная
  </button>
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    О нас
  </button>
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Контакты
  </button>
</div>
```

### Форма с полями

```html
<form class="flex flex-column gap-4">
  <div class="flex flex-column gap-1">
    <label class="text-sm font-medium">Имя</label>
    <input type="text" class="border rounded px-4 py-2">
  </div>
  <div class="flex flex-column gap-1">
    <label class="text-sm font-medium">Email</label>
    <input type="email" class="border rounded px-4 py-2">
  </div>
  <div class="flex gap-x-4">
    <button type="submit" class="bg-primary-500 text-white px-4 py-2 rounded">
      Отправить
    </button>
    <button type="reset" class="border px-4 py-2 rounded">
      Сбросить
    </button>
  </div>
</form>
```

### Галерея изображений

```html
<div class="grid grid-cols-3 gap-4">
  <img src="photo1.jpg" class="w-full h-48 object-cover rounded-lg">
  <img src="photo2.jpg" class="w-full h-48 object-cover rounded-lg">
  <img src="photo3.jpg" class="w-full h-48 object-cover rounded-lg">
  <img src="photo4.jpg" class="w-full h-48 object-cover rounded-lg">
  <img src="photo5.jpg" class="w-full h-48 object-cover rounded-lg">
  <img src="photo6.jpg" class="w-full h-48 object-cover rounded-lg">
</div>
```

### Список тегов

```html
<div class="flex flex-wrap gap-2">
  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
    JavaScript
  </span>
  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
    TypeScript
  </span>
  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
    React
  </span>
  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
    Vue
  </span>
  <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
    Node.js
  </span>
</div>
```

### Адаптивная сетка

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
  <div class="bg-white border rounded-lg p-4">
    <h3 class="font-bold mb-2">Карточка 1</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="bg-white border rounded-lg p-4">
    <h3 class="font-bold mb-2">Карточка 2</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="bg-white border rounded-lg p-4">
    <h3 class="font-bold mb-2">Карточка 3</h3>
    <p class="text-gray-600">Описание</p>
  </div>
  <div class="bg-white border rounded-lg p-4">
    <h3 class="font-bold mb-2">Карточка 4</h3>
    <p class="text-gray-600">Описание</p>
  </div>
</div>
```

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Все стороны** | `gap-0`, `gap-1`, `gap-2`, `gap-3`, `gap-4`, `gap-5`, `gap-6`, `gap-7`, `gap-8`, `gap-9`, `gap-10`, `gap-auto` |
| **Вертикальные** | `gap-y-0`, `gap-y-1`, `gap-y-2`, `gap-y-3`, `gap-y-4`, `gap-y-5`, `gap-y-6`, `gap-y-8`, `gap-y-10` |
| **Горизонтальные** | `gap-x-0`, `gap-x-1`, `gap-x-2`, `gap-x-3`, `gap-x-4`, `gap-x-5`, `gap-x-6`, `gap-x-8`, `gap-x-10` |

## Соответствие значений

| Класс | Пиксели |
|-------|---------|
| `gap-0` | 0 |
| `gap-1` | 4px |
| `gap-2` | 8px |
| `gap-3` | 12px |
| `gap-4` | 16px |
| `gap-5` | 20px |
| `gap-6` | 24px |
| `gap-7` | 28px |
| `gap-8` | 32px |
| `gap-9` | 36px |
| `gap-10` | 40px |

## См. также

- [Flexbox](./index.md) — flexbox раскладка
- [Grid](../grid/index.md) — grid раскладка
- [Отступы](../spacing/index.md) — margin и padding
