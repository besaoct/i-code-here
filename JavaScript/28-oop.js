// Object-Oriented Programming (OOP) concepts such as abstraction, encapsulation, inheritance, and polymorphism are fundamental principles that facilitate the creation of modular, maintainable, and scalable code. While JavaScript is a prototype-based language rather than a class-based language like Java or C++, these OOP principles can still be applied effectively. Let's discuss each of these concepts in the context of JavaScript:

// 1. Abstraction:
// Abstraction is the process of hiding the complex implementation details and exposing only the essential features of an object. It allows you to focus on what an object does rather than how it does it. In JavaScript, abstraction can be achieved through:

// Creating functions and methods that perform specific tasks.
// Using classes and objects to represent real-world entities and their behaviors without exposing internal details.
// Defining interfaces that specify the methods an object must implement without revealing their implementations.
// 2. Encapsulation:
// Encapsulation is the bundling of data (attributes or properties) and methods (functions) that operate on that data into a single unit, typically a class. It restricts direct access to an object's data and ensures that the object's internal state remains consistent. In JavaScript, encapsulation can be achieved through:

// Using classes to define objects with private and public members.
// Using closures to create private variables and methods that are inaccessible from outside the function scope.
// Utilizing access modifiers such as private, protected, and public (available in TypeScript) to control access to class members.
// 3. Inheritance:
// Inheritance is the mechanism by which a class can inherit properties and methods from another class, known as the base class or superclass. It promotes code reuse and allows you to create a hierarchy of classes with shared characteristics. In JavaScript, inheritance can be achieved through:

// Prototype chaining, where objects inherit properties and methods from a prototype object.
// Using the extends keyword to create subclass relationships between classes (introduced in ES6).
// Implementing mixins or composition patterns to combine functionalities from multiple sources.
// 4. Polymorphism:
// Polymorphism allows objects of different types to be treated as objects of a common superclass, thereby enabling flexibility and extensibility in your code. It allows you to invoke methods on objects without knowing their specific types, as long as they implement a common interface. In JavaScript, polymorphism can be achieved through:

// Method overriding, where a subclass provides a specific implementation of a method inherited from a superclass.
// Duck typing, which focuses on the object's behavior rather than its type, allowing objects to be interchangeable if they support the required operations.
// Example (JavaScript ES6):



// // Abstraction
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
  
//   // Encapsulation
//   #age = 0; // private property
  
//   getAge() { // public method
//     return this.#age;
//   }
  
//   // Inheritance
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   speak() { // Polymorphism (Method Overriding)
//     console.log(`${this.name} barks`);
//   }
// }

// let dog = new Dog("Buddy");
// dog.speak(); // Output: Buddy barks



// In this example, we demonstrate abstraction by hiding implementation details inside the Animal class. Encapsulation is achieved by using private properties (#age) and public methods (getAge). Inheritance is showcased through the Dog class inheriting from the Animal class. Polymorphism is illustrated by the speak method being overridden in the Dog class.





