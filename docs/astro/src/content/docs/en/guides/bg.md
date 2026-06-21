---
title: Background
outline:
  level: 2
---

# Background

Classes for managing element backgrounds.

## Background Color

All palette colors are available via `.bg-{color}-{brightness}`:

::: component-view
<div class="flex gap-2">
  <div class="w-16 h-16" style="background: var(--u-gray-100); border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16" style="background: var(--u-gray-300); border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16" style="background: var(--u-gray-500); border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16" style="background: var(--u-gray-700); border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16" style="background: var(--u-gray-900); border-radius: var(--u-rounded-base)"></div>
</div>
:::

```html
<div class="bg-gray-100">Light background</div>
<div class="bg-gray-500">Medium background</div>
<div class="bg-gray-900">Dark background</div>
```

## Background Opacity

| Class | Description |
|-------|-------------|
| `.bg-opacity-0` | Fully transparent |
| `.bg-opacity-25` | 25% opacity |
| `.bg-opacity-50` | 50% opacity |
| `.bg-opacity-75` | 75% opacity |
| `.bg-opacity-100` | Fully opaque |

## Examples

::: component-view
<div class="flex gap-4">
  <div class="p-4" style="background: var(--u-blue-500); color: #fff; border-radius: var(--u-rounded-base)">
    Solid background
  </div>
  <div class="p-4 bg-blue-500 bg-opacity-50" style="color: #fff; border-radius: var(--u-rounded-base)">
    Semi-transparent
  </div>
</div>
:::

```html
<div class="bg-blue-500">Solid background</div>
<div class="bg-blue-500 bg-opacity-50">Semi-transparent</div>
```
