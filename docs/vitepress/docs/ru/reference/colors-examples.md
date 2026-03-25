---
title: Примеры использования
outline:
  level: 2
---

# Примеры использования цветов

Примеры использования цветовой палитры в интерфейсных компонентах.

## Примеры использования {#examples}

### Кнопки {#кнопки}

::: component-view
<div class="flex gap-2 flex-wrap">
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer active:pulse">
    Blue
  </button>
  <button class="px-4 py-2 bg-green-500 text-white rounded-base hover:bg-green-600 cursor-pointer active:pulse">
    Green
  </button>
  <button class="px-4 py-2 bg-red-500 text-white rounded-base hover:bg-red-600 cursor-pointer active:pulse">
    Red
  </button>
  <button class="px-4 py-2 bg-yellow-500 text-white rounded-base hover:bg-yellow-600 cursor-pointer active:pulse">
    Yellow
  </button>
  <button class="px-4 py-2 bg-orange-500 text-white rounded-base hover:bg-orange-600 cursor-pointer active:pulse">
    Orange
  </button>
  <button class="px-4 py-2 bg-sky-500 text-white rounded-base hover:bg-sky-600 cursor-pointer active:pulse">
    Sky
  </button>
  <button class="px-4 py-2 bg-gray-200 text-gray-800 rounded-base hover:bg-gray-300 cursor-pointer active:pulse">
    Gray
  </button>
</div>
:::

### Бейджи {#бейджи}

::: component-view
<div class="flex gap-2 flex-wrap">
  <span class="px-2 py-1 bg-blue-100 text-blue-700 rounded-base text-sm">Blue</span>
  <span class="px-2 py-1 bg-green-100 text-green-700 rounded-base text-sm">Green</span>
  <span class="px-2 py-1 bg-red-100 text-red-700 rounded-base text-sm">Red</span>
  <span class="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-base text-sm">Yellow</span>
  <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-base text-sm">Orange</span>
  <span class="px-2 py-1 bg-sky-100 text-sky-700 rounded-base text-sm">Sky</span>
  <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded-base text-sm">Gray</span>
</div>
:::

### Карточки состояний {#карточки-состояний}

::: component-view
<div class="flex flex-col gap-4">
  <div class="p-4 bg-green-50 border border-green-200 rounded-base">
    <p class="text-green-800">✓ Успешно выполнено</p>
  </div>
  <div class="p-4 bg-yellow-50 border border-yellow-200 rounded-base">
    <p class="text-yellow-800">⚠ Требует внимания</p>
  </div>
  <div class="p-4 bg-red-50 border border-red-200 rounded-base">
    <p class="text-red-800">✗ Ошибка выполнения</p>
  </div>
</div>
:::
