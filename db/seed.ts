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
		{
			name: "ropa",
			description: "Lo último en moda",
			imagePath: "desfile-modas.jpg",
		},
		{
			name: "cuidado personal",
			description: "Todo para el cuidado de la mujer",
			imagePath: "mascarilla-aguacate.jpg",
		},
		{
			name: "joyería",
			description: "Joyería fina garantizada",
			imagePath: "joyeria.jpg",
		},
	]);

	await db.insert(Subcategory).values([
		{
			name: "vestidos",
			description: "Vestidos",
			categoryId: 1,
			imagePath: "vestidos.jpg",
		},
		{
			name: "blusas",
			description: "Blusas",
			categoryId: 1,
			imagePath: "blusas.jpg",
		},
		{
			name: "higiene",
			description: "Higiene personal",
			categoryId: 2,
			imagePath: "higiene-corporal.png",
		},
		{
			name: "cuidado de la piel",
			description: "Cuidado de la piel",
			categoryId: 2,
			imagePath: "cuidado-de-la-piel.webp",
		},
		{
			name: "belleza",
			description: "Productos de belleza",
			categoryId: 2,
			imagePath: "belleza.jpg",
		},
		{
			name: "pulseras",
			description: "Pulseras y brazaletes",
			categoryId: 3,
			imagePath: "pulseras.jpg",
		},
		{
			name: "collares",
			description: "Collares y diges",
			categoryId: 3,
			imagePath: "collares.webp",
		},
		{
			name: "anillos",
			description: "Anillos",
			categoryId: 3,
			imagePath: "anillos.jpg",
		},
	]);

	await db
		.insert(Brand)
		.values([
			{ name: "Tommy Hilfiger" },
			{ name: "DKNY" },
			{ name: "Calvin Klein" },
		]);

	await db.insert(Size).values([
		{ code: "ch", description: "Chico" },
		{ code: "m", description: "Mediano" },
		{ code: "g", description: "Grande" },
		{ code: "eg", description: "Extra Grande" },
	]);

	await db.insert(Color).values([
		{ code: "red", description: "Rojo" },
		{ code: "blue", description: "Azul" },
		{ code: "green", description: "Verde" },
		{ code: "black", description: "Negro" },
	]);

	await db.insert(Product).values([
		{
			name: "blusa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu.",
			brandId: 1,
			categoryId: 1,
			subcategoryId: 2,
			price: 650,
			sizeId: 1,
			colorId: 1,
			image: "blusa-roja.jpg",
		},
		{
			name: "blusa",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
			brandId: 2,
			categoryId: 1,
			subcategoryId: 2,
			price: 480,
			sizeId: 4,
			colorId: 2,
			image: "blusa-azul.jpg",
		},
		{
			name: "pantalón",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt luctus lectus et euismod. Nulla.",
			brandId: 3,
			categoryId: 1,
			subcategoryId: 1,
			price: 550,
			sizeId: 3,
			colorId: 4,
			image: "pantalon-negro.jpg",
		},
		{
			name: "suéter",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			categoryId: 1,
			subcategoryId: 2,
			price: 740,
			sizeId: 2,
			colorId: 3,
			image: "sueter-verde.jpg",
		},
		{
			name: "shampoo para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt lorem.",
			categoryId: 2,
			subcategoryId: 3,
			price: 130,
			image: "shampoo-acondicionador.jpg",
		},
		{
			name: "acondicionador para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada finibus turpis sit amet tincidunt. Aliquam erat volutpat. Donec tincidunt.",
			categoryId: 2,
			subcategoryId: 3,
			price: 160,
			image: "acondicionador-cabello.jpg",
		},
		{
			name: "crema corporal aroma castaña",
			description: "Lorem ipsum dolor sit.",
			categoryId: 2,
			subcategoryId: 4,
			price: 185,
			image: "crema-nivea.jpg",
		},
		{
			name: "maquillaje transparente",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rhoncus massa eu.",
			categoryId: 2,
			subcategoryId: 5,
			price: 185,
			image: "juego-maquillaje.jpg",
		},
		{
			name: "rimel extra grueso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris.",
			categoryId: 2,
			subcategoryId: 5,
			price: 185,
			colorId: 4,
			image: "rimel.jpg",
		},
		{
			name: "pulsera chapa de oro con rodio",
			description: "Lorem ipsum dolor sit amet.",
			categoryId: 3,
			subcategoryId: 6,
			price: 480,
			image: "brazalete-piedras.jpg",
		},
		{
			name: "collar de finas perlas",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
			categoryId: 3,
			subcategoryId: 7,
			price: 1450,
			image: "juego-collares.jpg",
		},
		{
			name: "juego de anillos de matrimonio",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam sit amet tortor.",
			categoryId: 3,
			subcategoryId: 8,
			price: 2600,
			image: "anillos-matrimonio.jpg",
		},
	]);
}
