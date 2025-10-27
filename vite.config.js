import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asegurar base correcta para deployments
  build: {
    outDir: 'dist',
    assetsDir: 'assets', // Cambiar de 'activos' a 'assets' para evitar caracteres especiales
    rollupOptions: {
      output: {
        // Evitar caracteres especiales en nombres de archivos
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  // Configuración para el servidor de desarrollo
  server: {
    port: 3000,
    open: true
  },
  // Optimizar dependencias
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
