/*

Reflect is a built-in object in JavaScript that provides methods for performing various operations on objects. These methods are similar to those of the Object global object, but they are intended to be used as functions and are also part of the metaprogramming features of JavaScript.

Here's a breakdown of Reflect along with a code example:

Key features of Reflect:
Static methods: All methods of Reflect are static, meaning you call them directly on the Reflect object itself, rather than on an instance.

No this binding: Reflect methods do not use this context. This can be useful when you need to pass methods as arguments or when you're working with functions that don't have their own this context.

Return values: Methods in Reflect typically return a Boolean value or the value resulting from the operation. They allow you to interact with objects in a more predictable and consistent manner.

Code example:

const obj = {
    name: "Alice",
    age: 30
};

// Reflect.get() - Retrieves the property value of an object
const nameValue = Reflect.get(obj, 'name');
console.log(nameValue); // Output: "Alice"

// Reflect.set() - Sets the property value of an object
Reflect.set(obj, 'age', 31);
console.log(obj.age); // Output: 31

// Reflect.has() - Checks if a property exists on an object
const hasAgeProperty = Reflect.has(obj, 'age');
console.log(hasAgeProperty); // Output: true

// Reflect.deleteProperty() - Deletes a property from an object
Reflect.deleteProperty(obj, 'age');
console.log(obj); // Output: { name: "Alice" }

// Reflect.construct() - Invokes a constructor with the specified arguments
function Person(name) {
    this.name = name;
}
const alice = Reflect.construct(Person, ['Alice']);
console.log(alice); // Output: Person { name: "Alice" }

// Reflect.apply() - Calls a target function with arguments
function greet(name) {
    console.log(`Hello, ${name}!`);
}
Reflect.apply(greet, null, ['Alice']); // Output: "Hello, Alice!"
In this example:

We use various methods of the Reflect object to interact with the obj object.
Reflect.get() retrieves the value of the name property.
Reflect.set() sets the value of the age property.
Reflect.has() checks if the age property exists.
Reflect.deleteProperty() deletes the age property.
Reflect.construct() constructs a new object using the Person constructor.
Reflect.apply() calls the greet function with the specified arguments.
Reflect provides a standardized way to perform meta-operations on objects, making the code more predictable and easier to understand. It's especially useful in scenarios where you need to perform operations programmatically or where you need to manipulate objects in a consistent way.

*/