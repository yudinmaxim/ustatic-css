# CSS переменные (_ustatic-vars.scss)

Файл содержит все CSS переменные (токены) uStatic CSS в формате `:root { --... }`. Эти переменные используются во всех модулях библиотеки.

## Категории переменных

### Цвета (base.color.*)

#### Primary
```scss
--u-base-color-primary-50: #edf5fc;
--u-base-color-primary-100: #ddebf8;
--u-base-color-primary-200: #c4dcf3;
--u-base-color-primary-300: #9dc7ec;
--u-base-color-primary-400: #74ade2;
--u-base-color-primary-500: #5993d9;
--u-base-color-primary-600: #4b7fd2;
--u-base-color-primary-700: #4471ca;
--u-base-color-primary-800: #375bae;
--u-base-color-primary-900: #33508e;
--u-base-color-primary-950: #26375f;
--u-base-color-primary-def: #5993d9;
```

#### Secondary
```scss
--u-base-color-secondary-50: #fdebe3;
--u-base-color-secondary-500: #e53206;
--u-base-color-secondary-900: #73201c;
// ... до 950
--u-base-color-secondary-def: #e53206;
```

#### Семантические цвета
```scss
--u-base-color-success-*: #14a44d;
--u-base-color-danger-*: #dc4c64;
--u-base-color-warning-*: #e4a11b;
--u-base-color-info-*: #54b4d3;
```

#### Нейтральные цвета
```scss
--u-base-color-gray-50: #f9fafb;
--u-base-color-gray-100: #f3f4f6;
--u-base-color-gray-200: #e5e7eb;
--u-base-color-gray-300: #d1d5db;
--u-base-color-gray-400: #9ca3af;
--u-base-color-gray-500: #6b7280;
--u-base-color-gray-600: #4b5563;
--u-base-color-gray-700: #374151;
--u-base-color-gray-800: #1f2937;
--u-base-color-gray-900: #111827;
--u-base-color-gray-def: #6b7280;
```

#### Дополнительные цвета
```scss
--u-base-color-red-*: #ef4444;
--u-base-color-orange-*: #f97316;
--u-base-color-yellow-*: #eab308;
--u-base-color-green-*: #22c55e;
--u-base-color-sky-*: #0ea5e9;
--u-base-color-blue-*: #3b82f6;
--u-base-color-white: #ffffff;
--u-base-color-black: #000000;
--u-base-color-transparent: transparent;
```

#### Варианты цветов
```scss
--u-base-color-variant-primary: #5993d9;
--u-base-color-variant-secondary: #e53206;
--u-base-color-variant-success: #14a44d;
--u-base-color-variant-info: #54b4d3;
--u-base-color-variant-warning: #e4a11b;
--u-base-color-variant-danger: #dc4c64;
```

### Границы (base.border.*)

#### Радиусы
```scss
--u-base-border-radius-none: 0;
--u-base-border-radius-sm: 0.125rem;   // 2px
--u-base-border-radius-base: 0.25rem;  // 4px
--u-base-border-radius-md: 0.375rem;   // 6px
--u-base-border-radius-lg: 0.5rem;     // 8px
--u-base-border-radius-xl: 0.75rem;    // 12px
--u-base-border-radius-2xl: 1rem;      // 16px
--u-base-border-radius-3xl: 1.5rem;    // 24px
--u-base-border-radius-full: 9999px;
--u-base-border-rounded: 100%;
```

#### Ширина границ
```scss
--u-base-border-width-0: 0;
--u-base-border-width-1: 1px;
--u-base-border-width-2: 2px;
--u-base-border-width-3: 3px;
--u-base-border-width-4: 4px;
--u-base-border-width-5: 5px;
--u-base-border-width-def: 1px;
--u-base-border-none: 0;
```

#### Цвета границ
```scss
--u-base-border-color-black: #000000;
--u-base-border-color-primary: #5993d9;
--u-base-border-color-secondary: #e53206;
--u-base-border-color-success: #14a44d;
--u-base-border-color-info: #54b4d3;
--u-base-border-color-warning: #e4a11b;
--u-base-border-color-danger: #dc4c64;
```

### Размеры (base.size.*)

#### От 0 до 64
```scss
--u-base-size-0: 0px;
--u-base-size-1: 0.25rem;   // 4px
--u-base-size-2: 0.5rem;    // 8px
--u-base-size-4: 1rem;      // 16px
--u-base-size-8: 2rem;      // 32px
--u-base-size-16: 4rem;     // 64px
// ... до size-256 (64rem = 1024px)
```

#### Проценты и специальные
```scss
--u-base-size-1-4: 25%;
--u-base-size-1-2: 50%;
--u-base-size-1-3: 33.3333%;
--u-base-size-full: 100%;
--u-base-size-auto: auto;
--u-base-size-fit: fit-content;
--u-base-size-none: none;
```

#### Viewport единицы (от 5 до 100)
```scss
--u-base-size-5vh: 5vh;
--u-base-size-50vh: 50vh;
--u-base-size-100vh: 100vh;
// ... аналогично для vw
```

#### Размеры шрифтов (em)
```scss
--u-base-size-2xs: 0.5em;
--u-base-size-xs: 0.75em;
--u-base-size-sm: 0.875em;
--u-base-size-base: 1em;
--u-base-size-lg: 1.125em;
--u-base-size-xl: 1.25em;
--u-base-size-2xl: 1.5em;
```

### Позиционирование (base.position.*)

Аналогично размерам, но для позиционирования (top, right, bottom, left).

### Типографика (base.text.*)

#### Размеры текста
```scss
--u-base-text-size-2xs: 0.5rem;   // 8px
--u-base-text-size-xs: 0.75rem;   // 12px
--u-base-text-size-sm: 0.875rem;  // 14px
--u-base-text-size-base: 1rem;    // 16px
--u-base-text-size-lg: 1.125rem;  // 18px
--u-base-text-size-xl: 1.25rem;   // 20px
--u-base-text-size-2xl: 1.5rem;   // 24px
```

#### Высота строки
```scss
--u-base-text-line-height-def: 1.5rem;
--u-base-text-line-height-fit: 1;
--u-base-text-line-height-2xs: 0.75rem;
--u-base-text-line-height-xs: 1rem;
--u-base-text-line-height-sm: 1.25rem;
--u-base-text-line-height-base: 1.5rem;
--u-base-text-line-height-lg: 1.75rem;
--u-base-text-line-height-xl: 1.75rem;
--u-base-text-line-height-2xl: 2rem;
```

#### Цвета текста
```scss
--u-base-text-color-black: #000000;
--u-base-text-color-gray-700: #374151;
--u-base-text-color-primary: #5993d9;
--u-base-text-color-secondary: #e53206;
--u-base-text-color-success: #14a44d;
--u-base-text-color-info: #54b4d3;
--u-base-text-color-warning: #e4a11b;
--u-base-text-color-danger: #dc4c64;
```

### Шрифты (base.font.*)

#### Толщина
```scss
--u-base-font-weight-def: 400;
--u-base-font-weight-thin: 100;
--u-base-font-weight-extralight: 200;
--u-base-font-weight-light: 300;
--u-base-font-weight-regular: 400;
--u-base-font-weight-medium: 500;
--u-base-font-weight-semibold: 600;
--u-base-font-weight-bold: 700;
--u-base-font-weight-extrabold: 800;
--u-base-font-weight-black: 900;
```

### Курсоры (base.cursor.*)
```scss
--u-base-cursor-pointer: pointer;
--u-base-cursor-move: move;
--u-base-cursor-default: auto;
--u-base-cursor-disabled: not-allowed;
--u-base-cursor-resize-ew: ew-resize;
--u-base-cursor-resize-ns: ns-resize;
--u-base-cursor-wait: wait;
--u-base-cursor-help: help;
```

### Прозрачность (base.opacity.*)
```scss
--u-base-opacity-0: 0.0;
--u-base-opacity-25: 0.25;
--u-base-opacity-50: 0.5;
--u-base-opacity-75: 0.75;
--u-base-opacity-100: 1.0;
--u-base-opacity-disabled: 0.25;
```

### Z-Index (base.zindex.*)
```scss
--u-base-zindex-0: 0;
--u-base-zindex-1: 1;
// ... до 100
--u-base-zindex-hidden: -1;
--u-base-zindex-icon: 1;
--u-base-zindex-menu: 20;
--u-base-zindex-teleport: 20;
--u-base-zindex-load: 30;
--u-base-zindex-modal: 40;
--u-base-zindex-tip: 50;
--u-base-zindex-mobile-menu: 50;
--u-base-zindex-notice: 100;
--u-base-zindex-fullpage-load: 100;
```

### Скролл (base.scroll.*)
```scss
--u-base-scroll-bar-width: 0.25rem;
--u-base-scroll-width: 0.25rem;
--u-base-scroll-height: 0.25rem;
--u-base-scroll-thumb-min-width: 2rem;
--u-base-scroll-thumb-height: auto;
--u-base-scroll-thumb-round: 0.5rem;
```

### Анимации (base.rotation.*)
```scss
--u-base-rotation-0: 0;
--u-base-rotation-45: 45;
--u-base-rotation-90: 90;
// ... до 315
```

### Другие
```scss
--u-base-grid-template-columns: 1fr;
--u-base-grid-template-rows: 1fr;
--u-base-grid-template-colspan: 1;
--u-base-screen-small: 0;
--u-base-screen-medium: 1280;
--u-base-screen-default: 1920;
--u-base-screen-large: 2560;
--u-base-base-underline-color: #5993d9;
```
