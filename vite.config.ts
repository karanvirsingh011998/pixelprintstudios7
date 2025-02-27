import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pixelprintstudios7",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
