# Модуль отступов (spacing)

CSS классы для управления внешними (margin) и внутренними (padding) отступами.

## Margin (внешние отступы)

### Все стороны
```html
<div class="m-0">margin: 0</div>
<div class="m-px">margin: 1px</div>
<div class="m-1">margin: 4px</div>
<div class="m-2">margin: 8px</div>
<div class="m-4">margin: 16px</div>
<div class="m-8">margin: 32px</div>
<div class="m-64">margin: 256px</div>
```

### Горизонтальные (x)
```html
<div class="mx-0">margin-left: 0; margin-right: 0</div>
<div class="mx-4">margin-left: 16px; margin-right: 16px</div>
```

### Вертикальные (y)
```html
<div class="my-0">margin-top: 0; margin-bottom: 0</div>
<div class="my-4">margin-top: 16px; margin-bottom: 16px</div>
```

### Отдельные стороны
```html
<!-- Сверху -->
<div class="mt-4">margin-top: 16px</div>
<!-- Справа -->
<div class="mr-4">margin-right: 16px</div>
<!-- Снизу -->
<div class="mb-4">margin-bottom: 16px</div>
<!-- Слева -->
<div class="ml-4">margin-left: 16px</div>
```

### Отрицательные отступы
```html
<div class="-m-4">margin: -16px</div>
<div class="-mx-4">margin-left: -16px; margin-right: -16px</div>
<div class="-mt-4">margin-top: -16px</div>
```

## Padding (внутренние отступы)

### Все стороны
```html
<div class="p-0">padding: 0</div>
<div class="p-px">padding: 1px</div>
<div class="p-1">padding: 4px</div>
<div class="p-4">padding: 16px</div>
<div class="p-8">padding: 32px</div>
```

### Горизонтальные (x)
```html
<div class="px-4">padding-left: 16px; padding-right: 16px</div>
```

### Вертикальные (y)
```html
<div class="py-4">padding-top: 16px; padding-bottom: 16px</div>
```

### Отдельные стороны
```html
<div class="pt-4">padding-top: 16px</div>
<div class="pr-4">padding-right: 16px</div>
<div class="pb-4">padding-bottom: 16px</div>
<div class="pl-4">padding-left: 16px</div>
```

### Отрицательные (редко используется)
```html
<div class="-p-4">padding: -16px</div>
```

## Соответствие значений

| Класс | Значение |
|-------|----------|
| `*-0` | 0 |
| `*-px` | 1px |
| `*-0d5` | 2px |
| `*-1` | 4px |
| `*-2` | 8px |
| `*-3` | 12px |
| `*-4` | 16px |
| `*-5` | 20px |
| `*-6` | 24px |
| `*-8` | 32px |
| `*-10` | 40px |
| `*-12` | 48px |
| `*-64` | 256px |

## Примеры

```html
<!-- Отступы со всех сторон -->
<div class="p-4">Внутренние отступы 16px</div>

<!-- Горизонтальные отступы -->
<div class="mx-auto">Центрирование (auto)</div>

<!-- Вертикальные отступы между элементами -->
<div class="my-4">Отступ сверху и снизу</div>

<!-- Комбинирование -->
<div class="p-4 mx-2 my-0">padding: 16px, margin-x: 8px</div>

<!-- Отрицательный отступ для наложения -->
<div class="-mt-4">Сдвинуть вверх на 16px</div>
```
