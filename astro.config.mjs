import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  // if 使用 docker, 请将 adapter 切换到 node
  // adapter: node({
  //   mode: 'standalone'
  // }),
  adapter: vercel({
    analytics: true
  }),
  integrations: [react(), tailwind()],
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: 'prism'
  }
});