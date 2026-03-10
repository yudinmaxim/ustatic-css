<script lang="ts">
  interface Module {
    id: string
    name: string
  }

  // Список доступных модулей
  const modules: Module[] = [
    { id: 'typography', name: 'Типографика' },
    { id: 'spacing', name: 'Отступы' },
    { id: 'sizing', name: 'Размеры' },
    { id: 'flexbox', name: 'Flexbox' },
    { id: 'grid', name: 'Grid' },
    { id: 'border', name: 'Границы' },
    { id: 'background', name: 'Фон' },
    { id: 'position', name: 'Позиционирование' }
  ]

  // Активный модуль
  let activeModule = 'typography'

  // Функция выбора модуля
  function selectModule(moduleId: string) {
    activeModule = moduleId
    // Здесь можно добавить логику для загрузки примеров модуля
  }
</script>

<nav class="mb-6">
  <h3 class="text-lg font-semibold mb-3">
    Модули
  </h3>
  <ul class="list-none p-0 m-0">
    {#each modules as module (module.id)}
      <li class="mb-1">
        <a
          href="/"
          class="block p-2 rounded text-gray-700 no-underline hover:bg-gray-100 transition-colors"
          class:bg-blue-500={activeModule === module.id}
          class:text-white={activeModule === module.id}
          class:hover:bg-blue-600={activeModule === module.id}
          on:click|preventDefault={() => selectModule(module.id)}
        >
          {module.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
