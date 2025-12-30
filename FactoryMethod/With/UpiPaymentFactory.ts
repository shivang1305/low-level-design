import { IPayment } from "./IPayment";
import { PaymentFactory } from "./PaymentFactory";
import { UpiPayment } from "./UpiPayment";

export class UpiPaymentFactory extends PaymentFactory {
  createPayment(): IPayment {
    return new UpiPayment();
  }
}
