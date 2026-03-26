# Модуль позиционирования (position)

CSS классы для управления позиционированием элементов.

## Типы позиционирования

```html
<div class="relative">Относительное</div>
<div class="absolute">Абсолютное</div>
<div class="fixed">Фиксированное</div>
<div class="absolute-center">Абсолютное по центру</div>
```

## Расположение (top, right, bottom, left)

### Значения в пикселях
```html
<div class="top-0">top: 0</div>
<div class="top-px">top: 1px</div>
<div class="top-1">top: 4px</div>
<div class="top-2">top: 8px</div>
<div class="top-4">top: 16px</div>
<div class="top-8">top: 32px</div>
<div class="top-64">top: 256px</div>
```

### Проценты
```html
<div class="top-1/4">top: 25%</div>
<div class="top-1/2">top: 50%</div>
<div class="top-3/4">top: 75%</div>
<div class="top-4/5">top: 80%</div>
<div class="top-full">top: 100%</div>
```

### Авто
```html
<div class="top-auto">top: auto</div>
```

### Все стороны
```html
<div class="right-0">right: 0</div>
<div class="bottom-0">bottom: 0</div>
<div class="left-0">left: 0</div>
```

## Z-index

### Числовые значения
```html
<div class="z-0">z-index: 0</div>
<div class="z-10">z-index: 10</div>
<div class="z-20">z-index: 20</div>
<div class="z-30">z-index: 30</div>
<div class="z-40">z-index: 40</div>
<div class="z-50">z-index: 50</div>
<div class="z-60">z-index: 60</div>
<div class="z-70">z-index: 70</div>
<div class="z-80">z-index: 80</div>
<div class="z-90">z-index: 90</div>
<div class="z-100">z-index: 100</div>
```

### Предопределённые значения
```html
<div class="z-auto">auto</div>
<div class="z-i-hidden">Скрытый (-1)</div>
<div class="z-i-icon">Иконка (1)</div>
<div class="z-i-menu">Меню (20)</div>
<div class="z-i-teleport">Телепорт (20)</div>
<div class="z-i-load">Загрузка (30)</div>
<div class="z-i-tip">Подсказка (50)</div>
<div class="z-i-mobile-menu">Мобильное меню (50)</div>
<div class="z-i-modal">Модальное окно (60)</div>
<div class="z-i-notice">Уведомление (100)</div>
<div class="z-i-fullpage-load">Загрузка страницы (100)</div>
```

## Примеры

```html
<!-- Фиксированный хедер -->
<header class="fixed top-0 left-0 right-0 z-i-menu">
  Меню
</header>

<!-- Абсолютное позиционирование -->
<div class="relative">
  <div class="absolute top-0 right-0">
    Закрыть
  </div>
</div>

<!-- Центрирование -->
<div class="absolute-center">
  По центру
</div>

<!-- Модальное окно -->
<div class="fixed inset-0 z-i-modal flex items-center justify-center">
  <div class="bg-white rounded-lg p-6">
    Контент
  </div>
</div>
```
