---
name: ustatic-docs
description: Authors and maintains ustatic-css documentation on Astro Starlight. Use when editing docs in docs/astro/, writing MDX guides, or syncing examples with the class registry.
disable-model-invocation: true
---

# ustatic-css: документация (Astro)

## Структура

- `docs/astro/src/content/docs/ru/` — основная локаль (полнее)
- `docs/astro/src/content/docs/en/` — английская локаль
- `docs/astro/plan/plan.md` — план незавершённой работы
- `docs/astro/plan/ustatic.css.md` — справочник библиотеки

## Правила примеров

1. Классы только из `help/class-registry.json`
2. Не использовать Tailwind (`md:flex`, `rounded`, `sm:px-6`)
3. Anti-TW таблица: `help/tailwind-vs-ustatic.md`

## Workflow

1. Найди соответствующую страницу в `src/content/docs/`
2. Сверь примеры с реестром: `grep '"class-name"' help/class-registry.json`
3. При новом модуле — добавь ru и en (если возможно)
4. Демо-компонент: `docs/astro/src/components/Demo.astro`

## Запуск локально

```bash
cd docs/astro && pnpm dev
```

## Будущее

Страница миграции TW→ustatic — контент из `help/tailwind-vs-ustatic.md` (см. plan.md TODO).
