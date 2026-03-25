---
title: Display
outline:
  level: 2
---

# Display

Classes for managing element display types.

## Available Classes

| Class | Description |
|-------|-------------|
| `.block` | Block element |
| `.inline-block` | Inline-block element |
| `.inline` | Inline element |
| `.flex` | Flexbox container |
| `.grid` | Grid container |
| `.hidden` | Hidden element |

## Examples

::: component-view
<div class="flex gap-4 flex-wrap">
  <span class="block bg-blue-100 p-2 mb-2">block</span>
  <span class="inline-block bg-green-100 p-2">inline-block</span>
  <span class="inline bg-yellow-100 p-2">inline</span>
  <span class="hidden">hidden (not visible)</span>
</div>
:::

```html
<div class="block">block</div>
<span class="inline-block">inline-block</span>
<span class="inline">inline</span>
<div class="hidden">hidden</div>
```

## Hiding Elements

Use `.hidden` to completely hide an element:

::: component-view
<div class="hidden">This element is not displayed</div>
<div class="block">This element is visible</div>
:::

```html
<div class="hidden">Hidden element</div>
```
