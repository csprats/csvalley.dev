import { defineConfig } from 'vite'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// Define __dirname para que funcione en entornos de módulo ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  server: {
    port: 3000,
    open: false,
  },

  build: {
    rollupOptions: {
      input: {
        what: path.resolve(__dirname, 'writter.html'),
        writter: path.resolve(__dirname, 'src/valley-writter/index.html'),
      },
    },
  },
});