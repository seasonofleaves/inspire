
import { bgPictureService } from "../services/BgPictureService.js"
import { Pop } from "../utils/Pop.js"

export class BgPictureController {
  constructor() {
    console.log('Bg Controller working')
    this.getBgPicture()
  }

  async getBgPicture() {
    try {
      await bgPictureService.getBgPicture()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}