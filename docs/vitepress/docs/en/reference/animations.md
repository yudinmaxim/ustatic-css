---
title: Animations and Transitions
outline:
  level: 2
---

# Animations and Transitions

uStatic CSS includes a set of utility classes for animations and transitions.

## Animations

### Blink

Blinking element:

::: component-view
<div class="blink text-lg">Blinking text</div>
:::

```html
<div class="blink">Blinking text</div>
```

### Spin

Spinning element. Available from 1 to 10 (multiplied by 0.25s):

::: component-view
<div class="animation:spin-4">⚙️</div>
:::

```html
<div class="animation:spin-4">⚙️</div>
```

### Pulse

Pulse on click (used with `:active`):

::: component-view
<button class="px-4 py-2 bg-blue-500 text-white rounded-base cursor-pointer active:pulse">
  Click me
</button>
:::

```html
<button class="active:pulse">Click me</button>
```

## Transitions

### Fade

Smooth fade in/out. Classes for Vue Transition:

```html
<transition name="fade" mode="out-in">
  <div v-if="visible">Content</div>
</transition>
```

**Classes:**
- `.fade-enter-active`, `.fade-leave-active` — transition
- `.fade-enter-from`, `.fade-leave-to` — hidden state (opacity: 0)
- `.fade-enter-to`, `.fade-leave-from` — visible state (opacity: 1)

### Slide Up

Slide up from bottom:

```html
<transition name="slide-up">
  <div v-if="visible">Content</div>
</transition>
```

**Classes:**
- `.slide-up-enter-active`, `.slide-up-leave-active` — transition
- `.slide-up-enter-from` — hidden state with downward offset
- `.slide-up-leave-to` — hidden state with upward offset

### Scale

Element scaling:

```html
<transition name="scale">
  <div v-if="visible">Content</div>
</transition>
```

**Classes:**
- `.scale-enter-active`, `.scale-leave-active` — transition
- `.scale-enter-from`, `.scale-leave-to` — hidden state with scale down (scale: 0.95)

## Utility Classes

### Hover Lift

Element lift on hover:

::: component-view
<div class="hover-lift inline-block p-4 bg-white border border-gray-200 rounded-base">
  Hover me
</div>
:::

```html
<div class="hover-lift">Hover me</div>
```

**Effect:** on hover, the element lifts up with a shadow.

### Tooltip Visibility

Classes for managing tooltip visibility:

::: component-view
<div class="relative inline-block">
  <span>Hover me</span>
  <div class="tooltip-hidden tooltip-visible absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
    Tooltip
  </div>
</div>
:::

```html
<div class="tooltip-hidden">Hidden tooltip</div>
<div class="tooltip-visible">Visible tooltip</div>
```

**Classes:**
- `.tooltip-hidden` — hidden state (opacity: 0, visibility: hidden)
- `.tooltip-visible` — visible state (opacity: 1, visibility: visible)

## Usage Examples

### Loading Animation

::: component-view
<div class="flex items-center gap-2">
  <div class="animation:spin-2">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
    </svg>
  </div>
  <span>Loading...</span>
</div>
:::

### Interactive Card

::: component-view
<div class="hover-lift inline-block p-6 bg-white border border-gray-200 rounded-base cursor-pointer">
  <h3 class="text-lg font-bold text-gray-800 mb-2">Card</h3>
  <p class="text-gray-600">Hover for lift effect</p>
</div>
:::

### Notification with Animation

::: component-view
<div class="inline-block p-4 bg-green-50 border border-green-200 rounded-base active:pulse cursor-pointer">
  ✓ Success
</div>
:::
