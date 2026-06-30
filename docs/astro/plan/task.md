# Задача: Заполнение справки uStatic CSS на базе Astro Starlight

## Контекст

Проект справки расположен в `/home/maxim/Projects/personal-projects/ustatic-css/docs/astro/`.
Это Astro-проект с интеграцией **Starlight** (документационная тема).

## Что уже готово

### Инфраструктура

- ✅ Astro 6 + Starlight 0.38 настроены
- ✅ Два языка: `ru` (дефолтный), `en`
- ✅ Кастомные CSS-стили: `src/styles/custom.css`
- ✅ Компоненты для демо: `src/components/Demo.astro`, `src/components/DemoContainer.astro`
- ✅ Hero-страница (splash template) с карточками преимуществ
- ✅ Favicon: `public/favicon.svg`
- ✅ Hero-изображение: `src/assets/houston.webp`
- ✅ Ссылка на GitHub в соц. иконках

### Русская документация (ru) — 53 файла

| Раздел             | Файлов                                                                                                                                                                            | Статус      |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `getting-started/` | 3 (introduction, installation, quick-start)                                                                                                                                       | ✅ Есть     |
| `modules/`         | 19 модулей (flexbox, grid, typography, spacing, border, bg, position, sizing, effects, cursor, outline, hide, display, scroll, interactivity, filters, align, presets + подфайлы) | ✅ Есть     |
| `guides/`          | 16 гайдов по каждому модулю                                                                                                                                                       | ✅ Есть     |
| `api/`             | 2 (use-tokens, use-css-properties)                                                                                                                                                | ⚠️ Частично |
| `reference/`       | 3 (classes, variants, animations, colors-palette, colors-examples)                                                                                                                | ⚠️ Частично |
| `appearance/`      | 2 (color-palette, accent-colors)                                                                                                                                                  | ✅ Есть     |
| `index.md`         | Главная страница                                                                                                                                                                  | ✅ Есть     |

### Английская документация (en) — 9 файлов

| Раздел             | Файлов                                      | Статус      |
| ------------------ | ------------------------------------------- | ----------- |
| `getting-started/` | 3 (introduction, installation, quick-start) | ✅ Есть     |
| `api/`             | 2 (use-tokens, use-css-properties)          | ⚠️ Частично |
| `guides/`          | 2 (runtime-loading, css-classes)            | ⚠️ Частично |
| `reference/`       | 1 (classes)                                 | ⚠️ Частично |
| `index.mdx`        | Главная страница                            | ✅ Есть     |

## Проблема

**Русская версия** имеет 53 файла — структура почти полная, но качество контента нужно проверить на соответствие реальным возможностям библиотеки (по исходникам).

**Английская версия** имеет только 9 файлов — критически мало. Отсутствуют:

- Все 19 модулей (`modules/`)
- Большинство гайдов (`guides/`)
- Раздел `appearance/`
- Разделы `reference/animations`, `reference/colors-palette`, `reference/colors-examples`, `reference/variants`

## Источники контента

Все данные для заполнения берутся из:

1. **Справочник библиотеки:** `/home/maxim/Projects/personal-projects/ustatic-css/docs/astro/plan/ustatic.css.md` — единый файл с полным описанием API, модулей, токенов, цветов
2. **Исходники библиотеки:** `/home/maxim/Projects/personal-projects/ustatic-css/src/`
   - CSS модули: `src/css/modules/`
   - TypeScript утилиты: `src/utils/`
   - Vue плагин: `src/plugins/vue.plugin.ts`
3. **Документация рядом с кодом:** `/home/maxim/Projects/personal-projects/ustatic-css/src/docs/`
4. **Markdown-описания:** `/home/maxim/Projects/personal-projects/ustatic-css/src/mardown/`
5. **VitePress документация:** `/home/maxim/Projects/personal-projects/ustatic-css/docs/vitepress/`
6. **Help-файлы:** `/home/maxim/Projects/personal-projects/ustatic-css/help/`

## Требования к результату

1. **Полнота:** Каждый модуль, API-метод, цвет, брейкпоинт — описан с примерами
2. **Двуязычность:** RU и EN версии синхронизированы по структуре
3. **Интерактивность:** Использовать компоненты `Demo.astro` и `DemoContainer.astro` для живых примеров
4. **Навигация:** Starlight автоматически строит боковое меню из структуры файлов — структура должна быть логичной
5. **Актуальность:** Контент соответствует реальным исходникам библиотеки (проверено по `src/`)
