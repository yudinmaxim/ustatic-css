---
title: Align
description: Справочник по модулю align
---

# Выравнивание (align)

Модуль предоставляет CSS классы для вертикального выравнивания inline и table элементов.

## Классы

| Класс | CSS свойство | Описание | Пример |
|-------|--------------|----------|--------|
| `.align-baseline` | `vertical-align: baseline` | Выравнивание по базовой линии текста | Базовая линия |
| `.align-top` | `vertical-align: top` | Выравнивание по верхнему краю | По верху |
| `.align-middle` | `vertical-align: middle` | Выравнивание по центру | По центру |
| `.align-bottom` | `vertical-align: bottom` | Выравнивание по нижнему краю | По низу |

## Примеры использования

### Выравнивание в таблице

```html
<table class="w-full border">
  <tr>
    <td class="align-top border p-2">
      Выравнивание по верху
    </td>
    <td class="align-middle border p-2">
      Выравнивание по центру
    </td>
    <td class="align-bottom border p-2">
      Выравнивание по низу
    </td>
  </tr>
</table>
```

### Выравнивание inline-block элементов

```html
<div class="text-center">
  <span class="align-top inline-block bg-primary-100 p-2">Верх</span>
  <span class="align-middle inline-block bg-primary-200 p-2">Центр</span>
  <span class="align-bottom inline-block bg-primary-300 p-2">Низ</span>
</div>
```

### Выравнивание изображения с текстом

```html
<div>
  <img 
    src="icon.png" 
    alt="Иконка" 
    class="align-middle w-6 h-6 mr-2"
  >
  <span class="align-middle">Текст по центру иконки</span>
</div>
```

## Сочетание с другими модулями

### Flexbox + align

```html
<!-- Flexbox для макета, align для inline элементов внутри -->
<div class="flex items-center">
  <img src="logo.png" class="align-middle w-8 h-8 mr-2">
  <span class="align-middle text-lg">Логотип</span>
</div>
```

### Табличная вёрстка

```html
<div class="table w-full">
  <div class="flex w-full">
    <div class="table-cell align-middle w-1/3">
      Центрированная ячейка
    </div>
    <div class="table-cell align-top w-2/3">
      Ячейка с выравниванием по верху
    </div>
  </div>
</div>
```

## Поддержка браузеров

| Браузер | Поддержка |
|---------|-----------|
| Chrome | ✅ |
| Firefox | ✅ |
| Safari | ✅ |
| Edge | ✅ |
| IE 11 | ✅ |

## Примечания

- Модуль `align` работает только с inline и table-cell элементами
- Для вертикального центрирования блочных элементов используйте Flexbox или Grid
- Свойство `vertical-align` не работает с блочными элементами (display: block)

## См. также

- [Flexbox](../flexbox/index.md) — для современного выравнивания
- [Display](../display/index.md) — для управления типом отображения
- [Grid](../grid/index.md) — для сеточной раскладки
