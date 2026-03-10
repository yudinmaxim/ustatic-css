import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  base: '/style-framework/',
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),

        '/home/maxim/Projects/personal-projects/style-framework/',
      ]
    },
    watch: {
      useFsEvents: true,
      usePolling: true
    },
  }
})