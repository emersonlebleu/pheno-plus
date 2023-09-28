import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/phenoplus/oauth2/redirect/'
  build: {
    rollupOptions: {
      input: ['index.html', 'startVue.html']
    }
  },
})
