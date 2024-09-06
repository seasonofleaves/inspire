export class ToDo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.creatorId = data.creatorId
    this.completed = data.completed || false
  }

  get toDoHTMLTemplate() {
    return `
   <input onchange="" type="checkbox">
      <h5>${this.description}</h5>
      <p>Delete</p>
  `
  }
}