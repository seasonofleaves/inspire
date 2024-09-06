import { api } from "./AxiosService.js";
import { AppState } from "../AppState.js";
import { Picture } from "../models/BgPicture.js";

class BgPictureService {
  async getBgPicture() {
    const response = await api.get('api/images')
    console.log('Got Picture', response.data)
    const newPicture = new Picture(response.data)
    AppState.picture = newPicture
  }
}

export const bgPictureService = new BgPictureService()