import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://eficer.com',
  build: {
    inlineStylesheets: 'auto',
  },
});
