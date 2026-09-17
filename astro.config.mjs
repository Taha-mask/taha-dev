// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Needed for absolute canonical/hreflang URLs in Layout.astro. This has to
  // be a domain this project actually serves: taha-dev.vercel.app belongs to
  // someone else, so every canonical, hreflang and og:url tag was pointing
  // search engines and link previews at a stranger's page.
  site: 'https://taha-dev-cv.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
