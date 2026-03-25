# useCssProperties

`useCssProperties` is a hook for managing CSS properties through classes. Allows you to set, get, and remove CSS properties for both individual elements and CSS classes.

## Main Functions

### setCssPropertiesViaClass

Sets CSS properties for a specified class.

```javascript
const { setCssPropertiesViaClass } = useCssProperties();

setCssPropertiesViaClass('my-class', {
  'color': '#ff0000',
  'font-size': '16px'
});
```

### getCssPropertyViaClass

Gets the value of a CSS property for a specified class.

```javascript
const { getCssPropertyViaClass } = useCssProperties();

const color = getCssPropertyViaClass('my-class', 'color');
// '#ff0000'
```

### removeClassWithProperties

Removes CSS properties for a specified class.

```javascript
const { removeClassWithProperties } = useCssProperties();

removeClassWithProperties('my-class');
```

### setCssProperty

Sets a CSS property on the root document element.

```javascript
const { setCssProperty } = useCssProperties();

setCssProperty('--main-color', '#ff0000');
```

### removeCssProperty

Removes a CSS property from the root document element.

```javascript
const { removeCssProperty } = useCssProperties();

removeCssProperty('--main-color');
```

### clearCssProperties

Clears all CSS properties on the root element.

```javascript
const { clearCssProperties } = useCssProperties();

clearCssProperties();
```

### clearAll

Complete cleanup of all CSS properties — both for classes and the element.

```javascript
const { clearAll } = useCssProperties();

clearAll();
```
