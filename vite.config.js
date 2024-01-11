// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://prasad-2004.github.io/my_personal_webpage",
  plugins: [react()],
})
