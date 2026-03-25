---
title: Отображение (Display)
outline:
  level: 2
---

# Отображение (Display)

Классы для управления типом отображения элементов.

## Доступные классы

| Класс | Описание |
|-------|----------|
| `.block` | Блочный элемент |
| `.inline-block` | Строчно-блочный элемент |
| `.inline` | Строчный элемент |
| `.flex` | Flexbox контейнер |
| `.grid` | Grid контейнер |
| `.hidden` | Скрытый элемент |

## Примеры

::: component-view
<div class="flex gap-4 flex-wrap">
  <span class="block bg-blue-100 p-2 mb-2">block</span>
  <span class="inline-block bg-green-100 p-2">inline-block</span>
  <span class="inline bg-yellow-100 p-2">inline</span>
  <span class="hidden">hidden (не виден)</span>
</div>
:::

```html
<div class="block">block</div>
<span class="inline-block">inline-block</span>
<span class="inline">inline</span>
<div class="hidden">hidden</div>
```

## Скрытие элементов

Используйте `.hidden` для полного скрытия элемента:

::: component-view
<div class="hidden">Этот элемент не отображается</div>
<div class="block">Этот элемент виден</div>
:::

```html
<div class="hidden">Скрытый элемент</div>
```
