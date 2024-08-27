// console.log(2 > 1)
// console.log(2 < 1)
// console.log(3 >= 2)
// console.log(2 == 2)
// console.log(2 != 3)

console.log("we should avoid given below types of conversions")
console.log("2" > 1)  // JavaScript does automatically convert "2" and "02" into the number 2  when you compare them with a number like 1
console.log("02" > 1)

console.log(null > 0)   // output : false
console.log(null == 0)  // output : false
console.log(null >= 0)  // output : true
// why they are behaving differently (null > 0) and (null >= 0) ?
/* the reason is that an equality check == and comparisons >  <  >=  <= work differently
comparisons convert null to a number, treating it as 0 that's why null > 0 is false and null >= 0 is true */  

console.log(undefined > 0)   // undefined is going to give false in all cases
console.log(undefined == 0)
console.log(undefined < 0)