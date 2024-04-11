import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import react from "@astrojs/react";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["images.unsplash.com"]
  },
  integrations: [tailwind(), db(), icon(), react(), simpleStackForm()],
  output: "hybrid",
  adapter: vercel()
});