---
title: Sizing
outline:
  level: 2
---

# Sizing

Classes for managing element dimensions.

## Width

| Class | Description |
|-------|-------------|
| `.w-full` | 100% width |
| `.w-screen` | 100% screen width |
| `.w-auto` | Auto width |

## Height

| Class | Description |
|-------|-------------|
| `.h-full` | 100% height |
| `.h-screen` | 100% screen height |
| `.h-auto` | Auto height |

## Examples

::: component-view
<div class="flex flex-column gap-4">
  <div class="w-full p-4 bg-blue-500 text-white rounded-base">
    w-full (100% width)
  </div>
  <div class="h-32 p-4 bg-green-500 text-white rounded-base">
    h-32 (fixed height)
  </div>
</div>
:::

```html
<div class="w-full">100% width</div>
<div class="h-full">100% height</div>
<div class="w-auto">Auto width</div>
```
