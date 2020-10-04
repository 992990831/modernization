import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Task } from './models/task.model';

import { TASKS } from '../mock/tasks.mock';

//假设后端是由微服务提供的REST接口
export class TaskMicoServiceAPI extends RESTDataSource {
  private token: string;

  constructor() {
    super();
    this.baseURL = "http://localhost:5000";
    this.token = "XXXXXX"; //如果访问微服务的REST接口需要提供Token，可以加在这里
  }

  willSendRequest(request: RequestOptions) {
    //request.headers.set('X-User-Token', this.token);
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.get(
      `/task/all`
    );
    // const task: Task[] = [{
    //     id: "1",
    //     title: "123",
    //     description: "123",
    //     completed: false,
    // }];

    // return Promise.resolve<Task[]>(
    //    task
    // );
  }
}
