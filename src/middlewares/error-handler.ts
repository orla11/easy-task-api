import { Response, Request, NextFunction } from "express";
import CustomAPIError from "../errors/CustomAPIError";

const errorHandlerMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
): any => {
	if (err instanceof CustomAPIError)
		return res.status(err.statusCode).json({ msg: err.message });
	return res.status(500).json({ msg: err.message });
};

export default errorHandlerMiddleware;
