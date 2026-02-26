import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { name } from './package.json'

export default defineConfig({
  base: './',
  plugins: [
    dts({
      tsconfigPath: path.
        join(__dirname, 'tsconfig.json'),
    })
  ],
  build: {
    minify: false,
    emptyOutDir: true,
    cssCodeSplit: true,
    cssMinify: process.env.NODE_ENV === 'production',
    lib: {
      name,
      entry: path.resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      formats: [ 'es', 'cjs' ],
    },
    rollupOptions: {
      output: {
        assetFileNames: () => {
          return 'css/assets/[name][extname]'
        },
      },
    },
    target: 'esnext',
  }
})
