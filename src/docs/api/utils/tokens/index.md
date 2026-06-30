# Работа с токенами

Хуки для управления CSS-токенами и свойствами через JavaScript.

## useTokens

Хук для работы с CSS-токенами дизайн-системы.

### Возвращаемые методы

#### setCssToken

Устанавливает токен глобально.

```typescript
const { setCssToken } = useTokens()

setCssToken('base.color.primary', '#3b82f6')
// Результат: --u-base-color-primary: #3b82f6
```

#### removeCssToken

Удаляет токен глобально.

```typescript
const { removeCssToken } = useTokens()

removeCssToken('base.color.primary')
```

#### clearCssTokens

Очищает все глобальные токены.

```typescript
const { clearCssTokens } = useTokens()

clearCssTokens()
```

#### getCssToken

Получает значение токена из глобальной области видимости.

```typescript
const { getCssToken } = useTokens()

const color = getCssToken('base.color.primary')
// Результат: '#5993d9' (или текущее значение CSS переменной)
```

#### getCssTokenVar

Возвращает формат CSS-переменной для токена.

```typescript
const { getCssTokenVar } = useTokens()

const varStr = getCssTokenVar('base.color.primary')
// Результат: 'var(--u-base-color-primary)'
```

#### setCssTokenVar

Создаёт строку для установки токена в атрибуте `style`.

```typescript
const { setCssTokenVar } = useTokens()

const tokenStr = setCssTokenVar('base.color.primary', '#3b82f6')
// Результат: '--u-base-color-primary: #3b82f6'
```

#### setCssTokenViaClass

Устанавливает значения токенов для указанного класса.

```typescript
const { setCssTokenViaClass } = useTokens()

setCssTokenViaClass('my-card', {
  'base.color.background': '#ffffff',
  'base.color.primary': 'T:base.color.variant.primary' // T: = ссылка на другой токен
})
```

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `className` | `string` | Имя класса |
| `tokens` | `object` | Объект с токенами |
| `options.patch` | `boolean` | Если `true`, сохраняет существующие токены |

#### getCssTokensFromClass

Получает все токены из класса.

```typescript
const { getCssTokensFromClass } = useTokens()

const tokens = getCssTokensFromClass('my-card')
// Результат: { '--u-base-color-background': '#ffffff', ... }
```

#### getCssTokenViaClass

Получает значение конкретного токена из класса.

```typescript
const { getCssTokenViaClass } = useTokens()

const color = getCssTokenViaClass('my-card', 'base.color.primary')
```

#### removeClassWithTokens

Удаляет класс с токенами.

```typescript
const { removeClassWithTokens } = useTokens()

removeClassWithTokens('my-card')
```

#### clearClassWithTokens

Очищает все классы с токенами.

```typescript
const { clearClassWithTokens } = useTokens()

clearClassWithTokens()
```

#### clearAll

Полная очистка всех токенов.

```typescript
const { clearAll } = useTokens()

clearAll()
```

## useCssProperties

Хук для управления CSS-свойствами через JavaScript.

### Возвращаемые методы

#### setCssPropertiesViaClass

Устанавливает CSS-свойства для указанного класса.

```typescript
const { setCssPropertiesViaClass } = useCssProperties()

setCssPropertiesViaClass('my-custom-class', {
  'color': 'red',
  'background-color': 'white',
  'padding': '10px'
})
// Результат: <style> .my-custom-class { color: red; ... } </style>
```

#### getCssPropertyViaClass

Получает значение CSS-свойства для указанного класса.

```typescript
const { getCssPropertyViaClass } = useCssProperties()

const color = getCssPropertyViaClass('my-custom-class', 'color')
// Результат: 'red'
```

#### removeClassWithProperties

Удаляет CSS-свойства для указанного класса.

```typescript
const { removeClassWithProperties } = useCssProperties()

removeClassWithProperties('my-custom-class')
```

#### clearClassWithProperties

Очищает все CSS-свойства для всех созданных классов.

```typescript
const { clearClassWithProperties } = useCssProperties()

clearClassWithProperties()
```

#### setCssProperty

Устанавливает CSS-свойство глобально.

```typescript
const { setCssProperty } = useCssProperties()

setCssProperty('--custom-color', '#ff0000')
// Результат: document.documentElement.style.setProperty('--custom-color', '#ff0000')
```

#### removeCssProperty

Удаляет CSS-свойство глобально.

```typescript
const { removeCssProperty } = useCssProperties()

removeCssProperty('--custom-color')
```

#### clearCssProperties

Очищает все CSS-свойства, установленные глобально.

```typescript
const { clearCssProperties } = useCssProperties()

clearCssProperties()
```

#### clearAll

Полная очистка всех CSS-свойств.

```typescript
const { clearAll } = useCssProperties()

clearAll()
```

## Примеры использования

### Создание тематического класса

```typescript
import { useTokens } from 'ustatic-css'

const { setCssTokenViaClass } = useTokens()

// Создаём класс с кастомными цветами
setCssTokenViaClass('theme-dark', {
  'base.color.background': '#1a1a1a',
  'base.color.text': '#ffffff',
  'base.color.primary': '#3b82f6'
})
```

### Динамическое переключение темы

```typescript
import { useTokens } from 'ustatic-css'

export function ThemeSwitcher() {
  const { setCssToken, clearCssTokens } = useTokens()
  
  const setTheme = (theme: 'light' | 'dark') => {
    clearCssTokens()
    
    if (theme === 'dark') {
      setCssToken('base.color.background', '#1a1a1a')
      setCssToken('base.color.text', '#ffffff')
    } else {
      setCssToken('base.color.background', '#ffffff')
      setCssToken('base.color.text', '#000000')
    }
  }
  
  return (
    <div>
      <button onClick={() => setTheme('light')}>Светлая</button>
      <button onClick={() => setTheme('dark')}>Тёмная</button>
    </div>
  )
}
```

### Управление CSS-свойствами в React

```typescript
import { useCssProperties } from 'ustatic-css'

export function MyComponent() {
  const {
    setCssPropertiesViaClass,
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

### Работа со ссылками на токены

```typescript
import { useTokens } from 'ustatic-css'

const { setCssTokenViaClass } = useTokens()

// Использование значения одного токена в качестве значения другого
setCssTokenViaClass('my-class', {
  'base.color.background': 'T:base.color.variant.primary'
})
// Результат: --u-base-color-background: var(--u-base-color-variant-primary)
```

## Основные концепции

### Формат токенов

Токены задаются в формате с точками:

```
base.color.primary
base.size.4
base.border.radius.md
```

При использовании они преобразуются в CSS переменные:

```
base.color.primary → var(--u-base-color-primary)
base.size.4 → var(--u-base-size-4)
```

### Префикс токенов

Префикс берётся из `package.json` поля `prefix` (например, `"u-"`).

Если префикс не задан, используется только имя переменной.

### Ссылки на токены

Для использования значения одного токена в качестве значения другого используется префикс `T:`:

```typescript
setCssTokenViaClass('my-class', {
  'base.color.background': 'T:base.color.variant.primary'
})
```

## Внутренняя структура

Хук создаёт динамический `<style>` тег с id `css-features` в `<head>` документа для хранения CSS-правил классов.

Все глобальные свойства устанавливаются на `document.documentElement`.

## См. также

- [Переменные и токены](../variables-tokens/index.md) — CSS переменные
- [Загрузка стилей](../style-loading/index.md) — styleLoader
- [Vue плагин](../plugins/vue/index.md) — интеграция с Vue
