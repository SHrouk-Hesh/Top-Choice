// Importing all shapes from shape.js module
import * as all from "./shape.js";

// Creating a circle object with radius 10
let circle = new all.Circle(10);

// Creating a square object with side length 5
let square = new all.Square(5);

// Displaying the string representation of circle and square
console.log(circle.toString());
console.log(square.toString());

// Separator for clarity in console output
console.log("***************");

// Generator function to create an iterator for arrays
function* arrayIteratorGenerator(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

// Adding iterator functionality to arrays
Array.prototype[Symbol.iterator] = function () {
  return arrayIteratorGenerator(this);
};

// Example array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Iterating over the array and logging each value
for (const value of arr) {
  console.log(value);
}

// Separator for clarity in console output
console.log("***************");
console.log("Using Generator");
console.log("***************");

// Example object
let person = {
  fname: "Shrouk",
  age: 22,
};


// Adding iterator functionality to the person object
person[Symbol.iterator] = createObjectIterator;

// Iterator function to iterate over object properties
function createObjectIterator() {
  const keys = Object.keys(this);
  let index = 0;
  return {
    next: () => {
      if (index < keys.length) {
        const key = keys[index++];
        return { value: this[key], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

// Iterating over the person object and logging each property value
for (const iterator of person) {
  console.log(iterator);
}
