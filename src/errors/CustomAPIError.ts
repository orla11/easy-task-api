export default class CustomAPIError extends Error {
	constructor(public message: string, public statusCode: number) {
		super(message);
	}
}
