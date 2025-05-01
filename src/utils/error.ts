export interface APIErrorResponse {
	code: string;
	message: string;
	status: number;
}

export class APIError extends Error {
	public readonly apiCode: string;
	public readonly httpCode: number;

	constructor({ code, message, status }: APIErrorResponse) {
		super(message);
		this.apiCode = code;
		this.httpCode = status;
	}

	static from(error: APIErrorResponse): APIError {
		return new APIError(error);
	}

	// TODO: Might need to update this
	public retriable(extension?: number[]): boolean {
		if (extension?.includes(this.httpCode)) {
			return true;
		}

		return this.httpCode >= 500;
	}
}
