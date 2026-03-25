---
title: Position
outline:
  level: 2
---

# Position

Classes for managing element positioning.

## Position Type

| Class | Description |
|-------|-------------|
| `.relative` | Relative positioning |
| `.absolute` | Absolute positioning |
| `.fixed` | Fixed positioning |
| `.sticky` | Sticky positioning |
| `.static` | Static positioning |

## Coordinates

| Class | Description |
|-------|-------------|
| `.top-0`, `.top-4`, `.top-auto` | Top position |
| `.right-0`, `.right-4`, `.right-auto` | Right position |
| `.bottom-0`, `.bottom-4`, `.bottom-auto` | Bottom position |
| `.left-0`, `.left-4`, `.left-auto` | Left position |

## Z-index

| Class | Description |
|-------|-------------|
| `.z-0` | Base level |
| `.z-10` | Level 10 |
| `.z-20` | Level 20 |
| `.z-50` | Level 50 |
| `.z-modal` | Modal level |

## Examples

::: component-view
<div class="relative h-32 bg-gray-100 rounded-base">
  <div class="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded-base">
    Top left
  </div>
  <div class="absolute bottom-0 right-0 p-2 bg-green-500 text-white rounded-base">
    Bottom right
  </div>
</div>
:::

```html
<div class="relative">
  <div class="absolute top-0 left-0">Top left</div>
  <div class="absolute bottom-0 right-0">Bottom right</div>
</div>
```
