# Публикация в npm

Автоматическая публикация пакета ustatic-css в npm реестр через GitHub Actions.

## Настройка

### 1. Создание NPM_TOKEN

1. Войдите в [npmjs.com](https://www.npmjs.com/)
2. Перейдите в **Account Settings** → **Access Tokens**
3. Нажмите **Generate New Token**
4. Выберите **Automation Token** (рекомендуется)
5. Скопируйте токен

### 2. Добавление секрета в GitHub

1. Откройте репозиторий на GitHub
2. Перейдите в **Settings** → **Secrets and variables** → **Actions**
3. Нажмите **New repository secret**
4. Заполните:
   - **Name**: `NPM_TOKEN`
   - **Secret**: вставьте токен из npm
5. Нажмите **Add secret**

## Способы публикации

### Способ 1: Через GitHub Releases (рекомендуется)

1. Создайте релиз на GitHub:
   - **Releases** → **Create a new release**
   - Выберите тег версии (например, `v1.0.0`)
   - Заполните описание релиза
   - Нажмите **Publish release**

2. Workflow автоматически:
   - Соберёт пакет
   - Опубликует в npm с тегом `latest`
   - Версия берётся из `package.json`

### Способ 2: Через ручной запуск workflow

1. Перейдите в **Actions** → **Publish to npm**
2. Нажмите **Run workflow**
3. Заполните:
   - **Version**: версия для публикации (например, `1.0.0` или `1.0.0-beta.1`)
4. Нажмите **Run workflow**

Workflow автоматически:
- Обновит версию в `package.json`
- Соберёт пакет
- Опубликует в npm:
  - Версии с `beta` → тег `beta`
  - Остальные → тег `latest`

## Пре-релиз версии

Для публикации бета-версий:

### Через Release
1. Создайте тег с суффиксом: `v1.0.0-beta.1`
2. При создании релиза отметьте **"This is a pre-release"**
3. Опубликуйте релиз

### Через workflow_dispatch
1. Запустите workflow вручную
2. Укажите версию: `1.0.0-beta.1`
3. Пакет опубликуется с тегом `beta`

## Проверка публикации

1. Проверьте вкладку **Actions** — все шаги должны быть зелёными
2. Проверьте пакет на [npmjs.com/package/ustatic-css](https://www.npmjs.com/package/ustatic-css)
3. Установите пакет:
```bash
npm install ustatic-css@latest
# или для бета-версии
npm install ustatic-css@beta
```

## Структура workflow

### Триггеры
- `release.published` — автоматический запуск при создании релиза
- `workflow_dispatch` — ручной запуск с указанием версии

### Шаги
1. **Checkout** — загрузка репозитория
2. **Setup Node.js** — установка Node.js 22
3. **Setup pnpm** — установка pnpm 9
4. **Cache** — кэширование зависимостей
5. **Install** — установка зависимостей
6. **Build** — сборка пакета
7. **Update version** — обновление версии (только для ручного запуска)
8. **Publish** — публикация в npm

### Разрешения
- `id-token: write` — требуется для OIDC аутентификации npm
- `contents: read` — чтение репозитория

## Troubleshooting

### Ошибка: "You cannot publish over the previously published versions"

- Убедитесь, что версия в `package.json` уникальна
- Увеличьте версию перед публикацией

### Ошибка: "401 Unauthorized"

- Проверьте, что `NPM_TOKEN` добавлен в секреты
- Убедитесь, что токен действителен (не истёк)
- Проверьте, что у токена есть права на публикацию

### Ошибка: "403 Forbidden"

- Проверьте имя пакета в `package.json`
- Убедитесь, что у вас есть права на публикацию этого пакета
- Для scoped пакетов проверьте доступность scope

### Ошибка сборки

- Проверьте логи в вкладке **Actions**
- Запустите `pnpm run build` локально для проверки
- Убедитесь, что все зависимости установлены

## Версионирование

Рекомендуется следовать [Semantic Versioning](https://semver.org/):

- `MAJOR.MINOR.PATCH` (например, `1.2.3`)
- `MAJOR` — несовместимые изменения API
- `MINOR` — новая функциональность (обратно совместимая)
- `PATCH` — исправления багов (обратно совместимые)

Пре-релиз версии:
- `1.0.0-alpha.1`
- `1.0.0-beta.1`
- `1.0.0-rc.1`
