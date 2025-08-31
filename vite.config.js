import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ points to src folder
    },
  },
  server: {
    port: 5173,       // default dev server port
    open: true,       // opens browser automatically
  },
  build: {
    outDir: 'dist',   // build output folder
    sourcemap: true,  // optional: generates source maps
  },
});