# План разработки uStatic CSS Docs

## 1. Перенастроить workflow деплоя Git Pages

**Проблема:** Текущий workflow деплоя требует обновления для корректной работы с новой структурой i18n.

**Задачи:**
- Проверить `.github/workflows/deploy.yml` (или аналогичный файл)
- Обновить конфигурацию для работы с мультиязычной структурой
- Убедиться, что `base: '/ustatic-css/'` учитывается при деплое
- Протестировать деплой на staging-окружении

---

## 2. Починить мёртвые ссылки в документации ✅ ВЫПОЛНЕНО

**Проблема:** Сборка падала с ошибкой 17 мёртвых ссылок.

**Список мёртвых ссылок (исправлены):**

### В файле `ru/guides/css-classes.md`:
- `/guides/typography` → `/ru/guides/typography`
- `/guides/spacing` → `/ru/guides/spacing`
- `/guides/flexbox` → `/ru/guides/flexbox`
- `/guides/grid` → `/ru/guides/grid`
- `/guides/position` → `/ru/guides/position`
- `/guides/border` → `/ru/guides/border`
- `/guides/bg` → `/ru/guides/bg`
- `/guides/effects` → `/ru/guides/effects`
- `/guides/cursor` → `/ru/guides/cursor`
- `/guides/display` → `/ru/guides/display`
- `/guides/align` → `/ru/guides/align`

### В файле `ru/getting-started/quick-start.md`:
- `/guides/css-classes` → `/ru/guides/css-classes`
- `/guides/runtime-loading` → `/ru/guides/runtime-loading`

### В файле `ru/getting-started/introduction.md`:
- `/getting-started/installation` → `/ru/getting-started/installation`
- `/getting-started/quick-start` → `/ru/getting-started/quick-start`

### В файле `ru/getting-started/installation.md`:
- `/guides/css-classes` → `/ru/guides/css-classes`
- `/getting-started/quick-start` → `/ru/getting-started/quick-start`

**Решение:**
- Все ссылки обновлены с префиксом локали (`/ru/`)
- Сборка проходит успешно: `npm run build` завершается без ошибок

---

## 3. Доработать навигацию (i18n + sidebar)

**Проблема:** Переключение языков и навигация работают некорректно.

**Текущие симптомы:**
- При заходе на `/ustatic-css/` редирект работает неправильно
- Переключатель языков создаёт дублирующиеся пути
- Сайдбар может генерироваться с неверными путями

**Задачи:**
- Исправить конфиг `.vitepress/config.mts`:
  - Настроить `vitepress-i18n` для корректной работы с `base`
  - Настроить `vitepress-sidebar` для каждой локали
  - Исправить `link` в настройках i18n
  - Исправить `nav` элементы для каждой локали
- Протестировать переключение языков:
  - `/ustatic-css/` → `/ustatic-css/ru/` (редирект)
  - `/ustatic-css/en/` → английская версия
  - Переключатель RU ↔ EN
- Проверить работу сайдбара в обеих локалях

---

## 4. Доработать документацию под фактическое состояние библиотеки

**Проблема:** Документация может не соответствовать актуальному API библиотеки.

**Задачи:**
- Провести аудит текущей документации
- Сверить описанные CSS-классы с реальной реализацией в `ustatic-css`
- Обновить примеры использования
- Добавить недостающие разделы:
  - Полная справка по всем утилитам
  - Примеры комбинаций классов
  - Best practices
- Актуализировать раздел "С чего начать"

---

## Приоритеты

1. ~~**Критично (блокирует релиз):**~~
   - ~~Пункт 2: Мёртвые ссылки (сборка падает)~~ ✅ ВЫПОЛНЕНО

2. **Важно:**
   - Пункт 3: Навигация (сайт нефункционален)
   - Пункт 1: Деплой (нужно для публикации)

3. **Планово:**
   - Пункт 4: Актуализация документации

---

## Заметки

- После каждого изменения запускать `npm run build` для проверки сборки
- Для локальной разработки использовать `npm run dev`
- Проверять оба языка (ru/en) после изменений в конфиге
