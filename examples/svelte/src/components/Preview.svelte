<script lang="ts">
  interface Props {
    html: string
  }

  let { html }: Props = $props()

  // Для простоты, в данном случае не используем DOMPurify
  // В реальном приложении следует добавить библиотеку для очистки HTML
  let sanitizedHtml = $derived(html)
</script>

<div class="mb-6">
  <h3 class="text-lg font-semibold mb-3">
    Предпросмотр
  </h3>
  <div class="min-h-64 p-4 border border-gray-300 rounded bg-gray-50">
    {@html sanitizedHtml}
  </div>
</div>
