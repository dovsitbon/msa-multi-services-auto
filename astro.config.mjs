// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://msa-multi-services-auto.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('404') })],
  vite: { plugins: [tailwindcss()] },
});
