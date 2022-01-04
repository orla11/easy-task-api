import mongoose from "mongoose";

const connectDb = (connectionString): Promise<void> => {
	return mongoose
		.connect(connectionString)
		.then(() => console.log("connected to db"))
		.catch((err) => console.log(err));
};

export default connectDb;
