---
title: Анимации и переходы
outline:
  level: 2
---

# Анимации и переходы

uStatic CSS включает набор утилитарных классов для анимаций и переходов.

## Анимации

### Blink

Мигание элемента:

::: component-view
<div class="blink text-lg">Мигающий текст</div>
:::

```html
<div class="blink">Мигающий текст</div>
```

### Spin

Вращение элемента. Доступно от 1 до 10 (умножается на 0.25с):

::: component-view
<div class="animation:spin-4">⚙️</div>
:::

```html
<div class="animation:spin-4">⚙️</div>
```

### Pulse

Пульсация при нажатии (используется с `:active`):

::: component-view
<button class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-pointer active:pulse">
  Нажми меня
</button>
:::

```html
<button class="active:pulse">Нажми меня</button>
```

## Переходы (Transitions)

### Fade

Плавное появление/исчезновение. Классы для Vue Transition:

```html
<transition name="fade" mode="out-in">
  <div v-if="visible">Контент</div>
</transition>
```

**Классы:**
- `.fade-enter-active`, `.fade-leave-active` — transition
- `.fade-enter-from`, `.fade-leave-to` — невидимое состояние (opacity: 0)
- `.fade-enter-to`, `.fade-leave-from` — видимое состояние (opacity: 1)

### Slide Up

Выезд элемента снизу:

```html
<transition name="slide-up">
  <div v-if="visible">Контент</div>
</transition>
```

**Классы:**
- `.slide-up-enter-active`, `.slide-up-leave-active` — transition
- `.slide-up-enter-from` — невидимое состояние со смещением вниз
- `.slide-up-leave-to` — невидимое состояние со смещением вверх

### Scale

Масштабирование элемента:

```html
<transition name="scale">
  <div v-if="visible">Контент</div>
</transition>
```

**Классы:**
- `.scale-enter-active`, `.scale-leave-active` — transition
- `.scale-enter-from`, `.scale-leave-to` — невидимое состояние с уменьшением (scale: 0.95)

## Утилитарные классы

### Hover Lift

Подъём элемента при наведении:

::: component-view
<div class="hover-lift inline-block p-4 bg-white border border-gray-200 rounded-base">
  Наведи на меня
</div>
:::

```html
<div class="hover-lift">Наведи на меня</div>
```

**Эффект:** при наведении элемент поднимается вверх с тенью.

### Tooltip Visibility

Классы для управления видимостью tooltip:

::: component-view
<div class="relative inline-block">
  <span>Наведи на меня</span>
  <div class="tooltip-hidden tooltip-visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
    Подсказка
  </div>
</div>
:::

```html
<div class="tooltip-hidden">Скрытый tooltip</div>
<div class="tooltip-visible">Видимый tooltip</div>
```

**Классы:**
- `.tooltip-hidden` — скрытое состояние (opacity: 0, visibility: hidden)
- `.tooltip-visible` — видимое состояние (opacity: 1, visibility: visible)

## Примеры использования

### Анимация загрузки

::: component-view
<div class="flex items-center gap-2">
  <div class="animation:spin-2">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
    </svg>
  </div>
  <span>Загрузка...</span>
</div>
:::

### Интерактивная карточка

::: component-view
<div class="hover-lift inline-block p-6 bg-white border border-gray-200 rounded-base cursor-pointer">
  <h3 class="text-lg font-bold text-gray-800 mb-2">Карточка</h3>
  <p class="text-gray-600">Наведи на меня для эффекта подъёма</p>
</div>
:::

### Уведомление с анимацией

::: component-view
<div class="inline-block p-4 bg-green-50 border border-green-200 rounded-base active:pulse cursor-pointer">
  ✓ Успешно выполнено
</div>
:::
