import { APIError, type APIErrorResponse } from "./error";
import { Time } from "./time";

export const RETRY_LIMIT = 3;

// 1 seconds
export const RETRY_COOLDOWN = Time.Seconds;

/**
 * Fetch but avoid try-catching with {@link Result}
 *
 * Returning {@link Response} when OK, {@link ApiError} when not
 */
export const safeFetch = async (
	url: string,
	init?: RequestInit,
): Promise<Response> => {
	const host = import.meta.env.VITE_API_URL;

	let response: Response;
	try {
		response = await fetch(`${host}${url}`, init);
	} catch (error) {
		throw new APIError({
			code: "network",
			message: (error as Error).message,
			status: 418,
		});
	}

	if (!response.ok) {
		const error: APIErrorResponse = await response.json();
		error.status = response.status;
		throw APIError.from(error);
	}

	return response;
};
