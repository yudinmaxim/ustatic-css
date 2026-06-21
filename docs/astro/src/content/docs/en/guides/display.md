---
title: Display
outline:
  level: 2
---

# Display

Classes for managing element display types and overflow.

## Display Classes

| Class | CSS | Description |
|-------|-----|-------------|
| `.block` | `display: block` | Block element |
| `.inline` | `display: inline` | Inline element |
| `.inline-block` | `display: inline-block` | Inline-block element |
| `.flex` | `display: flex` | Flexbox container |
| `.grid` | `display: grid` | Grid container |
| `.table` | `display: table` | Table |
| `.table-cell` | `display: table-cell` | Table cell |

## Examples

::: component-view
<div class="space-y-4">
  <div>
    <span class="block p-2" style="background: var(--u-blue-100); border: 1px solid var(--u-blue-300)">block (new line)</span>
    <span class="block p-2" style="background: var(--u-blue-100); border: 1px solid var(--u-blue-300)">block (another)</span>
  </div>

  <div>
    <span class="inline-block p-2" style="background: var(--u-green-100); border: 1px solid var(--u-green-300)">inline-block</span>
    <span class="inline-block p-2" style="background: var(--u-green-100); border: 1px solid var(--u-green-300)">inline-block</span>
  </div>

  <div>
    <span class="inline p-2" style="background: var(--u-yellow-100); border: 1px solid var(--u-yellow-300)">inline</span>
    <span class="inline p-2" style="background: var(--u-yellow-100); border: 1px solid var(--u-yellow-300)">inline</span>
  </div>
</div>
:::

## Hiding Elements

Use the `.hide` class to hide elements:

::: component-view
<div class="space-y-4">
  <div class="hide p-3" style="background: var(--u-red-100); border: 1px solid var(--u-red-300); border-radius: 0.25rem">
    This element is hidden via .hide
  </div>

  <div class="block p-3" style="background: var(--u-green-100); border: 1px solid var(--u-green-300); border-radius: 0.25rem">
    This element is visible
  </div>
</div>
:::

```html
<!-- Full element hiding -->
<div class="hide">Hidden element</div>
```

## Overflow

| Class | CSS | Description |
|-------|-----|-------------|
| `.overflow-hidden` | `overflow: hidden` | Hide overflow |
| `.overflow-scroll` | `overflow: scroll` | Always show scroll |
| `.overflow-auto` | `overflow: auto` | Auto scroll when needed |
| `.overflow-x-hidden` | `overflow-x: hidden` | Hide horizontal |
| `.overflow-y-hidden` | `overflow-y: hidden` | Hide vertical |
| `.overflow-x-scroll` | `overflow-x: scroll` | Horizontal scroll |
| `.overflow-y-scroll` | `overflow-y: scroll` | Vertical scroll |
| `.overflow-x-auto` | `overflow-x: auto` | Auto horizontal |
| `.overflow-y-auto` | `overflow-y: auto` | Auto vertical |

## Overflow Examples

### Hide Overflow

::: component-view
<div class="overflow-hidden w-48 h-20 border border-gray-300 rounded-base" style="background: var(--u-gray-50)">
  <p style="font-size: 0.875rem; color: var(--u-gray-600)">
    This text is very long and doesn't fit in the container, so it gets clipped...
  </p>
</div>
:::

### Vertical Scroll

::: component-view
<div class="overflow-y-auto h-32 border border-gray-300 rounded p-2" style="background: var(--u-gray-50)">
  <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">Scroll me down ↓</p>
  <p style="font-size: 0.875rem; color: var(--u-gray-600)">More text...</p>
  <p style="font-size: 0.875rem; color: var(--u-gray-600)">And more...</p>
  <p style="font-size: 0.875rem; color: var(--u-gray-600)">A bit more...</p>
  <p style="font-size: 0.875rem; color: var(--u-gray-600)">Continuing...</p>
</div>
:::

### Horizontal Scroll

::: component-view
<div class="overflow-x-auto border border-gray-300 rounded p-2" style="background: var(--u-gray-50)">
  <div class="flex gap-2 min-w-max">
    <div class="p-3 rounded-base" style="background: var(--u-blue-100); border: 1px solid var(--u-blue-300)">Item 1</div>
    <div class="p-3 rounded-base" style="background: var(--u-green-100); border: 1px solid var(--u-green-300)">Item 2</div>
    <div class="p-3 rounded-base" style="background: var(--u-yellow-100); border: 1px solid var(--u-yellow-300)">Item 3</div>
    <div class="p-3 rounded-base" style="background: var(--u-purple-100); border: 1px solid var(--u-purple-300)">Item 4</div>
    <div class="p-3 rounded-base" style="background: var(--u-pink-100); border: 1px solid var(--u-pink-300)">Item 5</div>
  </div>
</div>
:::

## See Also

- [Flexbox](/en/guides/flexbox/) — flexbox layout
