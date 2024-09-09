
import { AppState } from "../AppState.js"
import { bgPictureService } from "../services/BgPictureService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class BgPictureController {
  constructor() {
    console.log('Bg Controller working')
    AppState.on('picture', this.drawBgPicture)
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

  drawBgPicture() {
    const picture = AppState.picture
    document.body.style.backgroundImage = `url(${picture.largeImgUrl})`
  }
}