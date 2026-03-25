---
title: Позиционирование (Position)
outline:
  level: 2
---

# Позиционирование (Position)

Классы для управления позиционированием элементов.

## Тип позиционирования

| Класс | Описание |
|-------|----------|
| `.relative` | Относительное позиционирование |
| `.absolute` | Абсолютное позиционирование |
| `.fixed` | Фиксированное позиционирование |
| `.sticky` | Липкое позиционирование |
| `.static` | Статическое позиционирование |

## Координаты

| Класс | Описание |
|-------|----------|
| `.top-0`, `.top-4`, `.top-auto` | Позиция сверху |
| `.right-0`, `.right-4`, `.right-auto` | Позиция справа |
| `.bottom-0`, `.bottom-4`, `.bottom-auto` | Позиция снизу |
| `.left-0`, `.left-4`, `.left-auto` | Позиция слева |

## Z-index

| Класс | Описание |
|-------|----------|
| `.z-0` | Базовый уровень |
| `.z-10` | Уровень 10 |
| `.z-20` | Уровень 20 |
| `.z-50` | Уровень 50 |
| `.z-modal` | Уровень модального окна |

## Примеры

::: component-view
<div class="relative h-32 bg-gray-100 rounded-base">
  <div class="absolute top-0 left-0 p-2 bg-blue-500 text-white rounded-base">
    Верхний левый
  </div>
  <div class="absolute bottom-0 right-0 p-2 bg-green-500 text-white rounded-base">
    Нижний правый
  </div>
</div>
:::

```html
<div class="relative">
  <div class="absolute top-0 left-0">Верхний левый</div>
  <div class="absolute bottom-0 right-0">Нижний правый</div>
</div>
```
