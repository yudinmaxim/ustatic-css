# Alignment (align)

This module provides CSS classes for vertical alignment of inline and table elements.

## Classes

| Class | CSS Property | Description | Example |
|-------|--------------|-------------|---------|
| `.align-baseline` | `vertical-align: baseline` | Align to text baseline | Baseline |
| `.align-top` | `vertical-align: top` | Align to top edge | Top |
| `.align-middle` | `vertical-align: middle` | Align to center | Middle |
| `.align-bottom` | `vertical-align: bottom` | Align to bottom edge | Bottom |

## Usage Examples

### Alignment in Table

```html
<table class="w-full border">
  <tr>
    <td class="align-top border p-2">
      Top alignment
    </td>
    <td class="align-middle border p-2">
      Center alignment
    </td>
    <td class="align-bottom border p-2">
      Bottom alignment
    </td>
  </tr>
</table>
```

### Alignment of Inline-Block Elements

```html
<div class="text-center">
  <span class="align-top inline-block bg-primary-100 p-2">Top</span>
  <span class="align-middle inline-block bg-primary-200 p-2">Middle</span>
  <span class="align-bottom inline-block bg-primary-300 p-2">Bottom</span>
</div>
```

### Image with Text Alignment

```html
<div>
  <img 
    src="icon.png" 
    alt="Icon" 
    class="align-middle w-6 h-6 mr-2"
  >
  <span class="align-middle">Text aligned to icon center</span>
</div>
```

## Combining with Other Modules

### Flexbox + Align

```html
<!-- Flexbox for layout, align for inline elements inside -->
<div class="flex items-center">
  <img src="logo.png" class="align-middle w-8 h-8 mr-2">
  <span class="align-middle text-lg">Logo</span>
</div>
```

### Table Layout

```html
<div class="table w-full">
  <div class="table-row">
    <div class="table-cell align-middle w-1/3">
      Centered cell
    </div>
    <div class="table-cell align-top w-2/3">
      Cell with top alignment
    </div>
  </div>
</div>
```

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| IE 11 | ✅ |

## Notes

- The `align` module works only with inline and table-cell elements
- For vertical centering of block elements, use Flexbox or Grid
- The `vertical-align` property doesn't work with block elements (display: block)

## See Also

- [Flexbox](../flexbox/) — for modern alignment
- [Display](../display/) — for display type control
- [Grid](../grid/) — for grid layout
