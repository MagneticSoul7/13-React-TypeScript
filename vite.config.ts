import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   envDir: './env',
//   plugins: [react()],
// });



export default defineConfig({
  envDir: './env',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:0.0.0.0.',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
