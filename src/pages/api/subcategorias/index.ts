export const prerender = false;

import { Category, db, eq, Subcategory } from "astro:db";
import type { APIRoute } from "astro";

import { imageFileValidation } from "@libs/utils";

export const GET: APIRoute = async ({ request, redirect }) => {
	const url = new URL(request.url);
	const categoryId = url.searchParams.get("categoryId");

	if (categoryId) {
		const subcategories = await db
			.select()
			.from(Subcategory)
			.innerJoin(Category, eq(Subcategory.categoryId, Category.id))
			.where(eq(Subcategory.categoryId, parseInt(categoryId)));

		if (subcategories.length < 1) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(subcategories), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	const subcategories = await db
		.select()
		.from(Subcategory)
		.innerJoin(Category, eq(Subcategory.categoryId, Category.id));

	if (subcategories.length < 1) {
		return redirect("/404", 307);
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
			},
		);
	}

	if (typeof description !== "string" || !description) {
		return new Response(
			JSON.stringify({
				message: "La descripción de la subcategoría es requerido.",
			}),
			{
				status: 400,
			},
		);
	}

	if (typeof imagePath !== "string" || !imagePath || !imageFileValidation(imagePath)) {
		return new Response(
			JSON.stringify({
				message: "El formato de la imagen es inválido.",
			}),
			{
				status: 400,
			},
		);
	}

	if (typeof categoryId !== "number" || !categoryId) {
		return new Response(
			JSON.stringify({
				message: "El id de la categoría es requerido.",
			}),
			{
				status: 400,
			},
		);
	}

	await db
		.insert(Subcategory)
		.values({ name: name.toLowerCase(), description, imagePath, categoryId });

	return new Response(
		JSON.stringify({
			message: "¡Subcategoría creada exitosamente!",
		}),
		{ status: 200 },
	);
};
