# Документация по утилитарным CSS-классам (актуально для src/css)

## Оглавление
- [Общее описание](#общее-описание)
- [Соглашения и префиксы](#соглашения-и-префиксы)
- [Модули](#модули)
  - [1. Типографика (typography)](#1-типографика-typography)
  - [2. Вертикальное выравнивание (align)](#2-вертикальное-выравнивание-align)
  - [3. Отступы (spacing)](#3-отступы-spacing)
  - [4. Размеры (sizing)](#4-размеры-sizing)
  - [5. Позиционирование (position)](#5-позиционирование-position)
  - [6. Flexbox (flexbox)](#6-flexbox-flexbox)
  - [7. Grid (grid)](#7-grid-grid)
  - [8. Границы и скругления (border)](#8-границы-и-скругления-border)
  - [9. Фон (bg)](#9-фон-bg)
  - [10. Эффекты (effects)](#10-эффекты-effects)
  - [11. Анимации (animations)](#11-анимации-animations)
  - [12. Интерактивность (interactivity)](#12-интерактивность-interactivity)
  - [13. Курсор (cursor)](#13-курсор-cursor)
  - [14. Отображение и переполнение (display)](#14-отображение-и-переполнение-display)
  - [15. Контуры (outline)](#15-контуры-outline)
  - [16. Фильтры (filters)](#16-фильтры-filters)
  - [17. Скроллбары (scroll)](#17-скроллбары-scroll)

## Общее описание
Набор утилитарных CSS-классов, генерируемых на базе токенов дизайн‑системы. Имена и доступные значения строго соответствуют исходникам в src/css.

## Соглашения и префиксы

- Цветовые утилиты используют палитру из токенов: `<palette>` (primary, secondary, success, info, warning, danger, gray-100..900 и др.).
- Псевдосостояния реализуются точечно для отдельных модулей:
  - `hover:bg-<palette>`
  - `hover:text-<palette>`
  - `hover:opacity-<step>`
  - `hover:underline--<palette>`
- Универсальные префиксы типа `focus:`, `md:`, `lg:` для всех классов не генерируются. Адаптивность реализована в модуле hide, см. ниже.
- Имя класса с двоеточием в исходниках экранируется: `.hover\:bg-...`

## Модули

### 1. Типографика (typography)

- Размеры текста (из токенов): `.text-2xs`, `.text-xs`, `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`
- Цвет текста: `.text-<palette>`, `.text-none` (прозрачный)
- Выравнивание текста: `.text-left`, `.text-center`, `.text-right`, `.text-justify`, `.text-start`, `.text-end`
- Вертикальное выравнивание (также доступно как отдельный модуль align): `.text-top`, `.text-middle`, `.text-bottom`, `.text-baseline`, `.text-text-top`, `.text-text-bottom`, `.text-sub`, `.text-super`
- Начертание шрифта: `.font-thin`, `.font-extralight`, `.font-light`, `.font-regular`, `.font-medium`, `.font-semibold`, `.font-bold`, `.font-extrabold`, `.font-black`
- Дополнительно:
  - `.italic`, `.underline`
  - `.text-ellipsis` (text-overflow: ellipsis)
  - `.text-decoration-none`, `.text-style-clear`
  - `.nowrap`, `.pre-wrap`, `.break-word`
  - `.list-style-none`, `.list-reset`, `.truncate`
- Ховеры по цвету: `.hover:text-<palette>`

Пример:
```html
<p class="text-lg font-semibold">Заголовок</p>
<p class="text-gray-500 italic">Описание</p>
```

### 2. Вертикальное выравнивание (align)

- `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`

### 3. Отступы (spacing)

Генерация основана на наборе `$positions` (а не `$sizes`). Доступные ключи включают: `0`, `px`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `12`, `18`, `64`, `1/4`, `1/2`, `3/4`, `4/5`, `auto`, `full`.

- Направления: без суффикса (все стороны), `x`, `y`, `t`, `r`, `b`, `l`
- Margin: `.m-<key>`, `.mx-<key>`, `.mt-<key>` и т.д.
- Padding: `.p-<key>`, `.px-<key>`, `.pt-<key>` и т.д.
- Отрицательные значения генерируются для margin и padding (`. -m...`, `. -p...`), но для padding это использовать не рекомендуется (негативный padding невалиден). В продакшн-разметке применяйте только отрицательные margin.

Примеры:
```html
<div class="m-4">Отступы со всех сторон</div>
<div class="mx-auto">Горизонтальные отступы auto</div>
<div class="-mt-2">Отрицательный верхний margin</div>
```

### 4. Размеры (sizing)

Генерируются из `$sizes`.

- Ширина: `.w-<size>`, `.w-screen`
- Высота: `.h-<size>`, `.h-screen`
- Обе оси: `.size-<size>`, `.size-screen`
- Минимальные: `.min-w-<size>`, `.min-h-<size>`, включая `-screen` варианты
- Максимальные: `.max-w-<size>`, `.max-h-<size>`, включая `-screen` варианты
- Доступны ключи: `px`, `0d5`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `9`, `10`, `12`, `16`, `18`, `20`, `24`, `32`, `40`, `48`, `56`, `64`, `72`, `80`, `96`, `112`, `128`, `144`, `160`, `192`, `224`, `256`, `1/4`, `1/3`, `1/2`, `2/3`, `3/4`, `4/5`, `full`, `auto`, `none`, `fit`, а также `5vh..100vh` / `5vw..100vw`.
- Обратите внимание: классов с суффиксом `-0` нет (например, `.w-0` отсутствует).

### 5. Позиционирование (position)

- Позиции: `.relative`, `.absolute`, `.fixed`
- Центрирование: `.absolute-center` (translate(-50%, -50%))
- Координаты: `.top-<key>`, `.right-<key>`, `.bottom-<key>`, `.left-<key>` — где `<key>` из `$positions` (см. Spacing)
- Z-index:
  - Линейка: `.z-0`, `.z-10`, ..., `.z-100` и отрицательные: `.-z-10`, ..., `.-z-100` (шаг 10)
  - Специальные: `.z-auto`, `.z-i-hidden`, `.z-i-icon`, `.z-i-modal`, `.z-i-notice`, `.z-i-tip`, `.z-i-load`, `.z-i-fullpage-load`, `.z-i-menu`, `.z-i-teleport`, `.z-i-mobile-menu`

### 6. Flexbox (flexbox)

- Контейнер: `.flex`
- Направление: `.flex-row`, `.flex-row-reverse`, `.flex-column`/`.flex-col`, `.flex-column-reverse`/`.flex-col-reverse`
- Перенос: `.flex-wrap`, `.flex-nowrap`
- Flex: `.flex-0`, `.flex-1`, `.flex-auto`, `.flex-none`
- Выравнивание элементов: `.items-start`, `.items-end`, `.items-center`, `.items-baseline`, `.items-stretch`
- Выравнивание по главной оси: `.justify-start`, `.justify-end`, `.justify-center`, `.justify-between`, `.justify-around`, `.justify-evenly`
- Выравнивание контента: `.content-start`, `.content-end`, `.content-center`, `.content-baseline`, `.content-stretch`
- Самовыравнивание: `.self-start`, `.self-end`, `.self-center`, `.self-baseline`, `.self-stretch`
- Рост/сжатие: `.grow`, `.grow-0..3`; `.shrink`, `.shrink-0..3`
- Порядок: `.order-0..11`, `.order-last`

### 7. Grid (grid)

- Контейнер: `.grid` (display: grid)
- Контейнерные правила: `.grid-container` (container-type/name)
- Шаблоны колонок: `.grid-columns` и модификаторы
  - Пресеты: `.grid-columns--1fr-auto`, `--auto-1fr`, `--1fr-1fr`, `--1fr-2fr`, `--1fr-1fr-1fr`
  - Динамика: `.grid-columns--<N>-<SIZE>` → repeat(N, minmax(SIZE, 1fr))
- Шаблоны рядов: `.grid-rows` и модификаторы: `--auto-1fr-auto`, `--1fr-auto`, `---auto-1fr`, `--1fr-1fr-1fr`, `--1fr-1fr`
- Захват колонок: `.grid-col-span-1|2|3`

Пример:
```html
<div class="grid grid-columns grid-columns--3-32">
  <div>1</div><div>2</div><div>3</div>
</div>
```

### 8. Границы и скругления (border)

- Граница (ширина и стороны):
  - `.border` (дефолтная ширина), `.border-none`
  - `.border-0..5`
  - По сторонам: `.border-t`, `.border-r`, `.border-b`, `.border-l` и их варианты с шириной: `.border-t-0..5` и т.д.
- Цвет границы: `.border-<palette>`, `.border-transparent`
- Стиль: `.border-dashed;` (solid по умолчанию). Варианты `.border-dotted`/`.border-double`/`.border-solid` отсутствуют.
- Скругления:
  - Общие: `.rounded-none`, `.rounded-sm`, `.rounded-base`, `.rounded-md`, `.rounded-lg`, `.rounded-xl`, `.rounded-2xl`, `.rounded-3xl`, `.rounded-full`
  - Стороны: `.rounded-t-*`, `.rounded-r-*`, `.rounded-b-*`, `.rounded-l-*`
  - Углы: `.rounded-tl-*`, `.rounded-tr-*`, `.rounded-bl-*`, `.rounded-br-*`
  - Алиаса `.rounded` (без суффикса) нет — используйте `.rounded-base`

### 9. Фон (bg)

- Цвет фона: `.bg-<palette>`
- Прозрачность: `.bg-opacity-0|25|50|75|100`
- Ховер по фону: `.hover:bg-<palette>`
- Сброс: `.bg-none`
- Дополнительно: `.bg-filter-blur-1..10` (backdrop-filter: blur(px))

### 10. Эффекты (effects)

- Прозрачность: `.opacity-0,5,10,20,25,30,40,50,60,70,75,80,90,95,100`
- Hover‑прозрачность: `.hover:opacity-<step>`
- Поворот: `.rotate-0,45,90,135,180,225,270,315`
- Маркер обязательного поля: `.required::after` (звёздочка)

### 11. Анимации (animations)

- Мерцание: `.blink`
- Подчеркивание при hover: `.hover:underline--<palette>`
- Вращение: `.animation:spin-1..10` — анимация spin с шагом 0.25s (1 → 0.25s, 2 → 0.5s, ...)

Пример:
```html
<div class="animation:spin-2">крутится</div>
<a class="hover:underline--primary">ссылка</a>
```

### 12. Интерактивность (interactivity)

- Указатель событий: `.pointer-events-none`, `.pointer-events-auto`
- Выделение: `.user-select-none`, `.user-select-auto`, `.user-select-all`, `.user-select-text`

### 13. Курсор (cursor)

- `.cursor-pointer`, `.cursor-move`, `.cursor-default`, `.cursor-disabled`, `.cursor-wait`, `.cursor-help`
- Ресайз: `.cursor-resize-x`, `.cursor-resize-y`

### 14. Отображение и переполнение (display)

- Display: `.inline`, `.block`, `.inline-block`, `.table`, `.table-cell`
- Overflow: `.overflow-hidden|scroll|auto` и x/y‑варианты: `.overflow-x-hidden|scroll|auto`, `.overflow-y-hidden|scroll|auto`
- Важно: `.inline-flex`, `.inline-grid`, `.hidden`, а также `overflow-visible*` — отсутствуют в текущей реализации
- Скрытие реализовано в модуле hide:
  - `.hide` — скрывает элемент
  - Адаптивно: `.hide-md`, `.hide-lg`, `.hide-full` и др. (генерация по брейкпоинтам из `$screens`)

### 15. Контуры (outline)

- Сброс: `.outline-none`
- Толщина/цвет: `.outline-<size>-<palette>` (size из `$sizes-short`)
- Толщина (без цвета): `.outline-<size>`
- Стиль: `.outline-style--solid|dotted|groove|inset`
- Смещение: `.outline-offset-<N>` и `.-outline-offset-<N>`

### 16. Фильтры (filters)

- Серый: `.grayscale` (100%), `.grayscale-0` (0%)
- Сброс: `.no-filter` (включая `:hover`)

### 17. Скроллбары (scroll)

- Стилизованный контейнер: `.z-scroll`
  - Модификатор при наведении: `.z-scroll--hovered`
  - Тонкий вариант: `.z-scroll--thin`

## Адаптивность (актуально)

- Брейкпоинты: `xs`, `md`, `def`, `lg` заданы в токенах, но общая генерация responsive‑префиксов (`md:`, `lg:`) не производится.
- Для скрытия по диапазонам используется модуль hide (см. выше).

## Псевдоклассы (актуально)

- Поддерживаются конкретные hover-классы: `hover:bg-*`, `hover:text-*`, `hover:opacity-*`, `hover:underline--*`
- Универсальные псевдопрефиксы (`hover:`/`focus:` для любого класса) не генерируются.
