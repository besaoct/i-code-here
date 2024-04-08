/*

A factory function in JavaScript is a function that returns an object. It's called a factory function because its primary purpose is to create and return new instances of objects. Unlike constructor functions (which are typically used with the new keyword to create objects), factory functions don't rely on constructors. Instead, they simply create and return new objects using regular function syntax.

Here's a basic example of a factory function:

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

person1.greet(); // Output: "Hello, my name is Alice and I'm 30 years old."
person2.greet(); // Output: "Hello, my name is Bob and I'm 25 years old."
In this example:

createPerson is a factory function that takes name and age as parameters and returns an object representing a person.
The returned object contains properties for name and age, as well as a method greet to log a greeting message.
person1 and person2 are created by calling createPerson with different arguments.
Advantages of Factory Functions:
Encapsulation: Factory functions can encapsulate the creation process, hiding the implementation details from the caller.
Customization: Factory functions can accept parameters to customize the returned objects, allowing for greater flexibility.
No Constructor: Since factory functions don't rely on constructors, they can be simpler and easier to understand.
No new Keyword: You don't need to use the new keyword when calling factory functions, which can reduce confusion and potential errors.

Example of Customization:

function createCar(make, model, year) {
    return {
        make: make,
        model: model,
        year: year,
        start: function() {
            console.log(`${this.make} ${this.model} (${this.year}) is starting...`);
        }
    };
}

const car1 = createCar("Toyota", "Camry", 2020);
const car2 = createCar("Tesla", "Model S", 2022);

car1.start(); // Output: "Toyota Camry (2020) is starting..."
car2.start(); // Output: "Tesla Model S (2022) is starting..."
In this example, createCar is a factory function that creates car objects. It accepts make, model, and year parameters to customize the returned car objects.

Factory functions are a useful pattern in JavaScript for creating objects, especially when you need to create multiple instances of similar objects with custom configurations.





*/