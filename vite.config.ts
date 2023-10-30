import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/auth-components/' : '/',
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@/components',
        replacement: '/src/components',
      },
      {
        find: '@/services',
        replacement: '/src/services',
      },
      {
        find: '@/pages',
        replacement: '/src/pages',
      },
      {
        find: '@/utils',
        replacement: '/src/utils',
      },
    ],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
    target: 'es2022',
  },
});
