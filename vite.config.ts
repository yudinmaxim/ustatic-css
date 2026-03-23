import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name } from './package.json'
import { fileURLToPath } from 'node:url'
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const entries = {
  index: resolve(dirname, './src/index.ts'),

  vars: resolve(dirname, './src/css/assets/tokens/_ustatic-vars.scss'),
  // Все модули вместе
  'ustatic': resolve(dirname, './src/css/ustatic-index.scss'),

  // Отдельные модули
  align: resolve(dirname, './src/css/modules/align/index.scss'),
  animations: resolve(dirname, './src/css/modules/animations/index.scss'),
  base: resolve(dirname, './src/css/modules/base/index.scss'),
  bg: resolve(dirname, './src/css/modules/bg/index.scss'),
  border: resolve(dirname, './src/css/modules/border/index.scss'),
  cursor: resolve(dirname, './src/css/modules/cursor/index.scss'),
  display: resolve(dirname, './src/css/modules/display/index.scss'),
  effects: resolve(dirname, './src/css/modules/effects/index.scss'),
  filters: resolve(dirname, './src/css/modules/filters/index.scss'),
  flexbox: resolve(dirname, './src/css/modules/flexbox/index.scss'),
  grid: resolve(dirname, './src/css/modules/grid/index.scss'),
  hide: resolve(dirname, './src/css/modules/hide/index.scss'),
  interactivity: resolve(dirname, './src/css/modules/interactivity/index.scss'),
  outline: resolve(dirname, './src/css/modules/outline/index.scss'),
  position: resolve(dirname, './src/css/modules/position/index.scss'),
  scroll: resolve(dirname, './src/css/modules/scroll/index.scss'),
  sizing: resolve(dirname, './src/css/modules/sizing/index.scss'),
  spacing: resolve(dirname, './src/css/modules/spacing/index.scss'),
  typography: resolve(dirname, './src/css/modules/typography/index.scss')
}
export default defineConfig({
  base: './',
  plugins: [ dts({
    tsconfigPath: path.join(dirname, 'tsconfig.json'),
    outDir: './dist/types'
  }) ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/css'),
      '@scripts': `${path.resolve(__dirname, './src/utils')}`,
    }
  },
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
              return 'css/ustatic-vars.css'
            }
            // Для остальных модулей создаем отдельные файлы
            const moduleName = assetInfo.name.replace('.css', '')
            // Для ustatic создаем отдельный файл
            if (moduleName === 'ustatic' || moduleName === 'ustatic-index') {
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