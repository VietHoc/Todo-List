import { Injectable } from '@angular/core';
import { Tasks } from './tasks';

@Injectable()
export class TasksService {

  tasks: Tasks[] = [
		{id: 0, title:"Understand code", complete:false},
		{id: 1, title:"Learn Code", complete: false},
		{id: 2, title:"Recode", complete: false},
		{id: 3, title:"Copy code", complete:true},
	];


  lastId: number = this.tasks.length - 1;

  constructor() { }

  // Simulate POST /tasks
  addTask(task: Tasks): TasksService {
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.tasks.push(task);
    return this;
  }

  // Simulate DELETE /tasks/:id
  deleteTaskById(id: number): TasksService {
    this.tasks = this.tasks
      .filter(task => task.id !== id);
    return this;
  }

  // Simulate PUT /tasks/:id
  updateTaskById(id: number, values: Object = {}): Tasks {
    let task = this.getTaskById(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  // Simulate GET /tasks
  getAllTasks(): Tasks[] {
    return this.tasks;
  }

  // Simulate GET /tasks/:id
  getTaskById(id: number): Tasks {
    return this.tasks
      .filter(task => task.id === id)
      .pop();
  }

  // Toggle task complete
  toggleTaskComplete(task: Tasks){
    let updatedTask = this.updateTaskById(task.id, {
      complete: !task.complete
    });
    return updatedTask;
  }
}
