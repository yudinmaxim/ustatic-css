---
title: Flexbox
outline:
  level: 2
---

# Flexbox

Classes for managing flexbox containers and items.

## Container

| Class | CSS | Description |
|-------|-----|-------------|
| `.flex` | `display: flex` | Enables flexbox |
| `.flex-column` | `flex-direction: column` | Vertical direction |
| `.flex-column-reverse` | `flex-direction: column-reverse` | Reverse vertical |
| `.flex-row` | `flex-direction: row` | Horizontal direction |
| `.flex-row-reverse` | `flex-direction: row-reverse` | Reverse horizontal |
| `.flex-wrap` | `flex-wrap: wrap` | Wrap items |
| `.flex-nowrap` | `flex-wrap: nowrap` | No wrap |

## Container Examples

::: component-view
<div class="space-y-4">
  <!-- Horizontal row -->
  <div class="flex gap-2 p-3 bg-gray-50 rounded border">
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">1</div>
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">2</div>
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">3</div>
  </div>

  <!-- Vertical column -->
  <div class="flex-column gap-2 p-3 bg-gray-50 rounded border">
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">1</div>
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">2</div>
    <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">3</div>
  </div>
</div>
:::

## Alignment

### Vertical (items)

| Class | CSS | Description |
|-------|-----|-------------|
| `.items-start` | `align-items: flex-start` | Top edge |
| `.items-center` | `align-items: center` | Center |
| `.items-end` | `align-items: flex-end` | Bottom edge |
| `.items-baseline` | `align-items: baseline` | Baseline |
| `.items-stretch` | `align-items: stretch` | Stretch |

::: component-view
<div class="space-y-4">
  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">items-start</p>
    <div class="flex items-start h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">2</div>
    </div>
  </div>

  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">items-center</p>
    <div class="flex items-center h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">2</div>
    </div>
  </div>

  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">items-end</p>
    <div class="flex items-end h-24 border border-gray-200 rounded bg-gray-50 gap-2 p-2">
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">2</div>
    </div>
  </div>
</div>
:::

### Horizontal (justify)

| Class | CSS | Description |
|-------|-----|-------------|
| `.justify-start` | `justify-content: flex-start` | Left edge |
| `.justify-center` | `justify-content: center` | Center |
| `.justify-end` | `justify-content: flex-end` | Right edge |
| `.justify-between` | `justify-content: space-between` | Between items |
| `.justify-around` | `justify-content: space-around` | Around items |
| `.justify-evenly` | `justify-content: space-evenly` | Evenly |

::: component-view
<div class="space-y-4">
  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">justify-between</p>
    <div class="flex justify-between gap-2 border border-gray-200 rounded bg-gray-50 p-2">
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">2</div>
    </div>
  </div>

  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">justify-center</p>
    <div class="flex justify-center gap-2 border border-gray-200 rounded bg-gray-50 p-2">
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">2</div>
    </div>
  </div>
</div>
:::

## Gap (Spacing Between Items)

Available values: `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `auto`

| Class | Description |
|-------|-------------|
| `.gap-0` | No gap (0) |
| `.gap-1` | Gap 4px |
| `.gap-2` | Gap 8px |
| `.gap-3` | Gap 12px |
| `.gap-4` | Gap 16px |
| `.gap-5` | Gap 20px |
| `.gap-6` | Gap 24px |
| `.gap-8` | Gap 32px |
| `.gap-10` | Gap 40px |
| `.gap-auto` | Auto gap |

### gap-y and gap-x

| Class | Description |
|-------|-------------|
| `.gap-y-*` | Vertical gap only (row-gap) |
| `.gap-x-*` | Horizontal gap only (column-gap) |

::: component-view
<div class="space-y-4">
  <!-- Different gap values -->
  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">gap-1 (4px)</p>
    <div class="flex gap-1 border border-gray-200 rounded bg-gray-50 p-2">
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.75rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.75rem">2</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem; font-size: 0.75rem">3</div>
    </div>
  </div>

  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">gap-4 (16px)</p>
    <div class="flex gap-4 border border-gray-200 rounded bg-gray-50 p-2">
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">2</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">3</div>
    </div>
  </div>

  <div>
    <p style="font-size: 0.875rem; color: var(--u-gray-600); margin-bottom: 0.5rem">gap-8 (32px)</p>
    <div class="flex gap-8 border border-gray-200 rounded bg-gray-50 p-2">
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">1</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">2</div>
      <div style="background: var(--u-primary-100); padding: 0.5rem; border-radius: 0.25rem">3</div>
    </div>
  </div>
</div>
:::

## Flex Items

| Class | CSS | Description |
|-------|-----|-------------|
| `.flex-0` | `flex: 0 0 auto` | No stretching |
| `.flex-auto` | `flex: 1 1 auto` | Automatic |
| `.flex-1` | `flex: 1` | Takes all space |
| `.flex-none` | `flex: none` | Prevent stretching |

::: component-view
<div class="flex gap-2 border border-gray-200 rounded bg-gray-50 p-2 h-24">
  <div class="flex-0" style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">
    <span style="font-size: 0.75rem">flex-0</span>
  </div>
  <div class="flex-1" style="background: var(--u-primary-200); padding: 0.75rem; border-radius: 0.25rem">
    <span style="font-size: 0.75rem">flex-1 (stretches)</span>
  </div>
  <div class="flex-0" style="background: var(--u-primary-100); padding: 0.75rem; border-radius: 0.25rem">
    <span style="font-size: 0.75rem">flex-0</span>
  </div>
</div>
:::

## Usage Examples

### Header with Navigation

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg">
  <span class="text-lg font-bold text-primary-500">Logo</span>
  <nav class="flex gap-4">
    <a href="#" style="color: var(--u-gray-600)">About</a>
    <a href="#" style="color: var(--u-gray-600)">Products</a>
    <a href="#" style="color: var(--u-gray-600)">Contact</a>
  </nav>
</div>
:::

### Card with Footer

::: component-view
<div class="border border-gray-200 rounded-lg overflow-hidden bg-white max-w-sm">
  <div style="height: 8rem; background: linear-gradient(to bottom right, var(--u-primary-100), var(--u-primary-200))"></div>
  <div class="p-4">
    <h3 class="text-lg font-bold text-gray-900 mb-2">Title</h3>
    <p class="text-gray-600 text-sm">Description</p>
  </div>
  <div class="flex justify-between items-center px-4 py-3 bg-gray-50 border-t border-gray-200">
    <span class="text-primary-500 font-bold">$99.99</span>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded text-sm">
      Buy
    </button>
  </div>
</div>
:::

### Centering

::: component-view
<div class="flex items-center justify-center h-48" style="background: var(--u-gray-100); border-radius: 0.5rem; border: 1px solid var(--u-gray-200)">
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <p class="font-bold text-gray-900">Centered</p>
    <p style="font-size: 0.875rem; color: var(--u-gray-600)">Flexbox centering</p>
  </div>
</div>
:::

## See Also

- [Grid](/en/guides/grid/) — grid layout
- [Spacing](/en/guides/spacing/) — margin and padding
- [Display](/en/guides/display/) — display types
