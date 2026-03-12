<script setup lang="ts">
import {
  computed
} from 'vue'
import hljs from 'highlight.js/lib/core'
import css from 'highlight.js/lib/languages/css'
import html from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

export interface IProps {
  code: string,
  lang?: string
}

defineOptions({
  name: 'UCode'
})

const {
  code,
  lang = 'typescript'
} = defineProps<IProps>()

hljs.registerLanguage('html', html)
hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)

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