<script setup lang="ts">
import {
  ref
} from 'vue'
import { UIsland, UButton, UCode } from '@ui-kit'

export interface IProps {
  tip?: string
  useTip?: boolean
  lang?: 'html' | 'javascript' | 'typescript'
}

defineOptions({
  name: 'UCodeEditor'
})

const {
  tip,
  useTip = false,
  lang
} = defineProps<IProps>()

const model = defineModel<string>()

const copied = ref(false)

const updateCode = (code?: string) => {
  copied.value = false

  model.value = code
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(model.value || '')
    copied.value = true
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}
</script>

<template>
  <UIsland>
    <template #title>
      <div class="flex flex-row justify-between">
        <h3 class="text-lg font-semibold text-gray-800 m-0">
          Редактор HTML исходников
        </h3>
        <UButton
          size="small"
          @click="copyCode"
        >
          {{ copied ? 'Скопировано!' : 'Копировать' }}
        </UButton>
      </div>
    </template>

    <div class="flex flex-col gap-4">
      <div class="rounded-base border border-gray-200 mt-4">
        <UCode
          :modelValue="model"
          :lang="lang"
          @update:model-value="updateCode"
        />
      </div>
      <div v-if="useTip" class="p-3 bg-blue-50 border border-blue-200 rounded-base">
        <p class="text-sm text-blue-800 m-0">
          <strong>💡 Совет:</strong> {{ tip }}
        </p>
      </div>
    </div>
  </UIsland>
</template>
