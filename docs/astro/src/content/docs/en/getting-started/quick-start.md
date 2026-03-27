---
title: Quick Start
description: First example of using uStatic CSS
---

# Quick Start

## Using CSS Classes

Connect the main styles file and use classes in your markup:

```javascript
import 'ustatic-css';
```

```html
<!-- Button -->
<button class="flex items-center justify-center gap-2 p-4 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer">
  Click Me
</button>

<!-- Card -->
<div class="block p-6 bg-white border border-gray-200 rounded-base">
  <h3 class="text-lg font-bold text-gray-800">Title</h3>
  <p class="text-gray-600 mt-2">Card description</p>
</div>

<!-- Badge -->
<span class="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-base">
  New
</span>

<!-- Spin animation -->
<div class="animation:spin-4">⚙️</div>
```

## Colors with Brightness

All color classes support brightness specification via dash:

- `bg-red-500`, `bg-blue-300`, `bg-green-700`
- `text-gray-600`, `text-primary-400`
- `border-purple-500`, `border-orange-200`

## Available Classes

### Typography

```html
<p class="text-sm font-medium">Text</p>
<p class="text-lg font-bold">Heading</p>
```

### Spacing

```html
<div class="p-4 m-2">Spacing</div>
<div class="px-4 py-2">Horizontal and Vertical</div>
```

### Flexbox

```html
<div class="flex justify-between items-center gap-4">Container</div>
```

### Positioning

```html
<div class="relative">
  <div class="absolute top-0 right-0">Absolute element</div>
</div>
```

## Next Steps

- [Using CSS Classes](/guides/css-classes) — complete reference
- [Runtime Style Loading](/guides/runtime-loading) — dynamic loading
