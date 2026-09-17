// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Needed for absolute canonical/hreflang URLs in Layout.astro.
  site: 'https://taha-dev.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
