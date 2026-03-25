---
title: Filters
outline:
  level: 2
---

# Filters

Classes for applying CSS filters to elements.

## Available Classes

| Class | Description |
|-------|-------------|
| `.filter-none` | No filter |
| `.filter-grayscale` | Grayscale |
| `.filter-sepia` | Sepia |
| `.filter-blur` | Blur |

## Examples

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
