<template>
  <div class="mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold m-0">
        Редактор кода
      </h3>
      <button
        class="px-2 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300 transition-colors"
        @click="copyCode"
      >
        Копировать
      </button>
    </div>
    <div class="relative">
      <editor-content
        v-if="editor"
        :editor="editor"
        class="w-full h-64 p-4 border border-gray-300 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'
import { createLowlight } from 'lowlight'

// Импортируем языки для подсветки синтаксиса
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

const lowlight = createLowlight()
// Регистрируем языки в lowlight
lowlight.register('html', xml)
lowlight.register('css', css)
lowlight.register('javascript', javascript)
lowlight.register('typescript', typescript)

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// Создаем ref для редактора
const editor = ref<Editor>()

onMounted(() => {
  editor.value = new Editor({
    content: props.modelValue,
    extensions: [
      StarterKit.configure({
        codeBlock: false, // Отключаем стандартный codeBlock
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: 'html', // Устанавливаем HTML как язык по умолчанию
      }),
    ],
    onUpdate: ({ editor }) => {
      // Обновляем значение модели при изменении содержимого редактора
      emit('update:modelValue', editor.getHTML())
    },
  })
})

// Обновляем содержимое редактора при изменении пропса
watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value) {
      editor.value.commands.setContent(newValue)
    }
  }
)

// Функция копирования кода
const copyCode = async () => {
  try {
    const content = editor.value?.getHTML() || ''
    await navigator.clipboard.writeText(content)
    // Можно добавить уведомление об успешном копировании
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}

// Уничтожаем редактор при размонтировании компонента
onUnmounted(() => {
  editor.value?.destroy()
})
</script>

<style>
/* Стили для редактора */
.tiptap {
  outline: none;
  height: 100%;
}

.tiptap pre {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  color: #333;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
}

.tiptap pre code {
  background: none;
  color: inherit;
  font-size: 0.8rem;
  padding: 0;
}

.tiptap pre .hljs-comment,
.tiptap pre .hljs-quote {
  color: #999;
}

.tiptap pre .hljs-variable,
.tiptap pre .hljs-template-variable,
.tiptap pre .hljs-tag,
.tiptap pre .hljs-name,
.tiptap pre .hljs-selector-id,
.tiptap pre .hljs-selector-class,
.tiptap pre .hljs-regexp,
.tiptap pre .hljs-deletion {
  color: #c92c2c;
}

.tiptap pre .hljs-number,
.tiptap pre .hljs-built_in,
.tiptap pre .hljs-builtin-name,
.tiptap pre .hljs-literal,
.tiptap pre .hljs-type,
.tiptap pre .hljs-params,
.tiptap pre .hljs-meta,
.tiptap pre .hljs-link {
  color: #c92c2c;
}

.tiptap pre .hljs-attribute {
  color: #c92c2c;
}

.tiptap pre .hljs-string,
.tiptap pre .hljs-symbol,
.tiptap pre .hljs-bullet,
.tiptap pre .hljs-addition {
  color: #2f9c0a;
}

.tiptap pre .hljs-title,
.tiptap pre .hljs-section {
  color: #4d4d4d;
}

.tiptap pre .hljs-keyword,
.tiptap pre .hljs-selector-tag {
  color: #2f9c0a;
}

.tiptap pre .hljs-emphasis {
  font-style: italic;
}

.tiptap pre .hljs-strong {
  font-weight: bold;
}
</style>