interface IFoodItem {
  getPrice(): number;
  getDescription(): string;
}

class Pizza implements IFoodItem {
  getDescription(): string {
    return "Pizza";
  }

  getPrice(): number {
    return 200;
  }
}

class Burger implements IFoodItem {
  getDescription(): string {
    return "Burger";
  }

  getPrice(): number {
    return 100;
  }
}

abstract class Decorator implements IFoodItem {
  constructor(
    protected foodItem: IFoodItem,
    protected price: number,
  ) {}

  getDescription(): string {
    return this.foodItem.getDescription();
  }

  getPrice(): number {
    return this.foodItem.getPrice();
  }
}

class ExtraCheeseDecorator extends Decorator {
  getDescription(): string {
    return this.foodItem.getDescription() + "with extra cheese";
  }

  getPrice(): number {
    return this.foodItem.getPrice() + this.price;
  }
}

class ExtraSauceDecorator extends Decorator {
  getDescription(): string {
    return this.foodItem.getDescription() + "with extra sauce";
  }

  getPrice(): number {
    return this.foodItem.getPrice() + this.price;
  }
}

class ExtraToppingsDecorator extends Decorator {
  getDescription(): string {
    return this.foodItem.getDescription() + "with extra toppings";
  }

  getPrice(): number {
    return this.foodItem.getPrice() + this.price;
  }
}

let pizza = new Pizza();
let burger = new Burger();

pizza = new ExtraCheeseDecorator(pizza, 50);
pizza = new ExtraToppingsDecorator(pizza, 30);

burger = new ExtraSauceDecorator(burger, 20);
burger = new ExtraCheeseDecorator(burger, 30);

console.log(pizza.getDescription()); // Pizza with extra cheese
console.log(pizza.getPrice()); // 250

console.log(burger.getDescription()); // Burger with extra sauce
console.log(burger.getPrice()); // 120
