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
      name: 'remote_overview_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Overview': './src/components/Overview'
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
    port: 5000,
    strictPort: true
  },
  preview: {
    port: 5000,
    strictPort: true
  }
})
