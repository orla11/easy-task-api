import connectDb from "./db/connect";
import express from "express";
import tasks from "./routes/tasks";
import dotenv from "dotenv";
import path from "path";
import notFound from "./middlewares/not-found";
import errorHandlerMiddleware from "./middlewares/error-handler";

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

dotenv.config();

// middlewares
app.use(express.static(path.join(__dirname, "/../public")));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// catchall middleware
app.use(notFound);
// error handling
app.use(errorHandlerMiddleware);

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		app.listen(port, () => console.log(`Server is listening on ${port}...`));
	} catch (error) {
		console.log(error);
	}
};

start();
