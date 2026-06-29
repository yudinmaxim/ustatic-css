# AGENTS.md — ustatic-css

**Это ustatic-css, НЕ Tailwind CSS.** Синтаксис похож (`flex`, `p-4`, `bg-blue-500`), но многие классы Tailwind здесь отсутствуют или называются иначе. Перед использованием класса проверяйте [`help/class-registry.json`](help/class-registry.json).

## Карта репозитория

| Путь | Назначение |
|------|------------|
| [`src/css/modules/`](src/css/modules/) | Генераторы утилитарных классов (SCSS) |
| [`src/css/tokens/`](src/css/tokens/) | YAML-токены дизайн-системы |
| [`src/css/variables.scss`](src/css/variables.scss) | Карты размеров, брейкпоинтов, палитры |
| [`dist/css/modules/*.css`](dist/css/) | Собранный CSS по модулям |
| [`help/`](help/) | Справочники для ИИ (реестр классов, anti-TW) |
| [`src/utils/styleLoader.ts`](src/utils/styleLoader.ts) | Runtime-загрузка модулей по классам |
| [`src/utils/styleloader.classmap.ts`](src/utils/styleloader.classmap.ts) | Маппинг префикс → модуль |
| [`docs/astro/`](docs/astro/) | Сайт документации (Astro + Starlight) |
| [`.cursor/rules/`](.cursor/rules/) | Правила Cursor для этого репозитория |
| [`.cursor/skills/`](.cursor/skills/) | Skills: классы и документация |

## Правило работы с классами

1. **Проверка:** класс есть в `help/class-registry.json`?
2. **Сомнение с Tailwind:** читать [`help/tailwind-vs-ustatic.md`](help/tailwind-vs-ustatic.md).
3. **Детали модуля:** `help/ustatic_utility_help.md` или `src/css/modules/<name>/index.scss`.
4. **Runtime:** `styleLoader` / `getModulesFromClasses` — префиксы в `styleloader.classmap.ts`.

Обновление реестра: `pnpm class-registry` (требует `dist/css/modules/`, создаётся при `pnpm build`).

## Команды

```bash
pnpm tokens          # Style Dictionary → SCSS-токены
pnpm build           # vite build + class-registry
pnpm class-registry  # только реестр классов
pnpm test            # vitest
```

## Модули утилит (19)

`align`, `animations`, `bg`, `border`, `cursor`, `display`, `effects`, `filters`, `flexbox`, `grid`, `hidden`, `interactivity`, `outline`, `position`, `scroll`, `sizing`, `spacing`, `typography`, `base`

## Что НЕ делать

- Не использовать классы Tailwind «из памяти» без проверки реестра (`md:flex`, `animate-spin`, `space-x-4`, `shadow-md`, `w-[300px]`).
- Не применять responsive-префиксы (`sm:`, `md:`, `lg:`) — их нет (кроме `hide-*`).
- Не использовать inline-стили в разметке без согласования с пользователем.
- Не путать префикс `u` (CSS-переменные `--u-*`) с префиксом классов (его нет).

## Топ-ловушки Tailwind

| Неверно (TW) | Верно (ustatic) |
|--------------|-----------------|
| `cursor-not-allowed` | `cursor-disabled` |
| `animate-spin` | `animation:spin-4` |
| `grid-cols-3` | `grid-columns--3-32` |
| `bg-blue-500/50` | `bg-blue-500 bg-opacity-50` |

## Документация

- Индекс справочников: [`help/README.md`](help/README.md)
- Живой сайт: https://yudinmaxim.github.io/ustatic-css/
- Astro-исходники: `docs/astro/src/content/docs/{ru,en}/`

## Skills

- **ustatic-classes** — разметка и проверка utility-классов
- **ustatic-docs** — работа над Astro-справкой
