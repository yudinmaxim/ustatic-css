---
title: Типографика (Typography)
outline:
  level: 2
---

# Типографика (Typography)

Классы для управления текстом.

## Размеры текста

| Класс | Описание |
|-------|----------|
| `.text-2xs` | Очень маленький |
| `.text-xs` | Маленький |
| `.text-sm` | Меньше среднего |
| `.text-base` | Базовый |
| `.text-lg` | Большой |
| `.text-xl` | Очень большой |
| `.text-2xl` | Ещё больше |

## Вес текста (Font Weight)

| Класс | Описание |
|-------|----------|
| `.font-thin` | Очень тонкий (100) |
| `.font-light` | Тонкий (300) |
| `.font-regular` | Обычный (400) |
| `.font-medium` | Средний (500) |
| `.font-semibold` | Полужирный (600) |
| `.font-bold` | Жирный (700) |
| `.font-extrabold` | Очень жирный (800) |
| `.font-black` | Самый жирный (900) |

## Цвет текста

Все цвета палитры доступны через `.text-{color}-{brightness}`:

::: component-view
<div class="flex flex-column gap-2">
  <span class="text-gray-900 text-lg">text-gray-900</span>
  <span class="text-gray-700 text-lg">text-gray-700</span>
  <span class="text-gray-500 text-lg">text-gray-500</span>
  <span class="text-blue-500 text-lg">text-blue-500</span>
  <span class="text-red-500 text-lg">text-red-500</span>
</div>
:::

```html
<span class="text-gray-900">Основной текст</span>
<span class="text-gray-500">Вторичный текст</span>
<span class="text-blue-500">Акцентный текст</span>
```

## Примеры

::: component-view
<div class="flex flex-column gap-2">
  <p class="text-2xs font-light">Очень маленький тонкий текст</p>
  <p class="text-sm font-regular">Маленький обычный текст</p>
  <p class="text-base font-medium">Базовый средний текст</p>
  <p class="text-lg font-semibold">Большой полужирный текст</p>
  <p class="text-xl font-bold">Очень большой жирный текст</p>
</div>
:::

```html
<p class="text-2xs font-light">Очень маленький тонкий текст</p>
<p class="text-base font-medium">Базовый средний текст</p>
<p class="text-xl font-bold">Очень большой жирный текст</p>
```
