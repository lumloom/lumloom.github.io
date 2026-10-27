import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served from
  // https://<user>.github.io/ (user/org page) or
  // https://<user>.github.io/<repo>/ (project page).
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        account: fileURLToPath(new URL('./account.html', import.meta.url)),
      },
    },
  },
})
