---
title: Using CSS Classes
description: Complete reference of uStatic CSS utility classes
---

# Using CSS Classes

## Main Modules

### Typography (typography)

- Sizes: `.text-2xs`, `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`
- Weights: `.font-thin`, `.font-light`, `.font-regular`, `.font-medium`, `.font-semibold`, `.font-bold`, `.font-extrabold`, `.font-black`
- Colors: `.text-{color}`, `.text-{color}-{brightness}` (e.g., `.text-red-500`)

### Spacing (spacing)

- Margin: `.m-{size}`, `.mx-{size}`, `.my-{size}`, `.mt-{size}`, `.mr-{size}`, `.mb-{size}`, `.ml-{size}`
- Padding: `.p-{size}`, `.px-{size}`, `.py-{size}`, `.pt-{size}`, `.pr-{size}`, `.pb-{size}`, `.pl-{size}`
- Negative: `.-m-{size}`, `.-mt-{size}` etc.

**Available values:** `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

### Flexbox

- Container: `.flex`, `.flex-column`, `.flex-wrap`
- Alignment: `.items-center`, `.items-start`, `.items-end`, `.justify-center`, `.justify-between`
- Gap: `.gap-1`, `.gap-2`, `.gap-4` etc.

### Grid

- Container: `.grid`
- Columns: `.grid-columns--1fr-1fr`, `.grid-columns--1fr-2fr`, `.grid-columns--3-32`

### Positioning

- Type: `.relative`, `.absolute`, `.fixed`
- Coordinates: `.top-0`, `.right-4`, `.bottom-2`, `.left-auto`
- Z-index: `.z-10`, `.z-20`, `.z-50`, `.z-i-modal`

### Borders

- Width: `.border`, `.border-0` … `.border-5`
- Sides: `.border-t`, `.border-r`, `.border-b`, `.border-l`
- Radius: `.rounded-none`, `.rounded-sm`, `.rounded-base`, `.rounded-lg`, `.rounded-full`

**Important:** The `.rounded` class without suffix doesn't exist — use `.rounded-base`.

### Background

- Color: `.bg-{color}`, `.bg-{color}-{brightness}`
- Opacity: `.bg-opacity-0`, `.bg-opacity-25`, `.bg-opacity-50`, `.bg-opacity-75`, `.bg-opacity-100`

### Effects

- Opacity: `.opacity-0` … `.opacity-100`
- Rotation: `.rotate-0`, `.rotate-45`, `.rotate-90`, `.rotate-180`

### Animations

- Spin: `.animation:spin-1` … `.animation:spin-10`
- Blink: `.blink`
- Underline: `.hover:underline--primary`

## Pseudo-classes

- `.hover:bg-{color}` — background on hover
- `.hover:text-{color}` — text color on hover
- `.hover:opacity-{value}` — opacity on hover
- `.active:pulse` — pulse on click

## Examples

```html
<!-- Card -->
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Title</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600">
    Button
  </button>
</div>

<!-- Grid -->
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="p-4 bg-gray-100 rounded-base">Element 1</div>
  <div class="p-4 bg-gray-100 rounded-base">Element 2</div>
</div>
```

## Complete Reference

For the full list of 350+ classes, see the [Utility Classes Dictionary](/reference/classes).
