<template>
  <div class="dynamic-app-container">
    <div class="mb-4 flex items-center gap-2">
      <span class="text-sm text-gray-600">Статус:</span>
      <span
        class="px-2 py-1 rounded text-xs font-medium"
        :class="appStatus.class"
      >
        {{ appStatus.text }}
      </span>
    </div>
    
    <!-- Контейнер для динамического приложения -->
    <div
      ref="appContainer"
      class="app-mount-point border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 min-h-96"
    >
      <div
        v-if="!appMounted"
        class="flex items-center justify-center h-64 text-gray-400"
      >
        <span>Приложение не инициализировано</span>
      </div>
    </div>

    <!-- Логи -->
    <div v-if="logs.length > 0" class="mt-4">
      <h4 class="text-sm font-semibold text-gray-700 mb-2">
        Логи инициализации
      </h4>
      <div class="max-h-40 overflow-y-auto bg-gray-900 rounded p-3 text-xs font-mono text-gray-100">
        <div
          v-for="(log, index) in logs"
          :key="index"
          class="mb-1"
          :class="log.type === 'error' ? 'text-red-400' : log.type === 'success' ? 'text-green-400' : 'text-gray-300'"
        >
          [{{ log.time }}] {{ log.message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, watch, nextTick } from 'vue'
import { createApp, h } from 'vue'
import DemoApp from './DemoApp.vue'

interface Config {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
  options: {
    loadVars: boolean
    loadBase: boolean
  }
}

interface LogEntry {
  time: string
  message: string
  type: 'info' | 'success' | 'error'
}

const props = defineProps<{
  config: Config
  autoApply?: boolean
}>()

const appContainer = ref<HTMLElement | null>(null)
const appMounted = ref(false)
const currentApp = ref<any>(null)
const logs = ref<LogEntry[]>([])

const addLog = (message: string, type: 'info' | 'success' | 'error' = 'info') => {
  const now = new Date()
  const time = now.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  logs.value.push({ time, message, type })
  if (logs.value.length > 20) {
    logs.value.shift()
  }
}

const appStatus = ref({
  text: 'Не инициализировано',
  class: 'bg-gray-200 text-gray-700'
})

const destroyApp = () => {
  if (currentApp.value) {
    try {
      currentApp.value.unmount()
      addLog('Приложение размонтировано', 'info')
    } catch (e) {
      addLog(`Ошибка при размонтировании: ${(e as Error).message}`, 'error')
    }
    currentApp.value = null
    appMounted.value = false
    appStatus.value = {
      text: 'Остановлено',
      class: 'bg-gray-200 text-gray-700'
    }
  }
}

const initApp = async () => {
  if (!appContainer.value) return

  destroyApp()
  addLog('Начало инициализации приложения...', 'info')

  try {
    // Очищаем контейнер
    appContainer.value.innerHTML = ''

    // Динамически импортируем ustaticCss
    const { ustaticCss } = await import('ustatic-css/scripts')

    // Создаём приложение
    const app = createApp({
      render: () => h(DemoApp)
    })

    // Применяем конфигурацию
    const { type, modules, classesInput, options } = props.config

    if (type === 'modules') {
      // Режим модулей
      const pluginOptions: any = { modules: [...modules] }
      if (options.loadVars) pluginOptions.loadVars = true
      if (options.loadBase) pluginOptions.loadBase = true

      app.use(ustaticCss, pluginOptions)
      addLog(`Подключены модули: ${modules.join(', ') || 'нет'}`, 'success')
    } else if (type === 'classes') {
      // Режим автоподбора классов
      const classes = classesInput
        .split(',')
        .map(c => c.trim())
        .filter(c => c)

      app.use(ustaticCss, { classes })
      addLog(`Автоподбор по классам: ${classes.join(', ') || 'нет'}`, 'success')
    } else {
      // Базовая инициализация
      app.use(ustaticCss)
      addLog('Базовая инициализация без опций', 'info')
    }

    // Маунтим приложение
    app.mount(appContainer.value)
    currentApp.value = app
    appMounted.value = true

    appStatus.value = {
      text: 'Работает',
      class: 'bg-green-200 text-green-700'
    }
    addLog('Приложение успешно инициализировано', 'success')
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : 'Неизвестная ошибка'
    addLog(`Ошибка инициализации: ${errorMsg}`, 'error')
    appStatus.value = {
      text: 'Ошибка',
      class: 'bg-red-200 text-red-700'
    }
  }
}

// Следим за изменениями конфигурации
watch(
  () => props.config,
  () => {
    if (props.autoApply !== false) {
      initApp()
    }
  },
  { deep: true }
)

// Инициализация при маунте
onBeforeUnmount(() => {
  destroyApp()
})

// Первичная инициализация
await nextTick()
initApp()
</script>

<style scoped>
.app-mount-point {
  transition: border-color 0.2s;
}

.app-mount-point:hover {
  border-color: #9ca3af;
}
</style>
