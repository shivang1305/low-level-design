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

class PaymentFactory {
  static createPaymentStrategy(type: string): PaymentStrategy {
    switch (type) {
      case "UPI":
        return new UpiPayment();
      case "Card":
        return new CardPayment();
      case "Wallet":
        return new WalletPayment();
      default:
        throw new Error("Invalid payment type");
    }
  }
}

class PaymentService {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentType: string) {
    this.paymentStrategy = PaymentFactory.createPaymentStrategy(paymentType);
  }

  setStrategy(paymentType: string): void {
    this.paymentStrategy = PaymentFactory.createPaymentStrategy(paymentType);
  }

  pay(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Client only need to know about the payment types and the PaymentService, not the individual payment strategies or the factory.
// Client is decoupled from the concrete payment strategies.
const paymentService = new PaymentService("UPI");
paymentService.pay(200);

paymentService.setStrategy("Card");
paymentService.pay(500);

paymentService.setStrategy("Wallet");
paymentService.pay(1000);
