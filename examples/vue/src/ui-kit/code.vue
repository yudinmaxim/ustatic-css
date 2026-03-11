<script setup lang="ts">
import {
  computed
} from 'vue'
import hljs from 'highlight.js/lib/core'

export interface IProps {
  code: string,
  lang?: string
}

const {
  code,
  lang = 'typescript'
} = defineProps<IProps>()

const highlightedCode = computed(() => {
  try {
    return hljs.highlight(code, { language: lang }).value
  } catch {
    return hljs.highlightAuto(code).value
  }
})

</script>

<template>
  <pre
    class="m-0 p-4 bg-white rounded-base border border-gray-200 overflow-x-auto text-sm"
  ><code v-html="highlightedCode" /></pre>
</template>