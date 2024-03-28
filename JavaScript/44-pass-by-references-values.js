
//example 1
let a= 12;
let b = a;
++b
console.log(b)
console.log(a)
/*
Explanation:

We declare a variable a and assign it the value 12.
We declare a variable b and assign it the value of a, so b also becomes 12.
We increment the value of b by 1 using the ++ operator.
We print the value of b, which is 13.
We print the value of a, which remains 12. This shows that the increment operation on b did not affect the value of a.
In this example, both a and b are primitive data types (numbers). When we assign the value of a to b, it creates a separate copy of the value 12 in memory for b, so modifying b does not affect a.
*/


//example 2

let arr1 = [3,4,7]
let arr2 = arr1;
arr2.push(5)

console.log(arr1)

/**
 * Explanation:

We declare an array arr1 with elements [3, 4, 7].
We declare a variable arr2 and assign it the value of arr1. Here, arr2 also refers to the same array object as arr1.
We push the value 5 into arr2.
When we print arr1, it also reflects the change made to arr2, showing [3, 4, 7, 5].
In this example, both arr1 and arr2 are referencing the same array object in memory. So, any modifications made to arr2 also affect arr1 because they both point to the same underlying data structure.

In summary, the key difference lies in whether the variable holds a primitive value or a reference to an object. Primitive values are passed by value, meaning a copy is made, while objects are passed by reference, meaning both variables point to the same object in memory.
 */


// Pass by Value:
// When a primitive data type (such as numbers, strings, or booleans) is passed as an argument to a function, it is passed by value. This means that a copy of the value is passed to the function, and any changes made to the parameter inside the function do not affect the original value outside the function.

function modifyValue(x) {
    x = x + 1; // Changes made to x inside the function
    console.log("Inside function:", x); // Output: Inside function: 6
}

let num = 5;
modifyValue(num);
console.log("Outside function:", num); // Output: Outside function: 5

// Explanation:

// Here, num is a primitive data type (number).
// When num is passed to the modifyValue function, its value (5) is copied into the parameter x.
// Inside the function, x is incremented by 1, but this change does not affect the original value of num outside the function.


// Pass by Reference:
// When an object is passed as an argument to a function, it is passed by reference. This means that a reference (memory address) to the object is passed to the function, rather than a copy of the object itself. Any modifications made to the object inside the function will affect the original object outside the function.


function modifyObject(obj) {
    obj.property = "modified"; // Changes made to obj inside the function
    console.log("Inside function:", obj); // Output: Inside function: { property: 'modified' }
}

let myObject = { property: "original" };
modifyObject(myObject);
console.log("Outside function:", myObject); // Output: Outside function: { property: 'modified' }

/*
Explanation:

Here, myObject is an object.
When myObject is passed to the modifyObject function, a reference to the object is passed to the parameter obj.
Inside the function, the property of the object is modified.
This modification is reflected in the original object myObject outside the function because both myObject and obj point to the same object in memory.
In summary, understanding pass by value and pass by reference helps in understanding how values are handled in JavaScript functions, especially when dealing with primitive types and objects.
*/