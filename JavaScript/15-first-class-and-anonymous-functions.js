/*

First class and Anonymous functions:

Function statement : Just your normal function definition

function a() {
  console.log("a called");
}
a();

Function Expression : Assigning a function to a variable. Function acts like a value
js

var b = function() {
  console.log("b called");
}
b();

Difference btw function statement and expression is Hoisting

You can put "a();" before "function a()" and it will still work. But putting "b();" before "var b = function()" throws a typeError.
Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.

Function Declaration : Exactly same as function statement

Anonymous Function : A function without a name
They don't have their own identity. So an anonymous function without code inside it results in an error.
Anonymous functions are used when functions are used as values eg. the code sample for function expression above

Named Function Expression : Same as Function Expression but function has a name instead of being anonymous


var b = function xyz() {
  console.log("b called");
}
b(); // prints "b called" properly
xyz(); // Throws ReferenceError:xyz is not defined.

xyz function is not created in global scope. So it can't be called.

Parameters vs Arguments

var b = function(param1, param2) {  // labels/identifiers that get the arg values 
  console.log("b called");
}
b(arg1, arg2); // arguments - values passed inside function call

First Class Function aka First Class Citizens
You can pass functions inside a function as arguments(WOW!)


var b = function(param1) {
  console.log(param1); // prints " f() {} "
}
b(function(){
  
});

this can also be done:

var b = function(param1) {
  console.log(param1);
}
function xyz(){

}
b(xyz); // same thing as prev code

you can return a function from a function:

var b = function(param1) {
  return function() {
  
  }  
}
console.log(b()); //we log the entire fun within b. 

Arrow Functions (latest in ES6 (ECMAScript 2015)



 */

// this.name = "shafin"

const obj = {
  name: "John",
  normalFunction: function() {
    console.log(this)
      console.log("Normal Function - Hello, " + this.name);
  },
  arrowFunction: () => {
      console.log(this)
      console.log("Arrow Function - Hello, " + this.name);
  }
};

obj.normalFunction(); // Outputs: Normal Function - Hello, John
obj.arrowFunction(); // Outputs: Arrow Function - Hello, undefined


/**
 In the provided code snippet, obj is an object containing two methods: normalFunction and arrowFunction. Let's break down how each of them behaves:

normalFunction:

normalFunction: function() {
    console.log(this);
    console.log("Normal Function - Hello, " + this.name);
}
This is a traditional function declaration within the object.
When normalFunction is called, the value of this inside the function refers to the object obj, because the function is invoked as a method of obj.
Therefore, this.name will access the name property of the obj object, which is "John".
The output of console.log(this) will display the obj object itself.
The output of console.log("Normal Function - Hello, " + this.name) will be "Normal Function - Hello, John".


arrowFunction:

arrowFunction: () => {
    console.log(this);
    console.log("Arrow Function - Hello, " + this.name);
}
This is an arrow function expression within the object.
Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical scope.
In this case, since the arrow function is defined within the context of the global scope (assuming this object is defined at the top level of your code), this inside the arrow function refers to the global object (e.g., window in a browser or global in Node.js).
Since there's no name property defined in the global scope, this.name will evaluate to undefined.
The output of console.log(this) will display an empty object {} or the global object, depending on the environment.
The output of console.log("Arrow Function - Hello, " + this.name) will be "Arrow Function - Hello, undefined".
 */