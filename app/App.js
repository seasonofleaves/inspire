import { AuthController } from './controllers/AuthController.js';
import { router } from './router-config.js';
import { ToDoController } from './controllers/ToDoController.js';
import { BgPictureController } from './controllers/BgPictureController.js';

const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  ToDoController = new ToDoController()
  bgPictureController = new BgPictureController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
