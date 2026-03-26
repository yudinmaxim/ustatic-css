<script setup lang="ts">
import { ref } from 'vue'

export interface IProps {
  backgroundClasses: string
  textClasses: string
  shade: string
}
const props = defineProps<IProps>()

const copied = ref(false)
const isHovered = ref(false)
let timeout: ReturnType<typeof setTimeout>

function copyToClipboard() {
  const text = props.backgroundClasses
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}

function handleMouseEnter() {
  isHovered.value = true
}

function handleMouseLeave() {
  isHovered.value = false
}
</script>

<template>
  <div
    class="relative flex items-center justify-center size-24 cursor-pointer rounded-lg hover:lift transition-all"
    :class="backgroundClasses"
    @click="copyToClipboard"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <transition name="fade" mode="out-in">
      <span
        v-if="copied"
        key="copied"
        class="text-xs font-semibold"
        :class="textClasses"
      >
        Скопировано
      </span>
      <span
        v-else-if="isHovered"
        key="classes"
        class="text-xs font-semibold px-1 text-center break-all"
        :class="textClasses"
      >
        {{ backgroundClasses }}
      </span>
      <span
        v-else
        key="shade"
        class="text-xs font-semibold"
        :class="textClasses"
      >
        {{ shade }}
      </span>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
