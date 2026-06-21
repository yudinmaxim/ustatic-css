---
title: Flexbox
description: Flexbox module reference
---

# Flexbox

Module for flexbox layout — flexible alignment and distribution of elements.

## Basic Classes

### Container

```html
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<div class="flex-column">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="flex-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Justify Content

| Class | CSS | Description |
|-------|-----|-------------|
| `justify-start` | `justify-content: flex-start` | Align to start |
| `justify-center` | `justify-content: center` | Align to center |
| `justify-end` | `justify-content: flex-end` | Align to end |
| `justify-between` | `justify-content: space-between` | Space between |
| `justify-around` | `justify-content: space-around` | Space around |
| `justify-evenly` | `justify-content: space-evenly` | Evenly distributed |

### Align Items

| Class | CSS | Description |
|-------|-----|-------------|
| `items-start` | `align-items: flex-start` | Align to top |
| `items-center` | `align-items: center` | Align to center |
| `items-end` | `align-items: flex-end` | Align to bottom |
| `items-baseline` | `align-items: baseline` | Align to baseline |
| `items-stretch` | `align-items: stretch` | Stretch to fill |

## See Also

- [Grid](/en/modules/grid/) — CSS Grid layout
- [Display](/en/modules/display/) — display property
- [Spacing](/en/modules/spacing/) — margins and paddings
