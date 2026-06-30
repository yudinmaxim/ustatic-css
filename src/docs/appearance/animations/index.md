# Анимации (animations)

Классы для анимаций и переходов — мигание, вращение, пульсация, fade-эффекты.

## Классы анимации

### Blink (мигание)

```html
<div class="blink">
  Мигающий текст или элемент
</div>
```

Используется для привлечения внимания к важным элементам.

### Spin (вращение)

```html
<!-- Разные скорости вращения -->
<div class="animation:spin-1">1 оборот за 0.25с</div>
<div class="animation:spin-2">1 оборот за 0.5с</div>
<div class="animation:spin-5">1 оборот за 1.25с</div>
<div class="animation:spin-10">1 оборот за 2.5с</div>
```

**Примеры использования:**

```html
<!-- Спиннер загрузки -->
<div class="animation:spin-2 w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full"></div>

<!-- Вращающаяся иконка -->
<svg class="animation:spin-10 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
</svg>
```

### Pulse (пульсация при клике)

```html
<button class="active:pulse">
  Нажми меня
</button>
```

Эффект пульсации при нажатии кнопки.

## Классы переходов (transition)

### Fade (затухание/появление)

```html
<!-- Плавное появление -->
<div class="fade-enter-active">
  Контент с переходом
</div>

<!-- Плавное исчезновение -->
<div class="fade-leave-active">
  Исчезающий контент
</div>
```

**Использование с Vue:**

```html
<transition name="fade">
  <div v-if="show">Контент</div>
</transition>
```

**CSS для Vue transition:**

```scss
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
```

### Slide Up (выезд снизу)

```html
<transition name="slide-up">
  <div v-if="show">Контент</div>
</transition>
```

**CSS:**

```scss
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
```

### Scale (масштабирование)

```html
<transition name="scale">
  <div v-if="show">Контент</div>
</transition>
```

**CSS:**

```scss
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}

.scale-enter-from,
.scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
```

## Интерактивные классы (hover)

### Underline (подчёркивание при наведении)

```html
<!-- Подчёркивание с разными цветами -->
<span class="hover:underline--primary">Основной цвет</span>
<span class="hover:underline--success">Успех</span>
<span class="hover:underline--danger">Опасность</span>
<span class="hover:underline--info">Информация</span>
```

### Lift (подъём при наведении)

```html
<button class="hover:lift">
  Кнопка с эффектом подъёма
</button>
```

Эффект подъёма элемента с тенью при наведении.

### Show (появление при наведении)

```html
<div class="hover:show">
  Появляется при наведении
</div>
```

## Примеры использования

### Индикатор загрузки

```html
<div class="flex items-center gap-2">
  <div class="animation:spin-2 w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full"></div>
  <span>Загрузка...</span>
</div>
```

### Уведомление с анимацией

```html
<div class="fade-enter-active bg-success text-white p-4 rounded">
  <p>Уведомление появилось плавно</p>
</div>
```

### Мигающее уведомление

```html
<div class="blink bg-warning text-white p-4 rounded">
  ⚠️ Важное уведомление!
</div>
```

### Кнопка с пульсацией

```html
<button class="bg-primary-500 text-white px-4 py-2 rounded active:pulse">
  Нажми меня
</button>
```

### Галерея с hover-эффектом

```html
<div class="grid grid-cols-3 gap-4">
  <div class="group relative overflow-hidden rounded-lg">
    <img 
      src="photo.jpg" 
      alt="Фото" 
      class="w-full h-48 object-cover transition-transform hover:lift"
    >
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
      <span class="text-white opacity-0 group-hover:opacity-100">
        Просмотр
      </span>
    </div>
  </div>
</div>
```

### Выпадающее меню

```html
<div class="relative">
  <button class="bg-primary-500 text-white px-4 py-2 rounded">
    Меню
  </button>
  <div class="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg fade-enter-active z-i-menu">
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 1</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 2</a>
    <a href="#" class="block px-4 py-2 hover:bg-gray-50">Пункт 3</a>
  </div>
</div>
```

### Модальное окно с анимацией

```html
<div class="fixed inset-0 z-i-modal bg-black bg-opacity-50 flex items-center justify-center">
  <div class="bg-white rounded-lg p-6 max-w-md scale-enter-active">
    <h2 class="text-xl font-bold mb-4">Заголовок</h2>
    <p class="text-gray-600 mb-6">Содержимое модального окна</p>
    <button class="bg-primary-500 text-white px-4 py-2 rounded">
      Закрыть
    </button>
  </div>
</div>
```

### Прогресс-бар с анимацией

```html
<div class="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
  <div 
    class="h-full bg-primary-500 transition-all duration-500"
    style="width: 75%"
  ></div>
</div>
```

### Ссылка с подчёркиванием

```html
<nav class="flex gap-4">
  <a href="#" class="hover:underline--primary">Главная</a>
  <a href="#" class="hover:underline--primary">О нас</a>
  <a href="#" class="hover:underline--primary">Контакты</a>
</nav>
```

## CSS свойства анимаций

```scss
// Blink (мигание)
@keyframes blink {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.blink {
  animation: blink 1s infinite;
}

// Spin (вращение)
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animation\\:spin-1 { animation: spin 0.25s linear infinite; }
.animation\\:spin-2 { animation: spin 0.5s linear infinite; }
.animation\\:spin-5 { animation: spin 1.25s linear infinite; }
.animation\\:spin-10 { animation: spin 2.5s linear infinite; }

// Pulse (пульсация)
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

.active\\:pulse:active {
  animation: pulse 0.3s ease;
}
```

## Таблица классов

| Категория | Классы |
|-----------|--------|
| **Blink** | `blink` |
| **Spin** | `animation:spin-1`, `animation:spin-2`, `animation:spin-5`, `animation:spin-10` |
| **Pulse** | `active:pulse` |
| **Transition** | `fade-enter-active`, `fade-leave-active`, `slide-up-enter-active`, `scale-enter-active` |
| **Hover** | `hover:underline--primary`, `hover:underline--success`, `hover:underline--danger`, `hover:underline--info`, `hover:lift`, `hover:show` |

## См. также

- [Эффекты](../effects/index.md) — прозрачность и трансформации
- [Курсор](../cursor/index.md) — управление курсором
- [Фильтры](../filters/index.md) — CSS фильтры
