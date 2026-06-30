# Модуль Flexbox

CSS классы для работы с flexbox раскладкой.

## Основные классы

### Контейнер
```html
<div class="flex">Flex контейнер</div>
<div class="flex-column">Колонка</div>
<div class="flex-row">Ряд</div>
<div class="flex-wrap">Перенос</div>
<div class="flex-nowrap">Без переноса</div>
```

### Направление
```html
<div class="flex-column">flex-direction: column</div>
<div class="flex-column-reverse">column-reverse</div>
<div class="flex-row">row (по умолчанию)</div>
<div class="flex-row-reverse">row-reverse</div>
```

## Выравнивание элементов (align-items)

| Класс | CSS свойство |
|-------|--------------|
| `.items-start` | `align-items: flex-start` |
| `.items-end` | `align-items: flex-end` |
| `.items-center` | `align-items: center` |
| `.items-baseline` | `align-items: baseline` |
| `.items-stretch` | `align-items: stretch` |

## Выравнивание контента (align-content)

| Класс | CSS свойство |
|-------|--------------|
| `.content-start` | `align-content: flex-start` |
| `.content-end` | `align-content: flex-end` |
| `.content-center` | `align-content: center` |
| `.content-between` | `align-content: space-between` |
| `.content-around` | `align-content: space-around` |
| `.content-stretch` | `align-content: stretch` |

## Выравнивание justify (justify-content)

| Класс | CSS свойство |
|-------|--------------|
| `.justify-start` | `justify-content: flex-start` |
| `.justify-end` | `justify-content: flex-end` |
| `.justify-center` | `justify-content: center` |
| `.justify-between` | `justify-content: space-between` |
| `.justify-around` | `justify-content: space-around` |
| `.justify-evenly` | `justify-content: space-evenly` |

## Выравнивание отдельного элемента (align-self)

| Класс | CSS свойство |
|-------|--------------|
| `.self-start` | `align-self: flex-start` |
| `.self-end` | `align-self: flex-end` |
| `.self-center` | `align-self: center` |
| `.self-baseline` | `align-self: baseline` |
| `.self-stretch` | `align-self: stretch` |

##伸缩 (flex)

```html
<div class="flex-0">Не растягивается</div>
<div class="flex-auto">Авто</div>
<div class="flex-1">Занимает всё место</div>
<div class="flex-none">Запрет растяжения</div>
```

## Grow (растяжение)

```html
<div class="grow">Растягивается</div>
<div class="grow-0">Не растягивается</div>
<div class="grow-1">Коэффициент 1</div>
<div class="grow-2">Коэффициент 2</div>
<div class="grow-3">Коэффициент 3</div>
```

## Shrink (сжатие)

```html
<div class="shrink">Сжимается</div>
<div class="shrink-0">Не сжимается</div>
<div class="shrink-1">Коэффициент 1</div>
<div class="shrink-2">Коэффициент 2</div>
<div class="shrink-3">Коэффициент 3</div>
```

## Порядок (order)

```html
<div class="order-1">Первый</div>
<div class="order-2">Второй</div>
<div class="order-3">Третий</div>
<div class="order-last">Всегда последний</div>
```

## Gap (отступы между элементами)

```html
<!-- Отступы со всех сторон -->
<div class="flex gap-1">...</div>
<div class="flex gap-2">...</div>
<div class="flex gap-4">...</div>
<div class="flex gap-8">...</div>

<!-- Только вертикальные -->
<div class="flex gap-y-4">...</div>

<!-- Только горизонтальные -->
<div class="flex gap-x-4">...</div>
```

## Примеры

```html
<!-- Центрирование -->
<div class="flex items-center justify-center h-64">
  <div>Центрированный контент</div>
</div>

<!-- Распределение -->
<div class="flex justify-between items-center">
  <span>Слева</span>
  <span>Центр</span>
  <span>Справа</span>
</div>

<!-- Карточки -->
<div class="flex flex-wrap gap-4">
  <div class="flex-1 min-w-64">Карточка 1</div>
  <div class="flex-1 min-w-64">Карточка 2</div>
  <div class="flex-1 min-w-64">Карточка 3</div>
</div>
```
