// filter return us some values but forEach method does not return any values
// Use Case: Use forEach when you want to perform an action for each element in the array, without needing to create a new array.
// Use Case: Use filter when you need a new array based on certain criteria.
// The filter() method in JavaScript is used to create a new array containing elements that meet a specific condition

const myNums = [1,2,3,4,5,6,7,8,9]

// basic arrow function (explicit return)
const newNums1 = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums1)

// implicit return
const newNums2 = myNums.filter( (num) => num > 4 )
console.log(newNums2)

// we can also do this thing using forEach loop (both filter and this method are equally efficient)
const newNums3 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums3.push(num)
    }
})
console.log(newNums3)