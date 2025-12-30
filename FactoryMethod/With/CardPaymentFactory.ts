import { CardPayment } from "./CardPayment";
import { IPayment } from "./IPayment";
import { PaymentFactory } from "./PaymentFactory";

export class CardPaymentFactory extends PaymentFactory {
  createPayment(): IPayment {
    return new CardPayment();
  }
}
