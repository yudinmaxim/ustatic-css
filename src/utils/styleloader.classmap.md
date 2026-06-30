# Карта классов (classMap)

Внутренняя карта соответствия CSS-классов модулям uStatic CSS. Используется для автоматического определения, какие модули нужно загрузить на основе используемых классов.

## Структура карты

```typescript
export const classMap: Record<string, string> = {
  // flexbox
  'flex': 'flexbox',
  'flex-column': 'flexbox',
  'flex-row': 'flexbox',
  'flex-wrap': 'flexbox',
  'flex-nowrap': 'flexbox',
  'items': 'flexbox',
  'justify': 'flexbox',
  'content': 'flexbox',
  'self': 'flexbox',
  'shrink': 'flexbox',
  'grow': 'flexbox',
  'order': 'flexbox',

  // display
  'inline': 'display',
  'block': 'display',
  'inline-block': 'display',
  'table': 'display',
  'table-cell': 'display',
  'overflow': 'display',

  // ... и так далее
}
```

## Соответствие классов модулям

| Категория | Классы | Модуль |
|-----------|--------|--------|
| **Flexbox** | `flex`, `flex-column`, `flex-row`, `flex-wrap`, `flex-nowrap`, `items-*`, `justify-*`, `content-*`, `self-*`, `shrink-*`, `grow-*`, `order-*` | `flexbox` |
| **Display** | `inline`, `block`, `inline-block`, `table`, `table-cell`, `overflow-*` | `display` |
| **Align** | `align-*` | `align` |
| **Position** | `position-*`, `top-*`, `right-*`, `bottom-*`, `left-*` | `position` |
| **Border** | `border-*`, `rounded-*`, `divider-*` | `border` |
| **Typography** | `text-*`, `font-*`, `leading-*`, `tracking-*` | `typography` |
| **Spacing** | `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`, `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*` | `spacing` |
| **Sizing** | `w-*`, `h-*`, `min-w-*`, `min-h-*`, `max-w-*`, `max-h-*` | `sizing` |
| **Background** | `bg-*` | `bg` |
| **Effects** | `shadow-*`, `opacity-*` | `effects` |
| **Interactivity** | `cursor-*`, `pointer-events-*`, `resize-*` | `interactivity` |
| **Scroll** | `scroll-*` | `scroll` |
| **Animations** | `animate-*` | `animations` |
| **Outline** | `outline-*` | `outline` |
| **Grid** | `grid-*`, `col-*`, `row-*` | `grid` |
| **Filters** | `filter-*`, `blur-*`, `brightness-*`, `contrast-*`, `grayscale-*`, `hue-rotate-*`, `invert-*`, `saturate-*`, `sepia-*` | `filters` |
| **Hide/Show** | `hidden-*`, `show-*` | `hidden` |

## Использование

Карта используется функцией `getModulesFromClasses` для определения нужных модулей:

```typescript
import { getModulesFromClasses } from 'ustatic-css'

// На основе классов определяются модули
const modules = getModulesFromClasses('flex items-center justify-between')
// Результат: ['flexbox']
```

## Как это работает

1. Функция принимает строку классов или массив классов
2. Для каждого класса проверяется точное соответствие в карте
3. Если точного соответствия нет, проверяется префикс (первая часть до дефиса)
4. Результат — уникальный набор модулей
