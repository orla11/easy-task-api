import express from "express";

const notFound = (req: express.Request, res: express.Response): void => {
	res.status(404).send("Route does not exist");
};

export default notFound;
