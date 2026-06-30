# GitHub Pages Deployment

Автоматический деплой документации на GitHub Pages настроен через GitHub Actions.

## Настройка

### 1. Включение GitHub Pages

1. Перейдите в репозиторий на GitHub
2. Откройте **Settings** → **Pages**
3. В разделе **Build and deployment**:
   - **Source**: Выберите `GitHub Actions`
   - **Environment**: Будет создано автоматически при первом деплое

### 2. Первый деплой

Workflow настроен на автоматический запуск при:
- Пуше в ветку `main` (изменения в `docs/astro/**` или `src/**`)
- Ручном запуске через **Actions** → **Deploy Documentation** → **Run workflow**

### 3. Проверка статуса

1. Перейдите во вкладку **Actions**
2. Выберите workflow **Deploy Documentation**
3. Убедитесь, что все шаги завершены успешно (зелёные галочки)

### 4. Доступ к документации

После успешного деплоя документация будет доступна по адресу:
```
https://{username}.github.io/ustatic-css/
```

Где `{username}` — ваше имя пользователя или организации GitHub.

## Как работает workflow

### Установка и сборка

1. **Node.js 22** — устанавливается последняя LTS версия
2. **pnpm 9** — менеджер пакетов для работы с workspace
3. **Кэширование** — pnpm store кэшируется между запусками для ускорения
4. **Установка зависимостей** — `pnpm install` устанавливает все пакеты workspace
5. **Сборка uStatic CSS** — `pnpm run build` в корне проекта
6. **Тесты** — `pnpm test`
7. **Проверка классов в документации** — `pnpm run docs:validate-classes`
8. **Сборка документации** — `pnpm run build` в `docs/astro/`

### Workspace

Документация (Astro + Starlight) подключена к библиотеке через `pnpm-workspace.yaml`:
```yaml
packages:
  - docs/astro
```

## Развёртывание

После сборки артефакт загружается в GitHub Pages:
- Путь: `docs/astro/dist`
- Окружение: `github-pages`
- URL публикуется в логе деплоя

## Ручной запуск

Для ручного запуска деплоя:

1. Перейдите в **Actions** → **Deploy Documentation**
2. Нажмите **Run workflow**
3. Выберите ветку (по умолчанию `main`)
4. Нажмите **Run workflow**

## Troubleshooting

### Ошибка сборки

Проверьте логи в вкладке **Actions**:
- Ошибки зависимостей — проверьте `pnpm-lock.yaml`
- Ошибки сборки — проверьте синтаксис в `.md` / `.mdx` и Astro-конфиге

### Документация не обновляется

1. Проверьте, что пуш был в ветку `main`
2. Убедитесь, что изменённые файлы находятся в `docs/astro/**` или `src/**`
3. Проверьте статус workflow в **Actions**

### Неправильный base путь

Если документация открывается, но стили/скрипты не загружаются:
- Проверьте `site` и `base` в `docs/astro/astro.config.mjs`
- Для GitHub Pages имя репозитория: `/ustatic-css/`

### Ошибка workspace

Если видите ошибку вида `ERR_PNPM_WORKSPACE_PKG_NOT_FOUND`:
- Убедитесь, что `pnpm-workspace.yaml` существует в корне
- Проверьте, что пути в workspace указаны верно
- Запустите локально `pnpm install` для проверки
