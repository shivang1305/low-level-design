import { IButton } from "./IButton";
import { IModal } from "./IModal";

export interface UIFactory {
  createButton(): IButton;
  createModal(): IModal;
}
