# Модуль outline

CSS классы для управления обводкой (outline) элементов.

## Основные классы

```html
<!-- Убрать обводку -->
<button class="outline-none">Без обводки</button>
```

## Толщина обводки

```html
<div class="outline-0d5">Толщина 2px</div>
<div class="outline-1">Толщина 4px</div>
<div class="outline-2">Толщина 8px</div>
<div class="outline-3">Толщина 12px</div>
<div class="outline-4">Толщина 16px</div>
<div class="outline-5">Толщина 20px</div>
<div class="outline-6">Толщина 24px</div>
<div class="outline-8">Толщина 32px</div>
<div class="outline-9">Толщина 36px</div>
```

## Цвет обводки

```html
<div class="outline-primary">Основной цвет</div>
<div class="outline-secondary">Вторичный</div>
<div class="outline-success">Успех</div>
<div class="outline-danger">Опасность</div>
<div class="outline-warning">Предупреждение</div>
<div class="outline-info">Информация</div>
<div class="outline-gray-300">...</div>
<div class="outline-red-500">...</div>
```

## Стиль обводки

```html
<div class="outline-style--solid">Сплошная</div>
<div class="outline-style--dotted">Точками</div>
<div class="outline-style--dashed">Пунктир</div>
<div class="outline-style--groove">Вдавленная</div>
<div class="outline-style--ridge">Выпуклая</div>
<div class="outline-style--inset">Внутрь</div>
<div class="outline-style--outset">Наружу</div>
```

## Смещение обводки (offset)

```html
<div class="outline-offset-1">Смещение 1px</div>
<div class="outline-offset-2">Смещение 2px</div>
<div class="outline-offset-5">Смещение 5px</div>
<div class="outline-offset-10">Смещение 10px</div>

<!-- Отрицательное смещение -->
<div class="-outline-offset-1">Смещение -1px</div>
<div class="-outline-offset-5">Смещение -5px</div>
```

## Примеры

```html
<!-- Кнопка без обводки при фокусе -->
<button class="outline-none focus:outline-primary">
  Кнопка
</button>

<!-- Кастомный фокус -->
<input class="outline-none outline-2 outline-primary outline-offset-2">

<!-- Элемент с обводкой -->
<div class="outline outline-dashed outline-gray-300 p-4">
  Контент
</div>
```
