import { IPayment } from "./IPayment";

export class CardPayment implements IPayment {
  pay(amount: number): void {
    console.log(`${amount} paid through card`);
  }
}
