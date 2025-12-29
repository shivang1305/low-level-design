class Checkout {
  pay(method: string, amount: number) {
    const payment = PaymentFactory.createPayment(method);
    payment.pay(amount);
  }
}
