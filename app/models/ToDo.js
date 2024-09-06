export class ToDo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.creatorId = data.creatorId
    this.completed = data.completed || false
  }


}