interface ICommand {
  execute(): void;
}

// RECEIVER
class OrderService {
  placeOrder(): void {
    console.log("Order is PLACED");
  }

  trackOrder(): void {
    console.log("Order is TRACKING");
  }

  cancelOrder(): void {
    console.log("Order is CANCELED");
  }
}

// CONCRETE COMMANDS
class PlaceOrderCommand implements ICommand {
  private orderService: OrderService;
  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  execute(): void {
    this.orderService.placeOrder();
  }
}

class TrackOrderCommand implements ICommand {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  execute(): void {
    this.orderService.trackOrder();
  }
}

class CancelOrderCommand implements ICommand {
  private orderService: OrderService;

  constructor(orderService: OrderService) {
    this.orderService = orderService;
  }

  execute(): void {
    this.orderService.cancelOrder();
  }
}

// INVOKER
class UIInvoker {
  private command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  click(): void {
    this.command.execute();
  }
}

// CLIENT CODE
// receiver is created where actual business logic is implemented
const swiggyOrderService = new OrderService();

// concrete commands are created and passed the receiver
const placeOrder = new PlaceOrderCommand(swiggyOrderService);
const trackOrder = new TrackOrderCommand(swiggyOrderService);
const cancelOrder = new CancelOrderCommand(swiggyOrderService);

// invokers are created and passed the command objects
const placeButton = new UIInvoker(placeOrder);
placeButton.click();

const trackButton = new UIInvoker(trackOrder);
trackButton.click();

const cancelButton = new UIInvoker(cancelOrder);
cancelButton.click();
