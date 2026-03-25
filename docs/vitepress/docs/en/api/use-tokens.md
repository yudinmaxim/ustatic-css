# useTokens

`useTokens` is a hook for working with CSS tokens in an application. Allows you to set, get, and remove CSS tokens both in the global scope and within CSS classes.

## Main Functions

### setCssTokenViaClass

Sets token variable values based on token name and value for a specific CSS class.

```javascript
const { setCssTokenViaClass } = useTokens();

setCssTokenViaClass('my-class', {
  'color.primary': '#ff0000',
  'spacing.large': '24px'
});
```

### getCssTokensFromClass

Gets token values from a class.

```javascript
const { getCssTokensFromClass } = useTokens();

const tokens = getCssTokensFromClass('my-class');
// { '--color-primary': '#ff0000', '--spacing-large': '24px' }
```

### setCssToken

Sets a CSS token value in the global scope.

```javascript
const { setCssToken } = useTokens();

setCssToken('color.primary', '#ff0000');
```

### getCssToken

Gets a CSS token value from the global scope.

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

### removeCssToken

Removes a CSS token from the global scope.

```javascript
const { removeCssToken } = useTokens();

removeCssToken('color.primary');
```

### clearAll

Complete cleanup of all token changes.

```javascript
const { clearAll } = useTokens();

clearAll();
```
