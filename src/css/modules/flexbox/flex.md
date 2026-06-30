# Flexbox (flex.scss)

Миксины и классы для flexbox раскладки.

## Внутренние переменные

```scss
$align-types: (
  start: flex-start,
  end: flex-end,
  center: center,
  baseline: baseline,
  stretch: stretch
);

$content-types: (
  start: flex-start,
  end: flex-end,
  center: center,
  between: space-between,
  around: space-around
);
```

## Основные классы

### display: flex
```scss
.flex { display: flex; }
```

### Направление
```scss
.flex-column, .flex-col { flex-direction: column; }
.flex-column-reverse { flex-direction: column-reverse; }
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
```

### Перенос
```scss
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
```

### flex свойства
```scss
.flex-0 { flex: 0 0 auto; }
.flex-auto { flex: 1 1 auto; min-width: 0; min-height: 0; }
.flex-1 { flex: 1; }
.flex-none { flex: none; }
```

## Выравнивание (генерируется из $align-types)

| Класс | CSS |
|-------|-----|
| `.items-start` | `align-items: flex-start` |
| `.items-end` | `align-items: flex-end` |
| `.items-center` | `align-items: center` |
| `.items-baseline` | `align-items: baseline` |
| `.items-stretch` | `align-items: stretch` |

## align-self

| Класс | CSS |
|-------|-----|
| `.self-start` | `align-self: flex-start` |
| `.self-end` | `align-self: flex-end` |
| `.self-center` | `align-self: center` |
| `.self-baseline` | `align-self: baseline` |
| `.self-stretch` | `align-self: stretch` |

## justify-content

| Класс | CSS |
|-------|-----|
| `.justify-start` | `justify-content: flex-start` |
| `.justify-end` | `justify-content: flex-end` |
| `.justify-center` | `justify-content: center` |
| `.justify-between` | `justify-content: space-between` |
| `.justify-around` | `justify-content: space-around` |
| `.justify-evenly` | `justify-content: space-evenly` |

## align-content

| Класс | CSS |
|-------|-----|
| `.content-start` | `align-content: flex-start` |
| `.content-end` | `align-content: flex-end` |
| `.content-center` | `align-content: center` |
| `.content-between` | `align-content: space-between` |
| `.content-around` | `align-content: space-around` |
| `.content-stretch` | `align-content: stretch` |

## shrink/grow

```scss
.shrink { flex-shrink: 1; }
.shrink-0 { flex-shrink: 0; }
.shrink-1 { flex-shrink: 1; }
.shrink-2 { flex-shrink: 2; }
.shrink-3 { flex-shrink: 3; }

.grow { flex-grow: 1; }
.grow-0 { flex-grow: 0; }
.grow-1 { flex-grow: 1; }
.grow-2 { flex-grow: 2; }
.grow-3 { flex-grow: 3; }
```

## order

```scss
.order-0 { order: 0; }
.order-1 { order: 1; }
// ... до order-11
.order-last { order: 99999; }
```
