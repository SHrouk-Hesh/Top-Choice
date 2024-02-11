// Defining an abstract class Shape
class Shape {
  constructor(length) {
    // Checking if an attempt is made to instantiate the abstract class
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class 'Shape'");
    } else {
      // Assigning length to the instance if it's not an abstract class
      this.length = length;
    }
  }

  // Abstract method to calculate area
  calculateArea() {
    throw new Error(
      "Abstract method 'calculateArea' must be implemented by subclasses"
    );
  }

  // Abstract method to calculate perimeter
  calculatePerimeter() {
    throw new Error(
      "Abstract method 'calculatePerimeter' must be implemented by subclasses"
    );
  }

  // Abstract method to provide string representation
  toString() {
    throw new Error(
      "Abstract method 'toString' must be implemented by subclasses"
    );
  }
}

// Subclass Square inheriting from Shape
export class Square extends Shape {
  constructor(length) {
    super(length);
  }

  // Method to calculate area for Square
  calculateArea() {
    return this.length * this.length;
  }

  // Method to calculate perimeter for Square
  calculatePerimeter() {
    return 4 * this.length;
  }

  // Method to provide string representation for Square
  toString() {
    return `Square with side length ${this.length}, area ${this.calculateArea()}, and perimeter ${this.calculatePerimeter()}`;
  }
}

// Subclass Circle inheriting from Shape
export class Circle extends Shape {
  constructor(length) {
    super(length);
  }

  // Method to calculate area for Circle
  calculateArea() {
    return Math.PI * this.length * this.length;
  }

  // Method to calculate perimeter for Circle
  calculatePerimeter() {
    return 2 * Math.PI * this.length;
  }

  // Method to provide string representation for Circle
  toString() {
    return `Circle with radius ${this.length}, area ${this.calculateArea()}, and perimeter ${this.calculatePerimeter()}`;
  }
}
