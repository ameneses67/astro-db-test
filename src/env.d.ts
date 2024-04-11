/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />

export type CategoryType = {
	id: number;
	name: string;
	description: string;
	imagePath: string;
	published: Date;
};

export type SubcategoryType = {
	id: number;
	name: string;
	description: string;
	imagePath: string;
	categoryId: number;
	published: Date;
};
