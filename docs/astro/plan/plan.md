# План работ: Заполнение справки uStatic CSS на Astro Starlight

## Фаза 0: Аудит текущего состояния (выполнено частично)

- [x] Изучить структуру библиотеки ustatic-css/src
- [x] Прочитать всю документацию в .md файлах (src/docs/, src/mardown/, help/, docs/vitepress/)
- [x] Проверить документацию по исходникам (TypeScript, CSS модули)
- [x] Создать справочник библиотеки: `plan/ustatic.css.md`
- [x] Создать описание задачи: `plan/task.md`
- [ ] Проверить содержание существующих 53 RU файлов на актуальность
- [ ] Проверить содержание существующих 9 EN файлов на актуальность

## Фаза 1: Доработка русской версии (RU)

### 1.1 Проверка и исправление existing контента — Модули

> Каждый модуль проверяется independently: сверка RU-страницы с CSS-файлами и справочником `ustatic.css.md`, исправление неточностей, добавление недостающего.

- [ ] **1.1.1** `base` — базовые стили и CSS reset
- [ ] **1.1.2** `flexbox` — flex-раскладка (index + gap)
- [ ] **1.1.3** `grid` — CSS Grid раскладка
- [ ] **1.1.4** `typography` — типографика
- [ ] **1.1.5** `spacing` — отступы (margin/padding)
- [ ] **1.1.6** `border` — границы, скругления, разделители (index + rounded + style + divider)
- [ ] **1.1.7** `bg` — фоны и цвета
- [ ] **1.1.8** `position` — позиционирование
- [ ] **1.1.9** `sizing` — размеры (width/height)
- [ ] **1.1.10** `effects` — эффекты (opacity, rotate, shadow)
- [ ] **1.1.11** `animations` — анимации
- [ ] **1.1.12** `interactivity` — интерактивность (pointer-events, user-select)
- [ ] **1.1.13** `scroll` — стилизованный скроллбар
- [ ] **1.1.14** `cursor` — виды курсора
- [ ] **1.1.15** `outline` — обводка
- [ ] **1.1.16** `hide` — скрытие на брейкпоинтах
- [ ] **1.1.17** `display` — display и overflow
- [ ] **1.1.18** `align` — вертикальное выравнивание
- [ ] **1.1.19** `filters` — CSS фильтры

### 1.2 Проверка и исправление existing контента — API и справочные страницы

- [ ] **1.2.1** API: `use-tokens`, `use-css-properties` — сверка с `src/utils/`
- [ ] **1.2.2** API: `style-loader` — loadStyles, getStyleLinks, getModulesFromClasses
- [ ] **1.2.3** API: `vue-plugin` — Vue плагин
- [ ] **1.2.4** Guides — проверка соответствия модулям
- [ ] **1.2.5** Reference: `classes`, `variants`, `animations`, `colors`
- [ ] **1.2.6** Appearance: `color-palette`, `accent-colors`

### 1.3 Добавление недостающих страниц RU

- [ ] `reference/tokens.md` — дизайн-токены и CSS переменные
- [ ] `guides/theme-customization.md` — кастомизация темы через CSS переменные

### 1.2 Добавление недостающих страниц RU

- [ ] `modules/animations/index.md` — анимации (если нет)
- [ ] `api/style-loader.md` — loadStyles, getStyleLinks, getModulesFromClasses
- [ ] `api/vue-plugin.md` — Vue плагин
- [ ] `reference/tokens.md` — дизайн-токены и CSS переменные
- [ ] `guides/theme-customization.md` — кастомизация темы через CSS переменные

## Фаза 2: Создание английской версии (EN) — дублирование RU → EN

### 2.1 Модули (19 файлов) — по одному за запрос

- [ ] **2.1.1** `en/modules/align/index.md`
- [ ] **2.1.2** `en/modules/bg/index.md`
- [ ] **2.1.3** `en/modules/border/index.md` + `rounded.md` + `style.md` + `divider.md`
- [ ] **2.1.4** `en/modules/cursor/index.md`
- [ ] **2.1.5** `en/modules/display/index.md`
- [ ] **2.1.6** `en/modules/effects/index.md`
- [ ] **2.1.7** `en/modules/filters/index.md`
- [ ] **2.1.8** `en/modules/flexbox/index.md` + `gap.md`
- [ ] **2.1.9** `en/modules/grid/index.md`
- [ ] **2.1.10** `en/modules/hide/index.md`
- [ ] **2.1.11** `en/modules/interactivity/index.md`
- [ ] **2.1.12** `en/modules/outline/index.md`
- [ ] **2.1.13** `en/modules/position/index.md`
- [ ] **2.1.14** `en/modules/scroll/index.md`
- [ ] **2.1.15** `en/modules/sizing/index.md`
- [ ] **2.1.16** `en/modules/spacing/index.md`
- [ ] **2.1.17** `en/modules/typography/index.md`
- [ ] **2.1.18** `en/modules/animations/index.md` (если есть в RU)
- [ ] **2.1.19** `en/modules/presets/index.md` (если есть в RU)

### 2.2 Гайды (16 файлов) — по одному за запрос

- [ ] `en/guides/align.md`
- [ ] `en/guides/bg.md`
- [ ] `en/guides/border.md`
- [ ] `en/guides/base.md`
- [ ] `en/guides/cursor.md`
- [ ] `en/guides/display.md`
- [ ] `en/guides/effects.md`
- [ ] `en/guides/filters.md`
- [ ] `en/guides/flexbox.md`
- [ ] `en/guides/grid.md`
- [ ] `en/guides/interactivity.md`
- [ ] `en/guides/outline.md`
- [ ] `en/guides/position.md`
- [ ] `en/guides/scroll.md`
- [ ] `en/guides/sizing.md`
- [ ] `en/guides/spacing.md`
- [ ] `en/guides/typography.md`

### 2.3 Дополнительно EN

- [ ] `en/appearance/color-palette.md`
- [ ] `en/appearance/accent-colors.md`
- [ ] `en/reference/variants.md`
- [ ] `en/reference/animations.md`
- [ ] `en/reference/colors-palette.md`
- [ ] `en/reference/colors-examples.md`
- [ ] `en/api/style-loader.md`
- [ ] `en/api/vue-plugin.md`
- [ ] `en/reference/tokens.md`

## Фаза 3: Улучшение качества

- [ ] Добавить интерактивные демо через `Demo.astro` / `DemoContainer.astro`
- [ ] Проверить все ссылки и перекрёстные ссылки между страницами
- [ ] Убедиться, что Starlight корректно строит навигацию (sidebar)
- [ ] Проверить сборку: `npm run build`

## Фаза 4: Финальная проверка

- [ ] Запустить dev-сервер и визуально проверить все страницы
- [ ] Проверить переключение языков RU ↔ EN
- [ ] Проверить адаптивность на мобильных
- [ ] Убедиться, что контент соответствует реальным исходникам библиотеки

## Принципы работы

1. **Сначала RU, потом EN** — создаём/исправляем русскую версию, затем переводим на английский
2. **Один модуль за раз** — завершаем все страницы одного модуля (RU + EN) перед переходом к следующему
3. **Проверка по исходникам** — каждый класс/метод сверяется с реальным кодом в `src/`
4. **Справочник — источник истины** — `plan/ustatic.css.md` содержит все данные; при сомнениях обращаться к нему
5. **План корректируется** — пользователь может менять приоритеты и состав работ в ходе выполнения

## Вопросы для уточнения у пользователя

- [ ] Нужен ли раздел `presets`? (упоминается в структуре, но не описан подробно)
- [ ] Какие модули приоритетнее всего заполнить?
- [ ] Нужны ли интерактивные демо (Demo.astro) на каждой странице или выборочно?
- [ ] Какой стиль описания предпочтителен: справочный (таблицы классов) или обучающий (гайды с примерами)?
- [ ] Нужно ли добавить страницу миграции с Tailwind/Bootstrap?
