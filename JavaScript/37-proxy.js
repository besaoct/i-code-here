/*

In JavaScript, a Proxy is an object that wraps another object or function and intercepts fundamental operations like property lookup, assignment, invocation, etc. This interception allows you to customize the behavior of these operations. Proxies are powerful tools for metaprogramming, enabling you to implement various patterns such as validation, logging, memoization, and more.

Here's an overview of how proxies work and some examples of their usage:

Basic Syntax:

const proxy = new Proxy(target, handler);
target: The object or function that the proxy wraps.
handler: An object that defines the traps, which are methods that intercept operations performed on the proxy.
Example:
javascript
Copy code
const target = {
    name: "Alice",
    age: 30
};

const handler = {
    get: function(target, prop, receiver) {
        console.log(`Getting property "${prop}"`);
        return target[prop];
    },
    set: function(target, prop, value, receiver) {
        console.log(`Setting property "${prop}" to "${value}"`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Logs: "Getting property "name", then outputs: "Alice"
proxy.age = 31; // Logs: "Setting property "age" to "31""
console.log(proxy.age); // Logs: "Getting property "age", then outputs: "31"
In this example:

The handler object defines two traps: get and set.
When accessing properties or setting properties on the proxy (proxy.name and proxy.age = 31), the respective traps are invoked.
The traps can intercept these operations and perform custom behavior before delegating to the original target object.
Common Proxy Traps:
get(target, prop, receiver): Intercepts property access.
set(target, prop, value, receiver): Intercepts property assignment.
apply(target, thisArg, argArray): Intercepts function invocation.
construct(target, argArray, newTarget): Intercepts object instantiation with the new keyword.
deleteProperty(target, prop): Intercepts property deletion.
has(target, prop): Intercepts property existence checks (prop in target).
getOwnPropertyDescriptor(target, prop): Intercepts calls to Object.getOwnPropertyDescriptor.
defineProperty(target, prop, descriptor): Intercepts calls to Object.defineProperty.
Use Cases:
Validation: Validate property values before assignment.
Logging: Log property access and modifications for debugging.
Caching/Memoization: Cache function results to improve performance.
Virtualization: Create objects with dynamically generated properties.
Security: Restrict access to sensitive properties.
Proxies provide a flexible and powerful mechanism for controlling the behavior of JavaScript objects and functions. However, it's important to use them judiciously, as they can introduce complexity and performance overhead if overused.

*/