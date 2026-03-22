---
title: Курсор (Cursor)
outline:
  level: 2
---

# Курсор (Cursor)

Классы для управления видом курсора.

## Доступные классы

| Класс | Описание |
|-------|----------|
| `.cursor-pointer` | Курсор-указатель (рука) |
| `.cursor-move` | Курсор перемещения |
| `.cursor-default` | Курсор по умолчанию |
| `.cursor-disabled` | Запрещающий курсор |
| `.cursor-resize-x` | Курсор изменения размера по горизонтали |
| `.cursor-resize-y` | Курсор изменения размера по вертикали |
| `.cursor-wait` | Курсор ожидания |
| `.cursor-help` | Курсор помощи |

## Примеры

::: component-view
<div class="flex gap-4 flex-wrap">
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-default">
    default
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-pointer">
    pointer
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-disabled">
    disabled
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-wait">
    wait
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-help">
    help
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-move">
    move
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-resize-x">
    resize-x
  </div>
  <div class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-resize-y">
    resize-y
  </div>
</div>
:::

```html
<div class="cursor-default">default</div>
<div class="cursor-pointer">pointer</div>
<div class="cursor-disabled">disabled</div>
<div class="cursor-wait">wait</div>
<div class="cursor-help">help</div>
<div class="cursor-move">move</div>
<div class="cursor-resize-x">resize-x</div>
<div class="cursor-resize-y">resize-y</div>
```
