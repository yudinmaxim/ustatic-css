import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@utypes': resolve(__dirname, 'src/types'),
      '@components': resolve(__dirname, 'src/components'),
      '@ui-kit': resolve(__dirname, 'src/ui-kit')
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  // В dev dev режиме используем '/', в build - '/style-framework/'
  base: process.env.NODE_ENV === 'production' ? '/style-framework/' : '/',
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