export const prerender = false;
import type { APIRoute } from "astro";
import { db, eq, Category, Subcategory } from "astro:db";

export const GET: APIRoute = async ({ params }) => {
	const id = params.id;
	console.log(id);
	const subcategory = await db
		.select()
		.from(Subcategory)
		.where(eq(Subcategory.id, id as string));

	if (!subcategory) {
		return new Response(null, {
			status: 404,
			statusText: "Subcategory not found",
		});
	}

	return new Response(JSON.stringify(subcategory), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};

export const DELETE: APIRoute = async ({ params }) => {
	const id = params.id;

	if (!id) {
		return new Response(null, {
			status: 404,
			statusText: "No id provided",
		});
	}

	await db.delete(Subcategory).where(eq(Subcategory.id, id));

	return new Response(null, {
		status: 204,
	});
};
