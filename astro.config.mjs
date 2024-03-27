import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["images.unsplash.com"],
	},
	integrations: [tailwind(), db()],
	output: "hybrid",
	adapter: vercel(),
});
