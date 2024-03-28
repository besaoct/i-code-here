// function a() {
//     var b = 10;
//     c();
//     function c() {
//     console.log(b); // when cursor comes here, it still prints out 10 somehow!!
//     }
//    }
//    a();

// ----------

// console.log(x)
// let a=0;
// const x=100
// x=100
// console.log(x)
// console.log(a)


// -------------


// let message = 'Hello World!';

// function sayHello() {
//     let message = 'Goodbye World!';
//   console.log(message);
// }

// console.log(message)
// sayHello();

// var a = 9;
// {
//      console.log(a)
// a=10;
// console.log(a)
// }

// console.log(a)


// var a=10;
// let a=100;
// console.log(a)





// let a=10;
// console.log(a)


// {
    // var a =10
    // let b =12
    // const b =12
// }
// console.log(b)




// --------------------------------------

// In JavaScript, variable shadowing occurs when a variable with the same name is declared within a nested scope (such as a block or a function) as a variable in an outer scope. When shadowing occurs, the inner variable temporarily hides the outer variable within its scope.


// var a = 100; // Global variable 'a' declared and initialized to 100

// {
//     var a = 10; // Shadowing the global variable 'a' within this block, its value becomes 10
//     let b = 20; // Local variable 'b' declared and initialized to 20
//     const c = 30; // Local constant variable 'c' declared and initialized to 30

//     console.log(a); // Prints the value of the locally shadowed variable 'a', which is 10
//     console.log(b); // Prints the value of the local variable 'b', which is 20
//     console.log(c); // Prints the value of the local constant variable 'c', which is 30
// }

// console.log(a); // Prints the value of the globally shadowed variable 'a', which is now 10

// -----------------------

// let b = 100; // Global variable 'b' declared and initialized to 100

// {
//     var a = 10; // Variable 'a' declared using var, accessible globally after this block
//     let b = 20; // Local variable 'b' declared and initialized to 20, different from the global 'b'
//     const c = 30; // Local constant variable 'c' declared and initialized to 30

//     console.log(b); // Prints the value of the local variable 'b', which is 20
// }

// console.log(b); // Prints the value of the global variable 'b', which is 100

/*
Here's what happens:

A global variable b is declared and assigned the value 100.

Inside the block, a new variable a is declared using var, making it accessible globally after the block ends.

Inside the block, a new variable b is declared using let, making it local to that block. This variable b shadows the global b within this block.

Inside the block, console.log(b) prints the value of the local variable b, which is 20.

Outside the block, console.log(b) prints the value of the global variable b, which is 100. Since the local variable b inside the block has a separate scope, it does not affect the value of the global b declared outside the block.
*/


// let a =10;

// {
//     const a=12
//     console.log(a)
// }

// console.log(a)


// var a = 27;
// function x(){
//     let a = 20;
//     console.log(a)
// }
// x()
// console.log(a)


// let a=10;
// function m() {
//     var a=90
//     console.log(a)
//  }



// function x() {
//     var a = 7;

//     function y() {
//     console.log(a);
//   }
//     return y;   // instead of y();
//   }

//   console.log(x())




// function x() {
//     var i = 1;
//     setTimeout(function() {
//     console.log(i);
//     }, 3000);
//     console.log("This is Shafin");
//    }
//    x();



// function x(){

//     let i =1;
//     setTimeout(function()  {
//         console.log(i)
       
//     } , 1000);
//     console.log("I am shafin")
 
// }
// x()



// ---------------setTimeout and closure----------------


// function t(){
//     var i = 1;
//     for (i; i <= 4; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 1000);
//         console.log(i);
//     }
// }
// t();

// // output is  :
// 1
// 2
// 3
// 4
// 5
// 5
// 5
// 5


// why? 

// In the given code, you have a function t() that initializes a variable i to 1 and runs a loop where i increments up to 4. Inside the loop, there's a setTimeout() function that is supposed to log the value of i after a delay of 1000 milliseconds.

/*
Here's why you're getting this output:

The loop runs from 1 to 4.

Inside the loop, setTimeout() is called for each iteration. The setTimeout() function schedules its callback to be executed after the specified delay (1000 milliseconds in this case), but the loop doesn't wait for it to complete. It continues its iterations immediately.

The console.log(i) within the loop prints the current value of i for each iteration of the loop. So, it prints 1, 2, 3, and 4.

After the loop completes, i becomes 5. This is because the loop increments i until i <= 4 evaluates to false, and the loop stops when i becomes 5.

After 1000 milliseconds (1 second), the callbacks registered with setTimeout() start executing. At this point, the loop has already finished and i is now 5.
When the callbacks execute, they log the value of i, which is now 5. Since the loop has finished and the value of i is shared across all the callbacks due to closure, they all print 5.
*/

// To fix this issue and have the callbacks log the values 1, 2, 3, and 4 respectively, you can use a closure to capture the current value of i for each iteration:


// function t(){
//     // let i=1;
//     for (let i=1; i<=4;i++){

//         // (function(j){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 3000);
//     // })

//     }
// }
// t()


// function t() {
//     for (var i = 1; i <= 4; i++) {
//         (function (j) {
//             setTimeout(() => {
//                 console.log(j);
//             }, 1000 * i); // Delay increases with each iteration
//         })(i);
//     }
// }
// t();

// This way, each iteration of the loop creates its own scope, capturing the current value of i in a separate variable j, ensuring that the correct value is logged after the specified delay.


// function outer() {
    
//     // var y=100
//     function inner(){
//         // var y =10
//         console.log(y)
//         // var y=90;

//     }

//     let y =20;
//     return inner;
// }
// outer()()


// function counter(){
// var count= 10;
// function increment(){
//     count++
//     console.log(count)
// }

// return increment
// }

// const counter1 = counter()
// const counter2 = counter()

// counter1()
// counter2()

//better approach with constructor

// class Counter {
//     constructor() {

//         let count = 10;

//         this.increment = function () {
//             count++;
//             console.log(count);
//         };

//         this.decrement = function () {
//             count--;
//             console.log(count);
//         };

//     }
// }

// const counter1 = new Counter()

// counter1.increment()
// counter1.decrement()


// Inside Js engine-------------------

/*

Parser:

JavaScript source code ➡️ Parser ➡️ Abstract Syntax Tree (AST)

Compilation (Interpreter + Compilation):
JavaScript source code ➡️ Parser ➡️ Interpreter ➡️ Bytecode/Intermediate Representation

Optimization (Just-In-Time Compilation):
Bytecode/Intermediate Representation ➡️ Hotspot Identification ➡️ Optimization ➡️ Machine Code.

Execution:
Machine Code ➡️ Processor ➡️ Execution ➡️ Result

Profiling and Deoptimization:
Execution ➡️ Profiling ➡️ Deoptimization (if assumptions invalidated) ➡️ Revert to Interpretation

Garbage Collection and Memory Management:
Throughout the process, the engine manages memory allocation and deallocation as well as garbage collection to reclaim memory.

*/








/*
//let's understand higher order function


// Define an array of radii
const arrRadius = [2, 4, 5];

// Define a function to calculate the area given a radius
const areaLogic = (radius) => Math.PI * radius * radius;

// Define a function that takes an array of radii and a logic function to calculate something based on the radii
function calculate(radius, logic) {
    // Initialize an empty array to store the calculated results
    output = [];
    
    // Iterate over each radius in the array
    for (let i = 0; i < radius.length; i++) {
        // Calculate the result using the provided logic function and push it into the output array
        output.push(logic(radius[i]));
    }
    
    // Return the array containing the calculated results
    return output;
}

// Call the calculate function with the array of radii and the logic function to calculate area
console.log(calculate(arrRadius, areaLogic));



// The calculate function takes an array of radii and a logic function as arguments. It then applies the logic function to each element of the array and returns the resulting array of calculated values. In this specific case, the logic function areaLogic calculates the area of a circle given its radius.


// Define a function to calculate the circumference given a radius
const circumference = (radius) => Math.PI * 2 * radius;

// Add a method 'calculate' to the Array prototype
Array.prototype.calculate = function(logic) {
    // Initialize an empty array to store the calculated results
    const output = [];
    
    // Iterate over each element in the array
    for (let i = 0; i < this.length; i++) {
        // Calculate the result using the provided logic function and push it into the output array
        output.push(logic(this[i]));
    }
    
    // Return the array containing the calculated results
    return output;
}

// Call the custom 'calculate' method on radiusArray, passing the areaLogic function to calculate areas
console.log(radiusArray.calculate(areaLogic));

*/


//arrar - map - filter -reduce

// const arr = [2, 4, 8,21, 9, 15,7, 0]

// arr.push(16)
// arr.push(33)

// const doubleArr = arr.map((x)=> 2*x)
// console.log(doubleArr)

// const filterEven = arr.filter((x)=>x%2)
// console.log(filterEven)

// const findMax = arr.reduce(
//     function(acc, curr){
//        if (curr>acc) {
//           acc = curr
//        }
//        return acc;
//     },0
    
//  )


// //  with function
// const findMaxFunc =(arr)=>
// {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//            max =arr[i]
//         } 
//     }
//     return max
// }

// console.log(findMaxFunc(arr))
// console.log(findMax)

// const getSum = arr.reduce(
//     function(sum, val){
//       return sum = val+sum
//     },0
    
// )
// console.log(getSum)

// const binaryArr = arr.map((x) => x.toString(2));
// console.log(binaryArr)



// const users1 = [
// 	{ firstName: "Alak", lastName: "sen", age: 23 },
// 	{ firstName: "Sakib", lastName: "rahman", age: 29 },
// 	{ firstName: "Masud", lastName: "Rana", age: 29 },
// 	{ firstName: "Shafin", lastName: "Ahmed", age: 50 },
// ];

// get the array of fullname

// const fullNameArr = users1.map((x)=>x.firstName+ " " +x.lastName)
// console.log(fullNameArr)

// Get the count/report of how many unique people with unique age are there

// const users = [
// 	{ firstName: "Alak", lastName: "sen", age: 23 },
// 	{ firstName: "Sakib", lastName: "rahman", age: 29 },
// 	{ firstName: "Masud", lastName: "Rana", age: 29 },
// 	{ firstName: "Shafin", lastName: "Ahmed", age: 50 },
// ];
// const countUage= users.reduce(
  
//     function(n,user){
//     n[user.age]= n[user.age]? ++ n[user.age]:1
//     return n
//     },{}

// )
// console.log(countUage)
/**
 * Using the reduce Method: The reduce method is a way to transform an array into something else, like a single value (in this case, an object). It takes a function as an argument. This function will be called on each element of the array, and it will accumulate a result.

What's Happening Inside reduce:

Initially, it starts with an empty object {} which is provided as the second argument to reduce. This empty object will hold the counts of unique ages.
Then, for each user in the users array, it checks if there's already an entry for that user's age in the accumulator object (n). If there is, it increments the count for that age by one. If not, it sets the count for that age to 1.
Finally, it returns the updated accumulator object n.
Example with Explanation: Let's take the first user, Alak, who is 23 years old:

Initially, the accumulator object n is empty {}.
It checks if there's an entry for age 23 in n, which doesn't exist yet. So, it sets n[23] to 1.
Now, the accumulator becomes {23: 1}.
Result:

After processing all users, the accumulator object (countUage) contains counts of unique ages as keys and the number of people with that age as values.
 */


// First name of all people whose age is less than 30

// const fnameWithAge= users.filter((user)=> user.age<30).map(user=>user.firstName)

// console.log(fnameWithAge)

//using reduce

// const fwaReduce = users.reduce(
//     function(acc, curr){
//         if (curr.age<30) {
//          acc.push(curr.firstName)
//         }
//       return acc
//     },[]
// )
// console.log(fwaReduce)


// -----------------------------------



// let a=5, b=8

// while(a-1<=b+1){
//    --b
//    a++
// }

// console.log(a)
// console.log(b)

// const array =[3,5,6]

// Array.prototype.rev0 = function(){

//     rArr =[]
//     for (let i = this.length-1; i >=0 ; i--) {
//        rArr.push(this[i])
 
//     }
//     return rArr
// }

// console.log(array.rev0())

// const revArray = array.map((_, i, arr)=> arr[arr.length-1-i])
// console.log(revArray)

// const sumOfrevArr=revArray.reduce((sum,curr)=> sum=sum+curr, 0)
// console.log(sumOfrevArr)

//------------callbacks & callback hell------------ 28th march
