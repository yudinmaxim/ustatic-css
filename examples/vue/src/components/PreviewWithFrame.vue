<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { getModulesFromClasses } from 'ustatic-css/scripts'

const props = defineProps<{
  html: string
  config: {
    type: 'modules' | 'classes'
    modules: string[]
    classesInput: string
  }
}>()

const previewFrameRef = ref<HTMLIFrameElement | null>(null)
const stylesLoaded = ref(false)

// Генерация контента для iframe с изолированными стилями
const generateFrameContent = async (): Promise<string> => {
  const { type, modules, classesInput } = props.config

  // Определяем модули для загрузки
  let modulesToLoad: string[] = []

  if (type === 'modules') {
    modulesToLoad = modules
  } else if (type === 'classes') {
    modulesToLoad = getModulesFromClasses(classesInput)
  }

  // Генерируем ссылки на CSS файлы - используем статические пути из public/ustatic-css
  const styleLinks = modulesToLoad.map(module => 
    `<link rel="stylesheet" type="text/css" href="/ustatic-css/modules/${module}.css">`
  )
  
  // Всегда добавляем vars.css
  styleLinks.push('<link rel="stylesheet" type="text/css" href="/ustatic-css/vars.css">')

  // Генерируем HTML для iframe
  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 0;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
  </style>
  ${styleLinks.join('\n    ')}
</head>
<body>
  ${props.html}
</body>
</html>
  `.trim()

  return html
}

// Обновление контента iframe
const updateFrameContent = async () => {
  if (!previewFrameRef.value || !props.config) return

  try {
    const content = await generateFrameContent()
    const frameWindow = previewFrameRef.value.contentWindow
    const frameDoc = frameWindow?.document

    if (frameDoc) {
      frameDoc.open()
      frameDoc.write(content)
      frameDoc.close()

      // Сбрасываем флаг загрузки при обновлении
      stylesLoaded.value = false

      // Устанавливаем таймаут для загрузки
      setTimeout(() => {
        stylesLoaded.value = true
      }, 500)
    }
  } catch (error) {
    console.error('Failed to update frame content:', error)
  }
}

// Следим за изменениями HTML
watch(() => props.html, () => {
  updateFrameContent()
})

// Следим за изменениями конфигурации
watch(() => props.config, () => {
  updateFrameContent()
}, { deep: true })

// Инициализация
onMounted(() => {
  updateFrameContent()
})
</script>

<template>
  <div class="p-4 border border-gray-300 rounded-base bg-white overflow-hidden relative h-300">
    <!-- Оверлей загрузки -->
    <div
      v-if="!stylesLoaded"
      class="absolute inset-0 bg-white flex items-center justify-center z-10"
    >
      <div class="text-gray-400 text-sm font-medium">
        Загрузка стилей...
      </div>
    </div>
    <iframe
      ref="previewFrameRef"
      class="w-full h-full border-0"
      :class="{ 'opacity-50': !stylesLoaded }"
      title="Preview"
    />
  </div>
</template>

<style scoped>
.h-300 {
  height: 300px;
}
.w-full {
  width: 100%;
}
.opacity-50 {
  opacity: 0.5;
}
</style>
