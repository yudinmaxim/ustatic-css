---
title: Выравнивание
outline:
  level: 2
---

# Выравнивание (Align)

Классы для вертикального выравнивания элементов.

## Вертикальное выравнивание

| Класс | Описание |
|-------|----------|
| `.align-baseline` | Выравнивание по базовой линии |
| `.align-top` | Выравнивание по верхнему краю |
| `.align-middle` | Выравнивание по центру |
| `.align-bottom` | Выравнивание по нижнему краю |
| `.align-text-top` | Выравнивание по верху текста |
| `.align-text-bottom` | Выравнивание по низу текста |

## Примеры

::: component-view
<div class="flex gap-2 items-end">
  <span class="align-baseline text-sm">baseline</span>
  <span class="align-top text-sm">top</span>
  <span class="align-middle text-sm">middle</span>
  <span class="align-bottom text-sm">bottom</span>
</div>
:::

```html
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
```

<style>
.align-example {
  display: inline-flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: var(--vp-border-radius);
}
</style>
