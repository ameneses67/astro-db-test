import {
	Category,
	Color,
	db,
	Product,
	Size,
	Subcategory,
	Brand,
} from "astro:db";

export default async function () {
	await db.insert(Category).values([
		{ id: 1, name: "Ropa" },
		{ id: 2, name: "Cuidado personal" },
		{ id: 3, name: "Joyería" },
	]);

	await db.insert(Subcategory).values([
		{ id: 1, name: "Vestidos", categoryId: 1 },
		{ id: 2, name: "Blusas", categoryId: 1 },
		{ id: 3, name: "Higiene", categoryId: 2 },
		{ id: 4, name: "Cuidado de la piel", categoryId: 2 },
		{ id: 5, name: "Belleza", categoryId: 2 },
		{ id: 6, name: "Pulseras", categoryId: 3 },
		{ id: 7, name: "Collares", categoryId: 3 },
		{ id: 8, name: "Anillos", categoryId: 3 },
	]);

	await db.insert(Brand).values([
		{ id: 1, name: "Tommy Hilfiger" },
		{ id: 2, name: "DKNY" },
		{ id: 3, name: "Calvin Klein" },
	]);

	await db.insert(Size).values([
		{ id: 1, code: "Ch", description: "Chico" },
		{ id: 2, code: "M", description: "Mediano" },
		{ id: 3, code: "G", description: "Grande" },
		{ id: 4, code: "EG", description: "Extra Grande" },
	]);

	await db.insert(Color).values([
		{ id: 1, code: "red", description: "Rojo" },
		{ id: 2, code: "blue", description: "Azul" },
		{ id: 3, code: "green", description: "Verde" },
		{ id: 4, code: "black", description: "Negro" },
	]);

	await db.insert(Product).values([
		{
			id: 1,
			name: "Blusa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu.",
			brandId: 1,
			categoryId: 1,
			subcategoryId: 2,
			price: 650,
			sizeId: 1,
			colorId: 1,
			image:
				"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			name: "Blusa",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
			brandId: 2,
			categoryId: 1,
			subcategoryId: 2,
			price: 480,
			sizeId: 4,
			colorId: 2,
			image:
				"https://images.unsplash.com/photo-1549220500-16dab6195201?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJsdXNhJTIwYXp1bHxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 3,
			name: "Pantalón",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt luctus lectus et euismod. Nulla.",
			brandId: 3,
			categoryId: 1,
			subcategoryId: 1,
			price: 550,
			sizeId: 3,
			colorId: 4,
			image:
				"https://images.unsplash.com/photo-1710431841620-503e763dc8a4?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			name: "Suéter",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			brandId: 1,
			categoryId: 1,
			subcategoryId: 2,
			price: 740,
			sizeId: 2,
			colorId: 3,
			image:
				"https://images.unsplash.com/photo-1676790225864-76c836e7b5d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdyZWVuJTIwc3dlYXRlcnxlbnwwfHwwfHx8MA%3D%3D",
		},
		{
			id: 5,
			name: "Shampoo para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt lorem.",
			categoryId: 2,
			subcategoryId: 3,
			price: 130,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 6,
			name: "Acondicionador para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada finibus turpis sit amet tincidunt. Aliquam erat volutpat. Donec tincidunt.",
			categoryId: 2,
			subcategoryId: 3,
			price: 160,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 7,
			name: "Crema corporal aroma castaña",
			description: "Lorem ipsum dolor sit.",
			categoryId: 2,
			subcategoryId: 4,
			price: 185,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 8,
			name: "Maquillaje transparente",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rhoncus massa eu.",
			categoryId: 2,
			subcategoryId: 5,
			price: 185,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 9,
			name: "Rimel extra grueso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris.",
			categoryId: 2,
			subcategoryId: 5,
			price: 185,
			colorId: 4,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 10,
			name: "Pulsera chapa de oro con rodio",
			description: "Lorem ipsum dolor sit amet.",
			categoryId: 3,
			subcategoryId: 6,
			price: 480,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 11,
			name: "Collar de finas perlas",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
			categoryId: 3,
			subcategoryId: 7,
			price: 1450,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 12,
			name: "Anillo de compromiso, oro 14K",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam sit amet tortor.",
			categoryId: 3,
			subcategoryId: 8,
			price: 2600,
			image:
				"https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
	]);
}
