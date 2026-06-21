---
title: Border
outline:
  level: 2
---

# Border

Classes for managing element borders.

## Border Width

| Class | Description |
|-------|-------------|
| `.border-0` | No border |
| `.border` | 1px border |
| `.border-2` | 2px border |
| `.border-3` | 3px border |
| `.border-4` | 4px border |
| `.border-5` | 5px border |

::: component-view
<div class="flex gap-4 items-end">
  <div class="border-0 p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-0</span>
  </div>
  <div class="border p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border</span>
  </div>
  <div class="border-2 p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-2</span>
  </div>
  <div class="border-3 p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-3</span>
  </div>
  <div class="border-4 p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-4</span>
  </div>
  <div class="border-5 p-2" style="background: var(--u-gray-50); border-radius: var(--u-rounded-base)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-5</span>
  </div>
</div>
:::

## Borders by Side

| Class | Description |
|-------|-------------|
| `.border-t` | Top border |
| `.border-r` | Right border |
| `.border-b` | Bottom border |
| `.border-l` | Left border |
| `.border-x` | Horizontal borders |
| `.border-y` | Vertical borders |

::: component-view
<div class="flex gap-4 flex-wrap">
  <div class="border-t-2 border-t-blue-500 p-2" style="background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-t</span>
  </div>
  <div class="border-r-2 border-r-green-500 p-2" style="background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-r</span>
  </div>
  <div class="border-b-2 border-b-yellow-500 p-2" style="background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-b</span>
  </div>
  <div class="border-l-2 border-l-red-500 p-2" style="background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-l</span>
  </div>
  <div class="border-x-2" style="border-left-color: var(--u-purple-500); border-right-color: var(--u-purple-500); padding: 0.5rem; background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-x</span>
  </div>
  <div class="border-y-2" style="border-top-color: var(--u-orange-500); border-bottom-color: var(--u-orange-500); padding: 0.5rem; background: var(--u-gray-50)">
    <span style="font-size: 0.75rem; color: var(--u-gray-500)">border-y</span>
  </div>
</div>
:::

## Border Color

### All Sides

All palette colors are available via `.border-{color}-{brightness}`:

::: component-view
<div class="flex gap-2">
  <div class="w-16 h-16 border-2 border-gray-200" style="border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16 border-2 border-gray-400" style="border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16 border-2 border-gray-600" style="border-radius: var(--u-rounded-base)"></div>
  <div class="w-16 h-16 border-2 border-blue-500" style="border-radius: var(--u-rounded-base)"></div>
</div>
:::

### By Side

You can color a specific side:

| Class | Description |
|-------|-------------|
| `.border-t-{color}` | Top border color |
| `.border-r-{color}` | Right border color |
| `.border-b-{color}` | Bottom border color |
| `.border-l-{color}` | Left border color |

::: component-view
<div class="flex gap-4">
  <div class="w-20 h-20 border-t-2 border-t-red-500 flex items-center justify-center">
    <span style="font-size: 0.75rem; color: var(--u-red-500)">top</span>
  </div>
  <div class="w-20 h-20 border-r-2 border-r-blue-500 flex items-center justify-center">
    <span style="font-size: 0.75rem; color: var(--u-blue-500)">right</span>
  </div>
  <div class="w-20 h-20 border-b-2 border-b-green-500 flex items-center justify-center">
    <span style="font-size: 0.75rem; color: var(--u-green-500)">bottom</span>
  </div>
  <div class="w-20 h-20 border-l-2 border-l-yellow-500 flex items-center justify-center">
    <span style="font-size: 0.75rem; color: var(--u-yellow-500)">left</span>
  </div>
</div>
:::

## Border Radius

| Class | Description |
|-------|-------------|
| `.rounded-none` | No rounding |
| `.rounded-sm` | Small rounding |
| `.rounded-base` | Base rounding |
| `.rounded-lg` | Large rounding |
| `.rounded-xl` | Extra large rounding |
| `.rounded-full` | Full rounding (circle) |

**Important:** There is no `.rounded` class without a suffix — use `.rounded-base`.

::: component-view
<div class="flex gap-4 items-center flex-wrap">
  <div class="rounded-none w-16 h-16 flex items-center justify-center" style="background: var(--u-blue-500)">
    <span style="font-size: 0.75rem; color: #fff">none</span>
  </div>
  <div class="rounded-sm w-16 h-16 flex items-center justify-center" style="background: var(--u-green-500)">
    <span style="font-size: 0.75rem; color: #fff">sm</span>
  </div>
  <div class="rounded-base w-16 h-16 flex items-center justify-center" style="background: var(--u-yellow-500)">
    <span style="font-size: 0.75rem; color: #fff">base</span>
  </div>
  <div class="rounded-lg w-16 h-16 flex items-center justify-center" style="background: var(--u-sky-500)">
    <span style="font-size: 0.75rem; color: #fff">lg</span>
  </div>
  <div class="rounded-xl w-16 h-16 flex items-center justify-center" style="background: var(--u-red-500)">
    <span style="font-size: 0.75rem; color: #fff">xl</span>
  </div>
  <div class="rounded-full w-16 h-16 flex items-center justify-center" style="background: var(--u-orange-500)">
    <span style="font-size: 0.75rem; color: #fff">full</span>
  </div>
</div>
:::

## Examples

::: component-view
<div class="flex gap-4 items-center">
  <div class="p-4 border border-gray-200" style="border-radius: var(--u-rounded-base)">
    Base rounding
  </div>
  <div class="p-4 border-2 border-blue-500 rounded-full">
    Round border
  </div>
</div>
:::
