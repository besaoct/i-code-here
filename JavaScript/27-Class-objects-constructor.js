


// Class:
// A class in JavaScript is a blueprint for creating objects with similar properties and behaviors. It serves as a template for creating multiple instances of objects that share common characteristics. Classes encapsulate data for the object (properties) and functionality (methods) to manipulate that data.

// Example:


// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
  
//   drive() {
//     console.log(`Driving ${this.brand} ${this.model}`);
//   }
// }

// // Creating instances of the Car class
// let car1 = new Car("Toyota", "Camry");
// let car2 = new Car("Honda", "Accord");

// car1.drive(); // Output: Driving Toyota Camry
// car2.drive(); // Output: Driving Honda Accord
// Constructor:
// A constructor is a special method inside a class that gets called automatically when a new instance of the class is created. It is used to initialize the newly created object with initial values or perform any setup tasks required by the object.

// Example:
// In the previous example, constructor(brand, model) is the constructor method of the Car class. It initializes the brand and model properties of each Car instance with the values provided during object creation.

// Object:
// An object in JavaScript is a composite data type that represents a collection of key-value pairs (properties). Objects can also have methods associated with them, which are functions that can access and manipulate the object's data.

// Example:

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
//   }
// };

// person.greet(); // Output: Hello, my name is John Doe
// Now, let's discuss the differences between these concepts:

// Differences:

// Class vs. Constructor:

// A class is a blueprint or template for creating objects, defining their properties and methods.
// A constructor is a special method inside a class that gets called automatically when a new instance of the class is created. It initializes the object's properties.

// Constructor vs. Object:

// A constructor is a method within a class used to initialize objects created from that class.
// An object is an instance of a class, representing a specific entity with its own set of properties and methods.

// Class vs. Object:

// A class is a template or blueprint for creating objects.
// An object is an instance of a class, representing a specific entity with its own state and behavior.
// In summary, classes are used to define the structure of objects, constructors are special methods within classes used for initialization, and objects are instances of classes representing specific entities in your program. These concepts work together to create modular and reusable code in JavaScript.

// ------------

// Inheritance is a fundamental concept in object-oriented programming (OOP) that allows classes to inherit properties and methods from other classes. It enables code reuse and promotes the creation of hierarchical relationships between classes.

// Inheritance typically involves two types of classes:

// Base Class (Parent Class or Superclass):

// A base class is a class that provides common properties and methods to be inherited by other classes.
// It serves as a template for creating more specialized classes.
// Base classes are also referred to as parent classes or superclasses.
// Derived Class (Child Class or Subclass):

// A derived class is a class that inherits properties and methods from a base class.
// It extends or specializes the functionality provided by the base class.
// Derived classes may add new properties or methods, override existing ones, or define their own behaviors.
// In JavaScript, inheritance is implemented using the extends keyword to create subclass relationships between classes.

// Syntax:

// class BaseClass {
//   // Base class definition
// }

// class DerivedClass extends BaseClass {
//   // Derived class definition, extends BaseClass
// }
// Example:

// javascript
// Copy code
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
  
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log(`${this.name} barks`);
//   }
// }

// let dog = new Dog("Buddy");
// dog.speak(); // Output: Buddy barks
// In this example:

// The Animal class is the base class, which defines a speak method.
// The Dog class is the derived class, which extends the functionality of the Animal class by overriding the speak method.
// When an instance of Dog is created and the speak method is called, the overridden method in the Dog class is executed.
// Key Points:
// Inheritance promotes code reuse and modularization by allowing classes to inherit properties and methods from other classes.
// Derived classes inherit all properties and methods of the base class and can extend or modify them as needed.
// JavaScript supports single inheritance, meaning a class can only inherit from one base class. However, multiple levels of inheritance (inheritance chains) are possible.
// Care should be taken to design class hierarchies that reflect real-world relationships and promote code maintainability and flexibility.

//-----------------------------------------------------------

// In real life, a car is an object.

// A car has properties like weight and color, and methods like start and stop:

// Object Properties -----------	
	
// car.name = Fiat

// car.model = 500

// car.weight = 850kg

// car.color = white	

// ----methods------------------
// car.start()

// car.drive()

// car.brake()

// car.stop()

// All cars have the same properties, but the property values differ from car to car.

// All cars have the same methods, but the methods are performed at different times.

function carConstructor(name){
    this.name = name
    this.type = 'Fiat';
    this.model= '500';
    this.color='White'
}

class carClass {
    obj = carObj

}

const carObj = {type:"Fiat", model:"500", color:"white"};

const bmw = new carConstructor("bmw")

const audi = new carClass

console.log(carObj.type)
console.log(bmw.color)

console.log(audi.obj.type)




/*

In JavaScript, objects and prototypal inheritance are fundamental concepts that form the basis of the language's object-oriented programming model. Let's break down each of these concepts:

Objects:
In JavaScript, an object is a collection of key-value pairs, where each key is a string (or Symbol) and each value can be of any data type (including other objects, functions, arrays, etc.). Objects in JavaScript are dynamic, meaning you can add or remove properties at any time.


Creating Objects:
There are several ways to create objects in JavaScript:
*/

// Object Literal: Using curly braces {} to define key-value pairs.

// let person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// person.greet()

//Using Constructor Functions: Creating objects using constructor functions and the new keyword.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//         console.log("Hello!");
//     };
// }
// let john = new Person("John", 30);
// john.greet()


/**
 * Prototypal Inheritance:
In JavaScript, objects can inherit properties and methods from other objects through a mechanism called prototypal inheritance. Each object in JavaScript has an internal property called [[Prototype]] (commonly referred to as the prototype), which references another object. When a property or method is accessed on an object, if it's not found on the object itself, JavaScript will look for it in the object's prototype, and if not found there, in the prototype's prototype, and so on, creating a chain of prototypes.

Prototype Chain:
Every object in JavaScript inherits properties and methods from its prototype object, and this chain continues until it reaches the Object.prototype, which is at the top of the prototype chain.

Using Prototypes:
Prototypes are often used to add methods and properties to all instances of a particular type of object. This is especially useful for defining methods that are shared among multiple instances, as it helps conserve memory by having the method defined only once in the prototype.
 */


// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// };

// let dog = new Animal("Dog");
// dog.sayName(); // Output: My name is Dog


// We define a constructor function Animal.
// We add a method sayName to the Animal.prototype.
// When we create an instance dog of Animal and call sayName, JavaScript first looks for the sayName method on the dog object, doesn't find it, then looks for it on dog's prototype (Animal.prototype), and finds it there.
// Understanding objects and prototypal inheritance is crucial for writing efficient and maintainable JavaScript code. They form the backbone of many JavaScript frameworks and libraries, such as React and Angular.