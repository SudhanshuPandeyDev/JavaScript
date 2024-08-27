// primitive data types (call by value)
// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 10  // Number
const scoreVal = 10.3  // Number

const isLoggedIn = false   // Boolean
const outsideTemp = null   // null
let userEmail;

// in JavaScript, a Symbol is always unique
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)   // output : false

const bigNumber = 98765432199999n  // BigInt


// Non-Primitive Data Types (Call by Reference)
// Arrays , Objects , Functions
const artist = ["landon cube","lil skies","lil modey"]      // arrays
let myObj = {
    name : "hitesh",
    age : 22
}
const myFunction = function(){
    console.log("hello world!");
}

console.log(typeof outsideTemp)  // in JavaScript, null is technically considered an object
console.log(typeof myFunction)
console.log(typeof anotherId)
