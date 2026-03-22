<script setup lang="ts">
import { ref } from 'vue'

export interface IProps {
  backgroundClasses: string
  textClasses: string
  shade: string
}
const props = defineProps<IProps>()

const copied = ref(false)
const isTooltipVisible = ref(false)
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
</script>

<template>
  <div
    class="color-swatch flex flex-col items-center cursor-pointer relative rounded-lg hover-lift"
    :class="backgroundClasses"
    @click="copyToClipboard"
  >
    <div class="color-swatch__content w-full h-12 flex items-center justify-center relative">
      <div class="color-swatch__text-container relative w-full h-full flex items-center justify-center">
        <transition name="fade" mode="out-in">
          <span
            v-if="!copied"
            key="shade"
            class="color-swatch__shade text-xs font-semibold absolute"
            :class="textClasses"
          >
            {{ shade }}
          </span>
          <span
            v-else
            key="copied"
            class="color-swatch__copied text-xs font-semibold absolute"
            :class="textClasses"
          >
            Скопировано
          </span>
        </transition>
      </div>
      <div 
        class="color-swatch__tooltip tooltip-hidden"
        :class="{ 'tooltip-visible': isTooltipVisible }"
        @mouseenter="isTooltipVisible = true"
        @mouseleave="isTooltipVisible = false"
      >
        <span>{{ backgroundClasses }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import 'ustatic-css/utils/token';

.color-swatch {
  overflow: visible;
}

.color-swatch__text-container {
  // Ensure the container doesn't affect layout
  position: relative;
  width: 100%;
  height: 100%;
}

.color-swatch__shade,
.color-swatch__copied {
  // Center both absolutely positioned spans
  left: 50%;
  transform: translateX(-50%);
}

.color-swatch__tooltip {
  position: absolute;
  bottom: calc(100% + token('base.step.2'));
  left: 50%;
  transform: translateX(-50%);
  padding: token('base.step.1d5') token('base.step.3');
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: token('base.border.radius.md');
  font-size: token('base.text.size.xs');
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>