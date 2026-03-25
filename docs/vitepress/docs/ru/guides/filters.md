---
title: Фильтры (Filters)
outline:
  level: 2
---

# Фильтры (Filters)

Классы для применения CSS-фильтров к элементам.

## Доступные классы

| Класс | Описание |
|-------|----------|
| `.filter-none` | Без фильтра |
| `.filter-grayscale` | Чёрно-белый |
| `.filter-sepia` | Сепия |
| `.filter-blur` | Размытие |

## Примеры

::: component-view
<div class="flex gap-4">
  <img src="https://via.placeholder.com/80" alt="normal" class="rounded-base" />
  <img src="https://via.placeholder.com/80" alt="grayscale" class="filter-grayscale rounded-base" />
  <img src="https://via.placeholder.com/80" alt="sepia" class="filter-sepia rounded-base" />
</div>
:::

```html
<img class="filter-none" />
<img class="filter-grayscale" />
<img class="filter-sepia" />
```
