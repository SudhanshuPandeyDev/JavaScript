// conversion Operations example 
let value = 3
let negValue = -value
console.log(negValue)

// Operations example (arithmetic , subtraction , multiplication...)
// console.log(2+2)
// console.log(2-2)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " sudhanshu"
let str3 = str1 + str2
console.log(str3)

// look at given conversion below : 
console.log("1" + 2)       // output : 12
console.log(1 + "2")       // output : 12
console.log("1" + 2 + 2)   // output : 122 (bcz first given number is String)
console.log(1 + 2 + "2")   // output : 32  (bcz first given number is Number)

// also look at conversions given below (bad practices to write code like this)
console.log(+true)  // converting true into number 
console.log(+"")    // converting "" into number