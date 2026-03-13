<script setup lang="ts">
import { reactive } from 'vue'

import { getModulesFromClasses } from 'ustatic-css/scripts'
import type { IConfig } from '@utypes/interface'
import ConfigurationPanel from './ConfigurationPanel.vue'
import InitCodePreview from './InitCodePreview.vue'

const config = reactive<IConfig>({
  type: 'modules',
  modules: [ 'flexbox', 'spacing', 'typography' ],
  classesInput: 'flex, p-4, text-lg',
})

const handleApply = (newConfig: IConfig) => {
  Object.assign(config, newConfig)
}

const handleReset = () => {
  config.type = 'modules'
  config.modules = [ 'flexbox', 'spacing', 'typography' ]
  config.classesInput = 'flex, p-4, text-lg'
}
</script>

<template>
  <div class="grid grid-columns--1fr-2fr gap-2">
    <ConfigurationPanel
      :model-value="config"
      @apply="handleApply"
      @reset="handleReset"
    />

    <InitCodePreview
      :config="config"
    />
  </div>
</template>
