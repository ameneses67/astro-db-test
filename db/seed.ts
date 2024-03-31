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
			id: "1",
			name: "ropa",
			description: "Lo último en moda",
			imagePath: "desfile-modas.jpg",
		},
		{
			id: "2",
			name: "cuidado personal",
			description: "Todo para el cuidado de la mujer",
			imagePath: "mascarilla-aguacate.jpg",
		},
		{
			id: "3",
			name: "joyería",
			description: "Joyería fina garantizada",
			imagePath: "joyeria.jpg",
		},
	]);

	await db.insert(Subcategory).values([
		{
			id: "1",
			name: "vestidos",
			description: "Vestidos",
			categoryId: "1",
			imagePath: "vestidos.jpg",
		},
		{
			id: "2",
			name: "blusas",
			description: "Blusas",
			categoryId: "1",
			imagePath: "blusas.jpg",
		},
		{
			id: "3",
			name: "higiene",
			description: "Higiene personal",
			categoryId: "2",
			imagePath: "higiene-corporal.png",
		},
		{
			id: "4",
			name: "cuidado de la piel",
			description: "Cuidado de la piel",
			categoryId: "2",
			imagePath: "cuidado-de-la-piel.webp",
		},
		{
			id: "5",
			name: "belleza",
			description: "Productos de belleza",
			categoryId: "2",
			imagePath: "belleza.jpg",
		},
		{
			id: "6",
			name: "pulseras",
			description: "Pulseras y brazaletes",
			categoryId: "3",
			imagePath: "pulseras.jpg",
		},
		{
			id: "7",
			name: "collares",
			description: "Collares y diges",
			categoryId: "3",
			imagePath: "collares.webp",
		},
		{
			id: "8",
			name: "anillos",
			description: "Anillos",
			categoryId: "3",
			imagePath: "anillos.jpg",
		},
	]);

	await db.insert(Brand).values([
		{ id: 1, name: "Tommy Hilfiger" },
		{ id: 2, name: "DKNY" },
		{ id: 3, name: "Calvin Klein" },
	]);

	await db.insert(Size).values([
		{ id: 1, code: "ch", description: "Chico" },
		{ id: 2, code: "m", description: "Mediano" },
		{ id: 3, code: "g", description: "Grande" },
		{ id: 4, code: "eg", description: "Extra Grande" },
	]);

	await db.insert(Color).values([
		{ id: 1, code: "red", description: "Rojo" },
		{ id: 2, code: "blue", description: "Azul" },
		{ id: 3, code: "green", description: "Verde" },
		{ id: 4, code: "black", description: "Negro" },
	]);

	await db.insert(Product).values([
		{
			id: "1",
			name: "blusa",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu.",
			brandId: 1,
			categoryId: "1",
			subcategoryId: "2",
			price: 650,
			sizeId: 1,
			colorId: 1,
			image: "blusa-roja.jpg",
		},
		{
			id: "2",
			name: "blusa",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
			brandId: 2,
			categoryId: "1",
			subcategoryId: "2",
			price: 480,
			sizeId: 4,
			colorId: 2,
			image: "blusa-azul.jpg",
		},
		{
			id: "3",
			name: "pantalón",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt luctus lectus et euismod. Nulla.",
			brandId: 3,
			categoryId: "1",
			subcategoryId: "1",
			price: 550,
			sizeId: 3,
			colorId: 4,
			image: "pantalon-negro.jpg",
		},
		{
			id: "4",
			name: "suéter",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			categoryId: "1",
			subcategoryId: "2",
			price: 740,
			sizeId: 2,
			colorId: 3,
			image: "sueter-verde.jpg",
		},
		{
			id: "5",
			name: "shampoo para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt lorem.",
			categoryId: "2",
			subcategoryId: "3",
			price: 130,
			image: "shampoo-acondicionador.jpg",
		},
		{
			id: "6",
			name: "acondicionador para pelo graso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada finibus turpis sit amet tincidunt. Aliquam erat volutpat. Donec tincidunt.",
			categoryId: "2",
			subcategoryId: "3",
			price: 160,
			image: "acondicionador-cabello.jpg",
		},
		{
			id: "7",
			name: "crema corporal aroma castaña",
			description: "Lorem ipsum dolor sit.",
			categoryId: "2",
			subcategoryId: "4",
			price: 185,
			image: "crema-nivea.jpg",
		},
		{
			id: "8",
			name: "maquillaje transparente",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rhoncus massa eu.",
			categoryId: "2",
			subcategoryId: "5",
			price: 185,
			image: "juego-maquillaje.jpg",
		},
		{
			id: "9",
			name: "rimel extra grueso",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris.",
			categoryId: "2",
			subcategoryId: "5",
			price: 185,
			colorId: 4,
			image: "rimel.jpg",
		},
		{
			id: "10",
			name: "pulsera chapa de oro con rodio",
			description: "Lorem ipsum dolor sit amet.",
			categoryId: "3",
			subcategoryId: "6",
			price: 480,
			image: "brazalete-piedras.jpg",
		},
		{
			id: "11",
			name: "collar de finas perlas",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
			categoryId: "3",
			subcategoryId: "7",
			price: 1450,
			image: "juego-collares.jpg",
		},
		{
			id: "12",
			name: "juego de anillos de matrimonio",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam sit amet tortor.",
			categoryId: "3",
			subcategoryId: "8",
			price: 2600,
			image: "anillos-matrimonio.jpg",
		},
	]);
}
