---
title: CSS Classes — Overview
outline: false
---

# Using CSS Classes

uStatic CSS provides 350+ utility classes for rapid UI development.

## Core Modules

### [Typography](/en/guides/typography)

Text sizes, weights, and colors:

```html
<p class="text-sm font-medium">Text</p>
<p class="text-lg font-bold">Heading</p>
<span class="text-blue-500">Accent text</span>
```

### [Spacing](/en/guides/spacing)

Margin and padding:

```html
<div class="p-4 m-2">Spacing</div>
<div class="px-4 py-2">Horizontal and vertical</div>
<div class="-mt-4">Negative margin</div>
```

### [Flexbox](/en/guides/flexbox)

Flex containers:

```html
<div class="flex justify-between items-center gap-4">Container</div>
```

### [Grid](/en/guides/grid)

Grid layouts:

```html
<div class="grid grid-columns--1fr-1fr gap-4">Grid</div>
```

### [Positioning](/en/guides/position)

Element positioning:

```html
<div class="relative">
  <div class="absolute top-0 right-0">Absolute element</div>
</div>
```

### [Borders](/en/guides/border)

Borders and rounded corners:

```html
<div class="border border-gray-200 rounded-base">Card</div>
```

### [Background](/en/guides/bg)

Background color and transparency:

```html
<div class="bg-blue-500 bg-opacity-50">Background</div>
```

### [Effects](/en/guides/effects)

Opacity and rotation:

```html
<div class="opacity-50 rotate-45">Effect</div>
```

### [Cursor](/en/guides/cursor)

Cursor type:

```html
<button class="cursor-pointer">Button</button>
```

### [Display](/en/guides/display)

Display type:

```html
<div class="hidden">Hidden</div>
<div class="inline-block">Inline-block</div>
```

### [Align](/en/guides/align)

Vertical alignment:

```html
<span class="align-middle">Centered</span>
```

## Examples

### Card

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Header</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer active:pulse">
    Button
  </button>
</div>
:::

### Grid

::: component-view
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="p-4 bg-gray-100 rounded-base">Item 1</div>
  <div class="p-4 bg-gray-100 rounded-base">Item 2</div>
</div>
:::

## Module Navigation

Select a module in the sidebar for detailed documentation.
