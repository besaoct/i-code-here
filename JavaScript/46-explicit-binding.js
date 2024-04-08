/**
 * Explicit binding in JavaScript refers to the process of explicitly setting the context (the value of this) for a function call using methods like call(), apply(), or bind(). This allows you to control the value of this within a function and bind it to a specific object.

Here's an explanation along with examples of each method:

1. call()
The call() method invokes a function with a specified this value and arguments provided individually.


const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

function greet() {
    console.log(`Hello, ${this.name}!`);
}

greet.call(obj1); // Output: "Hello, Alice!"
greet.call(obj2); // Output: "Hello, Bob!"
In this example, call() explicitly binds the this value of the greet function to obj1 and obj2, allowing it to access the name property of each object.

2. apply()
The apply() method is similar to call(), but it accepts arguments as an array.


const obj = { name: "Alice" };

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

greet.apply(obj, ["Hi"]); // Output: "Hi, Alice!"
Here, apply() binds the this value of the greet function to obj and passes the argument "Hi".

3. bind()
The bind() method creates a new function with a specified this value and, optionally, initial arguments.


const obj = { name: "Alice" };

function greet() {
    console.log(`Hello, ${this.name}!`);
}

const boundGreet = greet.bind(obj);
boundGreet(); // Output: "Hello, Alice!"
In this case, bind() creates a new function boundGreet with its this value bound to obj. When boundGreet() is called, it logs the greeting message with this referring to obj.

Benefits of Explicit Binding:
Control over this: You can explicitly specify the value of this, ensuring it refers to the desired object.
Reuse Functions: You can reuse functions with different contexts by binding them to different objects.
Method Borrowing: You can borrow methods from one object and use them in the context of another object.
Explicit binding is particularly useful in scenarios where you want to control the context of function execution, such as event handlers, callbacks, or when working with higher-order functions.






 */