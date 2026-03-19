<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  backgroundClasses: string
  textClasses: string
  shade: string
}>()

const copied = ref(false)
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
    class="color-swatch flex flex-col items-center cursor-pointer relative rounded-lg"
    :class="backgroundClasses"
    @click="copyToClipboard"
  >
    <div class="color-swatch__content w-full h-12 flex items-center justify-center relative">
      <span class="color-swatch__shade text-xs font-semibold" :class="textClasses">{{ shade }}</span>
      <div class="color-swatch__tooltip">
        <code>{{ backgroundClasses }}</code>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="copied" class="color-swatch__toast">
        ✓ Скопировано
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
@import 'ustatic-css/utils/token';

.color-swatch {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: visible;
}

.color-swatch:hover {
  transform: translateY(calc(-1 * token('base.step.0d5')));
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
  z-index: 20;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.color-swatch__content:hover .color-swatch__tooltip {
  opacity: 1;
  visibility: visible;
}

.color-swatch__toast {
  position: absolute;
  top: calc(-1 * token('base.step.9'));
  left: 50%;
  transform: translateX(-50%);
  padding: token('base.step.1d5') token('base.step.3');
  background-color: var(--vp-c-brand);
  color: white;
  font-size: token('base.text.size.xs');
  font-weight: 500;
  border-radius: token('base.border.radius.md');
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 30;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.15s ease-in;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(token('base.step.2'));
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(calc(-1 * token('base.step.1')));
}
</style>