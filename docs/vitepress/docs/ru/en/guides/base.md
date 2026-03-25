---
title: Base
outline:
  level: 2
---

# Base

Base classes for style reset and normalization.

## Box Sizing

| Class | Description |
|-------|-------------|
| `.box-border` | `box-sizing: border-box` |
| `.box-content` | `box-sizing: content-box` |

## Examples

::: component-view
<div class="flex gap-4">
  <div class="box-border w-32 p-4 border-2 border-blue-500">
    border-box
  </div>
  <div class="box-content w-32 p-4 border-2 border-green-500">
    content-box
  </div>
</div>
:::

```html
<div class="box-border">border-box</div>
<div class="box-content">content-box</div>
```
