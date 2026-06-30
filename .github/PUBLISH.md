# Публикация в npm

Автоматическая публикация пакета `ustatic-css` в npm через GitHub Actions (workflow [`.github/workflows/publish-npm.yml`](workflows/publish-npm.yml)).

## Настройка (один раз)

### Trusted Publisher (рекомендуется, уже используется)

Workflow публикует пакет через **OIDC** (`npm publish --provenance`) без секрета `NPM_TOKEN`.

1. На [npmjs.com](https://www.npmjs.com/) откройте пакет **ustatic-css** → **Settings** → **Trusted Publishers**
2. Добавьте GitHub Actions:
   - **Organization / user:** `yudinmaxim`
   - **Repository:** `ustatic-css`
   - **Workflow filename:** `publish-npm.yml`
   - **Environment** (опционально): оставьте пустым

В workflow нужны права `id-token: write` — они уже прописаны.

### Альтернатива: Automation Token

Если Trusted Publisher недоступен, добавьте секрет `NPM_TOKEN` в **Settings → Secrets → Actions** и передайте его в шаг publish:

```yaml
env:
  NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Способы публикации

### Способ 1: Git-тег (рекомендуется)

```bash
git tag npm_v0.0.2-beta.1
git push origin npm_v0.0.2-beta.1
```

Workflow извлекает версию из тега: `npm_v0.0.2-beta.1` → `0.0.2-beta.1`.

### Способ 2: Ручной запуск

1. **Actions** → **Publish to npm** → **Run workflow**
2. Укажите версию, например `0.0.2` или `0.0.2-beta.1`
3. Workflow обновит `package.json` на время сборки и опубликует пакет

## Dist-теги npm

| Версия | npm tag |
|--------|---------|
| `1.0.0`, `0.0.2` | `latest` |
| `1.0.0-beta.1`, `0.0.1-b.2`, `1.0.0-rc.1`, `1.0.0-alpha.1` | `beta` |

Установка:

```bash
npm install ustatic-css@latest
npm install ustatic-css@beta
```

## Шаги workflow

1. Checkout
2. Node.js 22 + pnpm 9 + кэш
3. `pnpm install`
4. `pnpm run build`
5. `pnpm test`
6. Установка версии из тега или input
7. `npm publish --access public --provenance --tag …`

## Проверка

1. Вкладка **Actions** — все шаги зелёные
2. [npmjs.com/package/ustatic-css](https://www.npmjs.com/package/ustatic-css)
3. Локально перед тегом:

```bash
pnpm run build
pnpm test
npm pack --dry-run
```

## Troubleshooting

### You cannot publish over the previously published versions

Версия уже есть на npm. Увеличьте номер в теге / input.

### 401 Unauthorized

- Проверьте Trusted Publisher (репозиторий, имя workflow)
- Или добавьте / обновите `NPM_TOKEN`

### 403 Forbidden

Нет прав на пакет `ustatic-css` — проверьте владельца на npm.

### Ошибка сборки или тестов

```bash
pnpm run build
pnpm test
```

Смотрите логи в Actions.

## Версионирование

[Semantic Versioning](https://semver.org/): `MAJOR.MINOR.PATCH`

Пре-релизы: `-alpha.N`, `-beta.N`, `-rc.N`, `-b.N`
