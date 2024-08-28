// array

const myArray = [1,2,3,4,5,"num1",true]
console.log(myArray[6])
const array2 = new Array(1,2,3,4)
console.log(array2[1])

// array methods

// myArray.push(734)
// myArray.push(999)
// myArray.pop()

myArray.unshift(90)   // (adds element in the first) unshift is considered inefficient for large arrays because it Re-index all elements which can slow down your application.
myArray.shift()       // (removes element from the first)

console.log(myArray.includes(2))
console.log(myArray.indexOf(9))
console.log(myArray)

// .join() method in JS is used to concatenate all the elements of an array into a single string.
const newArray = myArray.join()
console.log(newArray)

