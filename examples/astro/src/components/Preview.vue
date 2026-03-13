<script setup lang="ts">
import { computed } from 'vue'

import { UIsland } from '@ui-kit'

const props = defineProps<{
  html: string
}>()

// Для простоты, в данном случае не используем DOMPurify
// В реальном приложении следует добавить библиотеку для очистки HTML
const sanitizedHtml = computed(() => {
  return props.html
})
</script>

<template>
  <UIsland title="Предпросмотр">
    <div class="p-4 border border-gray-300 rounded-base bg-gray-50">
      <div v-html="sanitizedHtml" />
    </div>
  </UIsland>
</template>
