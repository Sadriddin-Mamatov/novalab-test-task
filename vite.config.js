import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [
    jsconfigPaths(),
    svgr(),
    react(),
    checker({
      javascript: true,
    }),
  ],
});
