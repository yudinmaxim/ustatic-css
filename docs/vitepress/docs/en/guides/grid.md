---
title: Grid
outline:
  level: 2
---

# Grid

Classes for managing grid layouts.

## Container

| Class | Description |
|-------|-------------|
| `.grid` | Enables grid |

## Columns

| Class | Description |
|-------|-------------|
| `.grid-columns--1fr-1fr` | Two equal columns |
| `.grid-columns--1fr-2fr` | Columns 1:2 |
| `.grid-columns--1fr-3fr` | Columns 1:3 |
| `.grid-columns--2fr-1fr` | Columns 2:1 |

## Examples

::: component-view
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="p-4 bg-blue-100 rounded-base">Column 1</div>
  <div class="p-4 bg-green-100 rounded-base">Column 2</div>
</div>
:::
