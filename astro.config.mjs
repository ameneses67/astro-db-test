import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.unsplash.com"]
  },
  integrations: [tailwind(), db(), icon(), react()],
  output: "hybrid",
  adapter: vercel()
});