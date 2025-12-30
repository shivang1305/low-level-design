import { IPayment } from "./IPayment";
import { PaymentFactory } from "./PaymentFactory";
import { WalletPayment } from "./WalletPayment";

export class WalletPaymentFactory extends PaymentFactory {
  createPayment(): IPayment {
    return new WalletPayment();
  }
}
