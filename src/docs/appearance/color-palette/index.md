# Палитра цветов

uStatic CSS включает обширную цветовую палитру для создания консистентного дизайна.

## Основные цвета

### Primary (Основной цвет бренда)

| Оттенок | Класс | HEX | Пример |
|---------|-------|-----|--------|
| 50 | `bg-primary-50` | #edf5fc | <div class="w-8 h-4 bg-primary-50 border"></div> |
| 100 | `bg-primary-100` | #ddebf8 | <div class="w-8 h-4 bg-primary-100 border"></div> |
| 200 | `bg-primary-200` | #c4dcf3 | <div class="w-8 h-4 bg-primary-200 border"></div> |
| 300 | `bg-primary-300` | #9dc7ec | <div class="w-8 h-4 bg-primary-300 border"></div> |
| 400 | `bg-primary-400` | #74ade2 | <div class="w-8 h-4 bg-primary-400 border"></div> |
| 500 | `bg-primary-500` | #5993d9 | <div class="w-8 h-4 bg-primary-500 border"></div> |
| 600 | `bg-primary-600` | #4b7fd2 | <div class="w-8 h-4 bg-primary-600 border"></div> |
| 700 | `bg-primary-700` | #4471ca | <div class="w-8 h-4 bg-primary-700 border"></div> |
| 800 | `bg-primary-800` | #375bae | <div class="w-8 h-4 bg-primary-800 border"></div> |
| 900 | `bg-primary-900` | #33508e | <div class="w-8 h-4 bg-primary-900 border"></div> |
| 950 | `bg-primary-950` | #26375f | <div class="w-8 h-4 bg-primary-950 border"></div> |

### Secondary (Вторичный цвет)

| Оттенок | Класс | HEX | Пример |
|---------|-------|-----|--------|
| 50 | `bg-secondary-50` | #fdebe3 | <div class="w-8 h-4 bg-secondary-50 border"></div> |
| 500 | `bg-secondary-500` | #e53206 | <div class="w-8 h-4 bg-secondary-500 border"></div> |
| 900 | `bg-secondary-900` | #73201c | <div class="w-8 h-4 bg-secondary-900 border"></div> |

## Семантические цвета

### Success (Успех)

```html
<div class="bg-success text-white p-4 rounded">
  Операция выполнена успешно
</div>
```

**Оттенки:** `success-50` ... `success-900`, `success` (основной)

### Danger (Опасность/Ошибка)

```html
<div class="bg-danger text-white p-4 rounded">
  Произошла ошибка
</div>
```

**Оттенки:** `danger-50` ... `danger-900`, `danger` (основной)

### Warning (Предупреждение)

```html
<div class="bg-warning text-white p-4 rounded">
  Предупреждение
</div>
```

**Оттенки:** `warning-50` ... `warning-900`, `warning` (основной)

### Info (Информация)

```html
<div class="bg-info text-white p-4 rounded">
  Информационное сообщение
</div>
```

**Оттенки:** `info-50` ... `info-900`, `info` (основной)

## Нейтральные цвета (Gray)

| Оттенок | Класс | HEX | Пример |
|---------|-------|-----|--------|
| 50 | `bg-gray-50` | #f9fafb | <div class="w-8 h-4 bg-gray-50 border"></div> |
| 100 | `bg-gray-100` | #f3f4f6 | <div class="w-8 h-4 bg-gray-100 border"></div> |
| 200 | `bg-gray-200` | #e5e7eb | <div class="w-8 h-4 bg-gray-200 border"></div> |
| 300 | `bg-gray-300` | #d1d5db | <div class="w-8 h-4 bg-gray-300 border"></div> |
| 400 | `bg-gray-400` | #9ca3af | <div class="w-8 h-4 bg-gray-400 border"></div> |
| 500 | `bg-gray-500` | #6b7280 | <div class="w-8 h-4 bg-gray-500 border"></div> |
| 600 | `bg-gray-600` | #4b5563 | <div class="w-8 h-4 bg-gray-600 border"></div> |
| 700 | `bg-gray-700` | #374151 | <div class="w-8 h-4 bg-gray-700 border"></div> |
| 800 | `bg-gray-800` | #1f2937 | <div class="w-8 h-4 bg-gray-800 border"></div> |
| 900 | `bg-gray-900` | #111827 | <div class="w-8 h-4 bg-gray-900 border"></div> |

## Дополнительные цвета

### Красный (Red)

```html
<div class="flex gap-2">
  <div class="bg-red-50 w-8 h-8"></div>
  <div class="bg-red-100 w-8 h-8"></div>
  <div class="bg-red-500 w-8 h-8"></div>
  <div class="bg-red-700 w-8 h-8"></div>
  <div class="bg-red-900 w-8 h-8"></div>
</div>
```

### Оранжевый (Orange)

```html
<div class="flex gap-2">
  <div class="bg-orange-50 w-8 h-8"></div>
  <div class="bg-orange-100 w-8 h-8"></div>
  <div class="bg-orange-500 w-8 h-8"></div>
  <div class="bg-orange-700 w-8 h-8"></div>
</div>
```

### Жёлтый (Yellow)

```html
<div class="flex gap-2">
  <div class="bg-yellow-50 w-8 h-8"></div>
  <div class="bg-yellow-100 w-8 h-8"></div>
  <div class="bg-yellow-500 w-8 h-8"></div>
  <div class="bg-yellow-700 w-8 h-8"></div>
</div>
```

### Зелёный (Green)

```html
<div class="flex gap-2">
  <div class="bg-green-50 w-8 h-8"></div>
  <div class="bg-green-100 w-8 h-8"></div>
  <div class="bg-green-500 w-8 h-8"></div>
  <div class="bg-green-700 w-8 h-8"></div>
</div>
```

### Синий (Blue)

```html
<div class="flex gap-2">
  <div class="bg-blue-50 w-8 h-8"></div>
  <div class="bg-blue-100 w-8 h-8"></div>
  <div class="bg-blue-500 w-8 h-8"></div>
  <div class="bg-blue-700 w-8 h-8"></div>
</div>
```

### Голубой (Sky)

```html
<div class="flex gap-2">
  <div class="bg-sky-50 w-8 h-8"></div>
  <div class="bg-sky-100 w-8 h-8"></div>
  <div class="bg-sky-500 w-8 h-8"></div>
  <div class="bg-sky-700 w-8 h-8"></div>
</div>
```

## Специальные цвета

```html
<div class="flex gap-4">
  <div class="bg-white border w-16 h-16">Белый</div>
  <div class="bg-black text-white w-16 h-16">Чёрный</div>
  <div class="bg-transparent border w-16 h-16">Прозрачный</div>
</div>
```

## Использование цветов

### Фон

```html
<div class="bg-primary-500 text-white p-4">
  Фон основного цвета
</div>
```

### Текст

```html
<p class="text-primary-500">Текст основного цвета</p>
<p class="text-gray-600">Серый текст</p>
```

### Границы

```html
<div class="border border-primary-500 p-4">
  Граница основного цвета
</div>
```

### При наведении

```html
<button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
  Кнопка
</button>
```

## Примеры комбинаций

### Карточка в светлой теме

```html
<div class="bg-white border border-gray-200 rounded-lg p-6">
  <h3 class="text-gray-900 font-bold text-lg mb-2">Заголовок</h3>
  <p class="text-gray-600 mb-4">Описание</p>
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
    Действие
  </button>
</div>
```

### Уведомления

```html
<div class="space-y-2">
  <div class="bg-success text-white p-4 rounded">
    ✓ Успешно
  </div>
  <div class="bg-danger text-white p-4 rounded">
    ✗ Ошибка
  </div>
  <div class="bg-warning text-white p-4 rounded">
    ⚠ Предупреждение
  </div>
  <div class="bg-info text-white p-4 rounded">
    ℹ Информация
  </div>
</div>
```

### Статусы

```html
<div class="flex gap-2">
  <span class="bg-success/10 text-success px-2 py-1 rounded text-sm">
    Активен
  </span>
  <span class="bg-warning/10 text-warning px-2 py-1 rounded text-sm">
    Ожидание
  </span>
  <span class="bg-danger/10 text-danger px-2 py-1 rounded text-sm">
    Ошибка
  </span>
</div>
```

## Таблица всех цветов

| Категория | Цвета |
|-----------|-------|
| **Primary** | `primary-50`, `primary-100` ... `primary-950`, `primary` |
| **Secondary** | `secondary-50`, `secondary-500`, `secondary-900`, `secondary` |
| **Success** | `success-50` ... `success-900`, `success` |
| **Danger** | `danger-50` ... `danger-900`, `danger` |
| **Warning** | `warning-50` ... `warning-900`, `warning` |
| **Info** | `info-50` ... `info-900`, `info` |
| **Gray** | `gray-50`, `gray-100` ... `gray-900` |
| **Red** | `red-50`, `red-100` ... `red-900`, `red` |
| **Orange** | `orange-50`, `orange-100` ... `orange-900`, `orange` |
| **Yellow** | `yellow-50`, `yellow-100` ... `yellow-900`, `yellow` |
| **Green** | `green-50`, `green-100` ... `green-900`, `green` |
| **Sky** | `sky-50`, `sky-100` ... `sky-900`, `sky` |
| **Blue** | `blue-50`, `blue-100` ... `blue-900`, `blue` |
| **Спец.** | `white`, `black`, `transparent` |

## См. также

- [Фон](../../modules/bg/index.md) — классы для фона
- [Цвет текста](../../modules/typography/index.md#цвет-текста) — для окраски текста
- [Границы](../../modules/border/index.md) — для цветных границ
