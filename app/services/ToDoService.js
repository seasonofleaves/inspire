
import { AppState } from "../AppState.js";
import { ToDo } from "../models/ToDo.js";
import { api } from "./AxiosService.js";

class ToDoService {
  async completeToDo(toDoId) {
    const todos = AppState.todos
    const todoIndex = AppState.todos.findIndex(todo => todo.id == toDoId)
    const todo = todos[todoIndex]
    const toDoData = { completed: !todo.completed }
    const response = await api.put(`api/todos/${toDoId}`, toDoData)
    console.log('completed To Do', response.data)
    const updatedToDo = new ToDo(response.data)
    todos.splice(todoIndex, 1, updatedToDo)
  }
  async deleteToDo(toDoId) {
    const response = await api.delete(`api/todos/${toDoId}`)
    const toDoIndex = AppState.todos.findIndex(todo => todo.id == toDoId)
    AppState.todos.splice(toDoIndex, 1)
    console.log('Deleted To Do', response.data)
  }

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