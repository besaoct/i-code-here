// Hoisting is a concept which enables us to extract values of variables and functions even before initialising/assigning value without getting error

// console.log(getName)

getName()
console.log(x)

var x=7
// let x=9

function getName(){
    console.log("shafin")
}

// let, const is blocked scoped and hoisted but can't access before value init. var supports hoisting and displays "undefined" before initialization of value

// TODO: go through the 11th program about temporal dead zone and types of errors to understand more about hoisting and know let and const are hoisted
