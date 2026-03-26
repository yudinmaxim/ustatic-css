# Загрузка стилей

Утилиты для динамической загрузки CSS модулей uStatic CSS.

## styleLoader.ts

Модуль для динамической загрузки стилей в браузере или на сервере (SSR).

## Основные функции

### getModulesFromClasses

Определяет список CSS модулей на основе переданных классов.

```typescript
import { getModulesFromClasses } from 'ustatic-css'

const modules = getModulesFromClasses('flex grid text-center')
// Результат: ['flexbox', 'display', 'typography']
```

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `classes` | `string \| string[]` | Строка или массив классов |

**Возвращает:** `string[]` — массив названий модулей

### getStyleLinks

Возвращает массив ссылок на CSS файлы для вставки в `<head>`.

```typescript
import { getStyleLinks } from 'ustatic-css'

const links = await getStyleLinks({
  classes: ['flex', 'grid'],
  mode: 'browser', // или 'ssr'
  basePath: '/assets/ustatic-css'
})

// Результат:
// [
//   { href: '/assets/ustatic-css/modules/flexbox.css', rel: 'stylesheet', type: 'text/css' },
//   { href: '/assets/ustatic-css/modules/grid.css', rel: 'stylesheet', type: 'text/css' }
// ]
```

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `options.classes` | `string[]` | Классы для определения модулей |
| `options.modules` | `string[]` | Явный список модулей |
| `options.mode` | `'ssr' \| 'browser'` | Режим работы |
| `options.basePath` | `string` | Базовый путь для CSS файлов |

### loadStyles

Загружает CSS стили динамически, добавляя `<link>` в `<head>` документа.

```typescript
import { loadStyles } from 'ustatic-css'

// Загрузить все стили
await loadStyles()

// Загрузить конкретные модули
await loadStyles({
  modules: ['flexbox', 'grid', 'typography']
})

// Загрузить модули на основе классов
await loadStyles({
  classes: ['flex', 'grid', 'text-center', 'w-64']
})

// С указанием базового пути
await loadStyles({
  basePath: '/assets/ustatic-css'
})
```

**Параметры:**

| Параметр | Тип | Описание |
|----------|-----|----------|
| `options.modules` | `string[]` | Список модулей для загрузки |
| `options.classes` | `string[]` | Классы для определения модулей |
| `options.basePath` | `string` | Базовый путь для CSS файлов |
| `options.mode` | `'ssr' \| 'browser'` | Режим работы |

## Карта классов (classMap)

Внутренняя карта соответствия классов модулям:

```typescript
export const classMap: Record<string, string> = {
  // flexbox
  'flex': 'flexbox',
  'flex-column': 'flexbox',
  'items-start': 'flexbox',
  'items-center': 'flexbox',
  'items-end': 'flexbox',
  'justify-start': 'flexbox',
  'justify-center': 'flexbox',
  'justify-end': 'flexbox',
  
  // display
  'inline': 'display',
  'block': 'display',
  'inline-block': 'display',
  'overflow-hidden': 'display',
  
  // typography
  'text-sm': 'typography',
  'text-lg': 'typography',
  'font-bold': 'typography',
  
  // spacing
  'm-4': 'spacing',
  'p-4': 'spacing',
  'mt-2': 'spacing',
  
  // и так далее
}
```

### Соответствие классов модулям

| Префикс класса | Модуль |
|----------------|--------|
| `flex`, `flex-column`, `items`, `justify` | `flexbox` |
| `block`, `inline`, `overflow` | `display` |
| `align-*` | `align` |
| `position`, `top`, `right`, `bottom`, `left` | `position` |
| `border`, `rounded`, `divider` | `border` |
| `text`, `font`, `leading` | `typography` |
| `m-`, `p-`, `mx-`, `mt-` | `spacing` |
| `w-`, `h-`, `min-w-`, `max-h-` | `sizing` |
| `bg-*` | `bg` |
| `shadow`, `opacity` | `effects` |
| `cursor`, `resize` | `interactivity` |
| `scroll-*` | `scroll` |
| `animate-*` | `animations` |
| `outline` | `outline` |
| `grid`, `col`, `row` | `grid` |
| `filter`, `blur`, `grayscale` | `filters` |
| `hide`, `show` | `hide` |

## Режимы работы

### Browser режим

Использует динамический `import(...?url)` для получения URL от Vite:

```typescript
const links = await getStyleLinks({
  classes: ['flex', 'grid'],
  mode: 'browser',
  basePath: '/assets/ustatic-css'
})
```

Автоматически добавляет кэширующий параметр:
```
/assets/ustatic-css/modules/flexbox.css?nocache=1234567890
```

### SSR режим

Возвращает пути относительно папки `public`:

```typescript
const links = await getStyleLinks({
  classes: ['flex', 'grid'],
  mode: 'ssr',
  basePath: '/assets/ustatic-css'
})

// Результат:
// [{ href: '/assets/ustatic-css/modules/flexbox.css', ... }]
```

## Интерфейсы

```typescript
interface IStyleLoaderOptions {
  modules?: string[]
  classes?: string[]
  basePath?: string
  mode?: 'ssr' | 'browser'
}

interface IStyleLink {
  href: string
  rel: string
  type: string
}
```

## Примеры использования

### В React компоненте

```typescript
import { useEffect } from 'react'
import { loadStyles } from 'ustatic-css'

export function MyComponent() {
  useEffect(() => {
    loadStyles({
      classes: ['flex', 'items-center', 'justify-center']
    })
  }, [])
  
  return (
    <div className="flex items-center justify-center">
      Контент
    </div>
  )
}
```

### В Vue компоненте

```typescript
<script setup>
import { onMounted } from 'vue'
import { loadStyles } from 'ustatic-css'

onMounted(() => {
  loadStyles({
    classes: ['flex', 'grid', 'gap-4']
  })
})
</script>
```

### В Nuxt/Next.js (SSR)

```typescript
// plugins/ustatic-css.ts
import { loadStyles } from 'ustatic-css'

export default defineNuxtPlugin(() => {
  loadStyles({
    mode: 'ssr',
    basePath: '/assets/ustatic-css'
  })
})
```

### Оптимизация загрузки

```typescript
// Загрузить только необходимые модули
await loadStyles({
  modules: ['flexbox', 'grid', 'typography', 'spacing']
})

// Вместо загрузки всех стилей
// Это уменьшит размер загружаемого CSS
```

## См. также

- [SCSS утилиты](../scss/index.md) — утилиты для SCSS
- [Vue плагин](../plugins/vue/index.md) — интеграция с Vue
