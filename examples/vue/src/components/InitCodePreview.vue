<template>
  <div class="code-preview p-4 bg-gray-50 rounded border border-gray-200 mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold text-gray-800 m-0">
        Код инициализации
      </h3>
      <button
        class="px-3 py-1.5 rounded text-sm bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        @click="copyCode"
      >
        {{ copied ? 'Скопировано!' : 'Копировать' }}
      </button>
    </div>

    <pre class="m-0 p-4 bg-white rounded border border-gray-200 overflow-x-auto text-sm"><code v-html="highlightedCode" /></pre>

    <div class="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
      <p class="text-sm text-blue-800 m-0">
        <strong>💡 Совет:</strong> {{ tip }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import hljs from 'highlight.js/lib/core'

interface Config {
  type: 'modules' | 'classes'
  modules: string[]
  classesInput: string
  options: {
    loadVars: boolean
    loadBase: boolean
  }
}

const props = defineProps<{
  config: Config
}>()

const copied = ref(false)

const plainInitializationCode = computed(() => {
  const { type, modules, classesInput, options } = props.config

  if (type === 'modules') {
    const modulesStr = modules.length > 0
      ? `['${modules.join("', '")}']`
      : '[]'

    const opts = []
    if (options.loadVars) opts.push('loadVars: true')
    if (options.loadBase) opts.push('loadBase: true')
    const optsStr = opts.length > 0 ? `, { ${opts.join(', ')} }` : ''

    return `app.use(ustaticCss, {
  modules: ${modulesStr}${optsStr}
})`
  }

  if (type === 'classes') {
    const classes = classesInput
      .split(',')
      .map(c => c.trim())
      .filter(c => c)

    const classesStr = classes.length > 0
      ? `['${classes.join("', '")}']`
      : '[]'

    return `app.use(ustaticCss, {
  classes: ${classesStr}
})`
  }

  return `app.use(ustaticCss)`
})

const fullCode = computed(() => {
  return `import { createApp } from 'vue'
import { ustaticCss } from 'ustatic-css/scripts'
import App from './App.vue'

const app = createApp(App)
${plainInitializationCode.value}
app.mount('#app')`
})

const highlightedCode = computed(() => {
  try {
    return hljs.highlight(fullCode.value, { language: 'typescript' }).value
  } catch {
    return hljs.highlightAuto(fullCode.value).value
  }
})

const tip = computed(() => {
  const { type, modules, classesInput } = props.config

  if (type === 'modules') {
    if (modules.length === 0) {
      return 'Вы не выбрали ни одного модуля. Будут загружены только базовые стили и переменные.'
    }
    if (modules.length > 5) {
      return 'Выбрано много модулей. Рассмотрите использование режима автоподбора по классам для оптимизации.'
    }
    return 'Режим модулей подходит для явного контроля подключаемых стилей.'
  }

  if (type === 'classes') {
    const classesCount = classesInput.split(',').filter(c => c.trim()).length
    if (classesCount === 0) {
      return 'Добавьте классы для автоподбора модулей.'
    }
    return 'Автоподбор определит необходимые модули на основе используемых классов.'
  }

  return 'Ручной режим даёт полный контроль над инициализацией.'
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(fullCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}
</script>

<style scoped>
code {
  font-family: 'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}

/* Светлая тема для highlight.js */
pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
  background: #ffffff;
  color: #24292e;
}
.hljs-keyword,
.hljs-built_in {
  color: #d73a49;
  font-weight: 600;
}
.hljs-string,
.hljs-meta {
  color: #032f62;
}
.hljs-comment {
  color: #6a737d;
  font-style: italic;
}
.hljs-function {
  color: #6f42c1;
}
.hljs-title {
  color: #6f42c1;
}
</style>
