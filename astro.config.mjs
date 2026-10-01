import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://niooconsulting.com',
  // Site 100 % statique : aucun adaptateur SSR requis.
  // Déploiement cible : Cloudflare Pages (sert le dossier dist/).
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
