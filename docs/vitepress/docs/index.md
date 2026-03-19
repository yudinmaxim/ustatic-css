---
layout: home

hero:
  name: uStatic CSS
  text: Утилитарный CSS-фреймворк
  tagline: Набор утилитарных CSS-классов для создания современных интерфейсов на основе токенов дизайн-системы.
  image:
    repo: yudinmaxim/ustatic-css
  actions:
    - text: Начать использовать
      link: /getting-started/introduction
      theme: brand
    - text: GitHub
      link: https://github.com/yudinmaxim/ustatic-css
      theme: alt

features:
  - title: Единая система токенов
    details: Консистентность между микрофронтендами благодаря общей дизайн-системе.
  - title: Модульная загрузка
    details: Загружайте только нужные стили — никакого лишнего CSS в бандле.
  - title: Рантайм-активация
    details: Активируйте классы динамически при необходимости.
  - title: SSR-совместимость
    details: Безопасно работает на сервере и в браузере.
---

## Быстрый пример

Ниже показан пример карточки с flexbox. Попробуйте навести на кнопку — работает hover-эффект!

<CodePreview>
  <div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
    <span class="text-lg font-semibold text-gray-800">Заголовок</span>
    <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 cursor-pointer">
      Кнопка
    </button>
  </div>
</CodePreview>

## Доступно 350+ классов

- **Типографика**: размеры, вес, цвета текста
- **Отступы**: margin и padding со всех сторон
- **Flexbox**: выравнивание, направление, gap
- **Grid**: сетки с автоматическим колонками
- **Позиционирование**: relative, absolute, fixed, z-index
- **Фон и границы**: цвета, прозрачность, скругления
- **Анимации**: вращение, мигание, подчёркивание
- **И многое другое...**
