import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export const formatCurr = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "USD",
});

export const slugify = (str: string) => {
	return String(str)
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-");
};

export const uniqueId = () => {
	const dateString = Date.now().toString(36);
	const randomness = Math.random().toString(36).substring(2);
	return dateString + randomness;
};

interface Array {
	id: string;
	name: string;
	description: string;
	imagePath: string;
	published: Date;
}

export const removeDuplicates = (array: Array[]) => {
	const jsonObject = array.map((el) => JSON.stringify(el));
	const uniqueSet = new Set(jsonObject);
	return Array.from(uniqueSet).map((el) => JSON.parse(el));
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getFormattedDate = (date: Date) =>
	date
		? new Date(date).toLocaleDateString("es-MX", {
				year: "numeric",
				month: "short",
				day: "numeric",
		  })
		: "";

export const imageFileValidation = (str: string): boolean => {
	const regex = new RegExp(
		/[^\s]+(.*?).(jpg|jpeg|png|gif|webp|avif|JPG|JPEG|PNG|GIF|WEBP|AVIF)$/
	);

	if (str === null) {
		return false;
	}

	if (regex.test(str) === true) {
		return true;
	} else {
		return false;
	}
};
