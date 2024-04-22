import axios, { AxiosError, CanceledError } from "axios";
const controller = new AbortController();

const httpRequests = axios.create({
	baseURL: "/api",
	headers: {
		"Content-Type": "application/json",
	},
	signal: controller.signal,
});

interface Param {
	param: "categorias" | "subcategorias" | "marcas" | "tamaños" | "colores";
}

export const GET = async (param: Param) => {
	try {
		const response = await httpRequests.get(`/${param}/.json`);

		return response.data;
	} catch (error) {
		if (error instanceof CanceledError) return;
		console.error((error as AxiosError).message);
	}
	controller.abort();
};

export const POST = async (param: Param, body) => {
	return await httpRequests.post(`/${param}.json`, body);
};

export const PATCH = async (param: Param, body) => {
	return await httpRequests.patch(`/${param}/${body.id}.json`, body);
};

export const DELETE = async (param: Param, { id }) => {
	return await httpRequests.delete(`/${param}/${id}.json`, id);
};

export default httpRequests;
