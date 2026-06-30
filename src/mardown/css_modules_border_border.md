# Границы элементов (border.scss)

Миксин и классы для управления границами элементов.

## Миксин border()

Миксин для генерации border стилей.

```scss
@mixin border($direction, $bw: -1)
```

**Параметры:**
- `$direction` — направление: `"all"`, `"top"`, `"right"`, `"bottom"`, `"left"`
- `$bw` — ширина границы (от -1 до 5, где -1 = значение по умолчанию)

**Примеры использования:**

```scss
.my-element {
  @include border("all");        // border со значением по умолчанию (1px)
  @include border("all", 2);     // border: 2px solid
  @include border("top");        // border-top со значением по умолчанию
  @include border("left", 3);    // border-left: 3px solid
}
```

## Генерируемые классы

Классы генерируются динамически на основе переменных `$directions` и `$sizes-short`.

### Формат классов

| Класс | CSS |
|-------|-----|
| `.border` | `border: 1px solid` |
| `.border-0` | `border: 0` |
| `.border-1` | `border-width: 1px` |
| `.border-2` | `border-width: 2px` |
| `.border-x` | `border-left + border-right` |
| `.border-y` | `border-top + border-bottom` |
| `.border-t` | `border-top` |
| `.border-b` | `border-bottom` |
| `.border-l` | `border-left` |
| `.border-r` | `border-right` |

### Комбинированные классы

```scss
.border-t-2    // border-top-width: 2px
.border-r-3    // border-right-width: 3px
.border-x-1    // border-left + border-right: 1px
```

## Цвета границ

Цвета задаются через CSS переменные с прозрачностью:

```scss
.border-primary {
  border-color: var(--u-base-color-border);
  --u-base-color-border: rgba(89, 147, 217, 1.0);
}
```
