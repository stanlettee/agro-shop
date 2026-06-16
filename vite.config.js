import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/agro-shop/',   // 👈 именно так, с двумя слэшами
  plugins: [react(), tailwindcss()],
})