# Vue плагин

Плагин для автоматической загрузки стилей uStatic CSS в Vue приложениях.

## Установка

```typescript
import { ustaticCss } from 'ustatic-css'
import { createApp } from 'vue'

const app = createApp(App)
app.use(ustaticCss)
app.mount('#app')
```

## Параметры плагина

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|----------|
| `autoLoad` | `boolean` | `true` | Автоматически загружать стили при инициализации |
| `modules` | `string[]` | `[]` | Список модулей для загрузки |
| `classes` | `string[]` | `[]` | Список классов для определения модулей |

## Примеры использования

### Базовая инициализация

```typescript
// main.ts
import { createApp } from 'vue'
import { ustaticCss } from 'ustatic-css'
import App from './App.vue'

const app = createApp(App)
app.use(ustaticCss)
app.mount('#app')
```

### С указанием модулей

```typescript
app.use(ustaticCss, {
  modules: ['flexbox', 'grid', 'typography']
})
```

### С указанием классов

```typescript
app.use(ustaticCss, {
  classes: ['flex', 'grid', 'text-center', 'w-64']
})
// Модули определяются автоматически по классам
```

### Отключение автозагрузки

```typescript
app.use(ustaticCss, {
  autoLoad: false
})

// Стили можно загрузить вручную
import { loadStyles } from 'ustatic-css'

loadStyles({
  modules: ['flexbox', 'grid']
})
```

## Как это работает

1. При вызове `app.use(ustaticCss)` плагин проверяет, доступен ли `document` (не SSR)
2. Если `autoLoad: true`, плагин динамически импортирует CSS файлы:
   - `ustatic-index.scss` — основные стили
   - `_ustatic-vars.scss` — CSS переменные (токены)
3. Создаёт `<link>` элементы в `<head>` документа для загрузки стилей

## Использование в компонентах

### Базовое использование

```vue
<template>
  <div class="flex items-center justify-center p-4">
    <button class="bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-600">
      Кнопка
    </button>
  </div>
</template>

<script setup>
// uStatic CSS классы доступны автоматически
</script>
```

### С динамической загрузкой

```vue
<template>
  <div class="flex gap-4">
    <div class="bg-primary-100 p-4 rounded">
      Контент
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { loadStyles } from 'ustatic-css'

onMounted(() => {
  loadStyles({
    classes: ['flex', 'gap-4', 'bg-primary-100', 'rounded']
  })
})
</script>
```

### С переключением темы

```vue
<template>
  <div :class="theme">
    <button @click="toggleTheme">
      Переключить тему
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTokens } from 'ustatic-css'

const theme = ref('light')
const { setCssToken } = useTokens()

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  
  if (theme.value === 'dark') {
    setCssToken('base.color.background', '#1a1a1a')
    setCssToken('base.color.text', '#ffffff')
  } else {
    setCssToken('base.color.background', '#ffffff')
    setCssToken('base.color.text', '#000000')
  }
}
</script>

<style>
.dark {
  --u-base-color-background: #1a1a1a;
  --u-base-color-text: #ffffff;
}
</style>
```

## Интеграция с Nuxt

### В Nuxt 3

```typescript
// plugins/ustatic-css.ts
import { ustaticCss } from 'ustatic-css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ustaticCss, {
    autoLoad: true,
    modules: ['flexbox', 'grid', 'typography']
  })
})
```

### В Nuxt 2

```typescript
// plugins/ustatic-css.js
import Vue from 'vue'
import { ustaticCss } from 'ustatic-css'

Vue.use(ustaticCss, {
  autoLoad: true
})
```

## SSR режим

Для серверного рендеринга используйте режим `ssr`:

```typescript
import { ustaticCss } from 'ustatic-css'

app.use(ustaticCss, {
  autoLoad: false, // Отключаем автозагрузку на сервере
  mode: 'ssr'
})
```

На клиенте загрузите стили:

```typescript
import { loadStyles } from 'ustatic-css'

onMounted(() => {
  loadStyles({
    mode: 'browser'
  })
})
```

## Глобальные методы

Плагин добавляет глобальные методы в экземпляр Vue:

```typescript
// В компоненте
export default {
  mounted() {
    // Загрузить стили
    this.$loadUStaticStyles({
      modules: ['flexbox', 'grid']
    })
    
    // Получить модули по классам
    const modules = this.$getUStaticModules(['flex', 'grid'])
  }
}
```

## Типы

```typescript
interface PluginOptions {
  /** Загружать ли стили автоматически */
  autoLoad?: boolean
  
  /** Список модулей для загрузки */
  modules?: string[]
  
  /** Список классов для определения модулей */
  classes?: string[]
  
  /** Режим работы */
  mode?: 'ssr' | 'browser'
  
  /** Базовый путь для CSS файлов */
  basePath?: string
}
```

## Примеры

### Форма с валидацией

```vue
<template>
  <form class="max-w-md mx-auto p-6 bg-white border rounded-lg">
    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">
        Email
      </label>
      <input 
        type="email" 
        class="w-full px-4 py-2 border rounded focus:outline-none focus:border-primary-500"
        :class="{ 'border-danger': errors.email }"
      >
      <p v-if="errors.email" class="text-danger text-sm mt-1">
        {{ errors.email }}
      </p>
    </div>
    
    <button 
      type="submit" 
      class="w-full bg-primary-500 text-white py-2 rounded hover:bg-primary-600"
    >
      Отправить
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const errors = ref({})
</script>
```

### Модальное окно

```vue
<template>
  <Teleport to="body">
    <div 
      v-if="show" 
      class="fixed inset-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div class="bg-white rounded-lg p-6 max-w-md mx-4">
        <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
        <slot></slot>
        <button 
          @click="show = false"
          class="mt-4 bg-primary-500 text-white px-4 py-2 rounded"
        >
          Закрыть
        </button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const title = ref('Заголовок')
</script>
```

### Адаптивная навигация

```vue
<template>
  <nav class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <a href="/" class="text-xl font-bold">Логотип</a>
        </div>
        
        <!-- Десктопное меню -->
        <div class="hidden md:flex items-center gap-4">
          <a href="/about" class="hover:text-primary-500">О нас</a>
          <a href="/products" class="hover:text-primary-500">Продукты</a>
          <a href="/contact" class="hover:text-primary-500">Контакты</a>
        </div>
        
        <!-- Мобильное меню -->
        <button class="md:hidden cursor-pointer" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Мобильное меню -->
    <div v-show="mobileMenuOpen" class="md:hidden border-t">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="/about" class="block px-3 py-2 hover:bg-gray-50">О нас</a>
        <a href="/products" class="block px-3 py-2 hover:bg-gray-50">Продукты</a>
        <a href="/contact" class="block px-3 py-2 hover:bg-gray-50">Контакты</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
```

## См. также

- [Загрузка стилей](../utils/style-loading/index.md) — styleLoader
- [Работа с токенами](../utils/tokens/index.md) — useTokens, useCssProperties
