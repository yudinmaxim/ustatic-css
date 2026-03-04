# Документация по useCssProperties

## Общее описание

`useCssProperties` - это хук, который предоставляет функциональность для управления CSS-свойствами через классы. Он позволяет устанавливать, получать и удалять CSS-свойства как для отдельных элементов, так и для CSS-классов.

## Основные функции

### setCssPropertiesViaClass

Устанавливает CSS-свойства для указанного класса.

#### Параметры:
- `className` (string) - Имя класса
- `properties` (Record<string, string>) - Объект с CSS-свойствами и их значениями

#### Пример использования:
```javascript
const { setCssPropertiesViaClass } = useCssProperties();

setCssPropertiesViaClass('my-class', {
  'color': '#ff0000',
  'font-size': '16px'
});
```

### getCssPropertyViaClass

Получает значение CSS-свойства для указанного класса.

#### Параметры:
- `className` (string) - Имя класса
- `property` (string) - Имя CSS-свойства

#### Возвращаемое значение:
Значение свойства или пустая строка, если свойство не найдено

#### Пример использования:
```javascript
const { getCssPropertyViaClass } = useCssProperties();

const color = getCssPropertyViaClass('my-class', 'color');
console.log(color); // '#ff0000'
```

### removeClassWithProperties

Удаляет CSS-свойства для указанного класса.

#### Параметры:
- `className` (string) - Имя класса

#### Пример использования:
```javascript
const { removeClassWithProperties } = useCssProperties();

removeClassWithProperties('my-class');
```

### clearClassWithProperties

Очищает все CSS-свойства для всех классов.

#### Пример использования:
```javascript
const { clearClassWithProperties } = useCssProperties();

clearClassWithProperties();
```

### setCssProperty

Устанавливает CSS-свойство для элемента (в корневом элементе документа).

#### Параметры:
- `property` (string) - Имя CSS-свойства
- `value` (string) - Значение свойства

#### Пример использования:
```javascript
const { setCssProperty } = useCssProperties();

setCssProperty('--main-color', '#ff0000');
```

### removeCssProperty

Удаляет CSS-свойство для элемента (из корневого элемента документа).

#### Параметры:
- `property` (string) - Имя CSS-свойства

#### Пример использования:
```javascript
const { removeCssProperty } = useCssProperties();

removeCssProperty('--main-color');
```

### clearCssProperties

Очищает все CSS-свойства для элемента (из корневого элемента документа).

#### Пример использования:
```javascript
const { clearCssProperties } = useCssProperties();

clearCssProperties();
```

### clearAll

Полная очистка всех CSS-свойств - как для классов, так и для элемента.

#### Пример использования:
```javascript
const { clearAll } = useCssProperties();

clearAll();