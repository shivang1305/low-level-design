import { IPayment } from "./IPayment";

export abstract class PaymentFactory {
  abstract createPayment(): IPayment;

  processPayment(amount: number): void {
    const payment = this.createPayment();
    payment.pay(amount);
  }
}
