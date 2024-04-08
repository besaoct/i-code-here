

/**
 * 
 * prototype and __proto__ (commonly referred to as proto) are both related to JavaScript's prototype-based inheritance mechanism, but they serve different purposes.

prototype:
Every JavaScript function has a prototype property, which is an object. This prototype object is shared among all instances created with that function as a constructor.

When you create a function in JavaScript and use it as a constructor with the new keyword, the prototype property of that constructor becomes the prototype of the newly created object.

You can attach properties and methods to the prototype object of a constructor function, and these properties and methods will be accessible to instances created with that constructor.

It is worth mentioning that prototype is a property of functions (or constructors) and not of objects.

Example:


function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.sayHello(); // "Hello, my name is Alice"
person2.sayHello(); // "Hello, my name is Bob"
In this example, Person.prototype is an object shared among all instances created with the Person constructor.

__proto__ (or proto):

__proto__ is a non-standard accessor property that exposes the prototype of an object. It points to the object's prototype from which it inherits properties.

It is important to note that __proto__ is a getter/setter for the internal [[Prototype]] property, which is an internal link that points to the prototype object.

The __proto__ property allows you to access and modify the prototype of an object directly.

While __proto__ is widely used, it's important to know that it's non-standard and its use is discouraged in production code. Instead, you should use Object.getPrototypeOf() and Object.setPrototypeOf() methods.

Example:


const obj = {};
console.log(obj.__proto__); // Output: {} (Object.prototype)

const arr = [];
console.log(arr.__proto__); // Output: [] (Array.prototype)

const person = { name: "Alice" };
console.log(person.__proto__); // Output: {} (Object.prototype)
In this example, obj.__proto__ points to Object.prototype, arr.__proto__ points to Array.prototype, and person.__proto__ points to Object.prototype.

In summary, prototype is a property of functions, used for inheritance, while __proto__ is a property of objects, used to access and modify the prototype of an object. However, __proto__ should be avoided in favor of the standard methods Object.getPrototypeOf() and Object.setPrototypeOf().






 */