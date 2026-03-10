<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('css', css)
hljs.registerLanguage('javascript', javascript)

const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()

const localValue = ref(props.modelValue || '')
const showPreview = ref(false)
const highlighted = ref('')
const preEl = ref<HTMLPreElement | null>(null)
const taEl = ref<HTMLTextAreaElement | null>(null)

let hiTimer: number | undefined

const doHighlight = () => {
  try {
    highlighted.value = hljs.highlight(localValue.value, { language: 'html' }).value
  } catch {
    highlighted.value = hljs.highlightAuto(localValue.value).value
  }
}

const scheduleHighlight = () => {
  if (hiTimer) window.clearTimeout(hiTimer)
  hiTimer = window.setTimeout(doHighlight, 60)
}

const onInput = () => {
  scheduleHighlight()
}

const onKeyDown = (e: KeyboardEvent) => {
  const ta = taEl.value
  if (!ta) return

  // Tab / Shift+Tab — добавление/удаление отступов
  if (e.key === 'Tab') {
    e.preventDefault()
    const start = ta.selectionStart
    const end = ta.selectionEnd
    const value = localValue.value

    // Несколько строк — сдвигаем каждую
    if (start !== end && value.slice(start, end).includes('\n')) {
      const before = value.slice(0, start)
      const selection = value.slice(start, end)
      const after = value.slice(end)

      if (e.shiftKey) {
        const replaced = selection.replace(/(^|\n)(\t| {2})/g, (_m, p1) => p1)
        const diff = selection.length - replaced.length
        localValue.value = before + replaced + after
        requestAnimationFrame(() => {
          ta.selectionStart = start
          ta.selectionEnd = end - diff
        })
      } else {
        const replaced = selection.replace(/(^|\n)/g, '$1  ')
        const diff = replaced.length - selection.length
        localValue.value = before + replaced + after
        requestAnimationFrame(() => {
          ta.selectionStart = start
          ta.selectionEnd = end + diff
        })
      }
      return
    }

    // Одна позиция — вставляем два пробела
    const insert = '  '
    localValue.value = value.slice(0, start) + insert + value.slice(end)
    requestAnimationFrame(() => {
      ta.selectionStart = ta.selectionEnd = start + insert.length
    })
    return
  }

  // Автовставка парных кавычек
  if (e.key === '"' || e.key === '\'') {
    const ta = taEl.value
    if (!ta) return
    if (ta.selectionStart === ta.selectionEnd) {
      e.preventDefault()
      const q = e.key
      const start = ta.selectionStart
      const value = localValue.value
      localValue.value = value.slice(0, start) + q + q + value.slice(start)
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + 1
      })
    }
    return
  }

  // Перенос строки — сохраняем текущую глубину отступа
  if (e.key === 'Enter') {
    const start = ta.selectionStart
    const value = localValue.value
    const lineStart = value.lastIndexOf('\n', start - 1) + 1
    const line = value.slice(lineStart, start)
    const indent = (line.match(/^(\s+)/)?.[1]) || ''
    e.preventDefault()
    localValue.value = value.slice(0, start) + '\n' + indent + value.slice(start)
    requestAnimationFrame(() => {
      const pos = start + 1 + indent.length
      ta.selectionStart = ta.selectionEnd = pos
    })
    return
  }
}

const syncScroll = () => {
  if (!preEl.value || !taEl.value) return
  preEl.value.scrollTop = taEl.value.scrollTop
  preEl.value.scrollLeft = taEl.value.scrollLeft
}

// Синхронизация при внешних изменениях
watch(
  () => props.modelValue,
  (v) => {
    if (v !== localValue.value) {
      localValue.value = v || ''
      scheduleHighlight()
    }
  }
)

// Эмит изменений наружу (всегда отдаем ЧИСТЫЙ HTML как строку)
watch(
  localValue,
  (v) => emit('update:modelValue', v),
  { immediate: true }
)

onMounted(() => {
  doHighlight()
})

onBeforeUnmount(() => {
  if (hiTimer) window.clearTimeout(hiTimer)
})

const toggleView = () => {
  showPreview.value = !showPreview.value
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(localValue.value || '')
  } catch (err) {
    console.error('Ошибка копирования:', err)
  }
}
</script>

<template>
  <div class="mb-6">
    <div class="flex justify-between items-center mb-3">
      <h3 class="text-lg font-semibold m-0">
        Редактор HTML исходников
      </h3>
      <button
        class="px-2 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300"
        @click="copyCode"
      >
        Копировать
      </button>
    </div>

    <div class="relative">
      <!-- Редактор исходника с подсветкой синтаксиса (overlay: подсветка + textarea) -->
      <div class="code-editor w-full h-64 border border-gray-300 rounded text-sm">
        <pre
          ref="preEl"
          class="code-highlight hljs"
          aria-hidden="true"
          v-html="highlighted"
        />
        <textarea
          ref="taEl"
          v-model="localValue"
          class="code-input"
          spellcheck="false"
          @scroll="syncScroll"
          @input="onInput"
          @keydown="onKeyDown"
        />
      </div>
    </div>
  </div>
</template>

<style>
/* Контейнер overlay: подсветка (снизу) + textarea (сверху) */
.code-editor {
  position: relative;
  overflow: hidden;
  border-radius: 0.375rem;
}

/* Совпадающие метрики, чтобы синхронизировать прокрутку */
.code-editor .code-highlight,
.code-editor .code-input {
  position: absolute;
  inset: 0;
  margin: 0;
  padding: 1rem 1rem;
  line-height: 1.4;
  font-family: 'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 12.5px;
  white-space: pre-wrap;
  word-break: normal;
  overflow: auto;
}

/* Слой подсветки */
.code-editor .code-highlight {
  background: #1e1e1e;
  color: #abb2bf;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

/* Слой ввода: текст прозрачный, рисуем цвет через тень, чтобы видеть курсор */
.code-editor .code-input {
  background: transparent;
  border: 0;
  outline: none;
  resize: none;
  color: transparent;
  -webkit-text-fill-color: transparent;
  caret-color: #ffffff;
  text-shadow: none;
  z-index: 1;
}

/* Тёмная тема для hljs */
.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;
  background: #1e1e1e;
  color: #abb2bf;
}
.hljs-comment,
.hljs-quote { color: #5c6370; font-style: italic; }
.hljs-doctag,
.hljs-keyword,
.hljs-formula { color: #c678dd; }
.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst { color: #e06c75; }
.hljs-literal { color: #56b6c2; }
.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string { color: #98c379; }
.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number { color: #d19a66; }
.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta { color: #61aeee; }
.hljs-built_in,
.hljs-title,
.hljs-class .hljs-title { color: #e6c07b; }
.hljs-emphasis { font-style: italic; }
.hljs-strong { font-weight: 700; }
.hljs-link { text-decoration: underline; }

/* Стили предпросмотра */
.preview :where(p, h1, h2, h3, h4, h5, h6, ul, ol, pre, code, blockquote) {
  margin: 0.5rem 0;
}

.preview pre {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  color: #333;
  font-family: 'JetBrainsMono', monospace;
  padding: 0.75rem 1rem;
  overflow: auto;
}

.preview code {
  font-family: 'JetBrainsMono', monospace;
}
</style>
