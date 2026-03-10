<script lang="ts">
  interface Props {
    title: string
    code: string
  }

  let { title, code }: Props = $props()

  let showCode = $state(false)

  function toggleCode() {
    showCode = !showCode
  }
</script>

<div class="mb-6 border border-gray-200 rounded overflow-hidden">
  <div class="flex justify-between items-center p-3 bg-gray-50 border-b border-gray-200">
    <h4 class="text-md font-semibold m-0">
      {title}
    </h4>
    <button
      class="px-2 py-1 rounded text-sm bg-gray-200 hover:bg-gray-300 transition-colors"
      on:click={toggleCode}
    >
      {showCode ? 'Скрыть код' : 'Показать код'}
    </button>
  </div>

  <div class="p-4">
    <div class="mb-4">
      <slot name="preview" />
    </div>

    {#if showCode}
      <div class="mt-4">
        <pre class="m-0 p-4 bg-gray-100 rounded overflow-x-auto"><code>{code}</code></pre>
      </div>
    {/if}
  </div>
</div>
