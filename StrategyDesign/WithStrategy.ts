interface DriveStrategy {
  drive(): void;
}

class NormalDriveStrategy implements DriveStrategy {
  public drive() {
    console.log("Normal drive capability...");
  }
}

class SportsDriveStrategy implements DriveStrategy {
  public drive() {
    console.log("Sports drive capability...");
  }
}

class OffroadDriveStrategy implements DriveStrategy {
  public drive() {
    console.log("Offroad drive capability...");
  }
}

class Vehicle {
  private obj: DriveStrategy;
  constructor(obj: DriveStrategy) {
    // constructor dependencty injection
    this.obj = obj;
  }

  public drive() {
    this.obj.drive();
  }
}

class SportsVehicle extends Vehicle {
  constructor() {
    super(new SportsDriveStrategy()); // passing the obj to its parent class constructor
  }
}

class OffroadVehicle extends Vehicle {
  constructor() {
    super(new OffroadDriveStrategy());
  }
}

class PassengerVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}

const vehicle = new SportsVehicle();
vehicle.drive();
