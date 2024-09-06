export class ToDo {
  constructor(data) {
    this.id = data.id || ''
    this.description = data.description
    this.creatorId = data.creatorId
    this.completed = data.completed || false
  }

  get toDoHTMLTemplate() {
    return `
    <div class="d-flex">
      <input onchange="app.ToDoController.completeToDo('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}>
      <h5>${this.description}</h5>
      <i onclick="app.ToDoController.deleteToDo('${this.id}')" class="mdi mdi-delete-circle text-danger"
          title="delete task" role="button"></i>
    </div>
  `
  }
}