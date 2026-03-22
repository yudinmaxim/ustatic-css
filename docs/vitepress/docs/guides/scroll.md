---
title: Прокрутка (Scroll)
outline:
  level: 2
---

# Прокрутка (Scroll)

Классы для управления прокруткой элементов.

## Overflow

| Класс | Описание |
|-------|----------|
| `.overflow-auto` | Автопрокрутка при необходимости |
| `.overflow-hidden` | Скрыть переполнение |
| `.overflow-visible` | Показать переполнение |
| `.overflow-scroll` | Всегда показывать прокрутку |

## Примеры

::: component-view
<div class="overflow-auto w-64 h-24 border border-gray-200 rounded-base p-2">
  <p class="text-sm">
    Это текст с автопрокруткой. Если содержимое не помещается, появится прокрутка.
    Продолжение текста для демонстрации прокрутки...
  </p>
</div>
:::

```html
<div class="overflow-auto">Автопрокрутка</div>
<div class="overflow-hidden">Скрыть переполнение</div>
<div class="overflow-scroll">Всегда прокручивать</div>
```
