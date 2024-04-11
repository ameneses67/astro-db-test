export const prerender = false;
import type { APIRoute } from "astro";
import { db, eq, Category } from "astro:db";

export const GET: APIRoute = async ({ params }) => {
	const id = Number(params.id);

	const category = await db.select().from(Category).where(eq(Category.id, id));

	if (!category) {
		return new Response(null, {
			status: 404,
			statusText: "No se encontró la categoría.",
		});
	}

	return new Response(JSON.stringify(category), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
};

export const DELETE: APIRoute = async ({ params }) => {
	const id = params.id;

	if (!id) {
		return new Response(null, {
			status: 404,
			statusText: "No se proporcionó ningún id.",
		});
	}

	await db.delete(Category).where(eq(Category.id, Number(id)));

	return new Response(null, {
		status: 204,
		statusText: "Categoría borrada exitosamente.",
	});
};
