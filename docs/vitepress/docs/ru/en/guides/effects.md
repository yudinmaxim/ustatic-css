---
title: Effects
outline:
  level: 2
---

# Effects

Classes for managing visual effects.

## Opacity

| Class | Description |
|-------|-------------|
| `.opacity-0` | Fully transparent |
| `.opacity-25` | 25% opacity |
| `.opacity-50` | 50% opacity |
| `.opacity-75` | 75% opacity |
| `.opacity-100` | Fully opaque |

## Rotate

| Class | Description |
|-------|-------------|
| `.rotate-0` | No rotation |
| `.rotate-45` | Rotate 45° |
| `.rotate-90` | Rotate 90° |
| `.rotate-180` | Rotate 180° |
| `.rotate--45` | Rotate -45° |
| `.rotate--90` | Rotate -90° |

## Examples

::: component-view
<div class="flex gap-4 items-center">
  <div class="w-16 h-16 bg-blue-500 rounded-base opacity-50">
    50% opacity
  </div>
  <div class="w-16 h-16 bg-green-500 rounded-base rotate-45">
    rotate-45
  </div>
  <div class="w-16 h-16 bg-red-500 rounded-base rotate-180">
    rotate-180
  </div>
</div>
:::

```html
<div class="opacity-50">50% opacity</div>
<div class="rotate-45">Rotate 45°</div>
<div class="rotate-180">Rotate 180°</div>
```

## Hover Opacity

::: component-view
<div class="w-32 h-16 bg-blue-500 rounded-base hover:opacity-50 cursor-pointer">
  Hover me
</div>
:::

```html
<div class="hover:opacity-50">Hover me</div>
```
