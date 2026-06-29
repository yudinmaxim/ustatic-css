# ustatic-css vs Tailwind CSS

**ustatic-css похож на Tailwind по именованию, но это другая библиотека.** Не переносите классы из памяти Tailwind — проверяйте в [`class-registry.json`](class-registry.json).

## Критические отличия

| Тема | Tailwind | ustatic-css |
|------|----------|-------------|
| Конфигурация | `tailwind.config.js`, JIT | Предопределённые классы из токенов, без конфига |
| Responsive | `md:flex`, `lg:p-8` | **Нет** responsive-префиксов для утилит |
| Скрытие на брейкпоинтах | `hidden md:block` | `hidden-md`, `hidden-lg`, `hidden-full` (модуль hide) |
| Брейкпоинты | `sm`, `md`, `lg`, `xl`, `2xl` | `xs`, `md`, `def`, `lg` — только для hidden-* |
| Arbitrary values | `w-[300px]`, `bg-[#fff]` | **Нет** |
| Префикс CSS-переменных | `--tw-*` | `--u-*` (префикс `u` в package.json) |
| Префикс классов | нет / настраивается | **нет** (`flex`, не `u-flex`) |

## Совпадает с Tailwind (канонические имена)

`rounded`, `rounded-sm`, `font-normal`, `select-none`, `hidden`, `hidden-md`, `flex-col` — используйте как в TW, значения из токенов ustatic.

## Таблица замен: Tailwind → ustatic

| Tailwind (нет в ustatic) | ustatic-css |
|----------------------------|-------------|
| `cursor-not-allowed` | `cursor-disabled` |
| `animate-spin` | `animation:spin-4` (шаги 1–10, длительность 0.25–2.5с) |
| `space-x-4`, `space-y-2` | `gap-4`, `gap-2` (flex/grid) |
| `shadow-md`, `shadow-lg` | **нет** — сообщить пользователю |
| `ring-2`, `ring-blue-500` | **нет** |
| `container`, `max-w-7xl` | **нет** preset-контейнеров |
| `grid-cols-3` | `grid-columns--3-32` (BEM-подобный синтаксис) |
| `grid-rows-2` | `grid-rows--2-1fr` |
| `bg-blue-500/50` | `bg-blue-500` + `bg-opacity-50` |
| `underline` (hover-цвет) | `hover:underline--primary` или `hover:underline--red-500` |
| `md:flex` | **нет** — `hidden-md` + отдельная вёрстка |
| `sm:`, `xl:`, `2xl:` | **нет** |
| `w-[300px]` | **нет** — ближайший токен из шкалы sizing |
| `prose` | **нет** |
| `sr-only` | **нет** |
| `aspect-video` | **нет** |

## Уникальный синтаксис ustatic

### Двоеточие в имени класса (не Tailwind variants)

Псевдосостояния — **часть имени класса**, пишутся в `class=""` буквально:

```html
<button class="hover:bg-blue-500 active:pulse">...</button>
<div class="animation:spin-4">...</div>
```

Поддерживаются точечно: `hover:bg-*`, `hover:text-*`, `hover:opacity-*`, `hover:underline--*`, `active:pulse`, `animation:spin-*`.

### Двойной дефис `--` (модификаторы)

```html
<div class="grid-columns--1fr-auto"></div>
<div class="divider-x--medium"></div>
<span class="hover:underline--red-500"></span>
<div class="outline-style--dashed"></div>
```

### Отрицательные значения

```html
<div class="-mt-2 -ml-4"></div>
```

### Дроби в имени

```html
<div class="w-1/2 left-1/4"></div>
```

## Шкала размеров

Числа похожи на Tailwind (`p-4`, `m-2`), но значения из **дизайн-токенов** (`1` = 4px, `2` = 8px, `4` = 16px). Border: `border-1` = 4px (не 1px как дефолтный `border` в TW).

## Что делать агенту

1. Сомневаетесь — grep по [`class-registry.json`](class-registry.json).
2. Класса нет — не выдумывайте TW-аналог; ищите в том же модуле или спросите пользователя.
3. Inline-стили — только если утилит недостаточно и пользователь согласен.
