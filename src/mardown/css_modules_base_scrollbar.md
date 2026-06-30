# Стили скроллбара (scrollbar.scss)

Кастомные стили для полосы прокрутки (scrollbar) в webkit-браузерах.

## Стили по умолчанию

### Скроллбар
```scss
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
```

### Трек (фон)
```scss
::-webkit-scrollbar-track {
  background: #d1d5db;
  border-radius: 40px;
}
```

### Ползунок (thumb)
```scss
::-webkit-scrollbar-thumb {
  background: token("base.color.gray.400");
  border-radius: 40px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
```

## Использование

Стили применяются автоматически ко всему документу при подключении модуля base:

```scss
@import 'ustatic-css/src/css/modules/base';
```

## Кастомизация

Для изменения стилей переопределите переменные:

```scss
// Изменить ширину
:root {
  --u-base-scroll-width: 8px;
  --u-base-scroll-height: 8px;
}
```

## Поддержка браузеров

- **Webkit** (Chrome, Safari, Edge) — полная поддержка
- **Firefox** — ограниченная поддержка через `scrollbar-width`

## Дополнительно

См. также модуль `scroll` для классов управления скроллом.
