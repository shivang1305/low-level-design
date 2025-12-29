import PaymentFactory from "./PaymentFactory";

class Checkout {
  checkout(method: string, amount: number) {
    const payment = PaymentFactory.createPayment(method);
    payment.pay(amount);
  }
}

const checkoutOrder = new Checkout();
checkoutOrder.checkout("UPI", 1000);
