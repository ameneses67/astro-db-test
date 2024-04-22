export const prerender = false;

import type { APIRoute } from "astro";
import { Brand, db, eq, Product, Size } from "astro:db";

export const GET: APIRoute = async ({ request, redirect }) => {
	const url = new URL(request.url);
	const id = url.searchParams.get("id");
	const name = url.searchParams.get("name");

	if (id) {
		const product = await db
			.select()
			.from(Product)
			.where(eq(Product.id, parseInt(id)))
			.innerJoin(Brand, eq(Product.brandId, Brand.id))
			.innerJoin(Size, eq(Product.sizeId, Size.id));

		if (!product) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(product), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	if (name) {
		const product = await db
			.select()
			.from(Product)
			.where(eq(Product.name, name))
			.innerJoin(Brand, eq(Product.brandId, Brand.id))
			.innerJoin(Size, eq(Product.sizeId, Size.id));

		if (!product) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(product), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	const products = await db
		.select()
		.from(Product)
		.innerJoin(Brand, eq(Product.brandId, Brand.id))
		.innerJoin(Size, eq(Product.sizeId, Size.id));

	if (products.length < 1) {
		return redirect("/404", 307);
	}

	return new Response(JSON.stringify(products), {
		status: 200,
		headers: {
			"Content-Type": "application/json; charset=UTF-8",
		},
	});
};
