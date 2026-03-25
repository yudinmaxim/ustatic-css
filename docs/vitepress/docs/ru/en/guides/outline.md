---
title: Outline
outline:
  level: 2
---

# Outline

Classes for managing element outlines (typically used for focus).

## Outline Width

| Class | Description |
|-------|-------------|
| `.outline-0` | No outline |
| `.outline` | 1px outline |
| `.outline-2` | 2px outline |
| `.outline-4` | 4px outline |

## Outline Color

All palette colors are available via `.outline-{color}`:

## Examples

::: component-view
<div class="flex gap-4">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base outline outline-2 outline-blue-300">
    With outline
  </button>
  <button class="px-4 py-2 bg-gray-200 rounded-base outline-0">
    Without outline
  </button>
</div>
:::

```html
<button class="outline outline-2 outline-blue-300">With outline</button>
<button class="outline-0">Without outline</button>
```
