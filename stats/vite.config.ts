import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'remote_stats_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Stats': './src/components/Stats'
      },
      shared: ['react','react-dom', 'tailwindcss']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 7000,
    strictPort: true
  },
  preview: {
    port: 7000,
    strictPort: true
  }
})
