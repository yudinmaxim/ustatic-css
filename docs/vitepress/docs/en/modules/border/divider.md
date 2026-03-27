# Dividers

Horizontal and vertical lines for visually separating content.

## Horizontal Dividers

### Basic Usage

```html
<section class="p-4">
  <h2>Section 1</h2>
  <p>First section content</p>
</section>

<hr class="divider-x">

<section class="p-4">
  <h2>Section 2</h2>
  <p>Second section content</p>
</section>
```

### Spacing Sizes

```html
<div>
  <div class="p-4 bg-gray-50">Content</div>
  
  <hr class="divider-x--small">
  
  <div class="p-4 bg-gray-50">
    Small gap (10px)
  </div>
  
  <hr class="divider-x--medium">
  
  <div class="p-4 bg-gray-50">
    Medium gap (20px)
  </div>
  
  <hr class="divider-x--large">
  
  <div class="p-4 bg-gray-50">
    Large gap (30px)
  </div>
</div>
```

## Vertical Dividers

### Basic Usage

```html
<div class="flex h-32">
  <div class="w-32 p-4 bg-gray-50">Menu 1</div>
  <div class="divider-y"></div>
  <div class="w-32 p-4 bg-gray-50">Menu 2</div>
  <div class="divider-y"></div>
  <div class="w-32 p-4 bg-gray-50">Menu 3</div>
</div>
```

### Spacing Sizes

```html
<div class="flex h-48">
  <div class="w-24 p-2">
    <hr class="divider-y--small">
    <p class="text-xs mt-2">Small (10px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y--medium">
    <p class="text-xs mt-2">Medium (20px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y--large">
    <p class="text-xs mt-2">Large (30px)</p>
  </div>
  
  <div class="w-24 p-2">
    <hr class="divider-y">
    <p class="text-xs mt-2">Default (20px)</p>
  </div>
</div>
```

## Usage Examples

### Navigation Menu

```html
<nav class="flex items-center bg-white border-b border-gray-200 px-6 py-4">
  <a href="/" class="text-gray-700 hover:text-primary-500 px-4">
    Home
  </a>
  <div class="divider-y--small"></div>
  <a href="/about" class="text-gray-700 hover:text-primary-500 px-4">
    About
  </a>
  <div class="divider-y--small"></div>
  <a href="/products" class="text-gray-700 hover:text-primary-500 px-4">
    Products
  </a>
  <div class="divider-y--small"></div>
  <a href="/contact" class="text-gray-700 hover:text-primary-500 px-4">
    Contact
  </a>
</nav>
```

### Article Section Divider

```html
<article class="max-w-2xl mx-auto">
  <h1 class="text-3xl font-bold mb-4">Article Title</h1>
  <p class="text-gray-600 mb-8">Introduction...</p>
  
  <hr class="divider-x--medium">
  
  <h2 class="text-2xl font-bold mt-8 mb-4">Main Content</h2>
  <p>Content...</p>
  
  <hr class="divider-x--large my-12">
  
  <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
  <p>Summary...</p>
</article>
```

### Cards with Dividers

```html
<div class="flex bg-white rounded-lg border border-gray-200 overflow-hidden">
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Feature 1</h3>
    <p class="text-gray-600 text-sm">Feature description</p>
  </div>
  <div class="divider-y"></div>
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Feature 2</h3>
    <p class="text-gray-600 text-sm">Feature description</p>
  </div>
  <div class="divider-y"></div>
  <div class="p-6 w-1/3">
    <h3 class="font-bold mb-2">Feature 3</h3>
    <p class="text-gray-600 text-sm">Feature description</p>
  </div>
</div>
```

### Sidebar with Dividers

```html
<aside class="w-64 bg-white border-r border-gray-200">
  <div class="p-4">
    <a href="#" class="block py-2 hover:bg-gray-50">Item 1</a>
    <hr class="divider-x--small">
    <a href="#" class="block py-2 hover:bg-gray-50">Item 2</a>
    <hr class="divider-x--small">
    <a href="#" class="block py-2 hover:bg-gray-50">Item 3</a>
  </div>
</aside>
```

### List with Dividers

```html
<ul>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Item 1</span>
      <span class="text-gray-500">$100</span>
    </div>
  </li>
  <li>
    <hr class="divider-x">
  </li>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Item 2</span>
      <span class="text-gray-500">$200</span>
    </div>
  </li>
  <li>
    <hr class="divider-x">
  </li>
  <li class="py-3">
    <div class="flex justify-between">
      <span>Item 3</span>
      <span class="text-gray-500">$300</span>
    </div>
  </li>
</ul>
```

## Classes Table

| Class | Type | Spacing | Description |
|-------|------|---------|-------------|
| `.divider-x` | Horizontal | 20px top/bottom | Basic |
| `.divider-x--small` | Horizontal | 10px top/bottom | Small |
| `.divider-x--medium` | Horizontal | 20px top/bottom | Medium |
| `.divider-x--large` | Horizontal | 30px top/bottom | Large |
| `.divider-y` | Vertical | 20px left/right | Basic |
| `.divider-y--small` | Vertical | 10px left/right | Small |
| `.divider-y--medium` | Vertical | 20px left/right | Medium |
| `.divider-y--large` | Vertical | 30px left/right | Large |

## CSS Properties

```scss
// Horizontal divider
.divider-x {
  width: 100%;
  height: 1px;
  background-color: #000;
  margin: 20px 0;
}

// Vertical divider
.divider-y {
  width: 1px;
  height: 100%;
  background-color: #000;
  margin: 0 20px;
}
```

## See Also

- [Borders](./index.md) — for creating element borders
- [Spacing](../spacing/index.md) — for managing margins and padding