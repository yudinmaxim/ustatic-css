<template>
  <div class="max-w-4xl mx-auto p-5">
    <header class="mb-8 pb-6 border-b border-gray-200">
      <h1 class="text-2xl font-bold">
        Ustatic CSS Playground
      </h1>
      <p class="text-gray-600">
        Интерактивные примеры утилитарных классов
      </p>
    </header>

    <main class="mt-8">
      <ModuleNavigation />

      <div class="grid grid-columns--1fr-1fr gap-8 mt-6">
        <CodeEditor v-model="code" />
        <Preview :html="code" />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ModuleNavigation from './components/ModuleNavigation.vue'
import CodeEditor from './components/CodeEditor.vue'
import Preview from './components/Preview.vue'

// Начальный пример кода
const code = ref(`<div class="p-4 bg-blue-100 rounded text-center">
  <h2 class="text-xl font-bold mb-2">Пример заголовка</h2>
  <p class="text-gray-700">Это пример текста с использованием утилитарных классов</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Пример кнопки
  </button>
</div>`)
</script>