# Gap (gap.scss)

CSS классы для управления отступами между flex/grid элементами.

## Классы gap

### Все стороны
```html
<div class="flex gap-0">Нет отступов</div>
<div class="flex gap-1">4px</div>
<div class="flex gap-2">8px</div>
<div class="flex gap-3">12px</div>
<div class="flex gap-4">16px</div>
<div class="flex gap-5">20px</div>
<div class="flex gap-6">24px</div>
<div class="flex gap-7">28px</div>
<div class="flex gap-8">32px</div>
<div class="flex gap-9">36px</div>
<div class="flex gap-10">40px</div>
<div class="flex gap-auto">auto</div>
```

### Только вертикальные (row-gap)
```html
<div class="flex gap-y-4">Отступ между рядами: 16px</div>
```

### Только горизонтальные (column-gap)
```html
<div class="flex gap-x-4">Отступ между колонками: 16px</div>
```

## Соответствие значений

| Класс | Значение |
|-------|----------|
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

## CSS свойства

```scss
.gap-4 {
  gap: 16px; /* row-gap и column-gap */
}

.gap-y-4 {
  row-gap: 16px;
}

.gap-x-4 {
  column-gap: 16px;
}
```

## Примеры

```html
<!-- Grid с gap -->
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>

<!-- Flex с gap -->
<div class="flex gap-2">
  <button>Кнопка 1</button>
  <button>Кнопка 2</button>
  <button>Кнопка 3</button>
</div>

<!-- Только вертикальный gap -->
<div class="flex flex-col gap-y-4">
  <div>Элемент 1</div>
  <div>Элемент 2</div>
  <div>Элемент 3</div>
</div>
```
