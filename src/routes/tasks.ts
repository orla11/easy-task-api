import express, { Router } from "express";
import {
	getAllTasks,
	getTask,
	deleteTask,
	updateTask,
	createTask,
} from "../controllers/tasks";

const router: Router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
