---
title: useCssProperties
description: Документация по хуку useCssProperties
---

# useCssProperties

`useCssProperties` — это хук для управления CSS-свойствами через классы. Позволяет устанавливать, получать и удалять CSS-свойства как для отдельных элементов, так и для CSS-классов.

## Основные функции

### setCssPropertiesViaClass

Устанавливает CSS-свойства для указанного класса.

```javascript
const { setCssPropertiesViaClass } = useCssProperties();

setCssPropertiesViaClass('my-class', {
  'color': '#ff0000',
  'font-size': '16px'
});
```

### getCssPropertyViaClass

Получает значение CSS-свойства для указанного класса.

```javascript
const { getCssPropertyViaClass } = useCssProperties();

const color = getCssPropertyViaClass('my-class', 'color');
// '#ff0000'
```

### removeClassWithProperties

Удаляет CSS-свойства для указанного класса.

```javascript
const { removeClassWithProperties } = useCssProperties();

removeClassWithProperties('my-class');
```

### setCssProperty

Устанавливает CSS-свойство для корневого элемента документа.

```javascript
const { setCssProperty } = useCssProperties();

setCssProperty('--main-color', '#ff0000');
```

### removeCssProperty

Удаляет CSS-свойство из корневого элемента документа.

```javascript
const { removeCssProperty } = useCssProperties();

removeCssProperty('--main-color');
```

### clearCssProperties

Очищает все CSS-свойства для корневого элемента.

```javascript
const { clearCssProperties } = useCssProperties();

clearCssProperties();
```

### clearAll

Полная очистка всех CSS-свойств — как для классов, так и для элемента.

```javascript
const { clearAll } = useCssProperties();

clearAll();
```
