---
title: Отступы (Spacing)
outline:
  level: 2
---

# Отступы (Spacing)

Классы для управления внешними (margin) и внутренними (padding) отступами.

## Margin (Внешние отступы)

| Класс | Описание |
|-------|----------|
| `.m-{size}` | Margin со всех сторон |
| `.mx-{size}` | Margin по горизонтали |
| `.my-{size}` | Margin по вертикали |
| `.mt-{size}` | Margin сверху |
| `.mr-{size}` | Margin справа |
| `.mb-{size}` | Margin снизу |
| `.ml-{size}` | Margin слева |

## Padding (Внутренние отступы)

| Класс | Описание |
|-------|----------|
| `.p-{size}` | Padding со всех сторон |
| `.px-{size}` | Padding по горизонтали |
| `.py-{size}` | Padding по вертикали |
| `.pt-{size}` | Padding сверху |
| `.pr-{size}` | Padding справа |
| `.pb-{size}` | Padding снизу |
| `.pl-{size}` | Padding слева |

## Доступные значения

`0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

## Отрицательные margin

| Класс | Описание |
|-------|----------|
| `.-m-{size}` | Отрицательный margin |
| `.-mt-{size}` | Отрицательный margin сверху |
| `.-mr-{size}` | Отрицательный margin справа |
| `.-mb-{size}` | Отрицательный margin снизу |
| `.-ml-{size}` | Отрицательный margin слева |

## Примеры

::: component-view
<div class="flex gap-4">
  <div class="p-4 bg-blue-100 rounded-base">p-4</div>
  <div class="p-6 bg-green-100 rounded-base">p-6</div>
  <div class="p-8 bg-yellow-100 rounded-base">p-8</div>
</div>
:::

```html
<div class="p-4">padding 4</div>
<div class="p-6">padding 6</div>
<div class="p-8">padding 8</div>
```

::: component-view
<div class="flex gap-4">
  <div class="m-2 p-4 bg-blue-100 rounded-base">m-2</div>
  <div class="m-4 p-4 bg-green-100 rounded-base">m-4</div>
  <div class="m-6 p-4 bg-yellow-100 rounded-base">m-6</div>
</div>
:::

```html
<div class="m-2 p-4">margin 2</div>
<div class="m-4 p-4">margin 4</div>
<div class="m-6 p-4">margin 6</div>
```
