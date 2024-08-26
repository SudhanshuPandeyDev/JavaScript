let score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" can be convert to number and on doing console.log(valueInNumber) it shows number
// "33abc" can convert to number and on doing console.log(valueInNumber) it shows NaN(not a number)
// true on converting into number shows 1 on doing console.log(valueInNumber)
// false on coverting into number shows 0 on doing console.log(valueInNumber)

let isLoggedIn = 1    // try with 0 , "" , " ", "sudhanshu"
let boolean = Boolean(isLoggedIn)
console.log(boolean)

// 0 is going to convert into false
// "" is going to convert into false (zero character , empty string)
// " " , "  " , "   " is going to convert into true (1 space character , 2 space character , 3 space character , not an empty string)
// "sudhanshu" is going to convert into true

// we can also convert number into string see the code below:
let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber)
console.log(stringNumber)
