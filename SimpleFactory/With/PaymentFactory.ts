import IPayment from "./IPayment";
import UpiPayment from "./UpiPayment";
import CardPayment from "./CardPayment";
import WalletPayment from "./WalletPayment";

export default class PaymentFactory {
  static createPayment(method: string): IPayment {
    switch (method) {
      case "UPI":
        return new UpiPayment();
      case "CARD":
        return new CardPayment();
      case "WALLET":
        return new WalletPayment();
      default:
        throw new Error("Invalid payment method");
    }
  }
}
