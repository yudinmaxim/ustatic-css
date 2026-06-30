---
name: ustatic-classes
description: Validates and applies ustatic-css utility classes (not Tailwind). Use when writing or reviewing HTML/Vue/Svelte markup, utility classes, styling, or when Tailwind classes might be confused with ustatic-css.
disable-model-invocation: true
---

# ustatic-css: utility-классы

## Quick start

1. Прочитай `help/tailwind-vs-ustatic.md` при сомнении.
2. Проверь класс в `help/class-registry.json` (grep по имени).
3. Если класса нет — ищи альтернативу в том же модуле (`src/css/modules/`), не выдумывай TW-аналог.
4. Для runtime — `src/utils/styleloader.classmap.ts`.

## Checklist

- [ ] Класс есть в `class-registry.json`
- [ ] Нет TW-only классов (`rounded`, `md:`, `animate-spin`, `space-x-*`, `shadow-*`)
- [ ] Псевдосостояния через `:` в имени (`hover:bg-blue-500`)
- [ ] Модификаторы через `--` (`grid-columns--1fr-auto`)

## Модули

См. [reference.md](reference.md) — таблица префиксов → модулей.

## Реестр

```bash
pnpm class-registry   # обновить help/class-registry.json
```
