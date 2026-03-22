<script setup lang="ts">
import {
  computed
} from 'vue'

import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'

export interface IProps {
  lang?: 'html' | 'javascript' | 'typescript'
  readOnly?: boolean
}

defineOptions({
  name: 'UCode'
})

const {
  lang = 'html',
  readOnly
} = defineProps<IProps>()

const langExt = lang === 'html'
  ? html
  : lang === 'javascript'
    ? javascript
    : lang === 'typescript'
      ? javascript
      : html

const extensions = [ langExt(), EditorState.readOnly.of(readOnly) ]

const model = defineModel<string>()

</script>

<template>
  <div class="overflow-y-auto">
    <codemirror
      v-model="model"
      :indentWithTab="true"
      :tabSize="2"
      :extensions="extensions"
    />
  </div>
</template>
