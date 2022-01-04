import mongoose from "mongoose";
import { ITask } from "../interfaces/ITask";

const Task: mongoose.Schema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter a full name"],
			trim: true,
			maxlength: [20, "name cannot be more than 20 characters"],
		},
		completed: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

export default mongoose.model<ITask & mongoose.Document>("Task", Task);
