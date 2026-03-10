<script setup lang="ts">
import {
  ref,
  computed,
  useSlots
} from 'vue'

export interface IProps {
  label?: string
  size?: 'small' | 'default' | 'big'
  state?: 'active' | 'normal'

  classes?: string | string[]
}

const {
  label,
  size = 'default',
  state = 'normal',
  classes
} = defineProps<IProps>()

const emit = defineEmits<{
  click: []
}>()

const slots = useSlots()
const haveSlot = computed(() => !!slots.default)

const stateClasses = computed(() => {
  let btnClasses = 'rounded font-medium active:pulse h-fit'

  switch (size) {
    case 'small': {
      btnClasses += ' px-2 py-1 text-xs -h'
    } break
    case 'default': {
      btnClasses += ' px-4 py-2 text-sm'
    } break
    case 'big': {
      btnClasses += ' px-6 py-4 text-lg'
    } break
    default: {
      btnClasses += ' px-4 py-2 text-sm'
    }
  }
  switch (state) {
    case 'active': {
      btnClasses += ' bg-blue-500 text-white'
    } break
    case 'normal': {
      btnClasses += ' bg-gray-200 text-gray-700 hover:bg-gray-300'
    } break
    default: {
      btnClasses += ' bg-gray-200 text-gray-700 hover:bg-gray-300'
    }
  }

  return btnClasses + ' ' + (classes ?? '')
})

const click = () => {
  if (state === 'disable') return

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