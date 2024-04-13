import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema } from "src/schemas/categoryForm";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

type FormFields = z.infer<typeof categorySchema>;

const CategoryForm = () => {
	const {
		register,
		handleSubmit,
		control,
		setError,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<FormFields>({
		resolver: zodResolver(categorySchema),
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful]);

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const res = await fetch("/api/categorias.json", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (!res.ok) {
				throw new Error("Algo salió mal al crear la categoría");
			}

			const resData = await res.json();

			toast.success(resData.message);
		} catch (error) {
			console.error(error);
			toast.error("No se pudo crear la categoría");
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
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
				<button
					type="submit"
					disabled={isSubmitting}
					className="btn btn-accent mt-4 px-6"
				>
					{isSubmitting ? "Enviando..." : "Crear"}
				</button>
			</form>
			<Toaster />
		</div>
	);
};
export default CategoryForm;
