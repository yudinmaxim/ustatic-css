---
title: Scroll
outline:
  level: 2
---

# Scroll

Classes for managing element scrolling.

## Overflow

| Class | Description |
|-------|-------------|
| `.overflow-auto` | Auto-scroll when needed |
| `.overflow-hidden` | Hide overflow |
| `.overflow-visible` | Show overflow |
| `.overflow-scroll` | Always show scrollbar |

## Examples

::: component-view
<div class="overflow-auto w-64 h-24 border border-gray-200 rounded-base p-2">
  <p class="text-sm">
    This is text with auto-scroll. If content doesn't fit, scrollbar appears.
    More text for scroll demonstration...
  </p>
</div>
:::

```html
<div class="overflow-auto">Auto-scroll</div>
<div class="overflow-hidden">Hide overflow</div>
<div class="overflow-scroll">Always scroll</div>
```
