# Модуль отображения (display)

CSS классы для управления свойством `display`.

## Классы

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.inline` | `display: inline` | Строчный элемент |
| `.block` | `display: block` | Блочный элемент |
| `.inline-block` | `display: inline-block` | Строчно-блочный |
| `.table` | `display: table` | Таблица |
| `.table-cell` | `display: table-cell` | Ячейка таблицы |

## Классы overflow

| Класс | CSS свойство | Описание |
|-------|--------------|----------|
| `.overflow-hidden` | `overflow: hidden` | Скрыть всё |
| `.overflow-scroll` | `overflow: scroll` | Всегда показывать скролл |
| `.overflow-auto` | `overflow: auto` | Автоматически |
| `.overflow-x-hidden` | `overflow-x: hidden` | Скрыть горизонтальный |
| `.overflow-y-hidden` | `overflow-y: hidden` | Скрыть вертикальный |
| `.overflow-x-scroll` | `overflow-x: scroll` | Горизонтальный скролл |
| `.overflow-y-scroll` | `overflow-y: scroll` | Вертикальный скролл |
| `.overflow-x-auto` | `overflow-x: auto` | Авто горизонтальный |
| `.overflow-y-auto` | `overflow-y: auto` | Авто вертикальный |

## Использование

```html
<!-- Блочный элемент -->
<div class="block">Блочный элемент</div>

<!-- Строчный элемент -->
<span class="inline">Строчный элемент</span>

<!-- Строчно-блочный (как кнопка) -->
<button class="inline-block px-4 py-2">Кнопка</button>

<!-- Скрытие переполнения -->
<div class="overflow-hidden">Скрыть переполнение</div>

<!-- Скролл -->
<div class="overflow-y-scroll h-64">Контент со скроллом</div>
```

## Примеры

```html
<!-- Модальное окно с затемнением -->
<div class="fixed inset-0 overflow-hidden">
  <div class="absolute-center">
    Контент
  </div>
</div>

<!-- Текст с многоточием -->
<div class="overflow-hidden whitespace-nowrap text-ellipsis">
  Длинный текст, который обрезается...
</div>

<!-- Табличная верстка -->
<div class="table w-full">
  <div class="table-row">
    <div class="table-cell">Ячейка 1</div>
    <div class="table-cell">Ячейка 2</div>
  </div>
</div>
```
