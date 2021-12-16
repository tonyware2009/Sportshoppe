import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  sportsShoppeController = new SportsShoppeController()
}


window["app"] = new App();
