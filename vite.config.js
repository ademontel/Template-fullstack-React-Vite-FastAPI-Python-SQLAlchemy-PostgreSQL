import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esto permite que se escuche desde fuera del contenedor
    port: 5173  // Este es el puerto que ya tenías mapeado
  }
})
