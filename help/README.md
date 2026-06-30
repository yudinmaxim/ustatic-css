# Справочники ustatic-css для ИИ и разработчиков

Навигация по материалам. **Это ustatic-css, не Tailwind CSS** — синтаксис похож, набор классов другой.

## Что читать в какой ситуации

| Задача | Файл |
|--------|------|
| Проверить, существует ли класс | [`class-registry.json`](class-registry.json) (автогенерация, `pnpm class-registry`) |
| Быстрый обзор классов по модулям | [`class-registry.md`](class-registry.md) |
| Не путать с Tailwind | [`tailwind-vs-ustatic.md`](tailwind-vs-ustatic.md) |
| Описания модулей и примеры | [`ustatic_utility_help.md`](ustatic_utility_help.md) |
| Полный словарь классов | [`ustatic_classes.md`](ustatic_classes.md) |
| JS API: токены | [`useTokens_help.md`](useTokens_help.md) |
| JS API: CSS-переменные | [`useCssProperties_help.md`](useCssProperties_help.md) |

## Иерархия источников правды

1. **`class-registry.json`** — валидность имени класса (из собранного `dist/css/`)
2. **`src/css/modules/<module>/index.scss`** — как класс генерируется
3. **`ustatic_utility_help.md`** — человекочитаемые описания
4. **Astro-документация** — `docs/astro/src/content/docs/` (в разработке)

## Команды

```bash
pnpm class-registry   # обновить реестр из dist/css/modules/
pnpm build            # сборка + автоматическое обновление реестра
pnpm tokens           # пересобрать токены Style Dictionary
```

## Cursor / агенты

- Точка входа: [`AGENTS.md`](../AGENTS.md)
- Правила: [`.cursor/rules/`](../.cursor/rules/)
- Skills: [`.cursor/skills/`](../.cursor/skills/)
