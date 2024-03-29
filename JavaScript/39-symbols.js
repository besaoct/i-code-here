
// In JavaScript, symbols are a primitive data type introduced in ECMAScript 6 (ES6) that represents a unique and immutable value. Unlike strings or numbers, symbols are guaranteed to be unique, meaning no two symbols will ever be equal, even if they have the same name.

// Creating Symbols:
// You can create a symbol using the Symbol() function, which returns a unique symbol value.


// const symbol1 = Symbol();
// const symbol2 = Symbol('description'); // Optional description


// Unique Identity:
// Symbols are guaranteed to be unique, even if they have the same description.


// const symbol1 = Symbol('key');
// const symbol2 = Symbol('key');

// console.log(symbol1 === symbol2); // Output: false


// Use Cases:
// Object Property Keys:
// Symbols are commonly used as unique keys for object properties, especially in scenarios where you want to add metadata or hide implementation details.


// const mySymbol = Symbol('myKey');
// const obj = {};

// obj[mySymbol] = 'value';
// console.log(obj[mySymbol]); // Output: value


// Predefined Symbols:
// JavaScript provides several predefined symbols that have special meanings and behaviors. Examples include Symbol.iterator, Symbol.species, and Symbol.toStringTag.


// const arr = [1, 2, 3];
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next()); // Output: { value: 1, done: false }
// console.log(iterator.next()); // Output: { value: 2, done: false }

// Private Properties and Methods:
// Symbols can be used to create private properties and methods in classes or objects, ensuring that they are not accessible from outside the class or object.


// const _privateProperty = Symbol('private');

// class MyClass {
//   constructor() {
//     this[_privateProperty] = 'private value';
//   }

//   getPrivateProperty() {
//     return this[_privateProperty];
//   }
// }

// const obj = new MyClass();
// console.log(obj.getPrivateProperty()); // Output: private value



// Summary:
// Symbols are unique and immutable values used primarily as object property keys.
// They are created using the Symbol() function and can optionally take a description as an argument.
// Symbols are useful for creating private properties, defining special behaviors, and avoiding naming collisions in object properties.