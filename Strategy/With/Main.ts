interface PaymentStrategy {
  pay(amount: number): void;
}

class UpiPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`${amount} is paid via UPI`);
  }
}

class CardPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`${amount} is paid via Card`);
  }
}

class WalletPayment implements PaymentStrategy {
  pay(amount: number) {
    console.log(`${amount} is paid via Wallet`);
  }
}

class PaymentService {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  setStrategy(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  pay(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// PROBLEM: tight coupling between client and payment strategies
const paymentService = new PaymentService(new UpiPayment());
paymentService.pay(200);

paymentService.setStrategy(new CardPayment());
paymentService.pay(500);

paymentService.setStrategy(new WalletPayment());
paymentService.pay(1000);
