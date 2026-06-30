# Модуль анимаций (animations)

CSS классы для анимаций и переходов.

## Классы анимации

### Blink (мигание)
```html
<div class="blink">Мигающий текст</div>
```

### Spin (вращение)
```html
<!-- Разные скорости вращения -->
<div class="animation:spin-1">1 оборот за 0.25с</div>
<div class="animation:spin-2">1 оборот за 0.5с</div>
<div class="animation:spin-5">1 оборот за 1.25с</div>
<div class="animation:spin-10">1 оборот за 2.5с</div>
```

### Pulse (пульсация при клике)
```html
<button class="active:pulse">Нажми меня</button>
```

## Классы переходов (transition)

### Fade (затухание/появление)
```html
<div class="fade-enter-active fade-leave-active">
  Контент с переходом
</div>

<!-- или с v-if/v-show -->
<transition name="fade">
  <div v-if="show">Контент</div>
</transition>
```

### Slide Up (выезд снизу)
```html
<transition name="slide-up">
  <div v-if="show">Контент</div>
</transition>
```

### Scale (масштабирование)
```html
<transition name="scale">
  <div v-if="show">Контент</div>
</transition>
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
<button class="hover:lift">Кнопка с эффектом подъёма</button>
```

### Show (появление при наведении на родителя)
```html
<div class="hover:show-target relative overflow-hidden rounded">
  <div class="h-40 bg-gray-100">Превью</div>
  <div class="hover:show absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
    <span class="text-white">Просмотр</span>
  </div>
</div>
```

## Полный пример

```html
<template>
  <div>
    <!-- Мигающий элемент -->
    <div class="blink">Уведомление</div>
    
    <!-- Вращающийся спиннер -->
    <div class="animation:spin-2">
      <svg>...</svg>
    </div>
    
    <!-- Кнопка с пульсацией -->
    <button class="active:pulse">Нажми</button>
    
    <!-- Переход -->
    <transition name="fade">
      <div v-if="visible">Контент</div>
    </transition>
    
    <!-- Ссылка с подчёркиванием -->
    <a href="#" class="hover:underline--primary">Ссылка</a>
  </div>
</template>
```

## CSS свойства анимаций

- `animation-name` — имя анимации
- `animation-duration` — продолжительность
- `animation-timing-function` — временная функция
- `animation-iteration-count` — количество повторений
- `transition` — плавный переход между состояниями
