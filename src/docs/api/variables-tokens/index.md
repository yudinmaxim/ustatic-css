# Переменные и токены

Система дизайн-токенов uStatic CSS — централизованное хранилище всех значений.

## Что такое дизайн-токены

Дизайн-токены — это именованные значения, которые хранят дизайн-параметры:

- Цвета
- Размеры
- Отступы
- Радиусы скругления
- Толщину шрифта
- И другие значения

## Формат токенов

Токены записываются в формате с точками:

```
base.color.primary
base.size.4
base.border.radius.md
base.text.size.lg
```

## CSS переменные

При компиляции токены преобразуются в CSS переменные:

| Токен | CSS переменная |
|-------|----------------|
| `base.color.primary` | `--u-base-color-primary` |
| `base.size.4` | `--u-base-size-4` |
| `base.border.radius.md` | `--u-base-border-radius-md` |

## Категории переменных

### Цвета (base.color.*)

#### Primary

```scss
--u-base-color-primary-50: #edf5fc;
--u-base-color-primary-100: #ddebf8;
--u-base-color-primary-200: #c4dcf3;
--u-base-color-primary-300: #9dc7ec;
--u-base-color-primary-400: #74ade2;
--u-base-color-primary-500: #5993d9;
--u-base-color-primary-600: #4b7fd2;
--u-base-color-primary-700: #4471ca;
--u-base-color-primary-800: #375bae;
--u-base-color-primary-900: #33508e;
--u-base-color-primary-950: #26375f;
--u-base-color-primary-def: #5993d9;
```

#### Secondary

```scss
--u-base-color-secondary-50: #fdebe3;
--u-base-color-secondary-500: #e53206;
--u-base-color-secondary-900: #73201c;
--u-base-color-secondary-def: #e53206;
```

#### Семантические цвета

```scss
--u-base-color-success-def: #14a44d;
--u-base-color-danger-def: #dc4c64;
--u-base-color-warning-def: #e4a11b;
--u-base-color-info-def: #54b4d3;
```

#### Нейтральные цвета (Gray)

```scss
--u-base-color-gray-50: #f9fafb;
--u-base-color-gray-100: #f3f4f6;
--u-base-color-gray-200: #e5e7eb;
--u-base-color-gray-300: #d1d5db;
--u-base-color-gray-400: #9ca3af;
--u-base-color-gray-500: #6b7280;
--u-base-color-gray-600: #4b5563;
--u-base-color-gray-700: #374151;
--u-base-color-gray-800: #1f2937;
--u-base-color-gray-900: #111827;
```

### Размеры (base.size.*)

```scss
--u-base-size-0d5: 2px;
--u-base-size-1: 4px;
--u-base-size-2: 8px;
--u-base-size-3: 12px;
--u-base-size-4: 16px;
--u-base-size-5: 20px;
--u-base-size-6: 24px;
--u-base-size-8: 32px;
--u-base-size-9: 36px;
--u-base-size-10: 40px;
--u-base-size-12: 48px;
--u-base-size-64: 256px;
```

### Проценты

```scss
--u-base-size-1/4: 25%;
--u-base-size-1/3: 33.333%;
--u-base-size-1/2: 50%;
--u-base-size-2/3: 66.666%;
--u-base-size-3/4: 75%;
--u-base-size-full: 100%;
```

### Специальные

```scss
--u-base-size-px: 1px;
--u-base-size-auto: auto;
--u-base-size-none: none;
--u-base-size-fit: fit-content;
```

### Позиционирование (base.position.*)

```scss
--u-base-position-0: 0;
--u-base-position-px: 1px;
--u-base-position-1: 4px;
--u-base-position-1/2: 50%;
--u-base-position-auto: auto;
--u-base-position-full: 100%;
```

### Шаги (base.step.*)

```scss
--u-base-step-0: 0;
--u-base-step-1: 1;
--u-base-step-10: 10;
--u-base-step-auto: auto;
```

### Размеры текста (base.text.size.*)

```scss
--u-base-text-size-2xs: 10px;
--u-base-text-size-xs: 12px;
--u-base-text-size-sm: 14px;
--u-base-text-size-base: 16px;
--u-base-text-size-lg: 18px;
--u-base-text-size-xl: 20px;
--u-base-text-size-2xl: 24px;
```

### Высота строки (base.text.line-height.*)

```scss
--u-base-text-line-height-2xs: 12px;
--u-base-text-line-height-xs: 16px;
--u-base-text-line-height-sm: 20px;
--u-base-text-line-height-base: 24px;
--u-base-text-line-height-lg: 28px;
--u-base-text-line-height-xl: 28px;
--u-base-text-line-height-2xl: 32px;
```

### Толщина шрифта (base.font.weight.*)

```scss
--u-base-font-weight-thin: 100;
--u-base-font-weight-extralight: 200;
--u-base-font-weight-light: 300;
--u-base-font-weight-regular: 400;
--u-base-font-weight-medium: 500;
--u-base-font-weight-semibold: 600;
--u-base-font-weight-bold: 700;
--u-base-font-weight-extrabold: 800;
--u-base-font-weight-black: 900;
```

### Радиусы скругления (base.border.radius.*)

```scss
--u-base-border-radius-none: 0px;
--u-base-border-radius-sm: 2px;
--u-base-border-radius-base: 4px;
--u-base-border-radius-md: 6px;
--u-base-border-radius-lg: 8px;
--u-base-border-radius-xl: 12px;
--u-base-border-radius-2xl: 16px;
--u-base-border-radius-3xl: 24px;
--u-base-border-radius-full: 9999px;
```

### Прозрачность (base.opacity.*)

```scss
--u-base-opacity-0: 0;
--u-base-opacity-5: 0.05;
--u-base-opacity-10: 0.1;
--u-base-opacity-20: 0.2;
--u-base-opacity-25: 0.25;
--u-base-opacity-30: 0.3;
--u-base-opacity-40: 0.4;
--u-base-opacity-50: 0.5;
--u-base-opacity-60: 0.6;
--u-base-opacity-70: 0.7;
--u-base-opacity-75: 0.75;
--u-base-opacity-80: 0.8;
--u-base-opacity-90: 0.9;
--u-base-opacity-95: 0.95;
--u-base-opacity-100: 1;
```

### Углы поворота (base.rotation.*)

```scss
--u-base-rotation-0: 0deg;
--u-base-rotation-45: 45deg;
--u-base-rotation-90: 90deg;
--u-base-rotation-135: 135deg;
--u-base-rotation-180: 180deg;
--u-base-rotation-225: 225deg;
--u-base-rotation-270: 270deg;
--u-base-rotation-315: 315deg;
```

### Контрольные точки (base.screen.*)

```scss
--u-base-screen-xs: 480px;
--u-base-screen-md: 768px;
--u-base-screen-def: 1024px;
--u-base-screen-lg: 1280px;
```

## Использование в SCSS

### Функция token()

```scss
.my-class {
  color: token("base.color.primary");
  // Результат: color: var(--u-base-color-primary);
  
  padding: token("base.size.4");
  // Результат: padding: var(--u-base-size-4);
  
  border-radius: token("base.border.radius.md");
  // Результат: border-radius: var(--u-base-border-radius-md);
}
```

### Миксин set-token()

```scss
.my-class {
  @include set-token("base.color.background", #ff0000);
  // Результат: --u-base-color-background: #ff0000;
}
```

### Ссылки на токены

```scss
.my-class {
  // T: означает ссылку на другой токен
  @include set-token("base.color.background", "T:base.color.variant.primary");
  // Результат: --u-base-color-background: var(--u-base-color-variant-primary);
}
```

## Использование в JavaScript

### Установка токена

```typescript
import { useTokens } from 'ustatic-css'

const { setCssToken } = useTokens()

// Установить глобальный токен
setCssToken('base.color.primary', '#3b82f6')
```

### Получение токена

```typescript
const { getCssToken } = useTokens()

const color = getCssToken('base.color.primary')
// Результат: '#5993d9'
```

### Формат CSS переменной

```typescript
const { getCssTokenVar } = useTokens()

const varStr = getCssTokenVar('base.color.primary')
// Результат: 'var(--u-base-color-primary)'
```

## Переопределение токенов

### В SCSS

```scss
// В вашем файле переменных
:root {
  --u-base-color-primary: #3b82f6;
  --u-base-border-radius: 8px;
}
```

### В JavaScript

```typescript
import { useTokens } from 'ustatic-css'

const { setCssToken } = useTokens()

// Переопределение токенов для тёмной темы
setCssToken('base.color.background', '#1a1a1a')
setCssToken('base.color.text', '#ffffff')
```

## Префикс

По умолчанию все переменные используют префикс `u-`:

```scss
$prefix: "u-";
```

Для изменения префикса:

```scss
// До импорта uStatic CSS
$prefix: "my-";

@import 'ustatic-css';
```

Теперь переменные будут:
- `--my-base-color-primary`
- `--my-base-size-4`

## Файлы с токенами

| Файл | Описание |
|------|----------|
| `_ustatic-vars.scss` | Все CSS переменные |
| `_ustatic-prefix.scss` | Префикс переменных |
| `_ustatic-list.scss` | Карты цветов |
| `_token.scss` | Утилиты для работы с токенами |

## См. также

- [Утилиты для работы с токенами](../utils/tokens/index.md) — useTokens, useCssProperties
- [SCSS утилиты](../utils/scss/index.md) — token(), set-token()
- [Палитра цветов](../../appearance/color-palette/index.md) — цветовые токены
