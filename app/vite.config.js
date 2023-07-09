import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    outDir: 'public/dist',
    rollupOptions: {
      input: {
        js: '/resources/ts/app.ts',
        css: '/resources/scss/app.scss',
      },
      output: {
        entryFileNames: 'app.js',
        assetFileNames: 'app.css',
        preserveModules: false,
      },
    },
  },
});
