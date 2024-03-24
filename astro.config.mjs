import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["images.unsplash.com"],
	},
	integrations: [tailwind(), db()],
});
