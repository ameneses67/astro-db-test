import { column, defineDb, defineTable, NOW } from "astro:db";

const Category = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		name: column.text(),
	},
});

const Subcategory = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		name: column.text(),
		categoryId: column.number({ references: () => Category.columns.id }),
	},
});

const Brand = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		name: column.text(),
	},
});

const Size = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		code: column.text(),
		description: column.text(),
	},
});

const Color = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		code: column.text(),
		description: column.text(),
	},
});

const Product = defineTable({
	columns: {
		id: column.number({ primaryKey: true, unique: true }),
		name: column.text(),
		description: column.text(),
		brandId: column.number({
			references: () => Brand.columns.id,
			optional: true,
		}),
		categoryId: column.number({ references: () => Category.columns.id }),
		subcategoryId: column.number({ references: () => Subcategory.columns.id }),
		price: column.number(),
		sizeId: column.number({
			references: () => Size.columns.id,
			optional: true,
		}),
		colorId: column.number({
			references: () => Color.columns.id,
			optional: true,
		}),
		image: column.text(),
		published: column.date({ default: NOW }),
	},
});

export default defineDb({
	tables: { Category, Subcategory, Size, Color, Product, Brand },
});
