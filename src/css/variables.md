# Переменные (variables.scss)

Файл содержит основные переменные и маппинги для генерации CSS-классов uStatic CSS. Все значения берутся из токенов через функцию `token()`.

## Основные переменные

### $screens

Контрольные точки (breakpoints) для адаптивного дизайна.

```scss
$screens: (
  "xs": token("base.screen.small"),   // 480px
  "md": token("base.screen.medium"),  // 768px
  "def": token("base.screen.default"),// 1024px
  "lg": token("base.screen.large")    // 1280px
);
```

### $directions

Направления для отступов (margin/padding) и бордеров.

```scss
$directions: (
  "": ("", ""),       // Все стороны (m-1, p-1)
  "x": ("left", "right"),  // Горизонтальные (mx-1, px-1)
  "y": ("top", "bottom"),  // Вертикальные (my-1, py-1)
  "t": ("top", ""),        // Верх (mt-1, pt-1)
  "b": ("bottom", ""),     // Низ (mb-1, pb-1)
  "l": ("left", ""),       // Лево (ml-1, pl-1)
  "r": ("right", "")       // Право (mr-1, pr-1)
);
```

Примеры классов:
- `.mt-1` → `margin-top: 4px`
- `.px-2` → `padding-left: 8px; padding-right: 8px`

### $sizes-short

Сокращённый список размеров для часто используемых значений.

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

Полный список размеров для всех свойств.

```scss
$sizes: (
  // Фиксированные значения
  '1': token("base.size.1"),   // 4px
  '2': token("base.size.2"),   // 8px
  // ... до 256
  
  // Проценты
  1\/4: token("base.size.1/4"),  // 25%
  1\/2: token("base.size.1/2"),  // 50%
  1\/3: token("base.size.1/3"),  // 33.333%
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

Примеры классов:
- `.w-1/2` → `width: 50%`
- `.h-64` → `height: 256px`
- `.m-4` → `margin: 16px`

### $positions

Значения для позиционирования элементов.

```scss
$positions: (
  0: token("base.position.0"),    // 0px
  px: token("base.position.px"), // 1px
  1: token("base.position.1"),    // 4px
  // ... до 64 и проценты
  1\/2: token("base.position.1/2"), // 50%
  auto: token("base.position.auto"),
  full: token("base.position.full") // 100%
);
```

### $steps

Шаги для z-index, order и других дискретных значений.

```scss
$steps: (
  0: token("base.step.0"),
  1: token("base.step.1"),
  // ... до 10
  auto: token("base.step.auto")
);
```

### $flex-orders

Значения для `order` в flexbox.

```scss
$flex-orders: (
  0: 0,
  1: 1,
  // ... до 11
  last: 99999
);
```

### $text-sizes

Размеры текста с высотой строки.

```scss
$text-sizes: (
  '2xs': (token("base.text.size.2xs"), token("base.text.line.height.2xs")), // 10px / 12px
  'xs': (token("base.text.size.xs"), token("base.text.line.height.xs")),     // 12px / 16px
  'sm': (token("base.text.size.sm"), token("base.text.line.height.sm")),     // 14px / 20px
  'base': (token("base.text.size.base"), token("base.text.line.height.base")),// 16px / 24px
  'lg': (token("base.text.size.lg"), token("base.text.line.height.lg")),      // 18px / 28px
  'xl': (token("base.text.size.xl"), token("base.text.line.height.xl")),      // 20px / 28px
  '2xl': (token("base.text.size.2xl"), token("base.text.line.height.2xl"))    // 24px / 32px
);
```

### $text-algins

Значения для `text-align`.

```scss
$text-algins: (left, center, right, justify, start, end);
```

### $vertical-algins

Значения для `vertical-align`.

```scss
$vertical-algins: (top, middle, bottom, baseline, text-top, text-bottom, sub, super);
```

### $font-weights

Толщина шрифта.

```scss
$font-weights: (
  'thin': token('base.font.weight.thin'),        // 100
  'extralight': token('base.font.weight.extralight'), // 200
  'light': token('base.font.weight.light'),      // 300
  'regular': token('base.font.weight.regular'),  // 400
  'medium': token('base.font.weight.medium'),    // 500
  'semibold': token('base.font.weight.semibold'),// 600
  'bold': token('base.font.weight.bold'),        // 700
  'extrabold': token('base.font.weight.extrabold'),// 800
  'black': token('base.font.weight.black')       // 900
);
```

### $colors-variants

Цветовые варианты (primary, secondary, success, info, warning, danger).

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

Радиусы скругления углов.

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

### $opacities

Значения прозрачности (от 0 до 100).

```scss
$opacities: (0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100);
```

### $rotations

Углы поворота для трансформаций.

```scss
$rotations: (
  0: token("base.rotation.0"),    // 0deg
  45: token("base.rotation.45"),  // 45deg
  90: token("base.rotation.90"),  // 90deg
  135: token("base.rotation.135"),// 135deg
  180: token("base.rotation.180"),// 180deg
  225: token("base.rotation.225"),// 225deg
  270: token("base.rotation.270"),// 270deg
  315: token("base.rotation.315") // 315deg
);
```
