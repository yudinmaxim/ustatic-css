---
title: Flexbox
outline:
  level: 2
---

# Flexbox

Classes for managing flexbox containers and items.

## Container

| Class | Description |
|-------|-------------|
| `.flex` | Enables flexbox |
| `.flex-column` | Vertical direction |
| `.flex-wrap` | Wrap items |
| `.flex-nowrap` | No wrap |

## Alignment

### Vertical (items)

| Class | Description |
|-------|-------------|
| `.items-start` | Align to top |
| `.items-center` | Center |
| `.items-end` | Align to bottom |
| `.items-baseline` | Baseline |
| `.items-stretch` | Stretch |

### Horizontal (justify)

| Class | Description |
|-------|-------------|
| `.justify-start` | Start |
| `.justify-center` | Center |
| `.justify-end` | End |
| `.justify-between` | Space between |
| `.justify-around` | Space around |

## Gap

| Class | Description |
|-------|-------------|
| `.gap-0` | No gap |
| `.gap-1` | Gap 1 |
| `.gap-2` | Gap 2 |
| `.gap-4` | Gap 4 |
| `.gap-8` | Gap 8 |

## Examples

::: component-view
<div class="flex justify-between items-center gap-4 p-4 bg-gray-100 rounded-base">
  <span>Left</span>
  <span>Center</span>
  <span>Right</span>
</div>
:::

```html
<div class="flex justify-between items-center gap-4">
  <span>Left</span>
  <span>Center</span>
  <span>Right</span>
</div>
```

::: component-view
<div class="flex flex-column items-center gap-2 p-4 bg-gray-100 rounded-base">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>
:::

```html
<div class="flex flex-column items-center gap-2">
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
</div>
```
