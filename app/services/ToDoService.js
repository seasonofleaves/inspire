
import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ToDoService {
  async createToDo(toDoData) {
    // const createToDo = AppState.newToDo
    const response = await api.post('api/todos', toDoData)
    console.log('Created ToDo', response.data)
  }

  async getToDo() {
    const response = await api.get('api/todos')
    console.log('Got ToDo', response.data)
  }
}

export const toDoService = new ToDoService()