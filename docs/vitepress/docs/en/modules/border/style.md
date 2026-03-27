# Border Style

Classes for managing border styles of elements.

## Border Styles

### Solid

```html
<div class="border border-solid p-4 bg-white">
  border-solid — solid line
</div>
```

### Dashed

```html
<div class="border border-dashed p-4 bg-white">
  border-dashed — dashed line
</div>
```

### Dotted

```html
<div class="border border-dotted p-4 bg-white">
  border-dotted — dotted line
</div>
```

## Usage Examples

### Form with Dashed Fields

```html
<form class="space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input 
      type="email" 
      class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
             focus:outline-none focus:border-solid focus:border-primary-500"
      placeholder="you@example.com"
    >
  </div>
  
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Password
    </label>
    <input 
      type="password" 
      class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
             focus:outline-none focus:border-solid focus:border-primary-500"
      placeholder="••••••••"
    >
  </div>
</form>
```

### File Drop Zone

```html
<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 cursor-pointer">
  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
  </svg>
  <p class="text-gray-600">Drag files here or click to select</p>
  <p class="text-sm text-gray-400 mt-2">PNG, JPG, GIF up to 10MB</p>
</div>
```

### Card with Dashed Border

```html
<div class="border border-dashed border-gray-300 rounded-lg p-6 bg-gray-50">
  <h3 class="font-bold text-gray-700 mb-2">Additional Information</h3>
  <p class="text-gray-600 text-sm">
    This block contains additional information displayed with a dashed border
  </p>
</div>
```

### Highlighted Area

```html
<div class="border-2 border-dotted border-primary-300 rounded-lg p-4 bg-primary-50">
  <h4 class="font-bold text-primary-700 mb-2">Highlighted Area</h4>
  <p class="text-primary-600 text-sm">
    This area is highlighted with a dotted border to draw attention
  </p>
</div>
```

### Checkbox with Dashed Border

```html
<label class="flex items-center gap-2 cursor-pointer">
  <input type="checkbox" class="border-2 border-dashed border-gray-300 rounded">
  <span class="text-gray-700">I agree to the terms</span>
</label>
```

## Combining with Other Styles

### Change Style on Hover

```html
<div class="border border-dashed border-gray-300 hover:border-solid hover:border-primary-500 
            p-4 rounded-lg transition-colors cursor-pointer">
  Hover me — border becomes solid
</div>
```

### Change Style on Focus

```html
<input 
  type="text" 
  class="border border-dashed border-gray-300 rounded px-4 py-2 w-full
         focus:outline-none focus:border-solid focus:border-primary-500 focus:ring-2 
         focus:ring-primary-200"
  placeholder="Click to focus"
>
```

## Classes Table

| Class | CSS Property | Description |
|-------|--------------|-------------|
| `border-solid` | `border-style: solid` | Solid line |
| `border-dashed` | `border-style: dashed` | Dashed line |
| `border-dotted` | `border-style: dotted` | Dotted line |

## CSS Examples

```scss
// Solid border
.border-solid {
  border-style: solid;
}

// Dashed border
.border-dashed {
  border-style: dashed;
}

// Dotted border
.border-dotted {
  border-style: dotted;
}
```

## See Also

- [Borders](./index.md) — for managing border thickness and color
- [Outline](../outline/index.md) — for element outlines
- [Effects](../effects/index.md) — for interactive states