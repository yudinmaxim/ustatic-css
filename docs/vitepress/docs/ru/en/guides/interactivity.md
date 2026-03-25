---
title: Interactivity
outline:
  level: 2
---

# Interactivity

Classes for managing element interaction.

## Pointer Events

| Class | Description |
|-------|-------------|
| `.pointer-events-none` | Disable pointer events |
| `.pointer-events-auto` | Enable pointer events |

## User Select

| Class | Description |
|-------|-------------|
| `.select-none` | Disable text selection |
| `.select-auto` | Enable text selection |
| `.select-all` | Select all on click |
| `.select-text` | Allow text selection |

## Examples

::: component-view
<div class="flex flex-column gap-4">
  <button class="px-4 py-2 bg-gray-200 rounded-base pointer-events-none">
    Disabled button
  </button>
  <p class="select-none p-2 bg-gray-100 rounded-base">
    Text that cannot be selected
  </p>
</div>
:::

```html
<button class="pointer-events-none">Disabled button</button>
<p class="select-none">Cannot select</p>
<p class="select-auto">Can select</p>
```
