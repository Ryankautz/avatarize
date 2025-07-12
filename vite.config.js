import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('development', process.cwd(), '');

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env': env
  },
  plugins: [react()],
  base : '/avatarize/',
  server: {
    open: true,
    port: 3001
  }
})
