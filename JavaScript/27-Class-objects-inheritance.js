









/*

In JavaScript, objects and prototypal inheritance are fundamental concepts that form the basis of the language's object-oriented programming model. Let's break down each of these concepts:

Objects:
In JavaScript, an object is a collection of key-value pairs, where each key is a string (or Symbol) and each value can be of any data type (including other objects, functions, arrays, etc.). Objects in JavaScript are dynamic, meaning you can add or remove properties at any time.


Creating Objects:
There are several ways to create objects in JavaScript:
*/

// Object Literal: Using curly braces {} to define key-value pairs.

let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello!");
    }
};

person.greet()

//Using Constructor Functions: Creating objects using constructor functions and the new keyword.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello!");
    };
}
let john = new Person("John", 30);
john.greet()


/**
 * Prototypal Inheritance:
In JavaScript, objects can inherit properties and methods from other objects through a mechanism called prototypal inheritance. Each object in JavaScript has an internal property called [[Prototype]] (commonly referred to as the prototype), which references another object. When a property or method is accessed on an object, if it's not found on the object itself, JavaScript will look for it in the object's prototype, and if not found there, in the prototype's prototype, and so on, creating a chain of prototypes.

Prototype Chain:
Every object in JavaScript inherits properties and methods from its prototype object, and this chain continues until it reaches the Object.prototype, which is at the top of the prototype chain.

Using Prototypes:
Prototypes are often used to add methods and properties to all instances of a particular type of object. This is especially useful for defining methods that are shared among multiple instances, as it helps conserve memory by having the method defined only once in the prototype.
 */


function Animal(name) {
    this.name = name;
}

Animal.prototype.sayName = function() {
    console.log("My name is " + this.name);
};

let dog = new Animal("Dog");
dog.sayName(); // Output: My name is Dog


// We define a constructor function Animal.
// We add a method sayName to the Animal.prototype.
// When we create an instance dog of Animal and call sayName, JavaScript first looks for the sayName method on the dog object, doesn't find it, then looks for it on dog's prototype (Animal.prototype), and finds it there.
// Understanding objects and prototypal inheritance is crucial for writing efficient and maintainable JavaScript code. They form the backbone of many JavaScript frameworks and libraries, such as React and Angular.