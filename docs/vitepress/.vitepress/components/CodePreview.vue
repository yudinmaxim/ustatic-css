<script setup lang="ts">
// Простой компонент-обёртка для превью HTML-кода
// Принимает содержимое через слот и отображает его
</script>

<template>
  <div class="code-preview">
    <div class="preview-result">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.code-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
  overflow: hidden;
}

.preview-result {
  padding: 1.5rem;
  background-color: var(--vp-c-bg);
}
</style>
