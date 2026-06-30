---
title: Grid
description: Grid module reference
---

Module for working with CSS Grid layout — a two-dimensional grid for complex layouts.

## Basic Classes

### Container

```html
<!-- Grid container -->
<div class="grid">
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
</div>

<!-- Grid with container-type -->
<div class="grid-container">
  <div>Cell 1</div>
  <div>Cell 2</div>
</div>
```

## Column Templates

### Simple Templates

| Class | CSS Property |
|-------|--------------|
| `.grid-columns` | `grid-template-columns: 1fr` |
| `.grid-columns--1fr-auto` | `1fr auto` |
| `.grid-columns--auto-1fr` | `auto 1fr` |
| `.grid-columns--1fr-1fr` | `1fr 1fr` |
| `.grid-columns--1fr-2fr` | `1fr 2fr` |
| `.grid-columns--1fr-1fr-1fr` | `1fr 1fr 1fr` |

```html
<!-- Two equal columns -->
<div class="grid grid-columns--1fr-1fr gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">Column 1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Column 2</div>
</div>

<!-- Three equal columns -->
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">2</div>
  <div style="background: var(--u-primary-100); padding: 1rem">3</div>
</div>

<!-- 1fr + auto -->
<div class="grid grid-columns--1fr-auto gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">Stretches</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Fits content</div>
</div>
```

### Responsive Templates with minmax

| Class | CSS Property |
|-------|--------------|
| `.grid-columns--2-64` | `repeat(2, minmax(64px, 1fr))` |
| `.grid-columns--3-128` | `repeat(3, minmax(128px, 1fr))` |
| `.grid-columns--4-256` | `repeat(4, minmax(256px, 1fr))` |

```html
<!-- 2 columns min 64px -->
<div class="grid grid-columns--2-64 gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">2</div>
</div>

<!-- 3 columns min 128px -->
<div class="grid grid-columns--3-128 gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">2</div>
  <div style="background: var(--u-primary-100); padding: 1rem">3</div>
</div>

<!-- 4 columns min 256px -->
<div class="grid grid-columns--4-256 gap-4">
  <div style="background: var(--u-primary-100); padding: 1rem">1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">2</div>
  <div style="background: var(--u-primary-100); padding: 1rem">3</div>
  <div style="background: var(--u-primary-100); padding: 1rem">4</div>
</div>
```

## Row Templates

### Simple Templates

| Class | CSS Property |
|-------|--------------|
| `.grid-rows` | `grid-template-rows: 1fr` |
| `.grid-rows--auto-1fr-auto` | `auto 1fr auto` |
| `.grid-rows--1fr-auto` | `1fr auto` |
| `.grid-rows--auto-1fr` | `auto 1fr` |
| `.grid-rows--1fr-1fr-1fr` | `1fr 1fr 1fr` |
| `.grid-rows--1fr-1fr` | `1fr 1fr` |

```html
<!-- Page layout -->
<div class="grid grid-rows--auto-1fr-auto min-h-screen">
  <header style="background: var(--u-gray-100); padding: 1rem">Header</header>
  <main style="padding: 1rem">Main content</main>
  <footer style="background: var(--u-gray-100); padding: 1rem">Footer</footer>
</div>

<!-- Two rows -->
<div class="grid grid-rows--1fr-1fr h-64 gap-2">
  <div style="background: var(--u-primary-100); padding: 1rem">Row 1</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Row 2</div>
</div>
```

## Column Span (grid-column)

| Class | CSS Property |
|-------|--------------|
| `.grid-col-span-1` | `grid-column: span 1` |
| `.grid-col-span-2` | `grid-column: span 2` |
| `.grid-col-span-3` | `grid-column: span 3` |

```html
<!-- Column spanning -->
<div class="grid grid-columns--1fr-1fr-1fr gap-4">
  <div class="grid-col-span-2" style="background: var(--u-primary-100); padding: 1rem">
    Spans 2 columns
  </div>
  <div style="background: var(--u-primary-100); padding: 1rem">Normal</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Normal</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Normal</div>
  <div style="background: var(--u-primary-100); padding: 1rem">Normal</div>
</div>
```

## Usage Examples

### Image Gallery

```html
<div class="grid grid-columns--4-256 gap-4">
  <img src="photo1.jpg" alt="Photo 1" class="w-full h-48 rounded-lg">
  <img src="photo2.jpg" alt="Photo 2" class="w-full h-48 rounded-lg">
  <img src="photo3.jpg" alt="Photo 3" class="w-full h-48 rounded-lg">
  <img src="photo4.jpg" alt="Photo 4" class="w-full h-48 rounded-lg">
</div>
```

### Product Cards

```html
<div class="grid grid-columns--3-256 gap-6 p-4">
  <div class="border rounded-lg overflow-hidden">
    <img src="product1.jpg" class="w-full h-48">
    <div class="p-4">
      <h3 class="font-bold">Product 1</h3>
      <p style="color: var(--u-primary-500)">$99</p>
    </div>
  </div>
  <div class="border rounded-lg overflow-hidden">
    <img src="product2.jpg" class="w-full h-48">
    <div class="p-4">
      <h3 class="font-bold">Product 2</h3>
      <p style="color: var(--u-primary-500)">$149</p>
    </div>
  </div>
  <div class="border rounded-lg overflow-hidden">
    <img src="product3.jpg" class="w-full h-48">
    <div class="p-4">
      <h3 class="font-bold">Product 3</h3>
      <p style="color: var(--u-primary-500)">$199</p>
    </div>
  </div>
</div>
```

### Dashboard Layout

```html
<div class="grid grid-columns--1fr-1fr-1fr gap-4 p-4">
  <!-- Large card -->
  <div class="grid-col-span-2 bg-white border rounded-lg p-6">
    <h3 class="text-lg font-bold mb-4">Main Statistics</h3>
    <div class="grid grid-columns--2-32 gap-4">
      <div style="background: var(--u-primary-50); padding: 1rem; border-radius: 0.5rem">
        <p style="color: var(--u-gray-600); font-size: 0.875rem">Visitors</p>
        <p class="text-2xl font-bold">1,234</p>
      </div>
      <div style="background: var(--u-primary-50); padding: 1rem; border-radius: 0.5rem">
        <p style="color: var(--u-gray-600); font-size: 0.875rem">Orders</p>
        <p class="text-2xl font-bold">56</p>
      </div>
    </div>
  </div>

  <!-- Side panel -->
  <div class="bg-white border rounded-lg p-6">
    <h3 class="text-lg font-bold mb-4">Activity</h3>
    <ul class="flex flex-col gap-2">
      <li style="font-size: 0.875rem">New order</li>
      <li style="font-size: 0.875rem">Payment received</li>
      <li style="font-size: 0.875rem">Product delivered</li>
    </ul>
  </div>
</div>
```

### Form with Grid

```html
<form class="grid grid-columns--1fr-1fr gap-4">
  <div>
    <label class="block text-sm font-medium mb-1">First Name</label>
    <input type="text" class="border rounded px-4 py-2 w-full">
  </div>
  <div>
    <label class="block text-sm font-medium mb-1">Last Name</label>
    <input type="text" class="border rounded px-4 py-2 w-full">
  </div>
  <div class="grid-col-span-2">
    <label class="block text-sm font-medium mb-1">Email</label>
    <input type="email" class="border rounded px-4 py-2 w-full">
  </div>
  <div class="grid-col-span-2">
    <button type="submit" class="bg-primary-500 text-white px-4 py-2 rounded">
      Submit
    </button>
  </div>
</form>
```

### Blog with Sidebar

```html
<div class="grid grid-columns--1fr-auto gap-6 max-w-256 mx-auto">
  <!-- Main content -->
  <main class="grid grid-rows--auto-1fr gap-4">
    <article class="border rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Article Title</h2>
      <p style="color: var(--u-gray-600)">Article content...</p>
    </article>
    <article class="border rounded-lg p-6">
      <h2 class="text-xl font-bold mb-2">Another Article</h2>
      <p style="color: var(--u-gray-600)">Article content...</p>
    </article>
  </main>

  <!-- Sidebar -->
  <aside class="w-64">
    <div class="border rounded-lg p-4 mb-4">
      <h3 class="font-bold mb-2">Categories</h3>
      <ul class="flex flex-col gap-1">
        <li><a href="#" style="color: var(--u-gray-600)">Technology</a></li>
        <li><a href="#" style="color: var(--u-gray-600)">Design</a></li>
        <li><a href="#" style="color: var(--u-gray-600)">Marketing</a></li>
      </ul>
    </div>
  </aside>
</div>
```

## Class Table

| Category | Classes |
|----------|---------|
| **Display** | `grid`, `grid-container` |
| **Columns** | `grid-columns`, `grid-columns--1fr-auto`, `grid-columns--auto-1fr`, `grid-columns--1fr-1fr`, `grid-columns--1fr-2fr`, `grid-columns--1fr-1fr-1fr`, `grid-columns--2-64`, `grid-columns--3-128`, `grid-columns--4-256` |
| **Rows** | `grid-rows`, `grid-rows--auto-1fr-auto`, `grid-rows--1fr-auto`, `grid-rows--auto-1fr`, `grid-rows--1fr-1fr-1fr`, `grid-rows--1fr-1fr` |
| **Span** | `grid-col-span-1`, `grid-col-span-2`, `grid-col-span-3` |

## CSS Properties

```scss
.grid {
  display: grid;
}

.grid-columns {
  grid-template-columns: 1fr;
}

.grid-columns--1fr-1fr {
  grid-template-columns: 1fr 1fr;
}

.grid-columns--4-256 {
  grid-template-columns: repeat(4, minmax(256px, 1fr));
}

.grid-rows--auto-1fr-auto {
  grid-template-rows: auto 1fr auto;
}

.grid-col-span-2 {
  grid-column: span 2;
}
```

## See Also

- [Flexbox](/en/guides/flexbox/) — flexbox layout
- [Spacing](/en/modules/spacing/) — margins and padding
- [Sizing](/en/modules/sizing/) — width and height