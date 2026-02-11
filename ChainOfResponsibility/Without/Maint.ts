class OrderService {
  placeOrder(order: any) {
    if (!order.user.isLoggedIn) {
      throw new Error("User not logged in");
    }
    if (!order.restaurant.isOpen) {
      throw new Error("Restaurant closed");
    }
    if (!order.payment.isValid) {
      throw new Error("Payment failed");
    }
    console.log("Order placed successfully");
  }
}

// ❌ Large IF ELSE block to handle order processing
// ❌ Adding validation modifies core logic
// ❌ Hard to test validations independently
// ❌ Poor extensibility
