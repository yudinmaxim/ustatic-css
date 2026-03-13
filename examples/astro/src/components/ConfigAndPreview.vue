<script setup lang="ts">
import { onMounted } from 'vue'
import { useStore } from '@nanostores/vue'

import type { IConfig } from '@utypes/interface'
import { appStore, setConfig } from '../stores/app'
import ConfigurationPanel from './ConfigurationPanel.vue'
import InitCodePreview from './InitCodePreview.vue'

// Используем useStore для реактивности
const $appState = useStore(appStore)

// Инициализируем состояние из хранилища или используем дефолтное
const initConfig: IConfig = {
  type: 'modules',
  modules: [ 'flexbox', 'spacing', 'typography' ],
  classesInput: 'flex, p-4, text-lg',
}

onMounted(() => {
  // Инициализируем хранилище если оно пустое
  if (!$appState.value?.config) {
    setConfig(initConfig)
  }
})

const handleApply = (newConfig: IConfig) => {
  setConfig(newConfig)
}

const handleReset = () => {
  setConfig(initConfig)
}
</script>

<template>
  <div class="grid grid-columns--1fr-2fr gap-2">
    <ConfigurationPanel
      :model-value="$appState?.config"
      @apply="handleApply"
      @reset="handleReset"
    />

    <InitCodePreview
      :config="$appState?.config"
    />
  </div>
</template>
