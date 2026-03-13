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
  name: 'UTag'
})

const {
  label,
  size = 'default',
  variant = 'default',
  classes
} = defineProps<IProps>()

const { variantStyle, sizeStyle } = useStyle()

const slots = useSlots()
const haveSlot = computed(() => !!slots.default)

const stateClasses = computed(() => {
  const defaultStyle = 'rounded-base font-medium h-fit pointer-events-none'
  return `${defaultStyle} ${sizeStyle(size)} ${variantStyle(variant)} ${classes ?? ''} u-button`
})
</script>

<template>
  <span
    :class="stateClasses"
  >
    <slot v-if="haveSlot" />
    <template v-else>
      {{ label }}
    </template>
  </span>
</template>
