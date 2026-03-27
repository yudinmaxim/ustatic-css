# Rounded Corners

Classes for rounding element corners.

## Main Classes

| Class | Radius | Visual |
|-------|--------|--------|
| `.rounded-none` | 0 | Sharp corner |
| `.rounded-sm` | 2px | Small |
| `.rounded-base` | 4px | Base |
| `.rounded-md` | 6px | Medium |
| `.rounded-lg` | 8px | Large |
| `.rounded-xl` | 12px | Extra large |
| `.rounded-2xl` | 16px | Double |
| `.rounded-3xl` | 24px | Triple |
| `.rounded-full` | 9999px | Full/Circle |

## Examples

```html
<div class="flex gap-4 items-end">
  <div class="rounded-none bg-primary-500 w-16 h-16"></div>
  <div class="rounded-sm bg-primary-500 w-16 h-16"></div>
  <div class="rounded-base bg-primary-500 w-16 h-16"></div>
  <div class="rounded-md bg-primary-500 w-16 h-16"></div>
  <div class="rounded-lg bg-primary-500 w-16 h-16"></div>
  <div class="rounded-xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-2xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-3xl bg-primary-500 w-16 h-16"></div>
  <div class="rounded-full bg-primary-500 w-16 h-16"></div>
</div>
```

## Corner-Specific Rounding

### All Corners on One Side

```html
<div class="flex gap-4">
  <div class="rounded-t-lg bg-primary-500 p-4 text-white">
    rounded-t-lg (top)
  </div>
  <div class="rounded-r-lg bg-primary-500 p-4 text-white">
    rounded-r-lg (right)
  </div>
  <div class="rounded-b-lg bg-primary-500 p-4 text-white">
    rounded-b-lg (bottom)
  </div>
  <div class="rounded-l-lg bg-primary-500 p-4 text-white">
    rounded-l-lg (left)
  </div>
</div>
```

### Individual Corners

```html
<div class="flex gap-4">
  <div class="rounded-tr-lg bg-primary-500 p-4 text-white">
    rounded-tr-lg (top-right)
  </div>
  <div class="rounded-tl-lg bg-primary-500 p-4 text-white">
    rounded-tl-lg (top-left)
  </div>
  <div class="rounded-br-lg bg-primary-500 p-4 text-white">
    rounded-br-lg (bottom-right)
  </div>
  <div class="rounded-bl-lg bg-primary-500 p-4 text-white">
    rounded-bl-lg (bottom-left)
  </div>
</div>
```

### Combinations

```html
<div class="flex gap-4">
  <!-- Top corners only -->
  <div class="rounded-t-md rounded-b-none bg-primary-500 p-4 text-white">
    Top only
  </div>
  
  <!-- Bottom corners only -->
  <div class="rounded-b-lg rounded-t-none bg-primary-500 p-4 text-white">
    Bottom only
  </div>
  
  <!-- Single corner -->
  <div class="rounded-tr-full bg-primary-500 p-4 text-white">
    One corner rounded
  </div>
</div>
```

## Circular Elements

### Circular Button

```html
<button class="circle w-12 h-12 bg-primary-500 text-white flex items-center justify-center">
  <svg class="w-6 h-6">...</svg>
</button>
```

### Circular Avatar

```html
<img 
  class="circle w-16 h-16 object-cover" 
  src="avatar.jpg" 
  alt="Avatar"
>
```

### Circular Badge

```html
<div class="rounded-full bg-primary-500 text-white w-8 h-8 flex items-center justify-center">
  1
</div>
```

## Usage Examples

### Card

```html
<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h3 class="text-lg font-bold mb-2">Title</h3>
  <p class="text-gray-600">Card description</p>
</div>
```

### Button

```html
<button class="rounded-md bg-primary-500 text-white px-4 py-2 hover:bg-primary-600">
  Button
</button>
```

### Input Field

```html
<input 
  type="text" 
  class="rounded border border-gray-300 px-4 py-2 w-full
         focus:outline-none focus:border-primary-500"
  placeholder="Enter text"
>
```

### Status Badge

```html
<span class="rounded-full bg-success text-white px-3 py-1 text-sm">
  Active
</span>
```

### Menu with Rounded Edges

```html
<nav class="rounded-lg bg-gray-100 p-2 flex gap-2">
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Item 1</a>
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Item 2</a>
  <a href="#" class="px-3 py-2 rounded hover:bg-white">Item 3</a>
</nav>
```

## Reference Table

| Class | CSS |
|-------|-----|
| `.rounded-none` | `border-radius: 0` |
| `.rounded-sm` | `border-radius: 2px` |
| `.rounded-base` | `border-radius: 4px` |
| `.rounded-md` | `border-radius: 6px` |
| `.rounded-lg` | `border-radius: 8px` |
| `.rounded-xl` | `border-radius: 12px` |
| `.rounded-2xl` | `border-radius: 16px` |
| `.rounded-3xl` | `border-radius: 24px` |
| `.rounded-full` | `border-radius: 9999px` |
| `.circle` | `border-radius: 100%` |

## See Also

- [Borders](./index.md) — for adding borders
- [Sizing](../sizing/index.md) — for creating circular elements
- [Outline](../outline/index.md) — for element outlines