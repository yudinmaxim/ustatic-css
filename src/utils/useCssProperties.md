# useCssProperties

Хук для управления CSS-свойствами через JavaScript. Позволяет динамически устанавливать, получать и удалять CSS-свойства как глобально (на элементе `document.documentElement`), так и в рамках CSS-классов.

## Возвращаемые методы

### setCssPropertiesViaClass

Устанавливает CSS-свойства для указанного класса. Создаёт динамический `<style>` тег с CSS-правилами.

```typescript
const { setCssPropertiesViaClass } = useCssProperties()

setCssPropertiesViaClass('my-custom-class', {
  'color': 'red',
  'background-color': 'white',
  'padding': '10px'
})
// Результат: <style> .my-custom-class { color: red; background-color: white; padding: 10px; } </style>
```

### getCssPropertyViaClass

Получает значение CSS-свойства для указанного класса.

```typescript
const { getCssPropertyViaClass } = useCssProperties()

const color = getCssPropertyViaClass('my-custom-class', 'color')
// Результат: 'red'
```

### removeClassWithProperties

Удаляет CSS-свойства для указанного класса.

```typescript
const { removeClassWithProperties } = useCssProperties()

removeClassWithProperties('my-custom-class')
```

### clearClassWithProperties

Очищает все CSS-свойства для всех созданных классов.

```typescript
const { clearClassWithProperties } = useCssProperties()

clearClassWithProperties()
```

### setCssProperty

Устанавливает CSS-свойство глобально (на `document.documentElement`).

```typescript
const { setCssProperty } = useCssProperties()

setCssProperty('--custom-color', '#ff0000')
// Результат: document.documentElement.style.setProperty('--custom-color', '#ff0000')
```

### removeCssProperty

Удаляет CSS-свойство глобально.

```typescript
const { removeCssProperty } = useCssProperties()

removeCssProperty('--custom-color')
```

### clearCssProperties

Очищает все CSS-свойства, установленные глобально.

```typescript
const { clearCssProperties } = useCssProperties()

clearCssProperties()
```

### clearAll

Полная очистка — удаляет все CSS-свойства (и глобальные, и классы).

```typescript
const { clearAll } = useCssProperties()

clearAll()
```

## Полный пример использования

```typescript
import { useCssProperties } from 'ustatic-css'

export function MyComponent() {
  const {
    setCssPropertiesViaClass,
    getCssPropertyViaClass,
    removeClassWithProperties,
    setCssProperty,
    clearAll
  } = useCssProperties()

  const handleClick = () => {
    // Установить CSS свойства для класса
    setCssPropertiesViaClass('highlighted', {
      'background-color': '#fff3cd',
      'border': '1px solid #ffc107',
      'padding': '1rem'
    })

    // Установить глобальное CSS свойство
    setCssProperty('--theme-color', '#3498db')
  }

  const handleCleanup = () => {
    // Очистить всё при размонтировании
    clearAll()
  }

  return (
    <div>
      <button onClick={handleClick}>Применить стили</button>
      <button onClick={handleCleanup}>Очистить</button>
    </div>
  )
}
```

## Внутренняя структура

Хук создаёт динамический `<style>` тег с id `css-features` в `<head>` документа для хранения CSS-правил классов. Все глобальные свойства устанавливаются на `document.documentElement`.
