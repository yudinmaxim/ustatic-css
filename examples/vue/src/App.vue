<script setup lang="ts">
import { ref, reactive } from 'vue'

import { UCodeEditor } from '@ui-kit'

import ConfigurationPanel from '@components/ConfigurationPanel.vue'
import InitCodePreview from '@components/InitCodePreview.vue'
import DynamicApp from '@components/DynamicApp.vue'
import Preview from '@components/Preview.vue'

interface Config {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
  options: {
    loadVars: boolean
    loadBase: boolean
  }
}

// Текущая конфигурация
const currentConfig = reactive<Config>({
  type: 'modules',
  modules: [ 'flexbox', 'spacing', 'typography' ],
  classesInput: 'flex, p-4, text-lg',
  options: {
    loadVars: true,
    loadBase: true
  }
})

// Обработчики событий конфигурации
const handleConfigApply = (config: Config) => {
  Object.assign(currentConfig, config)
}

const handleConfigReset = () => {
  currentConfig.type = 'modules'
  currentConfig.modules = [ 'flexbox', 'spacing', 'typography' ]
  currentConfig.classesInput = 'flex, p-4, text-lg'
  currentConfig.options = { loadVars: true, loadBase: true }
}

// Код для редактора
const code = ref(`<div class="p-4 bg-blue-100 rounded-base text-center">
  <h2 class="text-xl font-bold mb-2">Пример заголовка</h2>
  <p class="text-gray-700">Это пример текста с использованием утилитарных классов</p>
  <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600">
    Пример кнопки
  </button>
</div>`)
</script>

<template>
  <div class="h-100vh bg-white overflow-y-auto">
    <div class="max-w-3/4 mx-auto p-5">
      <header class="mb-8 pb-6 border-b border-gray-200">
        <h1 class="text-2xl font-bold">
          Ustatic CSS Playground - Vue
        </h1>
        <p class="text-gray-600">
          Интерактивная демонстрация различных типов инициализации
        </p>
      </header>

      <main class="mt-8">
        <div class="grid grid-columns--1fr-2fr gap-2">
          <!-- Панель конфигурации -->
          <ConfigurationPanel
            @apply="handleConfigApply"
            @reset="handleConfigReset"
          />

          <!-- Код инициализации -->
          <InitCodePreview :config="currentConfig" />
        </div>
        <!-- Динамическое приложение -->
        <div class="grid grid-columns--1fr-1fr gap-2 mt-6">
          <DynamicApp :config="currentConfig" />
        </div>

        <!-- Редактор и предпросмотр HTML -->
        <div class="grid grid-columns--1fr-1fr gap-2">
          <UCodeEditor v-model="code" />
          <Preview :html="code" />
        </div>
      </main>
    </div>
  </div>
</template>