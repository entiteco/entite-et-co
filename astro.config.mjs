// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.entite.co',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'always',
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [
    react(),
    // La page 404 (noindex) est exclue du sitemap.
    sitemap({ filter: (page) => !/\/404\/?$/.test(page) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
