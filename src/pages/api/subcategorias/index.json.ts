export const prerender = false;

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
			"Content-Type": "application/json",
		},
	});
};

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	console.log("Desde api" + Object.fromEntries(data));
	const name = (data.get("name") as string).toLowerCase();
	const description = data.get("description");
	const imagePath = data.get("imagePath");
	const categoryId = data.get("categoryId");

	if (!name || !description || !imagePath || !categoryId) {
		return new Response(
			JSON.stringify({
				message: "All fields are required",
			}),
			{ status: 400 }
		);
	}

	if (
		typeof name === "string" &&
		typeof description === "string" &&
		typeof imagePath === "string" &&
		typeof categoryId === "string"
	) {
		await db
			.insert(Subcategory)
			.values({ name, description, imagePath, categoryId });
	}

	return new Response(
		JSON.stringify({
			message: "Success!",
		}),
		{ status: 200 }
	);
};
