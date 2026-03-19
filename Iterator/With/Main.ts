interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

class OrderIterator implements IIterator<string> {
  private index: number = 0;

  constructor(private orders: string[]) {}

  public hasNext(): boolean {
    return this.index < this.orders.length;
  }

  public next(): string {
    if (this.hasNext()) {
      return this.orders[this.index++];
    }
    throw new Error("No more orders");
  }
}

interface IAggregate<T> {
  createIterator(): IIterator<T>;
}

class OrderHistory implements IAggregate<string> {
  private orders: string[] = [];

  public addOrder(order: string): void {
    this.orders.push(order);
  }

  public createIterator(): IIterator<string> {
    return new OrderIterator(this.orders);
  }
}

const orderHistory = new OrderHistory();
orderHistory.addOrder("Order 1");
orderHistory.addOrder("Order 2");
orderHistory.addOrder("Order 3");

const iterator = orderHistory.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
