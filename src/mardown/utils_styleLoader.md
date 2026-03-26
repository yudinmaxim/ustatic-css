# styleLoader.ts

Утилита для динамической загрузки CSS модулей uStatic CSS в браузере или на сервере (SSR).

## Основные функции

### getModulesFromClasses

Определяет список CSS модулей на основе переданных классов.

```typescript
import { getModulesFromClasses } from 'ustatic-css'

const modules = getModulesFromClasses('flex grid text-center')
// Результат: ['flexbox', 'display', 'typography']
```

**Параметры:**
- `classes` — строка или массив классов через запятую

**Возвращает:** массив названий модулей

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
// [{ href: '/assets/ustatic-css/modules/flexbox.css', rel: 'stylesheet', type: 'text/css' }, ...]
```

**Параметры:**
- `options.classes` — классы для определения модулей
- `options.modules` — явный список модулей
- `options.mode` — режим работы: `'ssr'` | `'browser'`
- `options.basePath` — базовый путь для CSS файлов

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

## Карта классов (classMap)

Внутренняя карта соответствия классов модулям:

| Префикс класса | Модуль |
|----------------|--------|
| `flex`, `flex-column`, `items`, `justify` и т.д. | `flexbox` |
| `block`, `inline`, `overflow` и т.д. | `display` |
| `align-*` | `align` |
| `position`, `top`, `right`, `bottom`, `left` | `position` |
| `border`, `rounded`, `divider` | `border` |
| `text`, `font`, `leading` | `typography` |
| `m-`, `p-`, `mx-`, `mt-` и т.д. | `spacing` |
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
- Использует динамический `import(...?url)` для получения URL от Vite
- Автоматически добавляет кэширующий параметр `?nocache=...`

### SSR режим
- Возвращает пути относительно папки `public`
- Используется для серверного рендеринга

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
