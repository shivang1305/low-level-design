import { IPayment } from "./IPayment";

export class UpiPayment implements IPayment {
  pay(amount: number): void {
    console.log(`${amount} paid through UPI`);
  }
}
