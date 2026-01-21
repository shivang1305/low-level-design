import { AndroidButton } from "./AndroidButton";
import { AndroidModal } from "./AndroidModal";
import { IButton } from "./IButton";
import { IModal } from "./IModal";
import { UIFactory } from "./UIFactory";

export class AndroidUIFactory implements UIFactory {
  createButton(): IButton {
    return new AndroidButton();
  }

  createModal(): IModal {
    return new AndroidModal();
  }
}
