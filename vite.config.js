import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react-swc';

// Resto de la configuración...


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
})
