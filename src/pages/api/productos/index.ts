export const prerender = false;

import type { APIRoute } from "astro";
import { Brand, db, eq, Product, Size } from "astro:db";

export const GET: APIRoute = async ({ request, redirect }) => {
	const url = new URL(request.url);
	console.log("url: ", url);
	const id = url.searchParams.get("id");
	const name = url.searchParams.get("name");
	const categoryId = url.searchParams.get("categoryId");
	const subcategoryId = url.searchParams.get("subcategoryId");

	if (id) {
		const product = await db
			.select()
			.from(Product)
			.leftJoin(Brand, eq(Product.brandId, Brand.id))
			.leftJoin(Size, eq(Product.sizeId, Size.id))
			.where(eq(Product.id, parseInt(id)));

		if (product.length < 1) {
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
			.leftJoin(Brand, eq(Product.brandId, Brand.id))
			.leftJoin(Size, eq(Product.sizeId, Size.id))
			.where(eq(Product.name, name));

		if (product.length < 1) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(product), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	if (categoryId) {
		const products = await db
			.select()
			.from(Product)
			.leftJoin(Brand, eq(Product.brandId, Brand.id))
			.leftJoin(Size, eq(Product.sizeId, Size.id))
			.where(eq(Product.categoryId, parseInt(categoryId)));

		if (products.length < 1) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(products), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	if (subcategoryId) {
		const products = await db
			.select()
			.from(Product)
			.leftJoin(Brand, eq(Product.brandId, Brand.id))
			.leftJoin(Size, eq(Product.sizeId, Size.id))
			.where(eq(Product.subcategoryId, parseInt(subcategoryId)));

		if (products.length < 1) {
			return redirect("/404", 307);
		}

		return new Response(JSON.stringify(products), {
			status: 200,
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});
	}

	const products = await db
		.select()
		.from(Product)
		.leftJoin(Brand, eq(Product.brandId, Brand.id))
		.leftJoin(Size, eq(Product.sizeId, Size.id));

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
