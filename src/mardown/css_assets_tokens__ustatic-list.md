# Токены цветов (_ustatic-list.scss)

Файл содержит карты цветовых палитр в различных форматах (HEX, RGB, CSS переменные).

## Переменные

### $palette-hex

Карта цветов в HEX формате для использования в CSS переменных.

```scss
$palette-hex: (
  primary-50: token("base.color.primary.50-hex"),
  primary-100: token("base.color.primary.100-hex"),
  // ... до primary-950
  primary: token("base.color.primary.def-hex"),
  
  secondary-50: token("base.color.secondary.50-hex"),
  // ... до secondary-950
  secondary: token("base.color.secondary.def-hex"),
  
  success-50: token("base.color.success.50-hex"),
  // ... до success-900
  success: token("base.color.success.def-hex"),
  
  danger-50: token("base.color.danger.50-hex"),
  // ... до danger-900
  danger: token("base.color.danger.def-hex"),
  
  warning-50: token("base.color.warning.50-hex"),
  // ... до warning-900
  warning: token("base.color.warning.def-hex"),
  
  info-50: token("base.color.info.50-hex"),
  // ... до info-900
  info: token("base.color.info.def-hex"),
  
  transparent: token("base.color.transparent-hex"),
  white: token("base.color.white-hex"),
  black: token("base.color.black-hex"),
  
  gray-50: token("base.color.gray.50-hex"),
  // ... до gray-900
  gray: token("base.color.gray.def-hex"),
  
  red-50: token("base.color.red.50-hex"),
  // ... до red-900
  red: token("base.color.red.def-hex"),
  
  orange-50: token("base.color.orange.50-hex"),
  // ... до orange-900
  orange: token("base.color.orange.def-hex"),
  
  yellow-50: token("base.color.yellow.50-hex"),
  // ... до yellow-900
  yellow: token("base.color.yellow.def-hex"),
  
  green-50: token("base.color.green.50-hex"),
  // ... до green-900
  green: token("base.color.green.def-hex"),
  
  sky-50: token("base.color.sky.50-hex"),
  // ... до sky-900
  sky: token("base.color.sky.def-hex"),
  
  blue-50: token("base.color.blue.50-hex"),
  // ... до blue-900
  blue: token("base.color.blue.def-hex")
);
```

### $palette-rgb

Карта цветов в RGB формате для использования с функцией `rgba()`.

Структура аналогична `$palette-hex`, но значения в формате `r, g, b` (например, `237, 245, 252`).

### $palette

Основная карта цветов с CSS переменными.

```scss
$palette: (
  primary-50: token("base.color.primary.50"),
  primary-100: token("base.color.primary.100"),
  // ... до primary-950
  primary-def: token("base.color.primary.def"),
  
  // Аналогично для secondary, success, danger, warning, info, gray, red, orange, yellow, green, sky, blue
  
  // Специальные
  transparent: token("base.color.transparent"),
  white: token("base.color.white"),
  black: token("base.color.black"),
  background: token("base.color.background"),
  
  // Варианты цветов
  opacity: token("base.color.opacity"),
  primary: token("base.color.variant.primary"),
  secondary: token("base.color.variant.secondary"),
  success: token("base.color.variant.success"),
  info: token("base.color.variant.info"),
  warning: token("base.color.variant.warning"),
  danger: token("base.color.variant.danger")
);
```

## Доступные цвета

### Основные цвета (primary, secondary)

Оттенки от 50 до 950 + значение по умолчанию (def):
- `primary-50` ... `primary-950`, `primary`
- `secondary-50` ... `secondary-950`, `secondary`

### Семантические цвета

- `success` — зелёный
- `danger` — красный
- `warning` — жёлтый/оранжевый
- `info` — голубой

### Нейтральные цвета

- `gray` — серый (50-900 + def)
- `red`, `orange`, `yellow`, `green`, `sky`, `blue` — цветовые оттенки

### Специальные

- `transparent` — прозрачный
- `white` — белый
- `black` — чёрный
- `background` — цвет фона

## Использование

В SCSS файлах модулей:
```scss
@each $key, $value in $palette-rgb {
  &-#{"" + $key} {
    background-color: token("base.color.background");
    @include set-token("base.color.background", rgba($value, token("base.color.opacity")));
  }
}
```

## Генерируемые классы

На основе этой карты генерируются классы:
- `.bg-primary-500` → `background-color: #5993d9`
- `.text-success` → `color: #14a44d`
- `.border-danger-300` → `border-color: rgba(234, 148, 162, 1.0)`
