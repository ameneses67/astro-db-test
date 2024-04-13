// Render mode
export const prerender = false;

// Astro db
import { db, Category, eq } from "astro:db";

// Astro api
import type { APIRoute } from "astro";
import { imageFileValidation } from "@libs/utils";

export const GET: APIRoute = async () => {
	const categories = await db.select().from(Category);

	if (categories.length < 1) {
		return new Response(null, {
			status: 404,
			statusText: "Categories not found",
		});
	}

	return new Response(JSON.stringify(categories), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
};

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json();
	const { name, description, imagePath } = body;

	if (typeof name !== "string" || !name) {
		throw new Error("El nombre de la categoría es requerido.");
	}

	const catExits = await db
		.select()
		.from(Category)
		.where(eq(Category.name, name));

	if (catExits.length > 0) {
		return new Response(
			JSON.stringify({
				message: "Esta categoría ya existe",
			}),
			{
				status: 200,
			}
		);
	}

	if (typeof description !== "string" || !description) {
		return new Response(
			JSON.stringify({
				message: "La descripción de la categoría es requerida.",
			}),
			{ status: 400 }
		);
	}

	if (
		typeof imagePath !== "string" ||
		!imagePath ||
		!imageFileValidation(imagePath)
	) {
		return new Response(
			JSON.stringify({
				message: "El formato del archivo de imagen no es válido.",
			}),
			{ status: 400 }
		);
	}

	await db.insert(Category).values({ name, description, imagePath });

	return new Response(
		JSON.stringify({
			message: "¡Categoría creada exitosamente!",
		}),
		{
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		}
	);
};
