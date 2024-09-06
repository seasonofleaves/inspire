import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { ToDo } from './models/ToDo.js'
import { Picture } from './models/BgPicture.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /**@type {Picture} */
  picture = null

  /**@type {ToDo[]} */
  todos = []
}

export const AppState = createObservableProxy(new ObservableAppState())