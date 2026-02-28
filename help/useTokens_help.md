# Документация по useTokens

## Общее описание

`useTokens` - это хук, который предоставляет функциональность для работы с CSS-токенами в приложении. Он позволяет устанавливать, получать и удалять CSS-токены как в глобальной области видимости, так и в рамках CSS-классов.

## Основные функции

### setCssTokenViaClass

Устанавливает значения переменных на основании имени токена и его значения для конкретного CSS-класса.

#### Параметры:
- `className` (string) - Имя класса
- `tokens` (Record<string, string>) - Словарь токенов, где ключ - имя токена, значение - значение токена
- `options` (объект, опционально) - Опции
  - `patch` (boolean) - Флаг, определяющий нужно ли сохранять существующие токены. По умолчанию false
    - если patch == true, то существующие в классе токены сохраняются
    - если patch == false, то существующие в классе токены перезатираются

#### Пример использования:
```javascript
const { setCssTokenViaClass } = useTokens();

setCssTokenViaClass('my-class', {
  'color.primary': '#ff0000',
  'spacing.large': '24px'
});
```

### getCssTokensFromClass

Получает значения токенов из класса.

#### Параметры:
- `className` (string) - Имя класса

#### Возвращаемое значение:
Словарь токенов, где ключ - имя токена, значение - значение токена

#### Пример использования:
```javascript
const { getCssTokensFromClass } = useTokens();

const tokens = getCssTokensFromClass('my-class');
console.log(tokens); // { '--color-primary': '#ff0000', '--spacing-large': '24px' }
```

### getCssTokenViaClass

Получает значение конкретного токена из класса.

#### Параметры:
- `className` (string) - Имя класса
- `token` (string) - Имя токена

#### Возвращаемое значение:
Значение токена

#### Пример использования:
```javascript
const { getCssTokenViaClass } = useTokens();

const value = getCssTokenViaClass('my-class', 'color.primary');
console.log(value); // '#ff0000'
```

### removeClassWithTokens

Удаляет класс стилей со всеми токенами.

#### Параметры:
- `className` (string) - Имя класса

#### Пример использования:
```javascript
const { removeClassWithTokens } = useTokens();

removeClassWithTokens('my-class');
```

### clearClassWithTokens

Удаляет все классы со значениями токенов.

#### Пример использования:
```javascript
const { clearClassWithTokens } = useTokens();

clearClassWithTokens();
```

### setCssToken

Устанавливает значение CSS-токена в глобальной области.

#### Параметры:
- `token` (string) - Имя токена в формате: "foo.bar.field"
- `value` (string) - Значение токена

#### Пример использования:
```javascript
const { setCssToken } = useTokens();

setCssToken('color.primary', '#ff0000');
```

### removeCssToken

Удаляет CSS-токен из глобальной области.

#### Параметры:
- `token` (string) - Имя токена в формате: "foo.bar.field"

#### Пример использования:
```javascript
const { removeCssToken } = useTokens();

removeCssToken('color.primary');
```

### clearCssTokens

Удаляет все CSS-токены из глобальной области.

#### Пример использования:
```javascript
const { clearCssTokens } = useTokens();

clearCssTokens();
```

### getCssToken

Получает значение CSS-токена из глобальной области переменных.

#### Параметры:
- `token` (string) - Имя токена в формате: "foo.bar.field"

#### Возвращаемое значение:
Значение токена

#### Пример использования:
```javascript
const { getCssToken } = useTokens();

const value = getCssToken('color.primary');
console.log(value); // '#ff0000'
```

### getCssTokenVar

Возвращает значение токена как var(--token) (используется при использовании значения токена в стилях, атрибуте style или внутри генерируемого класса).

#### Параметры:
- `token` (string) - Имя токена в формате: "foo.bar.field"

#### Возвращаемое значение:
CSS-переменная в формате var(--token)

#### Пример использования:
```javascript
const { getCssTokenVar } = useTokens();

const value = getCssTokenVar('color.primary');
console.log(value); // 'var(--color-primary)'
```

### setCssTokenVar

Создает значение токена как локальную переменную вида: --token: value, применимо при задаче токенов в атрибуте style.

#### Параметры:
- `token` (string) - Имя токена в формате: "foo.bar.field"
- `value` (string) - Значение токена

#### Возвращаемое значение:
CSS-переменная в формате --token: value

#### Пример использования:
```javascript
const { setCssTokenVar } = useTokens();

const value = setCssTokenVar('color.primary', '#ff0000');
console.log(value); // '--color-primary: #ff0000'
```

### clearAll

Полная очистка всех изменений токенов. Удаляет все токены из глобальной области и все классы со значениями токенов.

#### Пример использования:
```javascript
const { clearAll } = useTokens();

clearAll();
```

## Вспомогательные функции

### getValueFromForToken

Позволяет получить значение токена, при использовании его в качестве значения для другого токена.

#### Параметры:
- `value` (string) - Если value начинается на 'T:' - то метод считает это значение кодом токена и пытается получить значение этого токена. Иначе - возвращается само значение

#### Возвращаемое значение:
Преобразованное значение токена

#### Пример использования:
```javascript
const value1 = getValueFromForToken('foo.bar'); // value1 == 'foo.bar'
const value2 = getValueFromForToken('T:foo.bar'); // value2 == 'var(--foo-bar)'