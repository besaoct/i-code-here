// Typecasting in programming refers to the process of converting a variable or an expression from one data type to another. This is particularly common in languages like JavaScript, where variables can dynamically change their type based on the context of their usage.

// There are generally two types of typecasting:

// Implicit Typecasting (Coercion):

// Implicit typecasting occurs automatically by the programming language without any explicit instructions from the programmer.
// It usually happens when performing operations involving different data types.
// The language automatically converts one of the operands to the data type of the other operand to perform the operation.

let num1 = 10;
let result = num1 + "5"; // Implicitly converts num to a string and concatenates "5"
console.log(result); // Output: "105"


// Explicit Typecasting:

// Explicit typecasting, as the name suggests, requires explicit instructions from the programmer to convert a value from one type to another.

// It provides more control over the conversion process.

// In JavaScript, you can use built-in functions or operators to explicitly convert data types.

// Common methods for explicit typecasting in JavaScript include:

// parseInt(): Converts a string to an integer.
// parseFloat(): Converts a string to a floating-point number.
// Number(): Converts a value to a number.
// String(): Converts a value to a string.
// Boolean(): Converts a value to a boolean.

let str0 = "123";
let num = parseInt(str0); // Explicitly converts str to an integer
console.log(num); // Output: 123


// Explicit typecasting allows programmers to ensure that the data is of the desired type before performing operations on it. However, it's essential to handle typecasting carefully to prevent unexpected behavior or errors in the program.



// Type conversion, also known as type coercion, refers to the process of converting values from one data type to another in programming. This process can be either implicit or explicit.

// Implicit Type Conversion (Coercion):
// Implicit type conversion, or coercion, occurs automatically when values of different data types are combined in an operation. The JavaScript engine automatically converts one of the operands to a compatible type before performing the operation.

// For example:


let num2 = 5;
let str1 = "Number is: " + num; // Here, num (a number) is implicitly converted to a string
console.log(str1); // Output: "Number is: 5"


// In this example, the addition operation (+) involves a string and a number. JavaScript automatically converts the number num to a string so that it can be concatenated with the other string.

// Explicit Type Conversion:
// Explicit type conversion involves manually converting values from one data type to another using built-in functions or methods provided by the programming language.

// In JavaScript, common methods for explicit type conversion include:

// parseInt(): Converts a string to an integer.
// parseFloat(): Converts a string to a floating-point number.
// Number(): Converts a value to a number.
// String(): Converts a value to a string.
// Boolean(): Converts a value to a boolean.
// For example:


let str4 = "123";
let num3 = parseInt(str4); // Explicitly converts str to an integer
console.log(num3); // Output: 123

// In this example, the parseInt() function is used to explicitly convert the string "123" to an integer.

// Key Points:
// Implicit type conversion is performed automatically by the language, while explicit type conversion requires manual intervention from the programmer.
// Implicit type conversion can sometimes lead to unexpected results or errors if not handled carefully.
// Explicit type conversion provides more control over the conversion process and can help improve code clarity and reliability.
 
let a = {}
console.log(typeof(a))