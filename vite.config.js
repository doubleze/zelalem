import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zelalem/',
  server: {
    port: 3000,
    open: true,
    strictPort: true,
    hmr: {
      protocol: "ws",
    },
  },
})
