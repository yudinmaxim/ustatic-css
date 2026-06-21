---
title: Bg
description: Background module reference
---

# Background

Module providing classes for element background management: colors, opacity, blur.

## Background Colors

### Primary Colors

```html
<div class="flex gap-2">
  <div class="bg-primary-50 p-4">50</div>
  <div class="bg-primary-100 p-4">100</div>
  <div class="bg-primary-200 p-4">200</div>
  <div class="bg-primary-300 p-4">300</div>
  <div class="bg-primary-400 p-4">400</div>
  <div class="bg-primary-500 p-4" style="color: #fff">500</div>
  <div class="bg-primary-600 p-4" style="color: #fff">600</div>
  <div class="bg-primary-700 p-4" style="color: #fff">700</div>
  <div class="bg-primary-800 p-4" style="color: #fff">800</div>
  <div class="bg-primary-900 p-4" style="color: #fff">900</div>
</div>
```

### Semantic Colors

```html
<div class="flex gap-4">
  <div class="bg-success text-white p-4">Success</div>
  <div class="bg-danger text-white p-4">Danger</div>
  <div class="bg-warning text-white p-4">Warning</div>
  <div class="bg-info text-white p-4">Info</div>
</div>
```

### Neutral Colors (Gray)

```html
<div class="flex gap-2">
  <div class="bg-gray-50 p-4 border">50</div>
  <div class="bg-gray-100 p-4 border">100</div>
  <div class="bg-gray-200 p-4 border">200</div>
  <div class="bg-gray-300 p-4 border">300</div>
  <div class="bg-gray-400 p-4" style="color: #fff">400</div>
  <div class="bg-gray-500 p-4" style="color: #fff">500</div>
  <div class="bg-gray-600 p-4" style="color: #fff">600</div>
  <div class="bg-gray-700 p-4" style="color: #fff">700</div>
  <div class="bg-gray-800 p-4" style="color: #fff">800</div>
  <div class="bg-gray-900 p-4" style="color: #fff">900</div>
</div>
```

### Additional Colors

```html
<div class="flex gap-4 flex-wrap">
  <div class="bg-red-500 text-white p-4">Red</div>
  <div class="bg-orange-500 text-white p-4">Orange</div>
  <div class="bg-yellow-500 p-4">Yellow</div>
  <div class="bg-green-500 text-white p-4">Green</div>
  <div class="bg-sky-500 text-white p-4">Sky</div>
  <div class="bg-blue-500 text-white p-4">Blue</div>
</div>
```

### Special Values

```html
<div class="flex gap-4">
  <div class="bg-white p-4 border">White</div>
  <div class="bg-black text-white p-4">Black</div>
  <div class="bg-transparent p-4 border">Transparent</div>
  <div class="bg-none p-4 border">No background</div>
</div>
```

## Background Opacity

Classes for managing background opacity:

```html
<div class="flex gap-4 items-end">
  <div class="bg-primary-500 bg-opacity-0 p-4 border">0%</div>
  <div class="bg-primary-500 bg-opacity-25 p-4">25%</div>
  <div class="bg-primary-500 bg-opacity-50 p-4">50%</div>
  <div class="bg-primary-500 bg-opacity-75 p-4">75%</div>
  <div class="bg-primary-500 bg-opacity-100 p-4">100%</div>
</div>
```

## Background Blur (Backdrop Filter)

Frosted glass effect:

```html
<div class="relative">
  <!-- Background image -->
  <img src="background.jpg" class="w-full h-64 object-cover">

  <!-- Blurred panel over image -->
  <div class="absolute inset-0 bg-filter-blur-5 p-8" style="background: rgba(255,255,255,0.5)">
    <h3 class="text-xl font-bold">Title</h3>
    <p>Text on blurred background</p>
  </div>
</div>
```

**Available blur classes:**

| Class | Blur |
|-------|------|
| `.bg-filter-blur-1` | 1px |
| `.bg-filter-blur-2` | 2px |
| `.bg-filter-blur-5` | 5px |
| `.bg-filter-blur-10` | 10px |

## Interactive Classes (hover)

Background changes on hover:

```html
<div class="flex gap-4">
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-base">
    Button
  </button>

  <div class="bg-gray-100 hover:bg-gray-200 p-4 rounded cursor-pointer">
    Hover me
  </div>

  <div class="bg-success p-4 rounded cursor-pointer" style="color: #fff">
    Success on hover
  </div>
</div>
```

## Usage Examples

### Product Card

```html
<div class="bg-white rounded-lg shadow-lg border border-gray-200 p-6 max-w-sm">
  <h3 class="text-lg font-bold mb-2">Product Name</h3>
  <p class="text-gray-600 mb-4">Product description</p>
  <div class="flex justify-between items-center">
    <span class="text-2xl font-bold text-primary-500">$99.99</span>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-base">
      Buy
    </button>
  </div>
</div>
```

### Header with Gradient

```html
<header class="bg-gradient-to-r from-primary-500 to-primary-700 text-white p-6">
  <h1 class="text-2xl font-bold">Title</h1>
</header>
```

### Modal with Darkening

```html
<div class="fixed inset-0 z-i-modal" style="background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center">
  <div class="bg-white rounded-lg p-6 max-w-md mx-4">
    <h2 class="text-xl font-bold mb-4">Title</h2>
    <p class="text-gray-600 mb-6">Modal content</p>
    <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-base">
      Close
    </button>
  </div>
</div>
```

### Status Badge

```html
<span class="bg-success text-white px-2 py-1 rounded text-sm">Active</span>
<span class="bg-warning text-white px-2 py-1 rounded text-sm">Pending</span>
<span class="bg-danger text-white px-2 py-1 rounded text-sm">Error</span>
```

## Class Table

| Category | Classes |
|----------|---------|
| **Primary** | `bg-primary-{50-950}`, `bg-primary` |
| **Secondary** | `bg-secondary-{50-950}`, `bg-secondary` |
| **Success** | `bg-success-{50-950}`, `bg-success` |
| **Danger** | `bg-danger-{50-950}`, `bg-danger` |
| **Warning** | `bg-warning-{50-950}`, `bg-warning` |
| **Info** | `bg-info-{50-950}`, `bg-info` |
| **Gray** | `bg-gray-{50-900}` |
| **Colors** | `bg-red-*`, `bg-orange-*`, `bg-yellow-*`, `bg-green-*`, `bg-sky-*`, `bg-blue-*` |
| **Special** | `bg-white`, `bg-black`, `bg-transparent`, `bg-none` |
| **Opacity** | `bg-opacity-{0,25,50,75,100}` |
| **Blur** | `bg-filter-blur-{1,2,5,10}` |
| **Hover** | `hover:bg-{color}` |

## See Also

- [Text Colors](/en/modules/typography/#text-color) — text coloring
- [Opacity](/en/modules/effects/#opacity) — general element opacity
- [Border](/en/modules/border/) — adding borders to backgrounds
