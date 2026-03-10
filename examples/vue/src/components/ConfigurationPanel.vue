<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

import Button from '../ui-kit/button.vue'

interface Config {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
  options: {
    loadVars: boolean
    loadBase: boolean
  }
}

const availableModules = [
  'align',
  'animations',
  'base',
  'bg',
  'border',
  'cursor',
  'display',
  'effects',
  'filters',
  'flexbox',
  'grid',
  'hide',
  'interactivity',
  'outline',
  'position',
  'scroll',
  'sizing',
  'spacing',
  'typography'
]

const initTypes = [
  { value: 'modules', label: 'Модули' },
  { value: 'classes', label: 'Классы (автоподбор)' }
] as const

const config = reactive<Config>({
  type: 'modules',
  modules: [ 'flexbox', 'spacing', 'typography' ],
  classesInput: 'flex, p-4, text-lg',
  options: {
    loadVars: true,
    loadBase: true
  }
})

const emit = defineEmits<{
  (e: 'apply', config: Config): void
  (e: 'reset'): void
}>()

const toggleModule = (module: string) => {
  const index = config.modules.indexOf(module)
  if (index > -1) {
    config.modules.splice(index, 1)
  } else {
    config.modules.push(module)
  }
  emit('apply', { ...config })
}

const applyConfig = () => {
  emit('apply', { ...config })
}

const resetConfig = () => {
  config.type = 'modules'
  config.modules = [ 'flexbox', 'spacing', 'typography' ]
  config.classesInput = 'flex, p-4, text-lg'
  config.options = { loadVars: true, loadBase: true }
  emit('reset')
}

watch(
  () => config.type,
  () => {
    emit('apply', { ...config })
  }
)
</script>

<template>
  <div class="configuration-panel p-4 bg-gray-50 rounded border border-gray-200 mb-6">
    <h3 class="text-lg font-semibold mb-4">
      Конфигурация инициализации
    </h3>

    <!-- Тип инициализации -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Тип инициализации
      </label>
      <div class="flex gap-2">
        <Button
          v-for="type in initTypes"
          :key="type.value"
          :state="config.type === type.value ? 'active' : 'normal'"
          @click="config.type = type.value"
        >
          {{ type.label }}
        </Button>
      </div>
    </div>

    <!-- Выбор модулей -->
    <div v-if="config.type === 'modules'" class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Модули для подключения
      </label>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="module in availableModules"
          :key="module"
          class="px-3 py-1.5 rounded text-sm font-medium transition-colors"
          :class="config.modules.includes(module) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
          @click="toggleModule(module)"
        >
          {{ module }}
        </button>
      </div>
    </div>

    <!-- Ввод классов -->
    <div v-if="config.type === 'classes'" class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Классы для автоподбора модулей
      </label>
      <textarea
        v-model="config.classesInput"
        rows="3"
        class="w-full p-2 border border-gray-300 rounded text-sm font-mono"
        placeholder="flex, p-4, text-lg, bg-primary"
      />
      <p class="text-xs text-gray-500 mt-1">
        Перечислите классы через запятую
      </p>
    </div>

    <!-- Дополнительные опции -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Дополнительные опции
      </label>
      <div class="space-y-2">
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="config.options.loadVars"
            type="checkbox"
            class="text-blue-600 rounded"
          >
          <span class="text-sm">Загрузить CSS-переменные</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input
            v-model="config.options.loadBase"
            type="checkbox"
            class="text-blue-600 rounded"
          >
          <span class="text-sm">Загрузить базовые стили</span>
        </label>
      </div>
    </div>

    <!-- Кнопки действий -->
    <div class="flex gap-2">
      <button
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        @click="applyConfig"
      >
        Применить конфигурацию
      </button>
      <button
        class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        @click="resetConfig"
      >
        Сбросить
      </button>
    </div>
  </div>
</template>
