import { IModal } from "./IModal";

export class WebModal implements IModal {
  open(): void {
    console.log("Web Modal is opened");
  }
}
