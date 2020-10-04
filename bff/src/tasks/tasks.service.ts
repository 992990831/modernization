import { HttpException, Injectable } from '@nestjs/common';
import { TASKS } from '../mock/tasks.mock';

import { AddTaskInput } from './dto/add-task.input';
import { Task } from './models/task.model';

import { TaskMicoServiceAPI } from './tasks.data-source';

import { BFEDataSources } from '../app.module';

@Injectable()
export class TasksService {
    tasks = TASKS;
    async getTasks(dataSources : BFEDataSources) {
        //return this.tasks;
        // let api = new TaskMicoServiceAPI();
        // let allTasks = await api.getAllTasks();

        // return allTasks;

        return await dataSources.tasksAPI.getAllTasks();
    }

    getTask(id: string) {
        return this.tasks.find(task => task.id === id);
    }

    async addTask(input: AddTaskInput): Promise<Task[]> {
        const lastTask = this.tasks.slice(-1).pop();
        const task: Task = {
            id: lastTask.id + 1,
            title: input.title,
            description: input.description,
            completed: false,
        };

        this.tasks.push(task);
        return this.tasks;
    }

    deleteTask(id: string): Task[] {
        const taskIndex = this.tasks.findIndex(item => item.id === id);
        if (taskIndex === -1) {
          throw new HttpException('Task not found', 404);
        }
    
        this.tasks.splice(taskIndex, 1);
        return this.tasks;
      }
}
