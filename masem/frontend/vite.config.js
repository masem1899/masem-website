import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // ✅ plugin import

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportAsDefault: false }), // ✅ this is key
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
