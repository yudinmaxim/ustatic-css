---
title: useTokens
description: Документация по хуку useTokens
---

# useTokens

`useTokens` — это хук для работы с CSS-токенами в приложении. Позволяет устанавливать, получать и удалять CSS-токены как в глобальной области видимости, так и в рамках CSS-классов.

## Основные функции

### setCssTokenViaClass

Устанавливает значения переменных на основании имени токена и его значения для конкретного CSS-класса.

```javascript
const { setCssTokenViaClass } = useTokens();

setCssTokenViaClass('my-class', {
  'color.primary': '#ff0000',
  'spacing.large': '24px'
});
```

**Параметры:**
- `className` — имя класса
- `tokens` — словарь токенов
- `options.patch` — сохранять ли существующие токены (по умолчанию false)

### getCssTokensFromClass

Получает значения токенов из класса.

```javascript
const { getCssTokensFromClass } = useTokens();

const tokens = getCssTokensFromClass('my-class');
// { '--color-primary': '#ff0000', '--spacing-large': '24px' }
```

### getCssTokenViaClass

Получает значение конкретного токена из класса.

```javascript
const { getCssTokenViaClass } = useTokens();

const value = getCssTokenViaClass('my-class', 'color.primary');
// '#ff0000'
```

### setCssToken

Устанавливает значение CSS-токена в глобальной области.

```javascript
const { setCssToken } = useTokens();

setCssToken('color.primary', '#ff0000');
```

### getCssToken

Получает значение CSS-токена из глобальной области переменных.

```javascript
const { getCssToken } = useTokens();

const value = getCssToken('color.primary');
// '#ff0000'
```

### getCssTokenVar

Возвращает значение токена как `var(--token)`.

```javascript
const { getCssTokenVar } = useTokens();

const value = getCssTokenVar('color.primary');
// 'var(--color-primary)'
```

### setCssTokenVar

Создает значение токена как локальную переменную.

```javascript
const { setCssTokenVar } = useTokens();

const value = setCssTokenVar('color.primary', '#ff0000');
// '--color-primary: #ff0000'
```

### removeCssToken

Удаляет CSS-токен из глобальной области.

```javascript
const { removeCssToken } = useTokens();

removeCssToken('color.primary');
```

### clearCssTokens

Удаляет все CSS-токены из глобальной области.

```javascript
const { clearCssTokens } = useTokens();

clearCssTokens();
```

### clearAll

Полная очистка всех изменений токенов.

```javascript
const { clearAll } = useTokens();

clearAll();
```

## Вспомогательные функции

### getValueFromForToken

Позволяет получить значение токена при использовании его в качестве значения для другого токена.

```javascript
const { getValueFromForToken } = useTokens();

const value1 = getValueFromForToken('foo.bar');       // 'foo.bar'
const value2 = getValueFromForToken('T:foo.bar');     // 'var(--foo-bar)'
```
