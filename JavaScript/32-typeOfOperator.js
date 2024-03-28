// typeof operand
//Where operand is the variable or expression whose type you want to determine.

let x = 10;
let y = "Hello";
let z = true;

console.log(typeof x); // Output: "number"
console.log(typeof y); // Output: "string"
console.log(typeof z); // Output: "boolean"

/**
 * In this example:

typeof x returns "number" because x is a number.
typeof y returns "string" because y is a string.
typeof z returns "boolean" because z is a boolean.
Common Return Values:
"number": Indicates a numeric value, including integers and floating-point numbers.
"string": Indicates a string value.
"boolean": Indicates a boolean value (true or false).
"undefined": Indicates that a variable has been declared but has not been assigned a value.
"object": Indicates an object (including arrays, functions, and null).
"function": Indicates a function.
Handling Special Cases:
typeof null returns "object", which is a historical quirk in JavaScript.
typeof NaN returns "number", which can sometimes be confusing as NaN stands for "Not a Number".
typeof [] returns "object", indicating that arrays are a type of object in JavaScript.
The typeof operator is useful for checking the type of a variable dynamically in your code, especially when you want to handle different types of data differently. However, it's important to note that it has limitations, especially with regard to distinguishing between different types of objects.
 */