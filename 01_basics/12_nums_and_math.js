const score = 400    // Type: This is a primitive value.
console.log(score)
console.log(score.toFixed(2))

const balance = new Number(100)   // Type: This is an object
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber = 123.556
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN"))   // Formats the number according to the Indian numbering system

console.log("---------------------Maths---------------------")
// console.log(Math.abs(-4))
// console.log(Math.round(5.4))
// console.log(Math.round(5.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(2,4,5,1))
// console.log(Math.max(2,4,5,6))

console.log(Math.random())    // result will always be greater than or equal to 0 and less than 1.
console.log((Math.random()*10) + 1)   // The result will be between 1 (inclusive) and 11 (exclusive). (floating point number)
console.log(Math.floor(Math.random() * 10) + 1)  // +1 to avoid cases like 0.01 on doing floor it will become 0 and we want our value greater than 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)   // formula  (doing +1 here to avoid zero case)

