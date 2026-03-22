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
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Введение', slug: 'getting-started/introduction' },
            { label: 'Установка', slug: 'getting-started/installation' },
            { label: 'Быстрый старт', slug: 'getting-started/quick-start' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Использование CSS-классов', slug: 'guides/css-classes' },
            { label: 'Загрузка стилей в рантайме', slug: 'guides/runtime-loading' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'API',
          items: [
            { label: 'useCssProperties', slug: 'api/use-css-properties' },
            { label: 'useTokens', slug: 'api/use-tokens' },
          ],
        },
      ],
    }),
  ],
})
