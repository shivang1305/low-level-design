import { IPayment } from "./IPayment";

export class WalletPayment implements IPayment {
  pay(amount: number): void {
    console.log(`${amount} paid through Wallet`);
  }
}
