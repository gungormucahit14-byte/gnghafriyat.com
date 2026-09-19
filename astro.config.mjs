// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// GNG Hafriyat - gnghafriyat.com - Static SSG, Cloudflare Pages uyumlu
export default defineConfig({
  site: 'https://gnghafriyat.com',
  output: 'static',
  integrations: [sitemap()],
});
