/*

Strict mode is a feature introduced in ECMAScript 5 (ES5) that allows you to place a JavaScript program or a function in a "strict" operating context. When strict mode is enabled, certain actions that were previously ignored or permitted by JavaScript engines are now treated as errors, which helps in writing safer and more secure code and catches common coding mistakes.

Here's an explanation, examples, and a comparison of strict mode with non-strict mode:

Explanation:
Strict Mode Usage:

Strict mode can be enabled for an entire script or for a specific function by adding the 'use strict'; directive at the beginning of the script or the function body.
When you use strict mode in a script, the entire script operates in strict mode. When you use it inside a function, only that function and its nested functions operate in strict mode.
Effects of Strict Mode:

Disallows the use of undeclared variables by throwing a ReferenceError.
Assigning values to non-writable properties or non-extensible objects will throw a TypeError.
Forbids the use of with statements.
Prevents the use of arguments.callee and arguments.caller.
Prohibits duplicate property names in objects and parameter names in function declarations or expressions.
Enforces safer syntax and provides better error handling.
Examples:
1. Script-Level Strict Mode:


'use strict';

// Code here operates in strict mode

2. Function-Level Strict Mode:

javascript
Copy code
function strictFunction() {
    'use strict';
    // Code inside this function operates in strict mode
}


3. Examples of Effects:


// Undeclared variable (throws ReferenceError)
'use strict';
x = 10;

// Assigning to a non-writable property (throws TypeError)
'use strict';
const obj = {};
Object.defineProperty(obj, 'prop', { value: 42, writable: false });
obj.prop = 99;

// Using with statement (throws SyntaxError)
'use strict';
with ({ x: 1 }) {
    console.log(x); // Throws error in strict mode
}

// Duplicate parameter names (throws SyntaxError)
function duplicateParams(a, b, a) {
    'use strict';
    console.log(a);
}
Comparison with Non-Strict Mode:
1. Undeclared Variables:

Strict Mode: Throws ReferenceError.
Non-Strict Mode: Creates a global variable.
2. Assigning to Read-Only Properties:

Strict Mode: Throws TypeError.
Non-Strict Mode: Silently fails (in non-strict mode, the assignment has no effect).
3. With Statement:

Strict Mode: Throws SyntaxError.
Non-Strict Mode: Creates a new variable scope.
4. arguments.callee and arguments.caller:

Strict Mode: Disallowed.
Non-Strict Mode: Allowed.
5. Duplicate Property or Parameter Names:

Strict Mode: Throws SyntaxError.
Non-Strict Mode: Silently ignores the duplicate.
In summary, strict mode enforces stricter syntax and error handling in JavaScript, helping to catch errors and avoid potentially problematic behavior. It's recommended to use strict mode in all JavaScript code to benefit from its advantages in terms of code quality, safety, and compatibility.

*/