# Модуль границ (border)

CSS классы для управления границами (border) элементов.

## Классы толщины границ

### Все стороны
```html
<div class="border">Граница 1px</div>
<div class="border-0">Без границы</div>
<div class="border-1">1px</div>
<div class="border-2">2px</div>
<div class="border-3">3px</div>
<div class="border-4">4px</div>
<div class="border-5">5px</div>
```

### Отдельные стороны
```html
<!-- Горизонтальные (left + right) -->
<div class="border-x">Границы слева и справа</div>
<div class="border-x-2">2px</div>

<!-- Вертикальные (top + bottom) -->
<div class="border-y">Границы сверху и снизу</div>
<div class="border-y-2">2px</div>

<!-- Верх -->
<div class="border-t">Граница сверху</div>
<div class="border-t-2">2px</div>

<!-- Низ -->
<div class="border-b">Граница снизу</div>
<div class="border-b-2">2px</div>

<!-- Лево -->
<div class="border-l">Граница слева</div>
<div class="border-l-2">2px</div>

<!-- Право -->
<div class="border-r">Граница справа</div>
<div class="border-r-2">2px</div>
```

## Цвета границ

### Основные
```html
<div class="border-primary">Основной цвет</div>
<div class="border-secondary">Вторичный</div>
<div class="border-success">Успех</div>
<div class="border-danger">Опасность</div>
<div class="border-warning">Предупреждение</div>
<div class="border-info">Информация</div>
```

### Оттенки
```html
<div class="border-gray-200">...</div>
<div class="border-gray-300">...</div>
<div class="border-gray-400">...</div>
<div class="border-red-500">...</div>
<div class="border-blue-500">...</div>
```

### Цвета по сторонам
```html
<div class="border-t-primary">Верх - основной</div>
<div class="border-b-danger">Низ - опасность</div>
<div class="border-l-success">Лево - успех</div>
<div class="border-r-warning">Право - предупреждение</div>
```

### Прозрачные и пунктирные
```html
<div class="border-transparent">Прозрачная</div>
<div class="border-dashed">Пунктирная</div>
```

## Разделители (divider)

### Горизонтальные
```html
<hr class="divider-x">
<hr class="divider-x--small">
<hr class="divider-x--medium">
<hr class="divider-x--large">
```

### Вертикальные
```html
<div class="h-full">
  <div class="divider-y"></div>
  <div class="divider-y--small"></div>
  <div class="divider-y--medium"></div>
  <div class="divider-y--large"></div>
</div>
```

## Скругление углов

См. отдельную документацию: [rounded](./rounded.md)

## Примеры

```html
<!-- Карточка с границами -->
<div class="border border-gray-200 rounded-lg p-4">
  Контент
</div>

<!-- Кнопка с границей -->
<button class="border border-primary-500 text-primary-500 rounded px-4 py-2">
  Кнопка
</input>

<!-- Инпут -->
<input class="border border-gray-300 rounded px-3 py-2">

<!-- Разделитель между секциями -->
<section>Контент 1</section>
<hr class="divider-x--medium">
<section>Контент 2</section>
```
