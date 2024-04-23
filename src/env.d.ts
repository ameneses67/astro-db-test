/// <reference path="../.astro/db-types.d.ts" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="simple-stack-form/types" />

import type { Brand, Category, Product, Size, Subcategory } from "astro:db";

export type CategoryType = typeof Category.$inferSelect;

export type SubcategoryType = typeof Subcategory.$inferSelect;

export type BrandType = typeof Brand.$inferSelect;

export type SizeType = typeof Size.$inferSelect;

export type ProductType = typeof Product.$inferSelect;
