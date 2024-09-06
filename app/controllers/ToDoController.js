
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

}