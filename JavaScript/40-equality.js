
console.log("---------==-------------")


console.log("" == false);  // Output: true
console.log("0" == 0);     // Output: true
console.log(0 == false);   // Output: true
console.log(0 == true);   // Output: false

console.log(1 == '1');       // Output: true
console.log(true == '1');    // Output: true
console.log(0 == false);     // Output: true
console.log(null == undefined);  // Output: true
console.log(null == 0);      // Output: false


console.log("---------===-------------")

console.log(1 === '1');      // Output: false
console.log(true === '1');   // Output: false
console.log(0 === false);    // Output: false
console.log(null === undefined); // Output: false


console.log("" === false);  // Output: false
console.log("0" === 0);     // Output: false
console.log(0 === false);   // Output: false
console.log(0 === true);   // Output: false
console.log(-0 === +0);   // Output: true
console.log(NaN === NaN);   // Output: false
console.log(''=== '');   // Output: true

console.log("---------objectis-------------")

console.log(Object.is(-0, +0));  // Output: false
console.log(Object.is(NaN, NaN));  // Output: true
console.log(Object.is("0", 0));  // Output: false
console.log(Object.is("", true));  // Output: false
console.log(Object.is("", false));  // Output: false
console.log(Object.is(0, false));  // Output: false
console.log(Object.is({2:1}, {2:1}));  // Output: false

/**
The Object.is() method and the === operator (strict equality operator) are both used for comparing values in JavaScript, but they have some nuanced differences in how they handle certain edge cases. Here's a comparison of the two:

Object.is()
Object.is() is a method provided by JavaScript for performing strict equality comparisons between two values.
It returns true if the values are exactly the same (both in value and type), and false otherwise.
It differs from === in its treatment of two specific cases: -0 and NaN.
For -0 and +0, Object.is() considers them to be distinct values, so Object.is(-0, +0) returns false.
For NaN values, Object.is() considers them to be equal to each other, so Object.is(NaN, NaN) returns true.
=== Operator (Strict Equality Operator)
The === operator is also used for strict equality comparisons between two values.
It returns true if both the value and the type of the operands are the same, and false otherwise.
It treats -0 and +0 as equal values, so -0 === +0 returns true.
It treats NaN values as not equal to each other, so NaN === NaN returns false. */




// The equality algorithms you've mentioned are defined in the ECMAScript specification and are used to determine the equality of two values in JavaScript. Let's discuss each of them:

// 1. isLooselyEqual (Abstract Equality Comparison):
// The isLooselyEqual algorithm, also known as abstract equality comparison, is implemented by the == operator in JavaScript. It compares two values for equality after performing type conversion if necessary. This algorithm follows the rules specified in the ECMAScript specification for abstract equality comparison.

// Example:


// console.log(1 == '1');       // Output: true
// console.log(true == '1');    // Output: true
// console.log(0 == false);     // Output: true
// 2. isStrictlyEqual (Strict Equality Comparison):
// The isStrictlyEqual algorithm, also known as strict equality comparison, is implemented by the === operator in JavaScript. It compares two values for equality without performing any type conversion. It returns true if both the value and the type of the operands are the same.

// Example:


// console.log(1 === '1');      // Output: false
// console.log(true === '1');   // Output: false
// console.log(0 === false);    // Output: false
// 3. SameValueZero:
// The SameValueZero algorithm is used to determine if two values are the same, considering 0 and -0 to be equal. It's typically used in operations where NaN values need to be treated as equal, but -0 and +0 should also be considered equal.

// Example:

// console.log(Object.is(-0, +0));  // Output: true
// console.log(Object.is(NaN, NaN)); // Output: true
// 4. SameValue:
// The SameValue algorithm is similar to SameValueZero, but it does not consider -0 and +0 to be equal. It's used in situations where it's important to distinguish between -0 and +0.

// Example:


// console.log(Object.is(-0, +0));  // Output: false
// console.log(Object.is(NaN, NaN)); // Output: true

// Summary:
// isLooselyEqual and isStrictlyEqual are used for abstract and strict equality comparisons, respectively, in JavaScript.
// SameValueZero and SameValue are algorithms provided by the Object.is() method for determining equality, with SameValue being more strict than SameValueZero.
// Choosing the appropriate equality algorithm depends on the specific requirements of your code, such as whether you need type coercion or need to distinguish between different types of zero values.