# Утилиты для работы с токенами (_token.scss)

SCSS утилиты для работы с CSS переменными (токенами) в uStatic CSS.

## Функции

### token()

Преобразует путь токена в CSS переменную.

```scss
.my-class {
  color: token("base.color.primary");
  // Результат: color: var(--u-base-color-primary);
  
  background-color: token("base.color.background");
  // Результат: background-color: var(--u-base-color-background);
}
```

**Параметры:**
- `$token-path` — путь к токену (например, `"base.color.primary"`)
- `$default` — значение по умолчанию (опционально)

**Синтаксис вызова:**
```scss
token($token-path)
token($token-path, $default)
```

**Примеры:**
```scss
// Без значения по умолчанию
border-color: token("base.border.color.primary");

// С значением по умолчанию
color: token("base.color.primary", #fff);
```

## Миксины

### set-token()

Устанавливает значение CSS переменной.

```scss
.my-class {
  @include set-token("base.color.background", #ff0000);
  // Результат: --u-base-color-background: #ff0000;
}
```

**Параметры:**
- `$token-path` — путь к токену
- `$value` — значение переменной
- `$libprefix` — префикс библиотеки (по умолчанию `$prefix`)

**Примеры:**
```scss
// Простое значение
@include set-token("base.color.primary", #3b82f6);

// Использование с rgba и другим токеном
@include set-token("base.color.background", rgba($value, token("base.color.opacity")));

// Смена префикса
@include set-token("base.color.primary", #fff, "custom-");
```

## Вспомогательные функции

### str-replace()

Заменяет символы в строке.

```scss
$result: str-replace("base.color.primary", ".", "-");
// Результат: "base-color-primary"
```

### replace-slash()

Заменяет косые черты на дефисы.

```scss
$result: replace-slash("base/size/4");
// Результат: "base-size-4"
```

## Внутренняя работа

1. Функция `token()` заменяет точки (`.`) на дефисы (`-`)
2. Заменяет косые черты (`/`) на дефисы
3. Добавляет префикс библиотеки (по умолчанию `u-`)
4. Возвращает строку вида `var(--u-base-color-primary)`

## Использование в модулях

```scss
@import '../../utils/token';

.my-module {
  color: token("base.color.primary");
  background-color: token("base.color.background");
  
  &:hover {
    @include set-token("base.color.background", rgba($value, 0.5));
  }
}
```
