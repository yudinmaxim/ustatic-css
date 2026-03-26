# useTokens

Хук для работы с CSS-токенами дизайн-системы. Позволяет устанавливать, получать и удалять CSS-токены как глобально, так и в рамках CSS-классов.

## Основные концепции

### Формат токенов
Токены задаются в формате с точками: `"base.color.primary"`, `"base.size.4"` и т.д. При использовании они преобразуются в CSS-переменные вида `var(--prefix-base-color-primary)`.

### Префикс токенов
Префикс берётся из `package.json` поля `prefix` (например, `"u-"`). Если префикс не задан, используется только имя переменной.

## Возвращаемые методы

### setCssTokenViaClass

Устанавливает значения токенов для указанного класса.

```typescript
const { setCssTokenViaClass } = useCssProperties()

setCssTokenViaClass('my-card', {
  'base.color.background': '#ffffff',
  'base.color.primary': 'T:base.color.variant.primary' // T: = ссылка на другой токен
})
```

**Параметры:**
- `className` — имя класса
- `tokens` — объект с токенами (ключ — путь токена, значение — значение)
- `options.patch` — если `true`, сохраняет существующие токены в классе

### getCssTokensFromClass

Получает все токены из класса.

```typescript
const { getCssTokensFromClass } = useTokens()

const tokens = getCssTokensFromClass('my-card')
// Результат: { '--u-base-color-background': '#ffffff', ... }
```

### getCssTokenViaClass

Получает значение конкретного токена из класса.

```typescript
const { getCssTokenViaClass } = useTokens()

const color = getCssTokenViaClass('my-card', 'base.color.primary')
```

### removeClassWithTokens

Удаляет класс с токенами.

```typescript
const { removeClassWithTokens } = useTokens()

removeClassWithTokens('my-card')
```

### clearClassWithTokens

Очищает все классы с токенами.

```typescript
const { clearClassWithTokens } = useTokens()

clearClassWithTokens()
```

### setCssToken

Устанавливает токен глобально.

```typescript
const { setCssToken } = useTokens()

setCssToken('base.color.primary', '#3b82f6')
// Результат: --u-base-color-primary: #3b82f6
```

### removeCssToken

Удаляет токен глобально.

```typescript
const { removeCssToken } = useTokens()

removeCssToken('base.color.primary')
```

### clearCssTokens

Очищает все глобальные токены.

```typescript
const { clearCssTokens } = useTokens()

clearCssTokens()
```

### getCssToken

Получает значение токена из глобальной области видимости.

```typescript
const { getCssToken } = useTokens()

const color = getCssToken('base.color.primary')
// Результат: '#3b82f6' (или текущее значение CSS переменной)
```

### getCssTokenVar

Возвращает формат CSS-переменной для токена.

```typescript
const { getCssTokenVar } = useTokens()

const varStr = getCssTokenVar('base.color.primary')
// Результат: 'var(--u-base-color-primary)'
```

### setCssTokenVar

Создаёт строку для установки токена в атрибуте `style`.

```typescript
const { setCssTokenVar } = useTokens()

const tokenStr = setCssTokenVar('base.color.primary', '#3b82f6')
// Результат: '--u-base-color-primary: #3b82f6'
```

### clearAll

Полная очистка всех токенов.

```typescript
const { clearAll } = useTokens()

clearAll()
```

## Работа со ссылками на токены

Для использования значения одного токена в качестве значения другого используется префикс `T:`:

```typescript
setCssTokenViaClass('my-class', {
  'base.color.background': 'T:base.color.variant.primary'
})
// Результат: --u-base-color-background: var(--u-base-color-variant-primary)
```

## Примеры использования

### Создание тематического класса
```typescript
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
```
