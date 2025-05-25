import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures files are output to the correct directory
    emptyOutDir: true, // Cleans up previous builds for fresh deployment
  },
});
