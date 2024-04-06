// Render mode
export const prerender = false;

// Astro db
import { db, Category } from "astro:db";

// Astro api
import type { APIRoute } from "astro";

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

	if (
		typeof name === "string" &&
		typeof description === "string" &&
		typeof imagePath === "string"
	) {
		await db
			.insert(Category)
			.values({ name: name.toLowerCase(), description, imagePath });
	} else {
		throw new Error("Category fields are not strings.");
	}

	return new Response(
		JSON.stringify({
			message: "Category added successfully!",
		}),
		{ status: 200 }
	);
};
