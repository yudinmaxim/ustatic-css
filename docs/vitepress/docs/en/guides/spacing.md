---
title: Spacing
outline:
  level: 2
---

# Spacing

Classes for managing margin and padding.

## Margin

| Class | Description |
|-------|-------------|
| `.m-{size}` | Margin on all sides |
| `.mx-{size}` | Horizontal margin |
| `.my-{size}` | Vertical margin |
| `.mt-{size}` | Margin top |
| `.mr-{size}` | Margin right |
| `.mb-{size}` | Margin bottom |
| `.ml-{size}` | Margin left |

## Padding

| Class | Description |
|-------|-------------|
| `.p-{size}` | Padding on all sides |
| `.px-{size}` | Horizontal padding |
| `.py-{size}` | Vertical padding |
| `.pt-{size}` | Padding top |
| `.pr-{size}` | Padding right |
| `.pb-{size}` | Padding bottom |
| `.pl-{size}` | Padding left |

## Available Values

`0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`

## Negative Margin

| Class | Description |
|-------|-------------|
| `.-m-{size}` | Negative margin |
| `.-mt-{size}` | Negative margin top |
| `.-mr-{size}` | Negative margin right |
| `.-mb-{size}` | Negative margin bottom |
| `.-ml-{size}` | Negative margin left |

## Examples

::: component-view
<div class="flex gap-4">
  <div class="p-4 bg-blue-100 rounded-base">p-4</div>
  <div class="p-6 bg-green-100 rounded-base">p-6</div>
  <div class="p-8 bg-yellow-100 rounded-base">p-8</div>
</div>
:::
