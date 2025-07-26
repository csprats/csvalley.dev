import { defineConfig } from 'vite';

export default defineConfig({
  // Aquí es donde especificarás tu directorio raíz
  // Por ejemplo, si tus archivos principales están en una carpeta llamada 'src':
  root: '.', 

  // O si tus archivos principales están en una carpeta llamada 'app':
  // root: 'app', 

  // También puedes añadir otras configuraciones del servidor si lo necesitas
  server: {
    port: 3000, // Puerto predeterminado de Vite
    open: false, // Abre el navegador automáticamente al iniciar el servidor
  }
});
