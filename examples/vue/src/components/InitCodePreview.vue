<script setup lang="ts">
import { computed, ref } from 'vue'

import type { IConfig } from '@utypes/interface'
import { UCodeEditor } from '@ui-kit'

const props = defineProps<{
  config: IConfig
}>()

const copied = ref(false)

const plainInitializationCode = computed(() => {
  const { type, modules, classesInput } = props.config

  if (type === 'modules') {
    const modulesStr = modules.length > 0
      ? `['${modules.join('\', \'')}']`
      : '[]'

    return `app.use(ustaticCss, {
  modules: ${modulesStr}
})`
  }

  if (type === 'classes') {
    const classes = classesInput
      .split(',')
      .map(c => c.trim())
      .filter(c => c)

    const classesStr = classes.length > 0
      ? `['${classes.join('\', \'')}']`
      : '[]'

    return `app.use(ustaticCss, {
  classes: ${classesStr}
})`
  }

  return 'app.use(ustaticCss)'
})

const fullCode = computed(() => {
  return `import { createApp } from 'vue'
import { ustaticCss } from 'ustatic-css/scripts'
import App from './App.vue'

const app = createApp(App)
${plainInitializationCode.value}
app.mount('#app')`
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

<template>
  <UCodeEditor
    :modelValue="fullCode"
    :tip="tip"
    lang="typescript"
    useTip
  />
</template>

