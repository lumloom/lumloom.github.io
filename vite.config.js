import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base so the build works whether it's served from
  // https://<user>.github.io/ (user/org page) or
  // https://<user>.github.io/<repo>/ (project page).
  base: './',
})
