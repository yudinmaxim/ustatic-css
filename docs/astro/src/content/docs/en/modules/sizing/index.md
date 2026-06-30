---
title: Sizing
description: Sizing module reference
---

Classes for managing element width and height.

## Width

### Fixed Values

| Class | Value | Class | Value |
|-------|-------|-------|-------|
| `.w-1` | 4px | `.w-32` | 128px |
| `.w-2` | 8px | `.w-40` | 160px |
| `.w-4` | 16px | `.w-48` | 192px |
| `.w-8` | 32px | `.w-56` | 224px |
| `.w-16` | 64px | `.w-64` | 256px |

```html
<div class="flex gap-4 items-end">
  <div class="w-8 h-8" style="background: var(--u-primary-500)">w-8</div>
  <div class="w-16 h-16" style="background: var(--u-primary-500)">w-16</div>
  <div class="w-24 h-24" style="background: var(--u-primary-500)">w-24</div>
  <div class="w-32 h-32" style="background: var(--u-primary-500)">w-32</div>
</div>
```

### Percentages

| Class | Value |
|-------|-------|
| `.w-1/4` | 25% |
| `.w-1/3` | 33.333% |
| `.w-full` | 50% |
| `.w-2/3` | 66.666% |
| `.w-full` | 75% |
| `.w-full` | 80% |
| `.w-full` | 100% |

```html
<div class="border">
  <div class="w-1/4 p-2" style="background: var(--u-primary-100)">25%</div>
  <div class="w-full p-2" style="background: var(--u-primary-200)">50%</div>
  <div class="w-full p-2" style="background: var(--u-primary-300)">75%</div>
  <div class="w-full p-2" style="background: var(--u-primary-400)">100%</div>
</div>
```

### Special Values

| Class | Value |
|-------|-------|
| `.w-auto` | auto |
| `.w-px` | 1px |
| `.w-0d5` | 2px |
| `.w-none` | none |
| `.w-fit` | fit-content |
| `.w-screen` | 100vw |

```html
<div>
  <div class="w-auto p-2 inline-block" style="background: var(--u-primary-100)">
    Fits content
  </div>
  <div class="w-screen p-2" style="background: var(--u-primary-200)">
    100% of screen width
  </div>
</div>
```

## Height

### Fixed Values

| Class | Value | Class | Value |
|-------|-------|-------|-------|
| `.h-1` | 4px | `.h-32` | 128px |
| `.h-2` | 8px | `.h-40` | 160px |
| `.h-4` | 16px | `.h-48` | 192px |
| `.h-8` | 32px | `.h-56` | 224px |
| `.h-16` | 64px | `.h-64` | 256px |

```html
<div class="flex gap-4">
  <div class="w-16 h-8" style="background: var(--u-primary-500)">h-8</div>
  <div class="w-16 h-16" style="background: var(--u-primary-500)">h-16</div>
  <div class="w-16 h-24" style="background: var(--u-primary-500)">h-24</div>
  <div class="w-16 h-32" style="background: var(--u-primary-500)">h-32</div>
</div>
```

### Percentages

| Class | Value |
|-------|-------|
| `.h-1/4` | 25% |
| `.h-1/2` | 50% |
| `.h-2/3` | 66.666% |
| `.h-3/4` | 75% |
| `.h-full` | 100% |

```html
<div class="h-64 border relative">
  <div class="absolute h-1/4 w-full" style="background: var(--u-primary-100); bottom: 0">25%</div>
  <div class="absolute h-1/2 w-full" style="background: var(--u-primary-200); bottom: 0">50%</div>
</div>
```

### Special Values

| Class | Value |
|-------|-------|
| `.h-auto` | auto |
| `.h-px` | 1px |
| `.h-screen` | 100vh |

```html
<div class="h-screen" style="background: var(--u-primary-50)">
  <h1>Fullscreen section</h1>
</div>
```

## Min/Max Sizing

### Min-width

```html
<div class="flex gap-4">
  <div class="min-w-64 p-4" style="background: var(--u-primary-100)">
    Minimum width 256px
  </div>
  <div class="min-w-screen p-4" style="background: var(--u-primary-100)">
    Min screen width
  </div>
</div>
```

### Min-height

```html
<div class="min-h-screen" style="background: var(--u-primary-50)">
  <h1>Minimum screen height</h1>
  <p>Content can be larger</p>
</div>
```

### Max-width

| Class | Value |
|-------|-------|
| `.max-w-0` | 0 |
| `.max-w-80` | 320px |
| `.max-w-96` | 640px |
| `.max-w-96` | 768px |
| `.max-w-128` | 1024px |
| `.max-w-160` | 1280px |
| `.max-w-192` | 1536px |
| `.max-w-full` | 100% |

```html
<div class="max-w-96 mx-auto bg-white p-6">
  <h2 class="text-xl font-bold">Limited width</h2>
  <p>Maximum width 768px</p>
</div>
```

### Max-height

```html
<div class="max-h-64 overflow-y-auto border">
  <p>Content with limited height</p>
  <p>Scroll appears when exceeded</p>
</div>
```

## Square Sizing (size)

Setting equal width and height:

| Class | Size |
|-------|------|
| `.size-4` | 4x4px |
| `.size-8` | 8x8px |
| `.size-16` | 16x16px |
| `.size-32` | 32x32px |
| `.size-64` | 64x64px |
| `.size-full` | 100%x100% |
| `.size-screen` | 100vw x 100vh |

```html
<div class="flex gap-4">
  <div class="size-8" style="background: var(--u-primary-500); border-radius: 0.25rem"></div>
  <div class="size-16" style="background: var(--u-primary-500); border-radius: 0.25rem"></div>
  <div class="size-32" style="background: var(--u-primary-500); border-radius: 0.25rem"></div>
</div>
```

## Usage Examples

### Limited Width Container

```html
<div class="max-w-192 mx-auto px-4">
  <h1 class="text-2xl font-bold mb-4">Title</h1>
  <p class="text-gray-600">
    Content with limited width for comfortable reading
  </p>
</div>
```

### Fullscreen Section

```html
<section class="h-screen flex items-center justify-center" style="background: var(--u-primary-500)">
  <div class="text-center" style="color: #fff">
    <h1 class="text-2xl font-bold mb-4">Welcome</h1>
    <p>Fullscreen banner</p>
  </div>
</section>
```

### Avatar

```html
<!-- Round avatar -->
<img
  src="avatar.jpg"
  alt="Avatar"
  class="size-16 rounded-full"
>

<!-- Large avatar -->
<img
  src="avatar.jpg"
  alt="Avatar"
  class="size-32 rounded-full"
>
```

### Full Width Image

```html
<img
  src="hero.jpg"
  alt="Hero"
  class="w-full h-96"
>
```

### Fixed Height Card

```html
<div class="w-64 h-96 border rounded-lg p-4">
  <img src="product.jpg" class="w-full h-48 rounded mb-4">
  <h3 class="font-bold">Product</h3>
  <p style="color: var(--u-primary-500)">$99</p>
</div>
```

### Min-height Footer

```html
<footer class="min-h-32" style="background: var(--u-gray-900); color: #fff; padding: 2rem">
  <div class="max-w-192 mx-auto">
    <p>&copy; 2024 Company</p>
  </div>
</footer>
```

### Gallery with Equal Sizes

```html
<div class="grid grid-columns--3-32 gap-4">
  <img src="photo1.jpg" class="w-full h-48 rounded">
  <img src="photo2.jpg" class="w-full h-48 rounded">
  <img src="photo3.jpg" class="w-full h-48 rounded">
</div>
```

### Progress Bar

```html
<div class="w-full h-4" style="background: var(--u-gray-200); border-radius: 9999px; overflow: hide">
  <div class="h-full bg-primary-500 w-full"></div>
</div>
```

## Class Table

### Width

| Category | Classes |
|----------|---------|
| **Fixed** | `w-1`, `w-2`, `w-4`, `w-8`, `w-16`, `w-24`, `w-32`, `w-40`, `w-48`, `w-56`, `w-64` ... `w-256` |
| **Percentages** | `w-1/4`, `w-1/3`, `w-full`, `w-2/3`, `w-full`, `w-full`, `w-full` |
| **Special** | `w-auto`, `w-px`, `w-0d5`, `w-none`, `w-fit`, `w-screen` |

### Height

| Category | Classes |
|----------|---------|
| **Fixed** | `h-1`, `h-2`, `h-4`, `h-8`, `h-16`, `h-24`, `h-32`, `h-40`, `h-48`, `h-56`, `h-64` ... `h-256` |
| **Percentages** | `h-1/4`, `h-1/2`, `h-2/3`, `h-3/4`, `h-full` |
| **Special** | `h-auto`, `h-px`, `h-screen` |

### Min/Max

| Category | Classes |
|----------|---------|
| **Min-width** | `min-w-0`, `min-w-1` ... `min-w-256`, `min-w-screen` |
| **Min-height** | `min-h-0`, `min-h-1` ... `min-h-256`, `min-h-screen` |
| **Max-width** | `max-w-0`, `max-w-80`, `max-w-96`, `max-w-96`, `max-w-128`, `max-w-160`, `max-w-192`, `max-w-full` |
| **Max-height** | `max-h-0`, `max-h-1` ... `max-h-256`, `max-h-screen` |

### Square

| Classes |
|---------|
| `size-1`, `size-2`, `size-4`, `size-8`, `size-16`, `size-24`, `size-32`, `size-40`, `size-48`, `size-56`, `size-64`, `size-full`, `size-screen` |

## See Also

- [Spacing](/en/modules/spacing/) — margin and padding
- [Flexbox](/en/modules/flexbox/) — flexible layouts
- [Grid](/en/modules/grid/) — grid layouts