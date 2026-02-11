abstract class OrderHandler {
  protected nextHandler: OrderHandler | null = null;

  setNext(nextHandler: OrderHandler): OrderHandler {
    this.nextHandler = nextHandler;
    return nextHandler;
  }

  handle(order: any): void {
    if (this.nextHandler) {
      this.nextHandler.handle(order);
    }
  }
}

class AuthHandler extends OrderHandler {
  handle(order: any): void {
    if (!order.user.isLoggedIn) throw new Error("User not logged in");
    else console.log("User authenticated successfully");
    super.handle(order);
  }
}

class PaymentHandler extends OrderHandler {
  handle(order: any): void {
    if (!order.user.isPaymentDone) throw new Error("Payment not completed");
    else console.log("Payment successful for the order");
    super.handle(order);
  }
}

class RestaurantHandler extends OrderHandler {
  handle(order: any): void {
    if (!order.isRestaurantAvailable)
      throw new Error("Restaurant is not available");
    else console.log("Restaurant is available for the order");
    super.handle(order);
  }
}

const auth = new AuthHandler();
const payment = new PaymentHandler();
const restaurant = new RestaurantHandler();

auth.setNext(payment).setNext(restaurant); // chain the handlers together

const order = {
  user: {
    isLoggedIn: true,
  },
  isPaymentDone: true,
  isRestaurantAvailable: true,
};

auth.handle(order); // order starts with the first handler in the chain
