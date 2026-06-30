---
title: Добро пожаловать в uStatic CSS
description: Утилитарный CSS-фреймворк для быстрой разработки современных интерфейсов.
template: splash
hero:
  tagline: Набор утилитарных CSS-классов для создания современных интерфейсов на основе токенов дизайн-системы.
  image:
    file: ../../../assets/houston.webp
  actions:
    - text: Начать использовать
      link: getting-started/introduction/
      icon: right-arrow
      variant: primary
    - text: Посмотреть на GitHub
      link: https://github.com/yudinmaxim/ustatic-css
      icon: external
      variant: minimal
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Почему uStatic CSS?

**uStatic CSS** решает проблемы типичных утилитарных фреймворков в микрофронтендах:

<CardGrid stagger>
	<Card title="Единая система токенов" icon="seti:json">
		Консистентность между микрофронтендами благодаря общей дизайн-системе.
	</Card>
	<Card title="Модульная загрузка" icon="puzzle">
		Загружайте только нужные стили — никакого лишнего CSS в бандле.
	</Card>
	<Card title="Рантайм-активация" icon="rocket">
		Активируйте классы динамически при необходимости.
	</Card>
	<Card title="SSR-совместимость" icon="cloud">
		Безопасно работает на сервере и в браузере.
	</Card>
</CardGrid>

## Быстрый пример

```html
<!-- Карточка с flexbox -->
<div
  class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded"
>
  <span class="text-lg font-semibold text-gray-800">Заголовок</span>
  <button
    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
  >
    Кнопка
  </button>
</div>
```

## Доступно 350+ классов

- **Типографика**: размеры, вес, цвета текста
- **Отступы**: margin и padding со всех сторон
- **Flexbox**: выравнивание, направление, gap
- **Grid**: сетки с автоматическим колонками
- **Позиционирование**: relative, absolute, fixed, z-index
- **Фон и границы**: цвета, прозрачность, скругления
- **Анимации**: вращение, мигание, подчёркивание
- \*\*И многое другое...
