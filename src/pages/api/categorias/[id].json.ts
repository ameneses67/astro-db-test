export const prerender = false;
import type { APIRoute } from "astro";
import { db, eq, Category } from "astro:db";

export const GET: APIRoute = async ({ params }) => {
	const id = params.id;
	console.log(id);
	const category = await db
		.select()
		.from(Category)
		.where(eq(Category.id, id as string));

	if (!category) {
		return new Response(null, {
			status: 404,
			statusText: "Category not found",
		});
	}

	return new Response(JSON.stringify(category), {
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

	await db.delete(Category).where(eq(Category.id, id));

	return new Response(null, {
		status: 204,
	});
};
