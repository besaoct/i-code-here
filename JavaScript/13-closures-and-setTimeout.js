/*


Closure : Function bundled together with its lexical environment/scope.

JS is a weird language. You can pass functions as parameters to another function, assign a variable to an entire function, or even return a function.
eg:
----------------
function x() {
  var a = 7;
  function y() {
  console.log(a);
}
  return y;   // instead of y();
}
var z = x();
console.log(z);  // value of z is entire code of function y.
----------------------

When functions are returned from another function, they still maintain their lexical scope.

When y is returned, not only is the func returned but the entire closure (fun y + its lexical scope) is returned and put inside z. So when z is used somewhere else in program, it still remembers var a inside x()
Closure is a very powerful concept of JS, just because this function remembers things even if they are not in their lexical scope


Uses of Closure
Module Design Pattern, Currying, Functions like once(func that can be run only once), memoize, maintaining state in async world, setTimeout, iterators etc..

 setTimeout + Closures Interview Question-----
Time, tide and Javascript wait for none

//--------------------


function x() {
  var i = 1;
  setTimeout(function() {
  console.log(i);
  }, 3000);
  console.log("This is Hari");
 }
 x();
//--------------------
 
//--------------------

This is Hari

1 //after waiting 3 seconds (3000ms)

//--------------------

We expect JS to wait 3 sec, print 1 and then go down and print the string. But JS prints string immediately, waits 3 sec and then prints 1.

The fun inside setTimeout forms a closure (remembers reference to i). So wherever fun goes it carries this ref along with it.
setTimeout takes this callback function & attaches timer of 3000ms and stores it. Goes to next line without waiting and prints string.
After 3000ms runs out, JS takes function, puts it into call stack and runs it.
Print 1 after 1 sec, 2 after 2 sec till 5 : Tricky interview question
We assume this has a simple approach as below

//--------------------

function x() {
 for(var i = 1; i<=5; i++){
   setTimeout(function() {
     console.log(i);
    }, i*1000);
   }
   console.log("This is Hari");
 }
 x();
 
//--------------------

This is Hari

6

6

6

6

6

//--------------------

This happens because of closures. When setTimeout stores the function somewhere and attaches timer to it, the fun remembers its reference to i, not value of i
All 5 copies of fun point to same reference of i.
JS stores these 5 functions, prints string and then comes back to the functions. By then the timer has run fully. And due to looping, the i value became 6. And when the callback fun runs the variable i = 6. So same 6 is printed in each log
To stop this from happening, use let instead of var as let has black scope. For each iteration, the i is a new variable altogether(new copy of i).
every time setTimeout is run, the inside fun forms closure with new variable i
Using let instead of var is the best option. But if asked to use var only..?

//--------------------

function x() {
 for(var i = 1; i<=5; i++){
   function close(i) {
    setTimeout(function() {
     console.log(i);
    }, i*1000);
    // put the setT fun inside new function close()
   }
   close(i); // every time you call close(i) it creates new copy of i. Only this time, it is with var itself!
  }
   console.log("This is Hari");
 }
 x();
 
 
*/

