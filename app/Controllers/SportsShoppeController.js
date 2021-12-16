import { ProxyState } from "../AppState.js";
import { cartForm } from "../Components/CartForm.js";
import { sportService } from "../Services/SportService.js";

export class SportShoppeController {
  constructor() {
    ProxyState.on('sportitem')
  }
}