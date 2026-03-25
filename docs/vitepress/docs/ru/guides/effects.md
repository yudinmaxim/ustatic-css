---
title: Эффекты (Effects)
outline:
  level: 2
---

# Эффекты (Effects)

Классы для управления визуальными эффектами.

## Прозрачность (Opacity)

| Класс | Описание |
|-------|----------|
| `.opacity-0` | Полностью прозрачный |
| `.opacity-25` | 25% непрозрачности |
| `.opacity-50` | 50% непрозрачности |
| `.opacity-75` | 75% непрозрачности |
| `.opacity-100` | Полностью непрозрачный |

## Поворот (Rotate)

| Класс | Описание |
|-------|----------|
| `.rotate-0` | Без поворота |
| `.rotate-45` | Поворот на 45° |
| `.rotate-90` | Поворот на 90° |
| `.rotate-180` | Поворот на 180° |
| `.rotate--45` | Поворот на -45° |
| `.rotate--90` | Поворот на -90° |

## Примеры

::: component-view
<div class="flex gap-4 items-center">
  <div class="w-16 h-16 bg-blue-500 rounded-base opacity-50">
    50% opacity
  </div>
  <div class="w-16 h-16 bg-green-500 rounded-base rotate-45">
    rotate-45
  </div>
  <div class="w-16 h-16 bg-red-500 rounded-base rotate-180">
    rotate-180
  </div>
</div>
:::

```html
<div class="opacity-50">50% прозрачности</div>
<div class="rotate-45">Поворот на 45°</div>
<div class="rotate-180">Поворот на 180°</div>
```

## Hover прозрачность

::: component-view
<div class="w-32 h-16 bg-blue-500 rounded-base hover:opacity-50 cursor-pointer">
  Наведи на меня
</div>
:::

```html
<div class="hover:opacity-50">Наведи на меня</div>
```
