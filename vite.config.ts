import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/auth-components/' : '/',
  plugins: [react(), vanillaExtractPlugin(), TanStackRouterVite()],
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
        find: '@/routes',
        replacement: '/src/routes',
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
