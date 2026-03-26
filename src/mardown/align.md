# Модуль выравнивания (align)

CSS классы для вертикального выравнивания элементов.

## Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.align-baseline` | `vertical-align: baseline` | Выравнивание по базовой линии |
| `.align-top` | `vertical-align: top` | Выравнивание по верху |
| `.align-middle` | `vertical-align: middle` | Выравнивание по центру |
| `.align-bottom` | `vertical-align: bottom` | Выравнивание по низу |

## Использование

```html
<!-- Выравнивание по центру -->
<div class="align-middle">
  <span>Текст по центру</span>
</div>

<!-- Выравнивание блока по верху -->
<div class="align-top">
  <img src="image.jpg" alt="">
</div>
```

## Примеры

```html
<!-- Табличная ячейка с выравниванием -->
<table>
  <tr>
    <td class="align-top">По верху</td>
    <td class="align-middle">По центру</td>
    <td class="align-bottom">По низу</td>
  </tr>
</table>

<!-- Выравнивание inline-block элементов -->
<div class="flex items-center">
  <span class="align-middle">Выровнено по центру</span>
</div>
```
