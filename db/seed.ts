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
      name: "Ropa",
      description: "Lo último en moda",
      imagePath: "/src/assets/desfile-modas.jpg",
    },
    {
      id: "2",
      name: "Cuidado personal",
      description: "Todo para el cuidado de la mujer",
      imagePath: "/src/assets/mascarilla-aguacate.jpg",
    },
    {
      id: "3",
      name: "Joyería",
      description: "Joyería fina garantizada",
      imagePath: "/src/assets/joyeria.jpg",
    },
  ]);

  await db.insert(Subcategory).values([
    {
      id: "1",
      name: "Vestidos",
      description: "",
      categoryId: "1",
      imagePath: "/src/assets/vestidos.jpg",
    },
    {
      id: "2",
      name: "Blusas",
      description: "",
      categoryId: "1",
      imagePath: "/src/assets/blusas.jpg",
    },
    {
      id: "3",
      name: "Higiene",
      description: "",
      categoryId: "2",
      imagePath: "/src/assets/higiene-corporal.png",
    },
    {
      id: "4",
      name: "Cuidado de la piel",
      description: "",
      categoryId: "2",
      imagePath: "/src/assets/cuidado-de-la-piel.webp",
    },
    {
      id: "5",
      name: "Belleza",
      description: "",
      categoryId: "2",
      imagePath: "/src/assets/belleza.jpg",
    },
    {
      id: "6",
      name: "Pulseras",
      description: "",
      categoryId: "3",
      imagePath: "/src/assets/pulseras.jpg",
    },
    {
      id: "7",
      name: "Collares",
      description: "",
      categoryId: "3",
      imagePath: "/src/assets/collares.webp",
    },
    {
      id: "8",
      name: "Anillos",
      description: "",
      categoryId: "3",
      imagePath: "/src/assets/anillos.jpg",
    },
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
      id: "1",
      name: "Blusa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu.",
      brandId: 1,
      categoryId: "1",
      subcategoryId: "2",
      price: 650,
      sizeId: 1,
      colorId: 1,
      image: "/src/assets/blusa-roja.jpg",
    },
    {
      id: "2",
      name: "Blusa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      brandId: 2,
      categoryId: "1",
      subcategoryId: "2",
      price: 480,
      sizeId: 4,
      colorId: 2,
      image: "/src/assets/blusa-azul.jpg",
    },
    {
      id: "3",
      name: "Pantalón",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt luctus lectus et euismod. Nulla.",
      brandId: 3,
      categoryId: "1",
      subcategoryId: "1",
      price: 550,
      sizeId: 3,
      colorId: 4,
      image: "/src/assets/pantalon-negro.jpg",
    },
    {
      id: "4",
      name: "Suéter",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      categoryId: "1",
      subcategoryId: "2",
      price: 740,
      sizeId: 2,
      colorId: 3,
      image: "/src/assets/sueter-verde.jpg",
    },
    {
      id: "5",
      name: "Shampoo para pelo graso",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt lorem.",
      categoryId: "2",
      subcategoryId: "3",
      price: 130,
      image: "/src/assets/shampoo-acondicionador.jpg",
    },
    {
      id: "6",
      name: "Acondicionador para pelo graso",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada finibus turpis sit amet tincidunt. Aliquam erat volutpat. Donec tincidunt.",
      categoryId: "2",
      subcategoryId: "3",
      price: 160,
      image: "/src/assets/acondicionador-cabello.jpg",
    },
    {
      id: "7",
      name: "Crema corporal aroma castaña",
      description: "Lorem ipsum dolor sit.",
      categoryId: "2",
      subcategoryId: "4",
      price: 185,
      image: "/src/assets/crema-nivea.jpg",
    },
    {
      id: "8",
      name: "Maquillaje transparente",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat rhoncus massa eu.",
      categoryId: "2",
      subcategoryId: "5",
      price: 185,
      image: "/src/assets/juego-maquillaje.jpg",
    },
    {
      id: "9",
      name: "Rimel extra grueso",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mauris.",
      categoryId: "2",
      subcategoryId: "5",
      price: 185,
      colorId: 4,
      image: "/src/assets/rimel.jpg",
    },
    {
      id: "10",
      name: "Pulsera chapa de oro con rodio",
      description: "Lorem ipsum dolor sit amet.",
      categoryId: "3",
      subcategoryId: "6",
      price: 480,
      image: "/src/assets/brazalete-piedras.jpg",
    },
    {
      id: "11",
      name: "Collar de finas perlas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam.",
      categoryId: "3",
      subcategoryId: "7",
      price: 1450,
      image: "/src/assets/juego-collares.jpg",
    },
    {
      id: "12",
      name: "Juego de anillos de matrimonio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel diam sit amet tortor.",
      categoryId: "3",
      subcategoryId: "8",
      price: 2600,
      image: "/src/assets/anillos-matrimonio.jpg",
    },
  ]);
}
