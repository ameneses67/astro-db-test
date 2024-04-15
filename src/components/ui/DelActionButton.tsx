import { Category, db, eq } from "astro:db";

interface DelProps {
	id: number;
}

const DelActionButton = ({ id }: DelProps) => {
	const handleClick = async () => {
		await db.delete(Category).where(eq(Category.id, id));
	};

	return (
		<div onClick={handleClick} data-id={id} className="flex items-center gap-2">
			Borrar
		</div>
	);
};
export default DelActionButton;
