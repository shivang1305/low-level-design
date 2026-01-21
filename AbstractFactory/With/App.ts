import { AndroidUIFactory } from "./AndroidUIFactory";
import { UIFactory } from "./UIFactory";
import { WebUIFactory } from "./WebUIFactory";

export class App {
  constructor(private uiFactory: UIFactory) {}

  renderUI() {
    const button = this.uiFactory.createButton();
    const modal = this.uiFactory.createModal();

    button.render();
    modal.open();
  }
}

const webApp = new App(new WebUIFactory());
webApp.renderUI();

const androidApp = new App(new AndroidUIFactory());
androidApp.renderUI();
