interface ProductPrototype {
  display(): void;
  clone(): ProductPrototype;
}

class Product implements ProductPrototype {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  clone(): ProductPrototype {
    return new Product(this.name, this.price);
  }

  display(): void {
    console.log("Product Name: " + this.name);
    console.log("Product Price: ₹" + this.price);
  }
}

const product = new Product("Macbook", 49999);
product.display();

const copyProduct = product.clone(); // creates a copy of same product
copyProduct.display();
