
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { toDoService } from "../services/ToDoService.js"
import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"

export class ToDoController {
  constructor() {
    AppState.on('user', this.getToDo)
    AppState.on('todos', this.drawToDo)
  }

  drawToDo() {
    const todo = AppState.todos
    let toDoHTML = ''
    todo.forEach(todo => toDoHTML += todo.toDoHTMLTemplate)
    setHTML('todos', toDoHTML)
    // FIXME make sure we are filtering the uncompleted todos here
    const completedToDo = todo.filter(todo => todo.completed)
    setHTML('todo-count', `${completedToDo.length}/${todo.length}`)
  }

  async createToDo() {
    console.log('Creating ToDo')

    try {
      event.preventDefault()
      const toDoFormElm = event.target
      const toDoFormData = getFormData(toDoFormElm)
      await toDoService.createToDo(toDoFormData)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async getToDo() {
    try {
      await toDoService.getToDo()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async deleteToDo(toDoId) {
    try {
      const wantsToDelete = await Pop.confirm("Are you sure you want to delete this To Do?")
      if (!wantsToDelete) return
      await toDoService.deleteToDo(toDoId)

    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async completeToDo(toDoId) {
    try {
      await toDoService.completeToDo(toDoId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}