function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
  }
  Vehicle.prototype.accelerate = function () {
    this.speed += 5;
    console.log(`${this.brand} ${this.model} is accelerating... Speed: ${this.speed}`);
  };
  
  Vehicle.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.brand} ${this.model} is braking... Speed: ${this.speed}`);
  };
  
  Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling...`);
  };
  function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
  }
  
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  Car.prototype.honk = function () {
    console.log("Beep beep!");
  };
  function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
  }
  
  Airplane.prototype = Object.create(Vehicle.prototype);
  Airplane.prototype.constructor = Airplane;
  Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off...`);
  };
  const car = new Car("Honda", "Civic", 0, "Gasoline", 4);
  const airplane = new Airplane("Boeing", "737", 0, "Jet Fuel", 2, true);
  
  car.accelerate();
  car.brake();
  car.refuel();
  car.honk();
  
  airplane.accelerate();
  airplane.brake();
  airplane.refuel();
  airplane.takeOff();
  