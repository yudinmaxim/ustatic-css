<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@nanostores/vue'

import { getModulesFromClasses } from 'ustatic-css/scripts'
import type { IConfig } from '@utypes/interface'
import { UButton, UTag, UIsland } from '@ui-kit'
import { appStore, setConfig } from '../stores/app'

const props = defineProps<{
  modelValue?: IConfig
}>()

// Используем useStore для реактивности
const $config = useStore(appStore)

const config = computed(() => $config.value?.config || props.modelValue)

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
  'hidden',
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

const emit = defineEmits<{
  (e: 'apply', config: IConfig): void
  (e: 'reset'): void
}>()

const toggleModule = (module: string) => {
  const currentConfig = config.value
  if (!currentConfig) return

  const index = currentConfig.modules.indexOf(module)
  const newModules = index > -1
    ? currentConfig.modules.filter((_, i) => i !== index)
    : [ ...currentConfig.modules, module ]

  const newConfig: IConfig = { ...currentConfig, modules: newModules }
  setConfig(newConfig)
  emit('apply', newConfig)
}

const setType = (type: 'modules' | 'classes') => {
  const currentConfig = config.value
  if (!currentConfig) return

  const newConfig: IConfig = { ...currentConfig, type }
  setConfig(newConfig)
  emit('apply', newConfig)
}

const setClassesInput = (value: string) => {
  const currentConfig = config.value
  if (!currentConfig) return

  const newConfig: IConfig = { ...currentConfig, classesInput: value }
  setConfig(newConfig)
  emit('apply', newConfig)
}
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
          :variant="config?.type === type.value ? 'primary' : 'default'"
          @click="setType(type.value)"
        >
          {{ type.label }}
        </UButton>
      </div>
    </div>

    <!-- Выбор модулей -->
    <div v-if="config?.type === 'modules'">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Модули для подключения
      </label>
      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="module in availableModules"
          :key="module"
          size="small"
          :variant="config?.modules?.includes(module) ? 'primary' : 'default'"
          @click="toggleModule(module)"
        >
          {{ module }}
        </UButton>
      </div>
    </div>

    <!-- Ввод классов -->
    <div v-if="config?.type === 'classes'">
      <label class="block text-sm font-medium text-gray-700 mb-2">
        Классы для автоподбора модулей
      </label>
      <textarea
        :value="config?.classesInput || ''"
        @input="setClassesInput(($event.target as HTMLTextAreaElement).value)"
        rows="3"
        class="w-full p-2 border border-gray-300 rounded text-sm font-mono"
        placeholder="flex, p-4, text-lg, bg-primary"
      />
      <p class="text-xs text-gray-500">
        Перечислите классы через запятую
      </p>
      <p>
        Необходимые модули: <span class="flex flex-row gap-1">
          <UTag
            v-for="item in getModulesFromClasses(config?.classesInput || '')"
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
