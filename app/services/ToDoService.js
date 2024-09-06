
import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDoService {
  async createToDo(toDoData) {
    const response = await api.post('api/todos', toDoData)
    console.log('Created ToDo', response.data)
    const todo = new ToDo(response.data)
    AppState.todos.push(todo)
  }

  async getToDo() {
    const response = await api.get('api/todos')
    const todo = response.data.map(toDoData => new ToDo(toDoData))
    AppState.todos = todo
    console.log('Got ToDo', response.data)
  }
}

export const toDoService = new ToDoService()