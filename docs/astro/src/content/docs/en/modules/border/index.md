---
title: Border
description: Border module reference
---

# Border

Module providing classes for managing element borders: thickness, color, style, radius.

## Border Width

### All Sides

```html
<div class="flex gap-4 items-end">
  <div class="border p-4 bg-white">border (1px)</div>
  <div class="border-0 p-4 bg-white">border-0</div>
  <div class="border-1 p-4 bg-white">border-1</div>
  <div class="border-2 p-4 bg-white">border-2</div>
  <div class="border-3 p-4 bg-white">border-3</div>
  <div class="border-4 p-4 bg-white">border-4</div>
  <div class="border-5 p-4 bg-white">border-5</div>
</div>
```

### Individual Sides

```html
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <!-- Horizontal -->
  <div class="border-x p-4 bg-white">border-x (left and right)</div>
  <div class="border-x-2 p-4 bg-white">border-x-2</div>

  <!-- Vertical -->
  <div class="border-y p-4 bg-white">border-y (top and bottom)</div>
  <div class="border-y-2 p-4 bg-white">border-y-2</div>

  <!-- Top -->
  <div class="border-t p-4 bg-white">border-t</div>
  <div class="border-t-2 p-4 bg-white">border-t-2</div>

  <!-- Bottom -->
  <div class="border-b p-4 bg-white">border-b</div>
  <div class="border-b-2 p-4 bg-white">border-b-2</div>

  <!-- Left -->
  <div class="border-l p-4 bg-white">border-l</div>
  <div class="border-l-2 p-4 bg-white">border-l-2</div>

  <!-- Right -->
  <div class="border-r p-4 bg-white">border-r</div>
  <div class="border-r-2 p-4 bg-white">border-r-2</div>
</div>
```

## Border Colors

### Semantic Colors

```html
<div class="flex gap-4 flex-wrap">
  <div class="border border-primary p-4">border-primary</div>
  <div class="border border-secondary p-4">border-secondary</div>
  <div class="border border-success p-4">border-success</div>
  <div class="border border-danger p-4">border-danger</div>
  <div class="border border-warning p-4">border-warning</div>
  <div class="border border-info p-4">border-info</div>
</div>
```

### Colors by Side

```html
<div class="grid grid-columns--1fr-1fr gap-4">
  <div class="border-t-primary p-4 bg-white">border-t-primary</div>
  <div class="border-b-danger p-4 bg-white">border-b-danger</div>
  <div class="border-l-success p-4 bg-white">border-l-success</div>
  <div class="border-r-warning p-4 bg-white">border-r-warning</div>
</div>
```

### Gray Shades

```html
<div class="flex gap-4 items-end">
  <div class="border border-gray-200 p-4 bg-white">gray-200</div>
  <div class="border border-gray-300 p-4 bg-white">gray-300</div>
  <div class="border border-gray-400 p-4 bg-white">gray-400</div>
  <div class="border border-gray-500 p-4 bg-white">gray-500</div>
</div>
```

### Special

```html
<div class="flex gap-4">
  <div class="border border-transparent p-4 bg-white">border-transparent</div>
  <div class="border border-dashed p-4 bg-white">border-dashed</div>
</div>
```

## Dividers

### Horizontal Dividers

```html
<div>
  <section class="p-4">
    <h3>Section 1</h3>
    <p>Content of the first section</p>
  </section>

  <hr class="divider-x" />

  <section class="p-4">
    <h3>Section 2</h3>
    <p>Content of the second section</p>
  </section>

  <hr class="divider-x--small" />

  <section class="p-4">
    <h3>Section 3 (small gap)</h3>
  </section>

  <hr class="divider-x--medium" />

  <section class="p-4">
    <h3>Section 4 (medium gap)</h3>
  </section>

  <hr class="divider-x--large" />

  <section class="p-4">
    <h3>Section 5 (large gap)</h3>
  </section>
</div>
```

### Vertical Dividers

```html
<nav class="flex items-center">
  <a href="#" class="px-4 py-2" style="color: var(--u-gray-600)">Home</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2" style="color: var(--u-gray-600)">About</a>
  <div class="divider-y"></div>
  <a href="#" class="px-4 py-2" style="color: var(--u-gray-600)">Contact</a>
</nav>
```

**Divider gap sizes:**

| Class | Gap |
|-------|-----|
| `.divider-x`, `.divider-y` | 20px |
| `.divider-x--small`, `.divider-y--small` | 10px |
| `.divider-x--medium`, `.divider-y--medium` | 20px |
| `.divider-x--large`, `.divider-y--large` | 30px |

## Border Styles

```html
<div class="flex gap-4 flex-wrap">
  <div class="border p-4 bg-white">solid (default)</div>
  <div class="border border-dashed p-4 bg-white">dashed</div>
</div>
```

> The library only provides `border-dashed` as an additional style. By default, all borders are `solid`.

## Usage Examples

### Card with Border

```html
<div class="border border-gray-200 rounded-lg p-6 bg-white max-w-sm">
  <h3 class="text-lg font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card description with border</p>
</div>
```

### Input with Highlight

```html
<input
  type="text"
  class="border border-gray-300 rounded px-4 py-2
         focus:outline-none focus:border-primary-500 focus:ring-2
         focus:ring-primary-200"
  placeholder="Enter text"
/>
```

### Table with Borders

```html
<table class="border border-gray-200 w-full">
  <thead>
    <tr style="background: var(--u-gray-50)">
      <th class="border border-gray-200 p-2">Header 1</th>
      <th class="border border-gray-200 p-2">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-200 p-2">Cell 1</td>
      <td class="border border-gray-200 p-2">Cell 2</td>
    </tr>
  </tbody>
</table>
```

### Outlined Button

```html
<button
  class="border border-primary-500 text-primary-500 px-4 py-2 rounded
         hover:bg-primary-50 cursor-pointer"
>
  Outlined Button
</button>
```

### Content Divider

```html
<article class="prose">
  <p>First paragraph...</p>

  <hr class="divider-x--medium my-8" />

  <p>Second paragraph after divider...</p>
</article>
```

## Class Table

| Category | Classes |
|----------|---------|
| **Width** | `border`, `border-0`, `border-1` ... `border-5` |
| **Sides** | `border-x`, `border-y`, `border-t`, `border-b`, `border-l`, `border-r` |
| **Colors** | `border-{primary,secondary,success,danger,warning,info}` |
| **Shades** | `border-gray-{200-900}`, `border-{color}-{shade}` |
| **By side** | `border-{t,b,l,r}-{color}` |
| **Style** | `border-dashed` |
| **Special** | `border-transparent`, `border-none` |
| **Dividers** | `divider-x`, `divider-y` (with `--small`, `--medium`, `--large` modifiers) |

## See Also

- [Background](/en/modules/bg/) — element backgrounds
