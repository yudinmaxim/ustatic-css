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

## Coordinates

| Class | Description |
|-------|-------------|
| `.top-0`, `.top-4` | Top position |
| `.right-0`, `.right-4` | Right position |
| `.bottom-0`, `.bottom-4` | Bottom position |
| `.left-0`, `.left-4` | Left position |

## Z-index

| Class | Description |
|-------|-------------|
| `.z-0` | Base level |
| `.z-10` | Level 10 |
| `.z-50` | Level 50 |

## Examples

::: component-view
<div class="relative h-32 bg-gray-100 rounded-base">
  <div class="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded-base">Top left</div>
  <div class="absolute bottom-0 right-0 p-2 bg-green-500 text-white rounded-base">Bottom right</div>
</div>
:::
