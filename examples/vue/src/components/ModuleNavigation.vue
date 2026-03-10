<template>
  <nav class="mb-6">
    <h3 class="text-lg font-semibold mb-3">
      Модули
    </h3>
    <ul class="list-none p-0 m-0">
      <li
        v-for="module in modules"
        :key="module.id"
        class="mb-1"
      >
        <a
          href="#"
          class="block p-2 rounded text-gray-700 no-underline hover:bg-gray-100 transition-colors"
          :class="{ 'bg-blue-500 text-white hover:bg-blue-600': activeModule === module.id }"
          @click.prevent="selectModule(module.id)"
        >
          {{ module.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Определяем тип для модуля
interface Module {
  id: string
  name: string
}

// Список доступных модулей
const modules = ref<Module[]>([
  { id: 'typography', name: 'Типографика' },
  { id: 'spacing', name: 'Отступы' },
  { id: 'sizing', name: 'Размеры' },
  { id: 'flexbox', name: 'Flexbox' },
  { id: 'grid', name: 'Grid' },
  { id: 'border', name: 'Границы' },
  { id: 'background', name: 'Фон' },
  { id: 'position', name: 'Позиционирование' }
])

// Активный модуль
const activeModule = ref('typography')

// Функция выбора модуля
const selectModule = (moduleId: string) => {
  activeModule.value = moduleId
  // Здесь можно добавить логику для загрузки примеров модуля
}
</script>