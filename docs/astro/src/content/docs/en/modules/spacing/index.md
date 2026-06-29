---
title: Spacing
description: Spacing module reference
---

Classes for managing external (margin) and internal (padding) spacing.

## Margin

### All Sides

| Class | Value | Class | Value |
|-------|-------|-------|-------|
| `.m-0` | 0 | `.m-6` | 24px |
| `.m-px` | 1px | `.m-8` | 32px |
| `.m-1` | 4px | `.m-10` | 40px |
| `.m-2` | 8px | `.m-12` | 48px |
| `.m-3` | 12px | `.m-64` | 256px |
| `.m-4` | 16px | `.m-auto` | auto |
| `.m-5` | 20px | | |

```html
<div class="m-4" style="background: var(--u-primary-100); padding: 1rem">
  16px margin on all sides
</div>
```

### Horizontal (x)

```html
<div class="mx-4">
  margin-left: 16px; margin-right: 16px
</div>

<!-- Centering -->
<div class="mx-auto w-64">
  Centered element
</div>
```

### Vertical (y)

```html
<div class="my-4">
  margin-top: 16px; margin-bottom: 16px
</div>
```

### Individual Sides

| Class | Side | Class | Side |
|-------|------|-------|------|
| `.mt-*` | top | `.ml-*` | left |
| `.mr-*` | right | `.mb-*` | bottom |

```html
<div class="mt-4">margin-top: 16px</div>
<div class="mr-4">margin-right: 16px</div>
<div class="mb-4">margin-bottom: 16px</div>
<div class="ml-4">margin-left: 16px</div>
```

### Negative Margins

```html
<div class="-m-4">margin: -16px</div>
<div class="-mx-4">margin-left: -16px; margin-right: -16px</div>
<div class="-mt-4">margin-top: -16px</div>
<div class="-ml-4">margin-left: -16px</div>
```

## Padding

### All Sides

| Class | Value | Class | Value |
|-------|-------|-------|-------|
| `.p-0` | 0 | `.p-6` | 24px |
| `.p-px` | 1px | `.p-8` | 32px |
| `.p-1` | 4px | `.p-10` | 40px |
| `.p-2` | 8px | `.p-12` | 48px |
| `.p-3` | 12px | `.p-64` | 256px |
| `.p-4` | 16px | | |
| `.p-5` | 20px | | |

```html
<div class="p-4" style="background: var(--u-primary-100)">
  16px inner padding
</div>
```

### Horizontal (x)

```html
<div class="px-4">
  padding-left: 16px; padding-right: 16px
</div>
```

### Vertical (y)

```html
<div class="py-4">
  padding-top: 16px; padding-bottom: 16px
</div>
```

### Individual Sides

| Class | Side | Class | Side |
|-------|------|-------|------|
| `.pt-*` | top | `.pl-*` | left |
| `.pr-*` | right | `.pb-*` | bottom |

```html
<div class="pt-4">padding-top: 16px</div>
<div class="pr-4">padding-right: 16px</div>
<div class="pb-4">padding-bottom: 16px</div>
<div class="pl-4">padding-left: 16px</div>
```

## Value Mapping

| Class | Pixels | Class | Pixels |
|-------|--------|-------|--------|
| `*-0` | 0 | `*-6` | 24px |
| `*-px` | 1px | `*-8` | 32px |
| `*-0d5` | 2px | `*-10` | 40px |
| `*-1` | 4px | `*-12` | 48px |
| `*-2` | 8px | `*-64` | 256px |
| `*-3` | 12px | `*-auto` | auto |
| `*-4` | 16px | | |
| `*-5` | 20px | | |

## Usage Examples

### Card

```html
<div class="bg-white border rounded-lg p-6 m-4">
  <h3 class="text-lg font-bold mb-2">Title</h3>
  <p style="color: var(--u-gray-600)">
    Card with 24px internal padding and 16px external margin
  </p>
</div>
```

### Button

```html
<button class="bg-primary-500 text-white px-6 py-3 rounded">
  Button with spacing
</button>
```

### Centering Container

```html
<div class="max-w-192 mx-auto px-4">
  <h1>Centered content</h1>
</div>
```

### Section Divider

```html
<section class="py-12">
  <h2 class="text-2xl font-bold mb-4">Section 1</h2>
  <p>Content with vertical padding</p>
</section>

<section class="py-12">
  <h2 class="text-2xl font-bold mb-4">Section 2</h2>
  <p>Another section</p>
</section>
```

### Negative Margin for Overlap

```html
<div class="flex">
  <div style="background: var(--u-primary-100); padding: 1rem">Element 1</div>
  <div style="background: var(--u-primary-200); padding: 1rem; margin-left: -1rem">
    16px overlap
  </div>
</div>
```

### Form

```html
<form class="flex flex-col gap-4">
  <div>
    <label class="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      class="border rounded px-4 py-2 w-full"
    >
  </div>

  <div>
    <label class="block text-sm font-medium mb-1">Password</label>
    <input
      type="password"
      class="border rounded px-4 py-2 w-full"
    >
  </div>

  <button
    type="submit"
    class="bg-primary-500 text-white px-4 py-2 rounded mt-4"
  >
    Sign In
  </button>
</form>
```

### Navigation

```html
<nav class="flex items-center gap-6 px-6 py-4 border-b">
  <a href="/" class="font-bold">Logo</a>
  <div class="flex gap-4 ml-auto">
    <a href="/about" class="px-2 py-1" style="color: var(--u-gray-600)">About</a>
    <a href="/products" class="px-2 py-1" style="color: var(--u-gray-600)">Products</a>
    <a href="/contact" class="px-2 py-1" style="color: var(--u-gray-600)">Contact</a>
  </div>
</nav>
```

### Grid with Spacing

```html
<div class="grid grid-columns--3-32 gap-4 p-4">
  <div style="background: var(--u-primary-100); padding: 1rem">1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">2</div>
  <div style="background: var(--u-primary-100); padding: 1rem">3</div>
</div>
```

### Header with Spacing

```html
<header class="py-4 px-6 border-b">
  <div class="max-w-256 mx-auto flex items-center justify-between">
    <a href="/" class="text-xl font-bold">Logo</a>
    <nav class="flex gap-4">
      <a href="#" style="color: var(--u-gray-600)">Menu</a>
    </nav>
  </div>
</header>
```

### Footer

```html
<footer style="background: var(--u-gray-900); color: #fff; padding: 3rem 1rem">
  <div class="max-w-192 mx-auto">
    <div class="grid grid-columns--3-32 gap-8 mb-8">
      <div>
        <h3 class="font-bold mb-4">Section 1</h3>
        <ul class="flex flex-col gap-2">
          <li><a href="#" style="color: #fff">Link 1</a></li>
          <li><a href="#" style="color: #fff">Link 2</a></li>
        </ul>
      </div>
    </div>
    <div style="border-top: 1px solid; padding-top: 2rem">
      <p>&copy; 2024 Company</p>
    </div>
  </div>
</footer>
```

## Class Table

### Margin

| Category | Classes |
|----------|---------|
| **All sides** | `m-0`, `m-px`, `m-0d5`, `m-1`, `m-2`, `m-3`, `m-4`, `m-5`, `m-6`, `m-8`, `m-10`, `m-12`, `m-64`, `m-auto` |
| **Horizontal** | `mx-0`, `mx-px`, `mx-1` ... `mx-64`, `mx-auto` |
| **Vertical** | `my-0`, `my-px`, `my-1` ... `my-64`, `my-auto` |
| **Top** | `mt-0`, `mt-px`, `mt-1` ... `mt-64`, `mt-auto` |
| **Right** | `mr-0`, `mr-px`, `mr-1` ... `mr-64`, `mr-auto` |
| **Bottom** | `mb-0`, `mb-px`, `mb-1` ... `mb-64`, `mb-auto` |
| **Left** | `ml-0`, `ml-px`, `ml-1` ... `ml-64`, `ml-auto` |
| **Negative** | `-m-1`, `-m-2`, `-m-4`, `-mx-1`, `-mx-2`, `-mx-4`, `-mt-1`, `-mt-2`, `-mt-4`, `-ml-1`, `-ml-2`, `-ml-4` |

### Padding

| Category | Classes |
|----------|---------|
| **All sides** | `p-0`, `p-px`, `p-0d5`, `p-1`, `p-2`, `p-3`, `p-4`, `p-5`, `p-6`, `p-8`, `p-10`, `p-12`, `p-64` |
| **Horizontal** | `px-0`, `px-px`, `px-1` ... `px-64` |
| **Vertical** | `py-0`, `py-px`, `py-1` ... `py-64` |
| **Top** | `pt-0`, `pt-px`, `pt-1` ... `pt-64` |
| **Right** | `pr-0`, `pr-px`, `pr-1` ... `pr-64` |
| **Bottom** | `pb-0`, `pb-px`, `pb-1` ... `pb-64` |
| **Left** | `pl-0`, `pl-px`, `pl-1` ... `pl-64` |

## See Also

- [Sizing](/en/modules/sizing/) — width and height
- [Flexbox](/en/modules/flexbox/) — gap for spacing between elements
- [Grid](/en/modules/grid/) — gap for grid spacing