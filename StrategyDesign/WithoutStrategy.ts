class Vehicle {
  public drive() {
    console.log("Normal drive capability...");
  }
}

class SportsVehicle extends Vehicle {
  public drive() {
    console.log("Sporty drive capability...");
  }
}

class OffroadVehicle extends Vehicle {
  public drive() {
    console.log("Offroading drive capability...");
  }
}

class PassengerVehicle extends Vehicle {}

const vehicle = new SportsVehicle();
vehicle.drive();
