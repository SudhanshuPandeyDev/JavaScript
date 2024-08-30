// nullish coalescing operator (??) 
// The nullish coalescing operator (??) in JS is used to provide a default value when dealing with null or undefined
// ?? Operator: Returns the right-hand side only if the left-hand side is null or undefined

let count = 0
let result2 = count ?? 10
console.log(result2)  // Output: 0 (because 0 is not null or undefined)

let val1
// val1 = 5 ?? 10      // output : 5
// val1 = null ?? 20      // output : 20
val1 = undefined ?? 30    // output : 30
console.log(val1)

let val2
val2 = null ?? 10 ?? 20           // it is going to assign first value
console.log(val2)

let val3
val3 = undefined ?? 100 ?? 200
console.log(val3)
