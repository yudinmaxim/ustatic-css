// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@vitejs/plugin-vue'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      vue()
    ]
  }
})
