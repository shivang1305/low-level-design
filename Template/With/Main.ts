abstract class OrderProcessingTemplate {
  // template method: should not be overridden by subclasses
  processOrder(): void {
    this.verifyOrder();
    this.assignDeliveryPartner();
    this.trackDelivery();
  }

  // abstract methods: must be implemented by subclasses
  abstract verifyOrder(): void;
  abstract assignDeliveryPartner(): void;
  abstract trackDelivery(): void;
}

class LocalOrderProcessor extends OrderProcessingTemplate {
  verifyOrder(): void {
    console.log("Verifying the local order...");
  }

  assignDeliveryPartner(): void {
    console.log("Assigned delivery partner to local order...");
  }

  trackDelivery(): void {
    console.log("Tracking delivery of a local order...");
  }
}

class InternationalOrderProcessor extends OrderProcessingTemplate {
  verifyOrder(): void {
    console.log("Verifying the international order...");
  }

  assignDeliveryPartner(): void {
    console.log("Assigned delivery partner to international order...");
  }

  trackDelivery(): void {
    console.log("Tracking delivery of a international order...");
  }
}

const localOrder: OrderProcessingTemplate = new LocalOrderProcessor();
localOrder.processOrder(); // processes the local order

const internationOrder: OrderProcessingTemplate =
  new InternationalOrderProcessor();
internationOrder.processOrder(); // processes the international order
