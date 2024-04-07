// Render mode
export const prerender = false;

// Astro db
import { db, Category } from "astro:db";

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
			"Content-Type": "application/json",
		},
	});
};

export const POST: APIRoute = async ({ request }) => {
	const newCatData = await request.formData();
	const name = newCatData.get("name");
	const description = newCatData.get("description");
	const imagePath = newCatData.get("imagePath");

	if (typeof name !== "string" || !name) {
		return new Response(
			JSON.stringify({
				message: "El nombre de categoría es requerido.",
			}),
			{ status: 400 }
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
				message: "El formate del archivo de imagen no es válido.",
			}),
			{ status: 400 }
		);
	}

	await db.insert(Category).values({ name, description, imagePath });

	return new Response(
		JSON.stringify({
			message: "¡Categoría creada exitosamente!",
		}),
		{ status: 200 }
	);
};
