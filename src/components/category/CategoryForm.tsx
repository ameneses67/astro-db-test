import { string, z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: string(),
	description: string(),
	imagePath: string(),
});

type FormFields = z.infer<typeof schema>;

const CategoryForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data, e) => {
		try {
			console.log(data);
			const formData = new FormData(e?.target as HTMLFormElement);
			await fetch("/api/categorias.json", {
				method: "POST",
				body: formData,
			});
		} catch (error) {
			setError("root", {
				message: "Hubo un error al crear la categoría",
			});
		}
	};

	return (
		<form
			id="cat-form"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col md:flex-row items-start gap-4">
				<div className="space-y-2 w-full max-w-xs">
					<input
						{...register("name")}
						type="text"
						placeholder="Categoría"
						className="input input-bordered w-full"
					/>
					{errors.name && (
						<p className="text-error text-sm">{errors.name.message}</p>
					)}
				</div>
				<div className="space-y-2 w-full max-w-xs">
					<textarea
						{...register("description")}
						className="textarea textarea-bordered w-full"
						placeholder="Descripción"
					></textarea>
					{errors.description && (
						<p className="text-error text-sm">{errors.description.message}</p>
					)}
				</div>
				<div className="space-y-2 w-full max-w-xs">
					<input
						{...register("imagePath")}
						type="text"
						placeholder="p.ej., imagen.jpg"
						className="input input-bordered w-full"
					/>
					{errors.imagePath && (
						<p className="text-error text-sm">{errors.imagePath.message}</p>
					)}
				</div>
			</div>
			{errors.root && (
				<p className="text-error text-sm">{errors.root.message}</p>
			)}
			<button
				type="submit"
				disabled={isSubmitting}
				className="btn btn-accent mt-4 px-6"
			>
				{isSubmitting ? "Enviando..." : "Crear"}
			</button>
		</form>
	);
};
export default CategoryForm;
