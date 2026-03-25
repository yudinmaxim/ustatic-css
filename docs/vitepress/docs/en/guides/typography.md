---
title: Typography
outline:
  level: 2
---

# Typography

Classes for managing text.

## Text Sizes

| Class | Description |
|-------|-------------|
| `.text-2xs` | Extra small |
| `.text-xs` | Small |
| `.text-sm` | Smallish |
| `.text-base` | Base |
| `.text-lg` | Large |
| `.text-xl` | Extra large |
| `.text-2xl` | 2XL |

## Font Weight

| Class | Description |
|-------|-------------|
| `.font-thin` | Thin (100) |
| `.font-light` | Light (300) |
| `.font-regular` | Regular (400) |
| `.font-medium` | Medium (500) |
| `.font-semibold` | Semi-bold (600) |
| `.font-bold` | Bold (700) |
| `.font-extrabold` | Extra bold (800) |
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

## Examples

::: component-view
<div class="flex flex-column gap-2">
  <p class="text-2xs font-light">Extra small light text</p>
  <p class="text-sm font-regular">Small regular text</p>
  <p class="text-base font-medium">Base medium text</p>
  <p class="text-lg font-semibold">Large semi-bold text</p>
  <p class="text-xl font-bold">Extra large bold text</p>
</div>
:::
