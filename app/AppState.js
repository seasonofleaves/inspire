import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { ToDo } from './models/ToDo.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  newToDo = null

  /**@type {ToDo[]} */
  toDo = []
}

export const AppState = createObservableProxy(new ObservableAppState())