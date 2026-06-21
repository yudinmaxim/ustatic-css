---
title: Typography
outline:
  level: 2
---

# Typography

Classes for text management.

## Text Sizes

| Class | Description |
|-------|-------------|
| `.text-2xs` | Very small |
| `.text-xs` | Small |
| `.text-sm` | Smaller than medium |
| `.text-base` | Base |
| `.text-lg` | Large |
| `.text-xl` | Very large |
| `.text-2xl` | Extra large |

## Font Weight

| Class | Description |
|-------|-------------|
| `.font-thin` | Very thin (100) |
| `.font-light` | Light (300) |
| `.font-regular` | Regular (400) |
| `.font-medium` | Medium (500) |
| `.font-semibold` | Semi Bold (600) |
| `.font-bold` | Bold (700) |
| `.font-extrabold` | Extra Bold (800) |
| `.font-black` | Black (900) |

## Text Color

All palette colors are available via `.text-{color}-{brightness}`:

::: component-view
<div class="flex flex-column gap-2">
  <span class="text-gray-900 text-lg">text-gray-900</span>
  <span class="text-gray-700 text-lg">text-gray-700</span>
  <span class="text-gray-500 text-lg">text-gray-500</span>
  <span class="text-blue-500 text-lg">text-blue-500</span>
  <span class="text-red-500 text-lg">text-red-500</span>
</div>
:::

```html
<span class="text-gray-900">Main text</span>
<span class="text-gray-500">Secondary text</span>
<span class="text-blue-500">Accent text</span>
```

## Examples

::: component-view
<div class="flex flex-column gap-2">
  <p class="text-2xs font-light">Very small thin text</p>
  <p class="text-sm font-regular">Small regular text</p>
  <p class="text-base font-medium">Base medium text</p>
  <p class="text-lg font-semibold">Large semi-bold text</p>
  <p class="text-xl font-bold">Very large bold text</p>
</div>
:::

```html
<p class="text-2xs font-light">Very small thin text</p>
<p class="text-base font-medium">Base medium text</p>
<p class="text-xl font-bold">Very large bold text</p>
```
