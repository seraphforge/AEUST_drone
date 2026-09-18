// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production URL — required for sitemap, canonical URLs, and OG tags
  site: 'https://seraphforge.github.io',

  // Repository subdirectory — GitHub Pages project site
  // All asset and internal link paths will be prefixed with /AEUST_drone/
  base: '/AEUST_drone/',

  // Output: static site (default — no server-side rendering)
  output: 'static',
});
