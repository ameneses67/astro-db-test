/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui"), require("@tailwindcss/forms")],
	daisyui: {
		themes: ["fantasy", "dracula"],
		darkTheme: "dracula",
	},
};
