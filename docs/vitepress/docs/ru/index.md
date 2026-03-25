---
layout: home

hero:
  name: uStatic CSS
  text: Утилитарный CSS-фреймворк
  tagline: Набор CSS-классов для создания современных интерфейсов на основе дизайн-токенов.
  image:
    repo: yudinmaxim/ustatic-css
  actions:
    - text: Начать использовать
      link: /ru/getting-started/introduction
      theme: brand
    - text: GitHub
      link: https://github.com/yudinmaxim/ustatic-css
      theme: alt

features:
  - title: Единая система токенов
    details: Консистентность между микрофронтендами благодаря общей дизайн-системе.
  - title: Модульная загрузка
    details: Загружайте только нужные модули. Делайте это в рантайме.
  - title: Рантайм-активация
    details: Загружайте модули только там, где это нужно.
  - title: SSR-совместимость
    details: Безопасно работает на сервере и в браузере.
---

## Быстрый пример

Ниже показан пример карточки с flexbox. Попробуйте навести на кнопку — работает hover-эффект!

::: component-view
<div class="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-base">
  <span class="text-lg font-semibold text-gray-800">Header</span>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-base hover:bg-blue-600 active:pulse cursor-pointer">
    Press me
  </button>
</div>
:::

## Доступно 350+ классов

- **Типографика**: размеры, вес, цвета текста
- **Отступы**: margin и padding со всех сторон
- **Flexbox**: выравнивание, направление, gap
- **Grid**: сетки с автоматическим колонками
- **Позиционирование**: relative, absolute, fixed, z-index
- **Фон и границы**: цвета, прозрачность, скругления
- **Анимации**: вращение, мигание, подчёркивание
- **И многое другое...**
