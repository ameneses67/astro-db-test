export const prerender = false;

import { db, Category, eq } from "astro:db";
import type { APIRoute } from "astro";

import { imageFileValidation } from "@libs/utils";

export const GET: APIRoute = async ({ request, redirect }) => {
	const url = new URL(request.url);
	const id = url.searchParams.get("id");
	const name = url.searchParams.get("name");

	if (id) {
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
	}

	if (name) {
		const category = await db.select().from(Category).where(eq(Category.name, name));

		if (!category.length) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(category), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=utf-8",
			},
		});
	}

	const categories = await db.select().from(Category);

	if (!categories.length) {
		return redirect("/404", 307);
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
		return new Response(
			JSON.stringify({
				message: "El nombre de la categoría es requerido.",
			}),
			{ status: 400 },
		);
	}

	const catExits = await db.select().from(Category).where(eq(Category.name, name));

	if (catExits.length) {
		return new Response(
			JSON.stringify({
				message: `La categoría '${name}' ya existe`,
			}),
			{ status: 400 },
		);
	}

	if (typeof description !== "string" || !description) {
		return new Response(
			JSON.stringify({
				message: "La descripción de la categoría es requerida.",
			}),
			{ status: 400 },
		);
	}

	if (typeof imagePath !== "string" || !imagePath) {
		return new Response(
			JSON.stringify({
				message: "La imagen de la categoría es requerida.",
			}),
			{ status: 400 },
		);
	}

	if (!imageFileValidation(imagePath)) {
		return new Response(
			JSON.stringify({
				message:
					"El formato del archivo de imagen no es válido. Formatos válidos: jpg, png, gif, webp, avif.",
			}),
			{ status: 400 },
		);
	}

	await db.insert(Category).values({ name, description, imagePath });

	return new Response(JSON.stringify(body), {
		status: 201,
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		},
	});
};
