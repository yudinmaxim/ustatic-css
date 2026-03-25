---
title: Cursor
outline:
  level: 2
---

# Cursor

Classes for managing cursor appearance.

## Available Classes

| Class | Description |
|-------|-------------|
| `.cursor-pointer` | Pointer cursor (hand) |
| `.cursor-move` | Move cursor |
| `.cursor-default` | Default cursor |
| `.cursor-disabled` | Not-allowed cursor |
| `.cursor-resize-x` | Horizontal resize cursor |
| `.cursor-resize-y` | Vertical resize cursor |
| `.cursor-wait` | Wait cursor |
| `.cursor-help` | Help cursor |

## Examples

::: component-view
<div class="flex gap-4 flex-wrap">
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-default">
    default
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-pointer">
    pointer
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-disabled">
    disabled
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-wait">
    wait
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-help">
    help
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-move">
    move
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-resize-x">
    resize-x
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-resize-y">
    resize-y
  </div>
</div>
:::

```html
<div class="cursor-default">default</div>
<div class="cursor-pointer">pointer</div>
<div class="cursor-disabled">disabled</div>
<div class="cursor-wait">wait</div>
<div class="cursor-help">help</div>
<div class="cursor-move">move</div>
<div class="cursor-resize-x">resize-x</div>
<div class="cursor-resize-y">resize-y</div>
```
