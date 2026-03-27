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

### getCssTokensFromClass

Получает значения токенов из класса.

```javascript
const { getCssTokensFromClass } = useTokens();

const tokens = getCssTokensFromClass('my-class');
// { '--color-primary': '#ff0000', '--spacing-large': '24px' }
```

### setCssToken

Устанавливает значение CSS-токена в глобальной области.

```javascript
const { setCssToken } = useTokens();

setCssToken('color.primary', '#ff0000');
```

### getCssToken

Получает значение CSS-токена из глобальной области.

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

### removeCssToken

Удаляет CSS-токен из глобальной области.

```javascript
const { removeCssToken } = useTokens();

removeCssToken('color.primary');
```

### clearAll

Полная очистка всех изменений токенов.

```javascript
const { clearAll } = useTokens();

clearAll();
```
