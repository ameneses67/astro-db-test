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
	const id = Number(params.id);

	if (!id) {
		return new Response(null, {
			status: 404,
			statusText: "No se proporcionó ningún id.",
		});
	}

	await db.delete(Category).where(eq(Category.id, id));

	return new Response(null, {
		status: 204,
		statusText: "Categoría borrada exitosamente.",
	});
};

export const PATCH: APIRoute = async ({ request, params }) => {
	const id = Number(params.id);
	const body = await request.json();

	console.log(id);
	console.log(body);

	return new Response(
		JSON.stringify({
			message: "La categoría se ha actualizado con éxito.",
		})
	);
};
