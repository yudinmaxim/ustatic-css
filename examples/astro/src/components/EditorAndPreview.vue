<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from '@nanostores/vue'

import { getModulesFromClasses, getStyleLinks, type IStyleLink } from 'ustatic-css/scripts'
import type { IConfig } from '@utypes/interface'
import { UCodeEditor } from '@ui-kit'
import { appStore, setHtmlCode, setLoadedModules } from '../stores/app'

// Используем useStore для реактивности
const $appState = useStore(appStore)

const previewFrameRef = ref<HTMLIFrameElement | null>(null)
const stylesLoaded = ref(false)

// Получаем config и htmlCode из хранилища
const config = computed(() => $appState.value?.config)
const htmlCode = computed({
  get: () => $appState.value?.htmlCode || '',
  set: (value: string) => setHtmlCode(value)
})

// Генерация контента для iframe с изолированными стилями
const generateFrameContent = async (config: IConfig): Promise<string> => {
  const { type, modules, classesInput } = config

  console.log('[EditorAndPreview] generateFrameContent config:', config)

  // Определяем модули для загрузки
  let modulesToLoad: string[] = []

  if (type === 'modules') {
    modulesToLoad = modules
  } else if (type === 'classes') {
    modulesToLoad = getModulesFromClasses(classesInput)
  }

  console.log('[EditorAndPreview] modulesToLoad:', modulesToLoad)

  // Получаем ссылки на CSS файлы
  const links = await getStyleLinks({
    modules: modulesToLoad,
    mode: 'ssr',
    basePath: '/ustatic-css'
  })

  console.log('[EditorAndPreview] style links:', links)

  // Генерируем HTML для iframe
  const styleLinks = links
    .map((link: IStyleLink) => `<link rel="${link.rel}" type="${link.type}" href="${link.href}">`)
    .join('\n    ')

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
  ${styleLinks}
</head>
<body>
  ${htmlCode.value}
</body>
</html>
  `.trim()

  console.log('[EditorAndPreview] generated HTML:', html)
  return html
}

// Обновление контента iframe
const updateFrameContent = async () => {
  const currentConfig = config.value

  console.log('[EditorAndPreview] updateFrameContent called', {
    hasRef: !!previewFrameRef.value,
    hasConfig: !!currentConfig,
    config: currentConfig
  })

  if (!previewFrameRef.value || !currentConfig) {
    console.error('[EditorAndPreview] Missing ref or config')
    return
  }

  try {
    const content = await generateFrameContent(currentConfig)
    const frameWindow = previewFrameRef.value.contentWindow
    const frameDoc = frameWindow?.document

    console.log('[EditorAndPreview] frameDoc:', frameDoc)
    console.log('[EditorAndPreview] frameWindow:', frameWindow)

    if (frameDoc) {
      frameDoc.open()
      frameDoc.write(content)
      frameDoc.close()

      // Ждём загрузки стилей в iframe
      frameWindow?.addEventListener('load', () => {
        console.log('[EditorAndPreview] iframe loaded')
        const modulesToLoad = currentConfig.type === 'modules'
          ? currentConfig.modules
          : getModulesFromClasses(currentConfig.classesInput)
        setLoadedModules(modulesToLoad)
        stylesLoaded.value = true
      }, { once: true })

      // Устанавливаем таймаут на случай если load не сработает
      setTimeout(() => {
        console.log('[EditorAndPreview] timeout - marking as loaded')
        const modulesToLoad = currentConfig.type === 'modules'
          ? currentConfig.modules
          : getModulesFromClasses(currentConfig.classesInput)
        setLoadedModules(modulesToLoad)
        stylesLoaded.value = true
      }, 1000)
    } else {
      console.error('[EditorAndPreview] No frame document found')
    }
  } catch (error) {
    console.error('[EditorAndPreview] Failed to update frame content:', error)
  }
}

// Следим за изменениями HTML кода
watch(() => htmlCode.value, () => {
  updateFrameContent()
})

// Следим за изменениями конфигурации
watch(() => config.value, () => {
  updateFrameContent()
}, { deep: true })

// Инициализация
onMounted(() => {
  updateFrameContent()
})
</script>

<template>
  <div class="grid grid-columns--1fr-1fr gap-2">
    <!-- Редактор кода -->
    <div class="p-4 bg-gray-50 rounded-base border border-gray-200">
      <h3 class="text-lg font-semibold mb-4">Редактор кода</h3>
      <UCodeEditor
        v-model="htmlCode"
        lang="html"
      />
    </div>

    <!-- Предпросмотр с изоляцией стилей через iframe -->
    <div class="p-4 bg-gray-50 rounded-base border border-gray-200">
      <h3 class="text-lg font-semibold mb-4">Предпросмотр</h3>
      <p class="text-sm text-gray-600 mb-2">
        Стили изолированы через iframe - загружаются только выбранные модули
      </p>
      <div class="mt-4 border border-gray-300 rounded-base bg-white overflow-hidden">
        <iframe
          ref="previewFrameRef"
          class="w-full h-300 border-0"
          title="Preview"
          :class="{ 'opacity-50': !stylesLoaded }"
        />
      </div>
      <div v-if="!stylesLoaded" class="text-gray-400 text-center text-sm mt-2">
        Загрузка стилей...
      </div>
    </div>
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
