// The map() function creates a new array by applying a provided function to each element of the original array.

const myNums = [1,2,3,4,5]

//using implicit scope 
const newNums = myNums.map( (num) => num + 10)
console.log(newNums)

// using explicit scope 
const newNums1 = myNums.map( (nums) => {return nums + 20})
console.log(newNums1)

// we can do the same using forEach also
const newArr = []
myNums.forEach( (val) => {
    newArr.push(val + 10)
})
console.log(newArr)