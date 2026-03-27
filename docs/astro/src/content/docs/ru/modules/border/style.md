---
title: Style
description: Стили границ
---

# Начертание границ (border style)

Классы для управления стилем границ элементов.

## Стили границ

### Solid (сплошная)

```html
<div class="border border-solid p-4 bg-white">
  border-solid — сплошная линия
</div>
```

### Dashed (пунктирная)

```html
<div class="border border-dashed p-4 bg-white">
  border-dashed — пунктирная линия
</div>
```

### Dotted (точками)

```html
<div class="border border-dotted p-4 bg-white">
  border-dotted — линия точками
</div>
```

## Примеры использования

### Форма с пунктирными полями

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input 
      type="email" 
      class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
             focus:outline-none focus:border-solid focus:border-primary-500"
      placeholder="you@example.com"
    >
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Пароль
    </label>
    <input 
      type="password" 
      class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
             focus:outline-none focus:border-solid focus:border-primary-500"
      placeholder="••••••••"
    >
  </div>
</form>
```

### Зона для перетаскивания файлов

```html
<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 cursor-pointer">
  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
  </svg>
  <p class="text-gray-600">Перетащите файлы сюда или кликните для выбора</p>
  <p class="text-sm text-gray-400 mt-2">PNG, JPG, GIF до 10MB</p>
</div>
```

### Карточка с пунктирной границей

```html
<div class="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
  <h3 class="font-bold text-gray-700 mb-2">Дополнительная информация</h3>
  <p class="text-gray-600 text-sm">
    Этот блок содержит дополнительную информацию, которая отображается с пунктирной границей
  </p>
</div>
```

### Выделение области

```html
<div class="border-2 border-dotted border-primary-300 rounded-lg p-4 bg-primary-50">
  <h4 class="font-bold text-primary-700 mb-2">Область выделения</h4>
  <p class="text-primary-600 text-sm">
    Эта область выделена точечной границей для привлечения внимания
  </p>
</div>
```

### Чекбокс с пунктирной границей

```html
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="border-2 border-dashed border-gray-300 rounded">
  <span class="text-gray-700">Согласен с условиями</span>
</label>
```

## Комбинирование со стилями

### Изменение стиля при наведении

```html
<div class="border border-dashed border-gray-300 hover:border-solid hover:border-primary-500 
            p-4 rounded-lg transition-colors cursor-pointer">
  Наведи на меня — граница станет сплошной
</div>
```

### Изменение стиля при фокусе

```html
<input 
  type="text" 
  class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
         focus:outline-none focus:border-solid focus:border-primary-500 focus:ring-2 
         focus:ring-primary-200"
  placeholder="Кликни для фокуса"
>
```

## Таблица классов

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `border-solid` | `border-style: solid` | Сплошная линия |
| `border-dashed` | `border-style: dashed` | Пунктирная линия |
| `border-dotted` | `border-style: dotted` | Линия точками |

## Примеры CSS

```scss
// Сплошная граница
.border-solid {
  border-style: solid;
}

// Пунктирная граница
.border-dashed {
  border-style: dashed;
}

// Граница точками
.border-dotted {
  border-style: dotted;
}
```

## См. также

- [Границы](./index.md) — для управления толщиной и цветом границ
- [Контур](../outline/index.md) — для обводки элементов
- [Эффекты](../effects/index.md) — для интерактивных состояний
