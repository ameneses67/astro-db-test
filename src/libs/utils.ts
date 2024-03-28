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
