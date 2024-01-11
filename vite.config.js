// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "https://prasad-2004.github.io/my_personal_webpage",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [react()],
})
