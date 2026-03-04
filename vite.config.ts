/// <reference types="vitest/config" />
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name } from './package.json'
import { fileURLToPath } from 'node:url'
import { playwright } from '@vitest/browser-playwright'
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
const entries = {
  index: resolve(__dirname, './src/index.ts'),
  vars: resolve(__dirname, './src/css/assets/tokens/_vars.scss'),
  // Отдельные модули
  align: resolve(__dirname, './src/css/modules/align/index.scss'),
  animations: resolve(__dirname, './src/css/modules/animations/index.scss'),
  base: resolve(__dirname, './src/css/modules/base/index.scss'),
  bg: resolve(__dirname, './src/css/modules/bg/index.scss'),
  border: resolve(__dirname, './src/css/modules/border/index.scss'),
  cursor: resolve(__dirname, './src/css/modules/cursor/index.scss'),
  display: resolve(__dirname, './src/css/modules/display/index.scss'),
  effects: resolve(__dirname, './src/css/modules/effects/index.scss'),
  filters: resolve(__dirname, './src/css/modules/filters/index.scss'),
  flexbox: resolve(__dirname, './src/css/modules/flexbox/index.scss'),
  grid: resolve(__dirname, './src/css/modules/grid/index.scss'),
  hide: resolve(__dirname, './src/css/modules/hide/index.scss'),
  interactivity: resolve(__dirname, './src/css/modules/interactivity/index.scss'),
  outline: resolve(__dirname, './src/css/modules/outline/index.scss'),
  position: resolve(__dirname, './src/css/modules/position/index.scss'),
  scroll: resolve(__dirname, './src/css/modules/scroll/index.scss'),
  sizing: resolve(__dirname, './src/css/modules/sizing/index.scss'),
  spacing: resolve(__dirname, './src/css/modules/spacing/index.scss'),
  typography: resolve(__dirname, './src/css/modules/typography/index.scss'),
  // Все модули вместе
  'ustatic': resolve(__dirname, './src/css/index.scss')
}
export default defineConfig({
  base: './',
  plugins: [ dts({
    tsconfigPath: path.join(__dirname, 'tsconfig.json'),
    outDir: './dist/types'
  }) ],
  build: {
    minify: process.env.NODE_ENV === 'production',
    emptyOutDir: true,
    cssCodeSplit: true,
    cssMinify: process.env.NODE_ENV === 'production',
    lib: {
      name,
      entry: entries,
      fileName: 'index',
      formats: [ 'es', 'cjs' ]
    },
    rollupOptions: {
      output: {
        entryFileNames: chunkInfo => {
          // Разделяем JS файлы по директориям в зависимости от точки входа
          if (chunkInfo.name !== 'index') {
            return 'css/[name].js'
          }
          return 'js/[name].[format].js'
        },
        assetFileNames: assetInfo => {
          // Разделяем CSS файлы по директориям
          if (assetInfo.name?.endsWith('.css')) {
            // Определяем, к какой точке входа относится файл
            if (assetInfo.name.includes('vars')) {
              return 'css/vars.css'
            }
            // Для остальных модулей создаем отдельные файлы
            const moduleName = assetInfo.name.replace('.css', '')
            // Для ustatic создаем отдельный файл
            if (moduleName === 'ustatic') {
              return 'css/ustatic.css'
            }
            return `css/modules/${moduleName}.css`
          }
          return 'assets/[name][extname]'
        }
      }
    },
    target: 'esnext'
  }
})