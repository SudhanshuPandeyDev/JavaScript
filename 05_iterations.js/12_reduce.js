// The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value

const myNums = [1,2,3,4,5]

// here acc = accumulator , currVal = current Value and , 0 after function is accumulator initial value
const myTotal = myNums.reduce(function(acc,currVal){
    console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc + currVal
},0)

// doing same thing but just using arrow function
const myTotal1 = myNums.reduce( (acc,currVal) => acc + currVal,0)
console.log(myTotal1)

console.log(myTotal)