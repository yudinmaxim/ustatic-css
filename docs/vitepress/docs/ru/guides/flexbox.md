---
title: Flexbox
outline:
  level: 2
---

# Flexbox

Классы для управления flexbox-контейнерами и элементами.

## Контейнер

| Класс | Описание |
|-------|----------|
| `.flex` | Включает flexbox |
| `.flex-column` | Вертикальное направление |
| `.flex-wrap` | Перенос элементов |
| `.flex-nowrap` | Без переноса |

## Выравнивание (Alignment)

### По вертикали (items)

| Класс | Описание |
|-------|----------|
| `.items-start` | По верхнему краю |
| `.items-center` | По центру |
| `.items-end` | По нижнему краю |
| `.items-baseline` | По базовой линии |
| `.items-stretch` | Растянуть |

### По горизонтали (justify)

| Класс | Описание |
|-------|----------|
| `.justify-start` | По левому краю |
| `.justify-center` | По центру |
| `.justify-end` | По правому краю |
| `.justify-between` | Между элементами |
| `.justify-around` | Вокруг элементов |

## Gap (Отступы между элементами)

| Класс | Описание |
|-------|----------|
| `.gap-0` | Без отступа |
| `.gap-1` | Отступ 1 |
| `.gap-2` | Отступ 2 |
| `.gap-4` | Отступ 4 |
| `.gap-8` | Отступ 8 |

## Примеры

::: component-view
<div class="flex justify-between items-center gap-4 p-4 bg-gray-100 rounded-base">
  <span>Слева</span>
  <span>По центру</span>
  <span>Справа</span>
</div>
:::

```html
<div class="flex justify-between items-center gap-4">
  <span>Слева</span>
  <span>По центру</span>
  <span>Справа</span>
</div>
```

::: component-view
<div class="flex flex-column items-center gap-2 p-4 bg-gray-100 rounded-base">
  <span>Элемент 1</span>
  <span>Элемент 2</span>
  <span>Элемент 3</span>
</div>
:::

```html
<div class="flex flex-column items-center gap-2">
  <span>Элемент 1</span>
  <span>Элемент 2</span>
  <span>Элемент 3</span>
</div>
```
