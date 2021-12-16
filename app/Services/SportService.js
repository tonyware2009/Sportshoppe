import { ProxyState } from "../AppState.js"

class SportItemService {

  constructor() {
    ProxyState.on('Item')
  }
}

export const sportItemService = new SportItemService()