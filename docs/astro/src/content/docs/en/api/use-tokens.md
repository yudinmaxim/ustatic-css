---
title: useTokens
description: Documentation for useTokens hook
---

# useTokens

`useTokens` is a hook for working with CSS tokens in your application. It allows you to set, get, and remove CSS tokens both in the global scope and within CSS classes.

## Main Functions

### setCssTokenViaClass

Sets variable values based on token name and value for a specific CSS class.

```javascript
const { setCssTokenViaClass } = useTokens();

setCssTokenViaClass('my-class', {
  'color.primary': '#ff0000',
  'spacing.large': '24px'
});
```

**Parameters:**
- `className` — class name
- `tokens` — token dictionary
- `options.patch` — whether to preserve existing tokens (default false)

### getCssTokensFromClass

Gets token values from a class.

```javascript
const { getCssTokensFromClass } = useTokens();

const tokens = getCssTokensFromClass('my-class');
// { '--color-primary': '#ff0000', '--spacing-large': '24px' }
```

### getCssTokenViaClass

Gets the value of a specific token from a class.

```javascript
const { getCssTokenViaClass } = useTokens();

const value = getCssTokenViaClass('my-class', 'color.primary');
// '#ff0000'
```

### setCssToken

Sets a CSS token value in the global scope.

```javascript
const { setCssToken } = useTokens();

setCssToken('color.primary', '#ff0000');
```

### getCssToken

Gets a CSS token value from the global variable scope.

```javascript
const { getCssToken } = useTokens();

const value = getCssToken('color.primary');
// '#ff0000'
```

### getCssTokenVar

Returns the token value as `var(--token)`.

```javascript
const { getCssTokenVar } = useTokens();

const value = getCssTokenVar('color.primary');
// 'var(--color-primary)'
```

### setCssTokenVar

Creates a token value as a local variable.

```javascript
const { setCssTokenVar } = useTokens();

const value = setCssTokenVar('color.primary', '#ff0000');
// '--color-primary: #ff0000'
```

### removeCssToken

Removes a CSS token from the global scope.

```javascript
const { removeCssToken } = useTokens();

removeCssToken('color.primary');
```

### clearCssTokens

Removes all CSS tokens from the global scope.

```javascript
const { clearCssTokens } = useTokens();

clearCssTokens();
```

### clearAll

Complete cleanup of all token changes.

```javascript
const { clearAll } = useTokens();

clearAll();
```

## Helper Functions

### getValueFromForToken

Allows getting a token value when using it as a value for another token.

```javascript
const { getValueFromForToken } = useTokens();

const value1 = getValueFromForToken('foo.bar');       // 'foo.bar'
const value2 = getValueFromForToken('T:foo.bar');     // 'var(--foo-bar)'
```
