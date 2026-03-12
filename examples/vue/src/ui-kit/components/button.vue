<script setup lang="ts">
import {
  computed,
  useSlots
} from 'vue'

import type {
  IComponentBase
} from '@utypes/interface'

import {
  useStyle
} from '@ui-kit/utils'

export interface IProps extends IComponentBase {
  label?: string
}

defineOptions({
  name: 'UButton'
})

const {
  label,
  size = 'default',
  variant = 'default',
  classes
} = defineProps<IProps>()

const emit = defineEmits<{
  click: []
}>()

const { variantStyle, sizeStyle } = useStyle()

const slots = useSlots()
const haveSlot = computed(() => !!slots.default)

const stateClasses = computed(() => {
  const defaultStyle = 'rounded-base font-medium active:pulse h-fit'
  return `${defaultStyle} ${sizeStyle(size)} ${variantStyle(variant)} ${classes ?? ''} u-button`
})

const click = () => {
  emit('click')
}
</script>

<template>
  <button
    :class="stateClasses"
    @click="click"
  >
    <slot v-if="haveSlot" />
    <template v-else>
      {{ label }}
    </template>
  </button>
</template>