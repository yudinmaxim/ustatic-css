---
title: Background
outline:
  level: 2
---

# Background

Classes for managing backgrounds.

## Background Color

All palette colors: `.bg-{color}-{brightness}`

## Opacity

| Class | Description |
|-------|-------------|
| `.bg-opacity-0` | Fully transparent |
| `.bg-opacity-50` | 50% opacity |
| `.bg-opacity-100` | Fully opaque |

## Examples

::: component-view
<div class="flex gap-4">
  <div class="p-4 bg-blue-500 text-white rounded-base">Solid</div>
  <div class="p-4 bg-blue-500 bg-opacity-50 text-white rounded-base">Transparent</div>
</div>
:::
