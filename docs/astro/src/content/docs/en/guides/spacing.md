---
title: Spacing
outline:
  level: 2
---

# Spacing

Classes for managing external (margin) and internal (padding) spacing.

## Margin

| Class | Description |
|-------|-------------|
| `.m-{size}` | Margin on all sides |
| `.mx-{size}` | Horizontal margin |
| `.my-{size}` | Vertical margin |
| `.mt-{size}` | Top margin |
| `.mr-{size}` | Right margin |
| `.mb-{size}` | Bottom margin |
| `.ml-{size}` | Left margin |

## Padding

| Class | Description |
|-------|-------------|
| `.p-{size}` | Padding on all sides |
| `.px-{size}` | Horizontal padding |
| `.py-{size}` | Vertical padding |
| `.pt-{size}` | Top padding |
| `.pr-{size}` | Right padding |
| `.pb-{size}` | Bottom padding |
| `.pl-{size}` | Left padding |

## Available Values

`0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

## Negative Margins

| Class | Description |
|-------|-------------|
| `.-m-{size}` | Negative margin |
| `.-mt-{size}` | Negative top margin |
| `.-mr-{size}` | Negative right margin |
| `.-mb-{size}` | Negative bottom margin |
| `.-ml-{size}` | Negative left margin |

## Examples

::: component-view
<div class="flex gap-4">
  <div class="p-4" style="background: var(--u-blue-100); border-radius: var(--u-rounded-base)">p-4</div>
  <div class="p-6" style="background: var(--u-green-100); border-radius: var(--u-rounded-base)">p-6</div>
  <div class="p-8" style="background: var(--u-yellow-100); border-radius: var(--u-rounded-base)">p-8</div>
</div>
:::

```html
<div class="p-4">padding 4</div>
<div class="p-6">padding 6</div>
<div class="p-8">padding 8</div>
```

::: component-view
<div class="flex gap-4">
  <div class="m-2 p-4" style="background: var(--u-blue-100); border-radius: var(--u-rounded-base)">m-2</div>
  <div class="m-4 p-4" style="background: var(--u-green-100); border-radius: var(--u-rounded-base)">m-4</div>
  <div class="m-6 p-4" style="background: var(--u-yellow-100); border-radius: var(--u-rounded-base)">m-6</div>
</div>
:::

```html
<div class="m-2 p-4">margin 2</div>
<div class="m-4 p-4">margin 4</div>
<div class="m-6 p-4">margin 6</div>
```
