<script setup lang="ts">
import { reactive, watch } from 'vue'

import { getModulesFromClasses } from 'ustatic-css/scripts'
import type { IConfig } from '@utypes/interface'
import { UButton, UTag, UIsland } from '@ui-kit'

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

const config = reactive<IConfig>({
  type: 'modules',
  modules: [ 'flexbox', 'spacing', 'typography' ],
  classesInput: 'flex, p-4, text-lg',
})

const emit = defineEmits<{
  (e: 'apply', config: IConfig): void
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

watch(
  () => config.type,
  () => {
    emit('apply', { ...config })
  }
)
</script>

<template>
  <UIsland
    title="Конфигурация инициализации"
  >
    <!-- Тип инициализации -->
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Тип инициализации
      </label>
      <div class="flex gap-2">
        <UButton
          v-for="type in initTypes"
          :key="type.value"
          :variant="config.type === type.value ? 'primary' : 'default'"
          @click="config.type = type.value"
        >
          {{ type.label }}
        </UButton>
      </div>
    </div>

    <!-- Выбор модулей -->
    <div v-if="config.type === 'modules'">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Модули для подключения
      </label>
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="module in availableModules"
          :key="module"
          size="small"
          :variant="config.modules.includes(module) ? 'primary' : 'default'"
          @click="toggleModule(module)"
        >
          {{ module }}
        </UButton>
      </div>
    </div>

    <!-- Ввод классов -->
    <div v-if="config.type === 'classes'">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Классы для автоподбора модулей
      </label>
      <textarea
        v-model="config.classesInput"
        rows="3"
        class="w-full p-2 border border-gray-300 rounded-base text-sm font-mono"
        placeholder="flex, p-4, text-lg, bg-primary"
      />
      <p class="text-xs text-gray-500">
        Перечислите классы через запятую
      </p>
      <p>
        Необходимые модули: <span class="flex flex-row gap-1">
          <UTag
            v-for="item in getModulesFromClasses(config.classesInput)"
            :key="item"
            :label="item"
            size="small"
            variant="info"
          />
        </span>
      </p>
    </div>
  </UIsland>
</template>
