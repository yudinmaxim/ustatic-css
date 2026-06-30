// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://yudinmaxim.github.io",
  base: "/ustatic-css/",
  integrations: [
    starlight({
      title: "uStatic CSS",
      description:
        "Утилитарный CSS-фреймворк для быстрой разработки интерфейсов",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/yudinmaxim/ustatic-css",
        },
      ],
      locales: {
        ru: { label: "Русский", lang: "ru" },
        en: { label: "English", lang: "en" },
      },
      defaultLocale: "ru",
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Начало работы",
          translations: { ru: "Начало работы", en: "Getting Started" },
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Модули",
          translations: { ru: "Модули", en: "Modules" },
          autogenerate: { directory: "modules" },
        },
        {
          label: "Гайды",
          translations: { ru: "Гайды", en: "Guides" },
          autogenerate: { directory: "guides" },
        },
        {
          label: "API",
          translations: { ru: "API", en: "API" },
          autogenerate: { directory: "api" },
        },
        {
          label: "Справочник",
          translations: { ru: "Справочник", en: "Reference" },
          autogenerate: { directory: "reference" },
        },
        {
          label: "Оформление",
          translations: { ru: "Оформление", en: "Appearance" },
          autogenerate: { directory: "appearance" },
        },
      ],
    }),
  ],
});
