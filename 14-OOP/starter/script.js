'use strict';

// function Person(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// Challenge #1

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function (times = 1) {
//   this.speed += times * 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function (times = 1) {
//   this.speed -= times * 5;
//   console.log(this.speed);
// };

// const BMW = new Car('BMW', 120);
// const Mercedes = new Car('Mercedes', 95);

// BMW.accelerate(3);
// BMW.brake(2);

// Mercedes.accelerate(6);
// Mercedes.brake(3);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ES6 Classes

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hi() {
//     console.log('Hi There 👋');
//   }
// }

// const jessica = new Person('Jessica Davis', 2000);
// jessica.calcAge();
// console.log(jessica);

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 1990;
// steven.calcAge();

// Challenge #2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);

// console.log(ford.speedUS);
// ford.speedUS = 180;
// console.log(ford);

// function Person(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// function Student(firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log('My name is ' + this.firstName);
// };

// const dasty = new Student('Mike', 2020, 'Computer Science');
// dasty.introduce();

// Challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hi() {
//     console.log('Hi There 👋');
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
// }

// Example

class Account {
  // Public Fields
  local = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public Methods
  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Load approved');
    }
  }

  // Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
