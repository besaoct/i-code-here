/*
The main differences between var, let, and const lie in their scoping, hoisting behavior, and mutability. Here's a summary of their differences:

Scoping:

var: Variables declared with var are function-scoped or globally scoped, meaning they are accessible throughout the function in which they are declared or globally if declared outside any function.
let and const: Variables declared with let and const are block-scoped, meaning they are accessible only within the block in which they are declared, including if, for, while blocks, etc.

Hoisting:

var: Variables declared with var are hoisted to the top of their scope during the creation phase of the execution context. This means you can access var variables before they are declared, but they will have the value undefined.
let and const: Variables declared with let and const are also hoisted, but they are not initialized until their actual declaration is reached in the code. Accessing them before their declaration results in a "Temporal Dead Zone" (TDZ) error.
Reassignment and Mutability:

var: Variables declared with var can be reassigned and their values can be mutated.
let: Variables declared with let can be reassigned, but their values can be mutated.
const: Variables declared with const cannot be reassigned once initialized. However, for objects and arrays, while the variable itself cannot be reassigned, the properties of objects or elements of arrays can be mutated

*/

// var example
var a = 1;
{
    var a = 2;
}
console.log(a); // Output: 2 (the inner scope modifies the outer scope variable)

// let example
let b = 1;
{
    let b = 2;
}
console.log(b); // Output: 1 (block-scoped, the inner scope doesn't affect the outer scope variable)

// const example
const c = { name: "John" };
c.name = "Jane"; // Allowed, mutating/changing the object's property
console.log(c); // Output: { name: "Jane" }
c = { name: "Alice" }; // Error: Assignment to constant variable

