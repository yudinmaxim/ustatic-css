---
title: Скрытие (Hide)
outline:
  level: 2
---

# Скрытие (Hide)

Классы для скрытия элементов на разных размерах экрана.

## Доступные классы

| Класс | Описание |
|-------|----------|
| `.hide-mobile` | Скрыть на мобильных |
| `.hide-tablet` | Скрыть на планшетах |
| `.hide-desktop` | Скрыть на десктопах |

## Примеры

::: component-view
<div class="flex flex-column gap-2">
  <div class="hide-mobile p-2 bg-blue-100 rounded-base">
    Видно только на планшетах и десктопах
  </div>
  <div class="hide-tablet p-2 bg-green-100 rounded-base">
    Видно только на мобильных и десктопах
  </div>
  <div class="hide-desktop p-2 bg-yellow-100 rounded-base">
    Видно только на мобильных и планшетах
  </div>
</div>
:::

```html
<div class="hide-mobile">Видно на планшетах и десктопах</div>
<div class="hide-tablet">Видно на мобильных и десктопах</div>
<div class="hide-desktop">Видно на мобильных и планшетах</div>
```
