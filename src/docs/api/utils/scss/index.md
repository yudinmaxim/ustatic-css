# SCSS утилиты

Утилиты для работы с SCSS в uStatic CSS.

## Файлы

### _token.scss

Утилиты для работы с CSS переменными (токенами).

### _variables.scss

Основные переменные и маппинги для генерации CSS классов.

### ustatic-index.scss

Главный файл, импортирующий все модули.

## Функция token()

Преобразует путь токена в CSS переменную.

### Синтаксис

```scss
token($token-path)
token($token-path, $default)
```

### Параметры

| Параметр | Тип | Описание |
|----------|-----|----------|
| `$token-path` | String | Путь к токену (например, `"base.color.primary"`) |
| `$default` | Any | Значение по умолчанию (опционально) |

### Примеры

```scss
// Без значения по умолчанию
.my-class {
  color: token("base.color.primary");
  // Результат: color: var(--u-base-color-primary);
}

// С значением по умолчанию
.my-class {
  color: token("base.color.primary", #fff);
  // Если переменная не существует, будет #fff
}
```

### Внутренняя работа

1. Заменяет точки (`.`) на дефисы (`-`)
2. Заменяет косые черты (`/`) на дефисы
3. Добавляет префикс библиотеки (по умолчанию `u-`)
4. Возвращает строку вида `var(--u-base-color-primary)`

## Миксин set-token()

Устанавливает значение CSS переменной.

### Синтаксис

```scss
@include set-token($token-path, $value, $libprefix)
```

### Параметры

| Параметр | Тип | Описание |
|----------|-----|----------|
| `$token-path` | String | Путь к токену |
| `$value` | Any | Значение переменной |
| `$libprefix` | String | Префикс библиотеки (по умолчанию `$prefix`) |

### Примеры

```scss
// Простое значение
@include set-token("base.color.primary", #3b82f6);
// Результат: --u-base-color-primary: #3b82f6;

// С использованием другого токена
@include set-token("base.color.background", rgba($value, token("base.color.opacity")));

// Смена префикса
@include set-token("base.color.primary", #fff, "custom-");
// Результат: --custom-base-color-primary: #fff;
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

## Переменные в variables.scss

### $screens

Контрольные точки для адаптивного дизайна.

```scss
$screens: (
  "xs": token("base.screen.small"),   // 480px
  "md": token("base.screen.medium"),  // 768px
  "def": token("base.screen.default"),// 1024px
  "lg": token("base.screen.large")    // 1280px
);
```

### $directions

Направления для отступов и бордеров.

```scss
$directions: (
  "": ("", ""),              // Все стороны
  "x": ("left", "right"),    // Горизонтальные
  "y": ("top", "bottom"),    // Вертикальные
  "t": ("top", ""),          // Верх
  "b": ("bottom", ""),       // Низ
  "l": ("left", ""),         // Лево
  "r": ("right", "")         // Право
);
```

### $sizes-short

Сокращённый список размеров.

```scss
$sizes-short: (
  '0d5': token("base.size.0d5"),  // 2px
  '1': token("base.size.1"),      // 4px
  '2': token("base.size.2"),      // 8px
  '3': token("base.size.3"),      // 12px
  '4': token("base.size.4"),      // 16px
  '5': token("base.size.5"),      // 20px
  '6': token("base.size.6"),      // 24px
  '8': token("base.size.8"),      // 32px
  '9': token("base.size.9")       // 36px
);
```

### $sizes

Полный список размеров.

```scss
$sizes: (
  // Фиксированные значения
  '1': token("base.size.1"),
  '2': token("base.size.2"),
  // ... до 256
  
  // Проценты
  1\/4: token("base.size.1/4"),  // 25%
  1\/2: token("base.size.1/2"),  // 50%
  2\/3: token("base.size.2/3"),  // 66.666%
  3\/4: token("base.size.3/4"),  // 75%
  
  // Специальные
  'px': token("base.size.px"),   // 1px
  'full': token("base.size.full"), // 100%
  'auto': token("base.size.auto"),
  'none': token("base.size.none"),
  'fit': token("base.size.fit")
);
```

### $text-sizes

Размеры текста с высотой строки.

```scss
$text-sizes: (
  '2xs': (token("base.text.size.2xs"), token("base.text.line.height.2xs")),
  'xs': (token("base.text.size.xs"), token("base.text.line.height.xs")),
  'sm': (token("base.text.size.sm"), token("base.text.line.height.sm")),
  'base': (token("base.text.size.base"), token("base.text.line.height.base")),
  'lg': (token("base.text.size.lg"), token("base.text.line.height.lg")),
  'xl': (token("base.text.size.xl"), token("base.text.line.height.xl")),
  '2xl': (token("base.text.size.2xl"), token("base.text.line.height.2xl"))
);
```

### $colors-variants

Цветовые варианты.

```scss
$colors-variants: (
  "primary": token("base.color.variant.primary"),
  "secondary": token("base.color.variant.secondary"),
  "success": token("base.color.variant.success"),
  "info": token("base.color.variant.info"),
  "warning": token("base.color.variant.warning"),
  "danger": token("base.color.variant.danger")
);
```

### $radiuses

Радиусы скругления.

```scss
$radiuses: (
  none: token("base.border.radius.none"),  // 0px
  sm: token("base.border.radius.sm"),      // 2px
  base: token("base.border.radius.base"),  // 4px
  md: token("base.border.radius.md"),      // 6px
  lg: token("base.border.radius.lg"),      // 8px
  xl: token("base.border.radius.xl"),      // 12px
  2xl: token("base.border.radius.2xl"),    // 16px
  3xl: token("base.border.radius.3xl"),    // 24px
  full: token("base.border.radius.full")    // 9999px
);
```

## Примеры использования в модулях

### Модуль spacing

```scss
@import '../../utils/token';
@import '../../variables';

@each $prefix, $directions in $directions {
  @each $name, $value in $sizes {
    .m#{$prefix}-#{$name} {
      @each $dir, $prop in $directions {
        margin-#{$dir}: $value;
      }
    }
  }
}
```

### Модуль typography

```scss
@import '../../utils/token';
@import '../../variables';

@each $name, $sizes in $text-sizes {
  .text-#{$name} {
    font-size: nth($sizes, 1);
    line-height: nth($sizes, 2);
  }
}
```

### Модуль border

```scss
@import '../../utils/token';
@import '../../variables';

@each $name, $value in $radiuses {
  .rounded-#{$name} {
    border-radius: $value;
  }
}
```

## Импорт в проекте

```scss
// В вашем главном SCSS файле
@import 'ustatic-css/src/css/utils/token';
@import 'ustatic-css/src/css/variables';

// Или через главный файл
@import 'ustatic-css/src/css/ustatic-index';
```

## См. также

- [Переменные и токены](../variables-tokens/index.md) — CSS переменные
- [Загрузка стилей](../utils/style-loading/index.md) — styleLoader
