// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'uStatic CSS',
      description: 'Утилитарный CSS-фреймворк для быстрой разработки интерфейсов',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/yudinmaxim/ustatic-css' },
      ],
      locales: {
        ru: { label: 'Русский', lang: 'ru' },
        en: { label: 'English', lang: 'en' },
      },
      defaultLocale: 'ru',
      customCss: ['./src/styles/custom.css'],
    }),
  ],
})
