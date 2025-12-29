import CardPayment from "./CardPayment";
import UpiPayment from "./UpiPayment";
import WalletPayment from "./WalletPayment";

class Checkout {
  checkout(method: string, amount: number) {
    let payment;
    if (method === "UPI") {
      payment = new UpiPayment();
    } else if (method === "Card") {
      payment = new CardPayment();
    } else if (method === "Wallet") {
      payment = new WalletPayment();
    }

    payment?.pay(amount);
  }
}

const checkoutOrder = new Checkout();
checkoutOrder.checkout("CARD", 1000);
