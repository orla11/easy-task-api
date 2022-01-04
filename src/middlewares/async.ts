import express from "express";

const asyncWrapper = (fn: (...args: any[]) => any) => {
	return async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		try {
			await fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
};

export default asyncWrapper;
