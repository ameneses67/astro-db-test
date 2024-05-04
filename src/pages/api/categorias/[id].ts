export const prerender = false;
import type { APIRoute } from "astro";
import { db, eq, Category } from "astro:db";

export const GET: APIRoute = async ({ params, redirect }) => {
	const id = params.id;

	if (!id) {
		return new Response(
			JSON.stringify({
				message: "No se proporcionó ningún ID.",
			}),
			{ status: 400 },
		);
	}

	const category = await db
		.select()
		.from(Category)
		.where(eq(Category.id, parseInt(id)));

	if (!category.length) {
		return redirect("/404", 307);
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
		return new Response(
			JSON.stringify({
				message: "No se proporcionó ningún ID.",
			}),
			{ status: 400 },
		);
	}

	await db.delete(Category).where(eq(Category.id, parseInt(id)));

	return new Response(
		JSON.stringify({
			message: "¡Categoría borrada exitosamente!",
		}),
		{ status: 200 },
	);
};

export const PATCH: APIRoute = async ({ request, params }) => {
	const id = params.id;
	const body = await request.json();

	if (!id) {
		return new Response(
			JSON.stringify({
				message: "No se proporcionó ningún ID.",
			}),
			{ status: 400 },
		);
	}

	await db
		.update(Category)
		.set(body)
		.where(eq(Category.id, parseInt(id)))
		.returning({ updatedId: Category.id });

	return new Response(JSON.stringify(body), { status: 200 });
};
