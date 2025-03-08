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
      name: 'app_shell',
      remotes: {
        overviewApp: 'http://localhost:5000/assets/remoteEntry.js',
        statsApp: 'http://localhost:7000/assets/remoteEntry.js'
      },
      shared: ['react','react-dom', 'tailwindcss']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
