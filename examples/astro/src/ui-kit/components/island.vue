<script setup lang="ts">

export interface IProps {
  title?: string
}

defineOptions({
  name: 'UIsland'
})

const {
  title
} = defineProps<IProps>()
</script>

<template>
  <div class="p-4 bg-gray-50 rounded-base border border-gray-200">
    <slot name="title">
      <h3 class="text-lg font-semibold mb-4">
        {{ title }}
      </h3>
    </slot>

    <slot />
  </div>
</template>
