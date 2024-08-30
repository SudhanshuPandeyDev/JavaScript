// A value is considered falsy if it is treated as false when encountered in a boolean context.
// false, 0, -0, BigInt 0n,  "" (empty string), null, undefined, NaN (Not a Number)

if (0) {
    console.log("This won't run because 0 is falsy.");
}
else {
    console.log("0 is falsy!");
}
  
// A value is considered truthy if it is treated as true in a boolean context.
// "0", "false", " "               (any non-empty string is truthy)
// [], {}, function(){}            (array, objects, function)

const myArray = []
if(myArray){
    console.log("i am truty")
}
else{
    console.log("i am falsy")
}

// how to check array if array is empty or not
const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty")
}

// how to check if object is empty or not
const myObj = {}
if(Object.keys(myObj).length === 0){         // Object.keys(myObj) : it is going to return an array so do .length
    console.log("object is empty")
}
else{
    console.log("not empty")
}