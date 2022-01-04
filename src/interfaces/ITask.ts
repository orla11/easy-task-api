export interface ITask {
	_id: string;
	name: string;
	completed: boolean;
}

export interface ITaskInputDTO {
	name: string;
	completed: boolean;
}
