import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.GITHUB_PAGES ? '/Rimigo/' : './',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
