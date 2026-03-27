# Скругление углов (rounded)

Классы для скругления углов элементов.

## Основные классы

| Класс | Радиус | Визуально |
|-------|--------|-----------|
| `.rounded-none` | 0 | Острый угол |
| `.rounded-sm` | 2px | Маленькое |
| `.rounded-base` | 4px | Базовое |
| `.rounded-md` | 6px | Среднее |
| `.rounded-lg` | 8px | Большое |
| `.rounded-xl` | 12px | Очень большое |
| `.rounded-2xl` | 16px | Двойное |
| `.rounded-3xl` | 24px | Тройное |
| `.rounded-full` | 9999px | Круглый |

## Примеры

```html
<div class="flex gap-4 items-end">
  <div class="rounded-none bg-primary-500 w-16 h-16"></div>
  <div class="rounded-sm bg-primary-500 w-16 h-16"></div>
  <div class="rounded-base bg-primary-500 w-16 h-16"></div>
  <div class="rounded-md bg-primary-500 w-16 h-16"></div>
  <div class="rounded-lg bg-primary-500 w-16 h-16"></div>
  <div class="rounded-xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-2xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-3xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-full bg-primary-500 w-16 h-16"></div>
</div>
```

## Скругление по углам

### Все углы одной стороны

```html
<div class="flex gap-4">
  <div class="rounded-t-lg bg-primary-500 p-4 text-white">
    rounded-t-lg (верх)
  </div>
  <div class="rounded-r-lg bg-primary-500 p-4 text-white">
    rounded-r-lg (право)
  </div>
  <div class="rounded-b-lg bg-primary-500 p-4 text-white">
    rounded-b-lg (низ)
  </div>
  <div class="rounded-l-lg bg-primary-500 p-4 text-white">
    rounded-l-lg (лево)
  </div>
</div>
```

### Отдельные углы

```html
<div class="flex gap-4">
  <div class="rounded-tr-lg bg-primary-500 p-4 text-white">
    rounded-tr-lg (верх-право)
  </div>
  <div class="rounded-tl-lg bg-primary-500 p-4 text-white">
    rounded-tl-lg (верх-лево)
  </div>
  <div class="rounded-br-lg bg-primary-500 p-4 text-white">
    rounded-br-lg (низ-право)
  </div>
  <div class="rounded-bl-lg bg-primary-500 p-4 text-white">
    rounded-bl-lg (низ-лево)
  </div>
</div>
```

### Комбинации

```html
<div class="flex gap-4">
  <!-- Только верхние углы -->
  <div class="rounded-t-md rounded-b-none bg-primary-500 p-4 text-white">
    Только верх
  </div>
  
  <!-- Только нижние углы -->
  <div class="rounded-b-lg rounded-t-none bg-primary-500 p-4 text-white">
    Только низ
  </div>
  
  <!-- Один угол -->
  <div class="rounded-tr-full bg-primary-500 p-4 text-white">
    Один угол круглый
  </div>
</div>
```

## Круглые элементы

### Круглая кнопка

```html
<button class="circle w-12 h-12 bg-primary-500 text-white flex items-center justify-center">
  <svg class="w-6 h-6">...</svg>
</button>
```

### Круглый аватар

```html
<img 
  class="circle w-16 h-16 object-cover" 
  src="avatar.jpg" 
  alt="Аватар"
>
```

### Круглый бейдж

```html
<div class="rounded-full bg-primary-500 text-white w-8 h-8 flex items-center justify-center">
  1
</div>
```

## Примеры использования

### Карточка

```html
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h3 class="text-lg font-bold mb-2">Заголовок</h3>
  <p class="text-gray-600">Описание карточки</p>
</div>
```

### Кнопка

```html
<button class="rounded-md bg-primary-500 text-white px-4 py-2 hover:bg-primary-600">
  Кнопка
</button>
```

### Поле ввода

```html
<input 
  type="text" 
  class="rounded border border-gray-300 px-4 py-2 w-full
         focus:outline-none focus:border-primary-500"
  placeholder="Введите текст"
>
```

### Бейдж статуса

```html
<span class="rounded-full bg-success text-white px-3 py-1 text-sm">
  Активен
</span>
```

### Меню с закруглёнными краями

```html
<nav class="rounded-lg bg-gray-100 p-2 flex gap-2">
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Пункт 1</a>
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Пункт 2</a>
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Пункт 3</a>
</nav>
```

## Таблица соответствия

| Класс | CSS |
|-------|-----|
| `.rounded-none` | `border-radius: 0` |
| `.rounded-sm` | `border-radius: 2px` |
| `.rounded-base` | `border-radius: 4px` |
| `.rounded-md` | `border-radius: 6px` |
| `.rounded-lg` | `border-radius: 8px` |
| `.rounded-xl` | `border-radius: 12px` |
| `.rounded-2xl` | `border-radius: 16px` |
| `.rounded-3xl` | `border-radius: 24px` |
| `.rounded-full` | `border-radius: 9999px` |
| `.circle` | `border-radius: 100%` |

## См. также

- [Границы](./index.md) — для добавления границ
- [Размеры](../sizing/index.md) — для создания круглых элементов
- [Контур](../outline/index.md) — для обводки элементов
