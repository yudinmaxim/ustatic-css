<template>
  <div class="demo-app p-6 bg-white rounded-base">
    <h2 class="text-xl font-bold mb-4">
      Демо-приложение
    </h2>

    <!-- Пример flexbox -->
    <div class="mb-6">
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Flexbox пример
      </h3>
      <div class="flex justify-between items-center p-4 bg-gray-100 rounded-base">
        <span class="px-3 py-1 bg-blue-500 text-white rounded-base">Элемент 1</span>
        <span class="px-3 py-1 bg-green-500 text-white rounded-base">Элемент 2</span>
        <span class="px-3 py-1 bg-purple-500 text-white rounded-base">Элемент 3</span>
      </div>
    </div>

    <!-- Пример типографики -->
    <div class="mb-6">
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Типографика
      </h3>
      <div class="p-4 bg-gray-100 rounded-base">
        <h1 class="text-2xl font-bold mb-2">Заголовок H1</h1>
        <h2 class="text-xl font-semibold mb-2">Заголовок H2</h2>
        <p class="text-base text-gray-600 mb-2">
          Обычный текст с использованием утилитарных классов для стилизации.
        </p>
        <p class="text-sm text-gray-500">Мелкий текст для подписей</p>
      </div>
    </div>

    <!-- Пример отступов -->
    <div class="mb-6">
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Отступы и размеры
      </h3>
      <div class="flex gap-4">
        <div class="p-2 bg-red-200 rounded-base">p-2</div>
        <div class="p-4 bg-orange-200 rounded-base">p-4</div>
        <div class="p-6 bg-yellow-200 rounded-base">p-6</div>
        <div class="p-8 bg-green-200 rounded-base">p-8</div>
      </div>
    </div>

    <!-- Пример интерактивности -->
    <div class="mb-6">
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Интерактивность
      </h3>
      <div class="flex gap-3">
        <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600">
          Кнопка с hover
        </button>
        <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-base hover:bg-gray-300">
          Серая кнопка
        </button>
        <button class="px-4 py-2 bg-green-500 text-white rounded-base active:pulse">
          Кнопка с active
        </button>
      </div>
    </div>

    <!-- Пример позиционирования -->
    <div class="mb-6">
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Позиционирование
      </h3>
      <div class="relative h-64 bg-gray-100 rounded-base overflow-hidden">
        <div class="absolute top-0 left-0 px-2 py-1 bg-blue-500 text-white text-sm rounded-base">
          top-0 left-0
        </div>
        <div class="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-sm rounded-base">
          top-2 right-2
        </div>
        <div class="absolute bottom-2 left-1/2 px-3 py-1 bg-purple-500 text-white text-sm rounded-base">
          centered
        </div>
      </div>
    </div>

    <!-- Пример границ и эффектов -->
    <div>
      <h3 class="text-md font-semibold mb-2 text-gray-700">
        Границы и эффекты
      </h3>
      <div class="flex gap-4">
        <div class="p-4 border-2 border-blue-500 rounded-base">
          border-2 border-blue-500
        </div>
        <div class="p-4 border-4 border-dashed border-green-500 rounded-base">
          border-dashed
        </div>
        <div class="p-4 bg-blue-500 text-white rounded-base opacity-75">
          bg + opacity
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Этот компонент используется как демонстрационное приложение
// Он будет маунтиться с разными конфигурациями ustaticCss
</script>
