<template>
  <div class="mb-6">
    <h3 class="text-lg font-semibold mb-3">
      Предпросмотр
    </h3>
    <div class="min-h-64 p-4 border border-gray-300 rounded bg-gray-50">
      <div v-html="sanitizedHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  html: string
}>()

// Для простоты, в данном случае не используем DOMPurify
// В реальном приложении следует добавить библиотеку для очистки HTML
const sanitizedHtml = computed(() => {
  return props.html
})
</script>