# Акцентные цвета

Акцентные цвета используются для выделения важных элементов интерфейса и привлечения внимания пользователя.

## Назначение акцентных цветов

Акцентные цвета применяются для:

- **Кнопок действий (CTA)** — основные действия на странице
- **Ссылок** — интерактивные элементы
- **Индикаторов** — активные состояния
- **Бейджей** — статусы и уведомления
- **Иконок** — важные иконки

## Основные акцентные цвета

### Primary (Основной акцент)

Используется для главных действий и элементов бренда.

```html
<!-- Кнопка CTA -->
<button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium">
  Начать бесплатно
</button>

<!-- Активная ссылка -->
<a href="#" class="text-primary-500 hover:text-primary-600 font-medium">
  Главная
</a>

<!-- Индикатор -->
<div class="w-2 h-2 bg-primary-500 rounded-full"></div>
```

**Оттенки для акцентов:**
- `primary-500` — основной акцент
- `primary-600` — при наведении
- `primary-700` — активное состояние

### Secondary (Вторичный акцент)

Используется для дополнительных действий.

```html
<button class="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded">
  Дополнительное действие
</button>
```

## Семантические акценты

### Success (Успех)

Зелёный цвет для положительных действий и статусов.

```html
<!-- Кнопка подтверждения -->
<button class="bg-success hover:bg-success/90 text-white px-4 py-2 rounded">
  ✓ Подтвердить
</button>

<!-- Бейдж статуса -->
<span class="bg-success/10 text-success px-2 py-1 rounded text-sm font-medium">
  Активен
</span>

<!-- Иконка успеха -->
<svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
</svg>
```

### Danger (Опасность)

Красный цвет для предупреждений и деструктивных действий.

```html
<!-- Кнопка удаления -->
<button class="bg-danger hover:bg-danger/90 text-white px-4 py-2 rounded">
  ✗ Удалить
</button>

<!-- Бейдж ошибки -->
<span class="bg-danger/10 text-danger px-2 py-1 rounded text-sm font-medium">
  Ошибка
</span>

<!-- Уведомление об ошибке -->
<div class="bg-danger/10 border-l-4 border-danger p-4">
  <p class="text-danger font-medium">Произошла ошибка</p>
</div>
```

### Warning (Предупреждение)

Жёлтый/оранжевый цвет для предупреждений.

```html
<!-- Кнопка предупреждения -->
<button class="bg-warning hover:bg-warning/90 text-white px-4 py-2 rounded">
  ⚠ Внимание
</button>

<!-- Бейдж предупреждения -->
<span class="bg-warning/10 text-warning px-2 py-1 rounded text-sm font-medium">
  Ожидание
</span>
```

### Info (Информация)

Голубой цвет для информационных элементов.

```html
<!-- Информационное сообщение -->
<div class="bg-info/10 border-l-4 border-info p-4">
  <p class="text-info font-medium">Полезная информация</p>
</div>

<!-- Бейдж информации -->
<span class="bg-info/10 text-info px-2 py-1 rounded text-sm font-medium">
  Новое
</span>
```

## Примеры использования

### Группа кнопок

```html
<div class="flex gap-2">
  <!-- Основное действие -->
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
    Сохранить
  </button>
  
  <!-- Вторичное действие -->
  <button class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded">
    Отмена
  </button>
  
  <!-- Деструктивное действие -->
  <button class="bg-danger hover:bg-danger/90 text-white px-4 py-2 rounded">
    Удалить
  </button>
</div>
```

### Форма с валидацией

```html
<form class="space-y-4">
  <!-- Успешное поле -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input 
      type="email" 
      value="user@example.com"
      class="border border-success focus:border-success focus:ring-2 focus:ring-success/20 rounded px-4 py-2 w-full"
    >
    <p class="text-success text-sm mt-1">✓ Корректный email</p>
  </div>
  
  <!-- Поле с ошибкой -->
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      Пароль
    </label>
    <input 
      type="password" 
      class="border border-danger focus:border-danger focus:ring-2 focus:ring-danger/20 rounded px-4 py-2 w-full"
      placeholder="Минимум 8 символов"
    >
    <p class="text-danger text-sm mt-1">✗ Пароль слишком короткий</p>
  </div>
</form>
```

### Карточка товара с акцентами

```html
<div class="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
  <img src="product.jpg" class="w-full h-48 object-cover">
  <div class="p-4">
    <div class="flex justify-between items-start mb-2">
      <h3 class="text-lg font-bold text-gray-900">Товар</h3>
      <span class="bg-success/10 text-success px-2 py-1 rounded text-sm font-medium">
        В наличии
      </span>
    </div>
    <p class="text-gray-600 text-sm mb-4">Описание товара</p>
    <div class="flex justify-between items-center">
      <span class="text-2xl font-bold text-primary-500">$99.99</span>
      <button class="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded">
        В корзину
      </button>
    </div>
  </div>
</div>
```

### Уведомления

```html
<div class="space-y-4">
  <!-- Успех -->
  <div class="bg-success/10 border-l-4 border-success p-4 rounded">
    <div class="flex items-center gap-2">
      <svg class="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
      </svg>
      <p class="text-success font-medium">Операция выполнена успешно</p>
    </div>
  </div>
  
  <!-- Ошибка -->
  <div class="bg-danger/10 border-l-4 border-danger p-4 rounded">
    <div class="flex items-center gap-2">
      <svg class="w-5 h-5 text-danger" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
      </svg>
      <p class="text-danger font-medium">Произошла ошибка</p>
    </div>
  </div>
  
  <!-- Предупреждение -->
  <div class="bg-warning/10 border-l-4 border-warning p-4 rounded">
    <div class="flex items-center gap-2">
      <svg class="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
      </svg>
      <p class="text-warning font-medium">Внимание! Важная информация</p>
    </div>
  </div>
  
  <!-- Информация -->
  <div class="bg-info/10 border-l-4 border-info p-4 rounded">
    <div class="flex items-center gap-2">
      <svg class="w-5 h-5 text-info" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
      </svg>
      <p class="text-info font-medium">Полезная информация</p>
    </div>
  </div>
</div>
```

### Навигация с активным пунктом

```html
<nav class="flex gap-1 bg-gray-100 p-1 rounded-lg">
  <a href="#" class="px-4 py-2 text-gray-600 hover:text-gray-900">
    Главная
  </a>
  <a href="#" class="px-4 py-2 bg-primary-500 text-white rounded">
    Продукты
  </a>
  <a href="#" class="px-4 py-2 text-gray-600 hover:text-gray-900">
    О нас
  </a>
</nav>
```

### Прогресс-бар

```html
<div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
  <div class="h-full bg-primary-500 w-3/4 transition-all duration-500"></div>
</div>
```

### Бейджи уведомлений

```html
<button class="relative">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
  </svg>
  <span class="absolute -top-2 -right-2 bg-danger text-white w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium">
    3
  </span>
</button>
```

## Рекомендации по использованию

### 1. Иерархия акцентов

```html
<!-- Основной акцент (Primary) -->
<button class="bg-primary-500 text-white px-4 py-2 rounded">
  Главное действие
</button>

<!-- Вторичное действие -->
<button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
  Вторичное
</button>
```

### 2. Консистентность

Используйте один цвет для одинаковых действий на всём сайте:
- `primary-500` — для основных кнопок
- `danger` — для удаления
- `success` — для подтверждения

### 3. Доступность

Проверяйте контрастность текста на цветном фоне:

```html
<!-- Хороший контраст -->
<button class="bg-primary-500 text-white">✓ Хорошо</button>

<!-- Плохой контраст -->
<button class="bg-primary-500 text-gray-400">✗ Плохо</button>
```

## Таблица акцентных цветов

| Назначение | Цвет | Классы |
|------------|------|--------|
| **Основной** | Primary | `bg-primary-500`, `text-primary-500`, `border-primary-500` |
| **Вторичный** | Secondary | `bg-secondary-500`, `text-secondary-500` |
| **Успех** | Success | `bg-success`, `text-success`, `border-success` |
| **Ошибка** | Danger | `bg-danger`, `text-danger`, `border-danger` |
| **Предупреждение** | Warning | `bg-warning`, `text-warning`, `border-warning` |
| **Информация** | Info | `bg-info`, `text-info`, `border-info` |

## См. также

- [Палитра цветов](../color-palette/index.md) — полная цветовая палитра
- [Фон](../../modules/bg/index.md) — классы для фона
- [Типографика](../../modules/typography/index.md) — цвет текста
