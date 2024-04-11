import { z } from "zod";

export const categorySchema = z.object({
	name: z
		.string()
		.min(1, { message: "El nombre de la categoría es requerido" })
		.toLowerCase(),
	description: z
		.string()
		.min(1, { message: "La descripción de la categoría es requerida" }),
	imagePath: z
		.string({ required_error: "El archivo de la imagen es requerdio" })
		.regex(
			/[^\s]+(.*?).(jpg|jpeg|png|gif|webp|avif|JPG|JPEG|PNG|GIF|WEBP|AVIF)$/,
			{ message: "Los formatos válidos son jpg, png, gif, webp, avif" }
		),
});
