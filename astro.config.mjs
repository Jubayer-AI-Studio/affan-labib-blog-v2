import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://affan-labib-blog.vercel.app',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
