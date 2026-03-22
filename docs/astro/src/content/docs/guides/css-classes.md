---
title: Использование CSS-классов
description: Полный справочник утилитарных классов uStatic CSS
---

# Использование CSS-классов

## Основные модули

### Типографика (typography)

- Размеры: `.text-2xs`, `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`
- Вес: `.font-thin`, `.font-light`, `.font-regular`, `.font-medium`, `.font-semibold`, `.font-bold`, `.font-extrabold`, `.font-black`
- Цвет: `.text-{color}`, `.text-{color}-{brightness}` (например, `.text-red-500`)

### Отступы (spacing)

- Margin: `.m-{size}`, `.mx-{size}`, `.my-{size}`, `.mt-{size}`, `.mr-{size}`, `.mb-{size}`, `.ml-{size}`
- Padding: `.p-{size}`, `.px-{size}`, `.py-{size}`, `.pt-{size}`, `.pr-{size}`, `.pb-{size}`, `.pl-{size}`
- Отрицательные: `.-m-{size}`, `.-mt-{size}` и т.д.

**Доступные значения:** `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

### Flexbox

- Контейнер: `.flex`, `.flex-column`, `.flex-wrap`
- Выравнивание: `.items-center`, `.items-start`, `.items-end`, `.justify-center`, `.justify-between`
- Gap: `.gap-1`, `.gap-2`, `.gap-4` и т.д.

### Grid

- Контейнер: `.grid`
- Колонки: `.grid-columns--1fr-1fr`, `.grid-columns--1fr-2fr`, `.grid-columns--3-32`

### Позиционирование

- Тип: `.relative`, `.absolute`, `.fixed`
- Координаты: `.top-0`, `.right-4`, `.bottom-2`, `.left-auto`
- Z-index: `.z-10`, `.z-20`, `.z-50`, `.z-i-modal`

### Границы

- Ширина: `.border`, `.border-0` … `.border-5`
- Стороны: `.border-t`, `.border-r`, `.border-b`, `.border-l`
- Скругления: `.rounded-none`, `.rounded-sm`, `.rounded-base`, `.rounded-lg`, `.rounded-full`

**Важно:** Класс `.rounded` без суффикса не существует — используйте `.rounded-base`.

### Фон

- Цвет: `.bg-{color}`, `.bg-{color}-{brightness}`
- Прозрачность: `.bg-opacity-0`, `.bg-opacity-25`, `.bg-opacity-50`, `.bg-opacity-75`, `.bg-opacity-100`

### Эффекты

- Прозрачность: `.opacity-0` … `.opacity-100`
- Поворот: `.rotate-0`, `.rotate-45`, `.rotate-90`, `.rotate-180`

### Анимации

- Вращение: `.animation:spin-1` … `.animation:spin-10`
- Мигание: `.blink`
- Подчёркивание: `.hover:underline--primary`

## Псевдоклассы

- `.hover:bg-{color}` — фон при наведении
- `.hover:text-{color}` — цвет текста при наведении
- `.hover:opacity-{value}` — прозрачность при наведении
- `.active:pulse` — пульсация при нажатии

## Примеры

```html
<!-- Карточка -->
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Заголовок</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600">
    Кнопка
  </button>
</div>

<!-- Сетка -->
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="p-4 bg-gray-100 rounded-base">Элемент 1</div>
  <div class="p-4 bg-gray-100 rounded-base">Элемент 2</div>
</div>
```

## Полный справочник

Полный список из 350+ классов см. в [Словаре утилитарных классов](/reference/classes).
