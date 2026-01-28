interface Observer {
  update(status: string): void;
}

interface Subject {
  attachObserver(observer: Observer): void;
  detachObserver(observer: Observer): void;
  notifyObservers(): void;
}

class Order implements Subject {
  private observers: Observer[] = [];
  private status: string = "";

  setStatus(status: string) {
    this.status = status;
    this.notifyObservers();
  }

  attachObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  detachObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.status);
    }
  }
}

class User implements Observer {
  update(status: string): void {
    console.log("USER: Order status updated: ", status);
  }
}

class Restaurant implements Observer {
  update(status: string): void {
    console.log("RESTAURANT: Order status updated: ", status);
  }
}

class Rider implements Observer {
  update(status: string): void {
    console.log("RIDER: Order status updated: ", status);
  }
}

const order = new Order();
const user = new User();
const restaurant = new Restaurant();
const rider = new Rider();

order.attachObserver(user);
order.attachObserver(restaurant);

order.setStatus("PLACED");

order.setStatus("PREPARING");
order.attachObserver(rider);

order.setStatus("OUT FOR DELIVERY");
order.detachObserver(restaurant);

order.setStatus("DELIVERED");
