export const prerender = false;

import type { APIRoute } from "astro";
import { db, Category } from "astro:db";

export const GET: APIRoute = async () => {
	const categories = await db.select().from(Category);

	if (!categories) {
		return new Response(null, {
			status: 404,
			statusText: "Categories not found",
		});
	}

	return new Response(JSON.stringify(categories), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
