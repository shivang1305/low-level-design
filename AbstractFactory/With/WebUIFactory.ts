import { IButton } from "./IButton";
import { IModal } from "./IModal";
import { UIFactory } from "./UIFactory";
import { WebButton } from "./WebButton";
import { WebModal } from "./WebModal";

export class WebUIFactory implements UIFactory {
  createButton(): IButton {
    return new WebButton();
  }

  createModal(): IModal {
    return new WebModal();
  }
}
