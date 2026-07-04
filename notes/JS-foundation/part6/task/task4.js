/* Encapsulation, Polymorphism, Abstraction, and Getters/Setters

Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. */

class BankAccount {
  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = initialBalance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount");
    }
    this.balance = this._balance + amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal amount");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this.balance = this._balance - amount;
  }
}

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const account = new BankAccount(1000);

account.deposit(500);
console.log(account.balance);

account.withdraw(300);
console.log(account.balance);

try {
  account.withdraw(2000);
} catch (error) {
  console.log(error.message);
}

const shapes = [new Shape(), new Circle(5), new Rectangle(8, 4)];

shapes.forEach((shape) => {
  console.log(shape.area());
});
