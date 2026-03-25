---
title: Hide
outline:
  level: 2
---

# Hide

Classes for hiding elements at different screen sizes.

## Available Classes

| Class | Description |
|-------|-------------|
| `.hide-mobile` | Hide on mobile |
| `.hide-tablet` | Hide on tablets |
| `.hide-desktop` | Hide on desktop |

## Examples

::: component-view
<div class="flex flex-column gap-2">
  <div class="hide-mobile p-2 bg-blue-100 rounded-base">
    Visible only on tablets and desktop
  </div>
  <div class="hide-tablet p-2 bg-green-100 rounded-base">
    Visible only on mobile and desktop
  </div>
  <div class="hide-desktop p-2 bg-yellow-100 rounded-base">
    Visible only on mobile and tablets
  </div>
</div>
:::

```html
<div class="hide-mobile">Visible on tablets and desktop</div>
<div class="hide-tablet">Visible on mobile and desktop</div>
<div class="hide-desktop">Visible on mobile and tablets</div>
```
