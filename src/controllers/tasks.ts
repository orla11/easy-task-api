import express from "express";
import { ITask, ITaskInputDTO } from "../interfaces/ITask";
import asyncWrapper from "../middlewares/async";
import Task from "../models/Task";
import CustomAPIError from "../errors/CustomAPIError";

const getAllTasks = asyncWrapper(
	async (req: express.Request, res: express.Response): Promise<void> => {
		const tasks = await Task.find({});
		//res.status(200).json({ tasks });
		//res.status(200).json({ tasks, amount: tasks.length });
		res
			.status(200)
			.json({ status: "success", data: { tasks, amount: tasks.length } });
	}
);

const createTask = asyncWrapper(
	async (req: express.Request, res: express.Response): Promise<void> => {
		const task: ITask = await Task.create(req.body as ITaskInputDTO);
		res.status(201).json({ task });
	}
);

const getTask = asyncWrapper(
	async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		const { id: taskID } = req.params;
		const task: ITask = await Task.findOne({ _id: taskID as string });

		if (!task)
			return next(new CustomAPIError(`No task with id: ${taskID}`, 404));

		res.status(200).json({ task });
	}
);

const deleteTask = asyncWrapper(
	async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		const { id: taskID } = req.params;
		const task: ITask = await Task.findOneAndDelete({ _id: taskID as string });

		if (!task)
			return next(new CustomAPIError(`No task with id: ${taskID}`, 404));

		res.status(200).json({ task });
	}
);

const updateTask = asyncWrapper(
	async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	): Promise<void> => {
		const { id: taskID } = req.params;
		const task: ITask = await Task.findOneAndUpdate(
			{ _id: taskID as string },
			req.body,
			{ new: true, runValidators: true }
		);

		if (!task)
			return next(new CustomAPIError(`No task with id: ${taskID}`, 404));

		res.status(200).json({ task });
	}
);

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
