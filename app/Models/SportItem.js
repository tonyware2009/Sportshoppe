
import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Item {
  constructor(data) {
    this.name = data.name,
      this.quantity = data.quantity,
      this.price = data.price
    this.id = data.id || generateId()
  }
}

