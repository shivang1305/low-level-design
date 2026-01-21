import { IModal } from "./IModal";

export class AndroidModal implements IModal {
  open(): void {
    console.log("Android Modal is opened");
  }
}
