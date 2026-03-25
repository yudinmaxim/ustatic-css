# Quick Start

## Using CSS Classes

Import the main styles file and use classes in markup:

```javascript
import 'ustatic-css';
```

::: component-view
<!-- Button -->
<button class="flex items-center justify-center gap-2 p-4 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer active:pulse ">
  Press me
</button>
:::

::: component-view
<!-- Card -->
<div class="block p-6 bg-white border border-gray-200 rounded-base">
  <h3 class="text-lg font-bold text-gray-800">Card header</h3>
  <p class="text-gray-600 mt-2">Card description</p>
</div>
:::

::: component-view
<!-- Badge -->
<span class="inline-block px-2 py-1 text-xs font-semibold text-red-600 bg-red-100 rounded-base">
  New
</span>
:::

::: component-view
<!-- Spin animation -->
<div class="relative">
  <div class="size-fit animation:spin-4">⚙️</div>
</div>
:::

::: component-view
<!-- Hover lift -->
<div class="hover-lift inline-block p-4 bg-white border border-gray-200 rounded-base">
  Hover me
</div>
:::

::: component-view
<!-- Pulse on active -->
<button class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-pointer active:pulse">
  Click me
</button>
:::

## Colors with Brightness

All color classes support brightness specification via hyphen:

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
<div class="px-4 py-2">Horizontal and vertical</div>
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

### Animations

```html
<div class="blink">Blinking element</div>
<div class="animation:spin-4">Spinning element</div>
<button class="active:pulse">Button with pulse</button>
<div class="hover-lift">Card with lift</div>
```

## Next Steps

- [CSS Classes](/en/guides/css-classes) — complete reference
- [Runtime Loading](/en/guides/runtime-loading) — dynamic loading
