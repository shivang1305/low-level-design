class Checkout {
  pay(method: string, amount: number) {
    let payment;
    if (method === "UPI") {
      payment = new UpiPayment();
    } else if (method === "Card") {
      payment = new CardPayment();
    } else if (method === "Wallet") {
      payment = new UpiPayment();
    }

    payment?.pay(amount);
  }
}
