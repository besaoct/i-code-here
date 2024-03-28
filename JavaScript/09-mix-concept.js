// a=10 + + +"10 " +10+ +"10"


// b=20
// c="20"

// console.log(a)

// d = (typeof(b)== typeof(c))
// console.log(c===b) // no type conversion
// console.log(b==c) //type conversion is there
// console.log(d)


// //lexical env
// var y=10
// {
//     var y=9

//     {
//         console.log("t=" +y)
//     }
//     var y=18 //undefined
// }


// //------------

a=2.9 ; b=3.1

console.log(b-a)

/*



The output you're getting is due to the way floating-point numbers are represented in computer memory. Computers use binary floating-point arithmetic, which can sometimes lead to small rounding errors.

In your case, b - a should indeed be 3.1 - 2.9 = 0.2. However, due to the limitations of floating-point representation, you're seeing a very small error (0.20000000000000018) instead of exactly 0.2.

This happens because the decimal number 0.2 doesn't have an exact representation in binary. Just like 1/3 cannot be represented precisely in decimal notation (0.33333...), certain decimal fractions cannot be represented exactly in binary.

To avoid such issues, you can use methods to round the result if precision beyond a certain point isn't necessary for your application. For example, you could use the toFixed() method in JavaScript to round the result to a certain number of decimal places:
*/

console.log((b - a).toFixed(2)); // This will output: 0.20
