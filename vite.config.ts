import { defineConfig } from 'vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  root: __dirname,
  plugins: [vanillaExtractPlugin()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
