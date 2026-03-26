---
title: Выравнивание (Align)
outline:
  level: 2
---

# Выравнивание (align)

Модуль предоставляет CSS классы для вертикального выравнивания inline и table элементов.

## Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.align-baseline` | `vertical-align: baseline` | Выравнивание по базовой линии |
| `.align-top` | `vertical-align: top` | Выравнивание по верху |
| `.align-middle` | `vertical-align: middle` | Выравнивание по центру |
| `.align-bottom` | `vertical-align: bottom` | Выравнивание по низу |

## Примеры

### Выравнивание в таблице

::: component-view
<table class="w-full border border-gray-200">
  <tr>
    <td class="align-top border border-gray-200 p-4 w-1/3">
      <strong>align-top</strong><br>Выравнивание по верху
    </td>
    <td class="align-middle border border-gray-200 p-4 w-1/3">
      <strong>align-middle</strong><br>Выравнивание по центру
    </td>
    <td class="align-bottom border border-gray-200 p-4 w-1/3">
      <strong>align-bottom</strong><br>Выравнивание по низу
    </td>
  </tr>
</table>
:::

### Выравнивание изображения с текстом

::: component-view
<div class="bg-white border border-gray-200 rounded-lg p-4">
  <img 
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%235993d9' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" 
    alt="Иконка" 
    class="align-middle w-6 h-6 mr-2 inline-block"
  >
  <span class="align-middle text-gray-700">Текст выровнен по центру иконки</span>
</div>
:::

### Выравнивание inline-block элементов

::: component-view
<div class="text-center bg-white border border-gray-200 rounded-lg p-4">
  <span class="align-top inline-block bg-primary-100 p-3 mr-2 rounded">Верх</span>
  <span class="align-middle inline-block bg-primary-300 p-3 mr-2 rounded">Центр</span>
  <span class="align-bottom inline-block bg-primary-500 text-white p-3 rounded">Низ</span>
</div>
:::

## Сочетание с другими модулями

### Flexbox + align

::: component-view
<div class="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4">
  <img 
    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%235993d9' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E" 
    alt="Логотип" 
    class="align-middle w-8 h-8"
  >
  <span class="align-middle text-lg font-bold text-gray-900">Логотип</span>
</div>
:::

## Примечания

- Модуль `align` работает только с inline и table-cell элементами
- Для вертикального центрирования блочных элементов используйте Flexbox или Grid
- Свойство `vertical-align` не работает с блочными элементами (display: block)

## См. также

- [Flexbox](/ru/modules/flexbox/) — для современного выравнивания
- [Display](/ru/modules/display/) — для управления типом отображения
- [Grid](/ru/modules/grid/) — для сеточной раскладки
