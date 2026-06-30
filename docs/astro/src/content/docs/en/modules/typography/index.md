---
title: Typography
description: Typography module reference
---

Classes for text management: size, color, alignment, font weight, and more.

## Text Size

| Class | Size | Line Height |
|-------|------|-------------|
| `.text-2xs` | 10px | 12px |
| `.text-xs` | 12px | 16px |
| `.text-sm` | 14px | 20px |
| `.text-base` | 16px | 24px |
| `.text-lg` | 18px | 28px |
| `.text-xl` | 20px | 28px |
| `.text-2xl` | 24px | 32px |

```html
<div class="flex flex-col gap-2">
  <p class="text-2xs">Very small (10px)</p>
  <p class="text-xs">Small (12px)</p>
  <p class="text-sm">Smaller (14px)</p>
  <p class="text-base">Base (16px)</p>
  <p class="text-lg">Large (18px)</p>
  <p class="text-xl">Very large (20px)</p>
  <p class="text-2xl">Double (24px)</p>
</div>
```

## Text Color

### Semantic Colors

```html
<div class="flex flex-col gap-2">
  <span class="text-primary">Primary</span>
  <span class="text-secondary">Secondary</span>
  <span class="text-success">Success</span>
  <span class="text-danger">Danger</span>
  <span class="text-warning">Warning</span>
  <span class="text-info">Info</span>
</div>
```

### Gray Shades

```html
<div class="flex flex-col gap-2">
  <span class="text-gray-50">50 (very light)</span>
  <span class="text-gray-100">100</span>
  <span class="text-gray-200">200</span>
  <span class="text-gray-300">300</span>
  <span class="text-gray-400">400</span>
  <span class="text-gray-500">500 (gray)</span>
  <span class="text-gray-600">600</span>
  <span class="text-gray-700">700</span>
  <span class="text-gray-800">800</span>
  <span class="text-gray-900">900 (very dark)</span>
</div>
```

### Other Colors

```html
<div class="flex gap-4">
  <span class="text-red-500">Red</span>
  <span class="text-blue-500">Blue</span>
  <span class="text-green-500">Green</span>
  <span class="text-yellow-500">Yellow</span>
</div>

<!-- Special -->
<div class="flex gap-4">
  <span class="text-white" style="background: var(--u-gray-900); padding: 0 0.5rem">White</span>
  <span class="text-black">Black</span>
  <span class="text-none">Transparent</span>
</div>
```

### Hover State

```html
<a href="#" class="text-gray-600 hover:text-primary-500">
  Link with color change on hover
</a>
```

## Text Alignment

| Class | CSS Property |
|-------|--------------|
| `.text-left` | `text-align: left` |
| `.text-center` | `text-align: center` |
| `.text-right` | `text-align: right` |
| `.text-justify` | `text-align: justify` |
| `.text-start` | `text-align: start` |
| `.text-end` | `text-align: end` |

```html
<div class="border p-4">
  <p class="text-left">Left aligned</p>
  <p class="text-center">Center aligned</p>
  <p class="text-right">Right aligned</p>
  <p class="text-justify">Justified</p>
</div>
```

## Font Weight

| Class | Value | Description |
|-------|-------|-------------|
| `.font-thin` | 100 | Thin |
| `.font-extralight` | 200 | Extra Light |
| `.font-light` | 300 | Light |
| `.font-normal` | 400 | Regular |
| `.font-medium` | 500 | Medium |
| `.font-semibold` | 600 | Semi Bold |
| `.font-bold` | 700 | Bold |
| `.font-extrabold` | 800 | Extra Bold |
| `.font-black` | 900 | Black |

```html
<div class="flex flex-col gap-2">
  <span class="font-thin">Thin (100)</span>
  <span class="font-extralight">Extra Light (200)</span>
  <span class="font-light">Light (300)</span>
  <span class="font-normal">Regular (400)</span>
  <span class="font-medium">Medium (500)</span>
  <span class="font-semibold">Semi Bold (600)</span>
  <span class="font-bold">Bold (700)</span>
  <span class="font-extrabold">Extra Bold (800)</span>
  <span class="font-black">Black (900)</span>
</div>
```

## Text Style

```html
<p class="italic">Italic</p>
<p class="underline">Underlined</p>
<p class="underline">Underlined</p>
<p class="font-caps">UPPERCASE</p>
```

## Line Height

| Class | Height |
|-------|--------|
| `.line-height-2xs` | 12px |
| `.line-height-xs` | 16px |
| `.line-height-sm` | 20px |
| `.line-height-base` | 24px |
| `.line-height-lg` | 28px |
| `.line-height-xl` | 28px |
| `.line-height-2xl` | 32px |

```html
<p class="line-height-base">Base line height for comfortable reading</p>
```

## Vertical Alignment

| Class | CSS Property |
|-------|--------------|
| `.text-top` | `vertical-align: top` |
| `.text-middle` | `vertical-align: middle` |
| `.text-bottom` | `vertical-align: bottom` |
| `.text-baseline` | `vertical-align: baseline` |

```html
<div class="text-lg">
  <span class="text-top">Top</span>
  <span class="text-middle">Middle</span>
  <span class="text-bottom">Bottom</span>
  <span class="text-baseline">Baseline</span>
</div>
```

## Additional Classes

### Text Wrapping

```html
<!-- No wrap -->
<p class="nowrap">Text without line breaks</p>

<!-- Preserve whitespace -->
<p class="pre-wrap">Preserves spaces and line breaks</p>
```

### Text Truncation

```html
<!-- Ellipsis -->
<div class="w-64 truncate">
  Very long text that will be truncated and replaced with an ellipsis...
</div>

<!-- Truncation without ellipsis -->
<div class="w-64 overflow-hidden nowrap">Truncated text</div>
```

### Word Break

```html
<p class="break-word">Longwordthatdoesnotbreak</p>
```

### Lists

```html
<!-- No markers -->
<ul class="list-style-none">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Reset styles -->
<ul class="list-reset">
  <li>Item without markers</li>
</ul>
```

## Usage Examples

### Article Header

```html
<article>
  <h1 class="text-2xl font-bold mb-4">Article Title</h1>
  <p class="text-gray-600 text-sm mb-6">Published March 26, 2024</p>
  <p class="text-base line-height-base">Main article text...</p>
</article>
```

### Product Card

```html
<div class="border rounded-lg p-4">
  <h3 class="text-lg font-bold mb-2">Product Name</h3>
  <p class="text-gray-600 text-sm mb-4">Short product description</p>
  <div class="flex justify-between items-center">
    <span class="text-xl font-bold text-primary-500">$99.99</span>
    <button class="text-sm text-primary-500 hover:underline">Add to Cart</button>
  </div>
</div>
```

### Navigation

```html
<nav class="flex items-center gap-6">
  <a href="/" class="text-lg font-bold">Logo</a>
  <a href="/about" class="text-gray-600 hover:text-primary-500">About</a>
  <a href="/products" class="text-gray-600 hover:text-primary-500">Products</a>
  <a href="/contact" class="text-gray-600 hover:text-primary-500">Contact</a>
</nav>
```

### Blockquote

```html
<blockquote class="border-l-4 border-primary-500 pl-4 italic">
  <p class="text-lg text-gray-700">&ldquo;Quote from a famous person&rdquo;</p>
  <footer class="text-sm text-gray-500 mt-2">&mdash; Author</footer>
</blockquote>
```

### Hint

```html
<p class="text-xs text-gray-500">* Required field</p>
```

### Notification

```html
<div class="bg-success text-white p-4 rounded">
  <p class="font-bold mb-1">Success!</p>
  <p class="text-sm">Operation completed successfully</p>
</div>
```

### Underline Link

```html
<a href="#" class="text-primary-500 hover:underline">
  Link with underline on hover
</a>
```

### Code

```html
<p>
  Use
  <code style="background: var(--u-gray-100); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem">npm install</code>
  to install the package
</p>

<pre style="background: var(--u-gray-900); color: var(--u-gray-100); padding: 1rem; border-radius: 0.25rem; font-size: 0.875rem; overflow-x: auto">
  <code>npm install ustatic-css</code>
</pre>
```

## Class Table

### Size

| Classes |
|---------|
| `text-2xs`, `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` |

### Color

| Category | Classes |
|----------|---------|
| **Semantic** | `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info` |
| **Gray** | `text-gray-50`, `text-gray-100` ... `text-gray-900` |
| **Colors** | `text-red-*`, `text-blue-*`, `text-green-*`, `text-yellow-*` |
| **Special** | `text-white`, `text-black`, `text-none` |
| **Hover** | `hover:text-{color}` |

### Alignment

| Classes |
|---------|
| `text-left`, `text-center`, `text-right`, `text-justify`, `text-start`, `text-end` |

### Weight

| Classes |
|---------|
| `font-thin`, `font-extralight`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black` |

### Style

| Classes |
|---------|
| `italic`, `underline`, `font-caps`, `truncate` |

### Line Height

| Classes |
|---------|
| `line-height-2xs`, `line-height-xs`, `line-height-sm`, `line-height-base`, `line-height-lg`, `line-height-xl`, `line-height-2xl` |

### Vertical

| Classes |
|---------|
| `text-top`, `text-middle`, `text-bottom`, `text-baseline` |

### Additional

| Classes |
|---------|
| `nowrap` (`nowrap`), `pre-wrap` (`pre-wrap`), `truncate`, `text-ellipsis`, `break-word`, `list-style-none`, `list-reset` |
| `font-family-inherit`, `font-size-inherit`, `font-caps` |
| `text-decoration-none`, `text-style-clear` |
| `text-text-top`, `text-text-bottom`, `text-sub`, `text-super` |
| Alignment aliases: `left-align`, `center`, `right-align`, `justify` |

## See Also

- [Background](/en/modules/bg/) — background colors
- [Spacing](/en/modules/spacing/) — margins and padding
- [Display](/en/modules/display/) — display and overflow