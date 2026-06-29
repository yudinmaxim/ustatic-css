---
title: Display
description: Display module reference
---

Classes for managing the `display` property and `overflow`.

## Display Classes

### Basic Classes

| Class | CSS Property | Description |
|-------|--------------|-------------|
| `.inline` | `display: inline` | Inline element |
| `.block` | `display: block` | Block element |
| `.inline-block` | `display: inline-block` | Inline-block element |
| `.table` | `display: table` | Table |
| `.table-cell` | `display: table-cell` | Table cell |

### Examples

```html
<!-- Inline element -->
<span class="inline bg-primary-500 px-2 py-1">Inline</span>
<span class="inline bg-primary-500 px-2 py-1">Inline</span>

<!-- Block element -->
<div class="block bg-primary-500 p-2 mb-2">Block</div>
<div class="block bg-primary-500 p-2">Block</div>

<!-- Inline-block -->
<button class="inline-block bg-primary-500 text-white px-4 py-2">
  Button
</button>
```

## Overflow Classes

### Overflow Control

| Class | CSS Property | Description |
|-------|--------------|-------------|
| `.overflow-hidden` | `overflow: hide` | Hide all overflow |
| `.overflow-scroll` | `overflow: scroll` | Always show scroll |
| `.overflow-auto` | `overflow: auto` | Auto when needed |
| `.overflow-x-hide` | `overflow-x: hide` | Hide horizontal |
| `.overflow-y-hide` | `overflow-y: hide` | Hide vertical |
| `.overflow-x-scroll` | `overflow-x: scroll` | Horizontal scroll |
| `.overflow-y-scroll` | `overflow-y: scroll` | Vertical scroll |
| `.overflow-x-auto` | `overflow-x: auto` | Auto horizontal |
| `.overflow-y-auto` | `overflow-y: auto` | Auto vertical |

### Examples

```html
<!-- Hide overflow -->
<div class="overflow-hidden w-64 border">
  <p>Long text that doesn't fit in the container...</p>
</div>

<!-- Vertical scroll -->
<div class="overflow-y-auto h-48 border">
  <p>Lots of content...</p>
  <p>More content...</p>
  <p>And more...</p>
</div>

<!-- Horizontal scroll -->
<div class="overflow-x-auto border">
  <div class="flex gap-4 min-w-fit p-4">
    <div class="w-32 h-32" style="background: var(--u-primary-100)">1</div>
    <div class="w-32 h-32" style="background: var(--u-primary-100)">2</div>
    <div class="w-32 h-32" style="background: var(--u-primary-100)">3</div>
    <div class="w-32 h-32" style="background: var(--u-primary-100)">4</div>
  </div>
</div>
```

## Usage Examples

### Modal Window

```html
<!-- Background overlay -->
<div class="fixed top-0 right-0 bottom-0 left-0 z-i-modal overflow-hidden" style="background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center">
  <!-- Modal -->
  <div class="bg-white rounded-lg p-6 max-w-128 mx-4" style="max-height: 80vh; overflow-y: auto">
    <h2 class="text-xl font-bold mb-4">Title</h2>
    <p class="text-gray-600 mb-6">
      Long modal content that can scroll...
    </p>
    <button class="bg-primary-500 text-white px-4 py-2 rounded">
      Close
    </button>
  </div>
</div>
```

### Text Truncation with Ellipsis

```html
<!-- Truncation with ellipsis -->
<div class="w-64 overflow-hidden nowrap text-ellipsis border">
  Very long text that will be truncated and replaced with an ellipsis...
</div>

<!-- Multi-line truncation -->
<div class="w-64 overflow-hidden truncate border">
  Text that will be truncated after three lines with an ellipsis at the end...
</div>
```

### Table Layout

```html
<!-- Table -->
<div class="table w-full border">
  <div class="flex w-full" style="background: var(--u-gray-50)">
    <div class="table-cell border p-2 font-bold">Header 1</div>
    <div class="table-cell border p-2 font-bold">Header 2</div>
    <div class="table-cell border p-2 font-bold">Header 3</div>
  </div>
  <div class="flex w-full">
    <div class="table-cell border p-2">Cell 1</div>
    <div class="table-cell border p-2">Cell 2</div>
    <div class="table-cell border p-2">Cell 3</div>
  </div>
</div>
```

### Carousel / Slider

```html
<!-- Horizontal scrolling -->
<div class="overflow-x-auto nowrap pb-4">
  <div class="inline-block w-48 h-64" style="background: var(--u-primary-100); margin: 0.5rem; border-radius: 0.5rem"></div>
  <div class="inline-block w-48 h-64" style="background: var(--u-primary-100); margin: 0.5rem; border-radius: 0.5rem"></div>
  <div class="inline-block w-48 h-64" style="background: var(--u-primary-100); margin: 0.5rem; border-radius: 0.5rem"></div>
  <div class="inline-block w-48 h-64" style="background: var(--u-primary-100); margin: 0.5rem; border-radius: 0.5rem"></div>
  <div class="inline-block w-48 h-64" style="background: var(--u-primary-100); margin: 0.5rem; border-radius: 0.5rem"></div>
</div>
```

### Sidebar with Scroll

```html
<div class="flex h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-white border-r overflow-y-auto">
    <nav class="p-4">
      <a href="#" class="block py-2" style="color: var(--u-gray-600)">Item 1</a>
      <a href="#" class="block py-2" style="color: var(--u-gray-600)">Item 2</a>
      <a href="#" class="block py-2" style="color: var(--u-gray-600)">Item 3</a>
      <!-- Many items -->
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 overflow-y-auto p-8">
    <h1 class="text-2xl font-bold mb-4">Title</h1>
    <p>Main page content...</p>
  </main>
</div>
```

### Dropdown Menu

```html
<div class="relative inline-block">
  <!-- Button -->
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Menu
  </button>

  <!-- Dropdown list -->
  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg overflow-hidden z-i-menu">
    <a href="#" class="block px-4 py-2" style="color: var(--u-gray-600)">Item 1</a>
    <a href="#" class="block px-4 py-2" style="color: var(--u-gray-600)">Item 2</a>
    <a href="#" class="block px-4 py-2" style="color: var(--u-gray-600)">Item 3</a>
  </div>
</div>
```

## Class Table

### Display

| Class | CSS |
|-------|-----|
| `.inline` | `display: inline` |
| `.block` | `display: block` |
| `.inline-block` | `display: inline-block` |
| `.table` | `display: table` |
| `.table-cell` | `display: table-cell` |

### Overflow

| Class | CSS |
|-------|-----|
| `.overflow-hidden` | `overflow: hide` |
| `.overflow-scroll` | `overflow: scroll` |
| `.overflow-auto` | `overflow: auto` |
| `.overflow-x-hide` | `overflow-x: hide` |
| `.overflow-y-hide` | `overflow-y: hide` |
| `.overflow-x-scroll` | `overflow-x: scroll` |
| `.overflow-y-scroll` | `overflow-y: scroll` |
| `.overflow-x-auto` | `overflow-x: auto` |
| `.overflow-y-auto` | `overflow-y: auto` |

## See Also