export const prerender = false;

import { imageFileValidation } from "@libs/utils";
import type { APIRoute } from "astro";
import { Category, db, eq, Subcategory } from "astro:db";

export const GET: APIRoute = async () => {
	const subcategories = await db
		.select()
		.from(Subcategory)
		.innerJoin(Category, eq(Subcategory.categoryId, Category.id));

	if (!subcategories) {
		return new Response(null, {
			status: 404,
			statusText: "Subategories not found",
		});
	}

	return new Response(JSON.stringify(subcategories), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
};

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	console.log("Desde api" + Object.fromEntries(data));
	const name = data.get("name");
	const description = data.get("description");
	const imagePath = data.get("imagePath");
	const categoryId = data.get("categoryId");

	if (typeof name !== "string" || !name) {
		return new Response(
			JSON.stringify({
				message: "El nombre de la subcatgoería es requerido.",
			}),
			{
				status: 400,
			}
		);
	}

	if (typeof description !== "string" || !description) {
		return new Response(
			JSON.stringify({
				message: "La descripción de la subcategoría es requerido.",
			}),
			{
				status: 400,
			}
		);
	}

	if (
		typeof imagePath !== "string" ||
		!imagePath ||
		!imageFileValidation(imagePath)
	) {
		return new Response(
			JSON.stringify({
				message: "El formato de la imagen es inválido.",
			}),
			{
				status: 400,
			}
		);
	}

	if (typeof categoryId !== "number" || !categoryId) {
		return new Response(
			JSON.stringify({
				message: "El id de la categoría es requerido.",
			}),
			{
				status: 400,
			}
		);
	}

	await db
		.insert(Subcategory)
		.values({ name: name.toLowerCase(), description, imagePath, categoryId });

	return new Response(
		JSON.stringify({
			message: "¡Subcategoría creada exitosamente!",
		}),
		{ status: 200 }
	);
};
