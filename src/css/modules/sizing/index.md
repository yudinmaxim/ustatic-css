# Модуль размеров (sizing)

CSS классы для управления шириной и высотой элементов.

## Ширина (width)

### Фиксированные значения
```html
<div class="w-1">width: 4px</div>
<div class="w-2">width: 8px</div>
<div class="w-4">width: 16px</div>
<div class="w-8">width: 32px</div>
<div class="w-16">width: 64px</div>
<div class="w-32">width: 128px</div>
<div class="w-64">width: 256px</div>
<!-- до w-256 -->
```

### Проценты
```html
<div class="w-1/4">width: 25%</div>
<div class="w-1/3">width: 33.333%</div>
<div class="w-1/2">width: 50%</div>
<div class="w-2/3">width: 66.666%</div>
<div class="w-3/4">width: 75%</div>
<div class="w-4/5">width: 80%</div>
<div class="w-full">width: 100%</div>
```

### Специальные
```html
<div class="w-auto">width: auto</div>
<div class="w-px">width: 1px</div>
<div class="w-0d5">width: 2px</div>
<div class="w-none">width: none</div>
<div class="w-fit">width: fit-content</div>
<div class="w-screen">width: 100vw</div>
```

## Высота (height)

### Фиксированные
```html
<div class="h-1">height: 4px</div>
<div class="h-2">height: 8px</div>
<div class="h-4">height: 16px</div>
<div class="h-8">height: 32px</div>
<div class="h-64">height: 256px</div>
<!-- до h-256 -->
```

### Проценты
```html
<div class="h-1/4">height: 25%</div>
<div class="h-1/2">height: 50%</div>
<div class="h-full">height: 100%</div>
```

### Специальные
```html
<div class="h-auto">height: auto</div>
<div class="h-px">height: 1px</div>
<div class="h-screen">height: 100vh</div>
```

## Min/Max размеры

### Min-width
```html
<div class="min-w-screen">min-width: 100vw</div>
<div class="min-w-0">min-width: 0</div>
<div class="min-w-1">min-width: 4px</div>
<div class="min-w-64">min-width: 256px</div>
<!-- до min-w-256 -->
```

### Min-height
```html
<div class="min-h-screen">min-height: 100vh</div>
<div class="min-h-0">min-height: 0</div>
<div class="min-h-64">min-height: 256px</div>
```

### Max-width
```html
<div class="max-w-screen">max-width: 100vw</div>
<div class="max-w-0">max-width: 0</div>
<div class="max-w-64">max-width: 256px</div>
<div class="max-w-xs">max-width: 320px</div>
<div class="max-w-sm">max-width: 640px</div>
<div class="max-w-md">max-width: 768px</div>
<div class="max-w-lg">max-width: 1024px</div>
<div class="max-w-xl">max-width: 1280px</div>
```

### Max-height
```html
<div class="max-h-screen">max-height: 100vh</div>
<div class="max-h-64">max-height: 256px</div>
```

## Размер (square)

Установить одинаковую ширину и высоту:
```html
<div class="size-4">4x4px</div>
<div class="size-8">8x8px</div>
<div class="size-16">16x16px</div>
<div class="size-64">256x256px</div>
<div class="size-full">100%x100%</div>
<div class="size-screen">100vw x 100vh</div>
```

## Примеры

```html
<!-- Контейнер ограниченной ширины -->
<div class="max-w-4xl mx-auto">
  Контент
</div>

<!-- Картинка на всю ширину -->
<img class="w-full" src="image.jpg">

<!-- Блок 100vh -->
<div class="h-screen">
  Полноэкранный блок
</div>

<!-- Минимальная высота -->
<div class="min-h-screen flex items-center">
  Центрированный контент
</div>
```
