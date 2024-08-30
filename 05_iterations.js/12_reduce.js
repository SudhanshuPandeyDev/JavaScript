// The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value

const myNums = [1,2,3,4,5]

// here acc = accumulator , currVal = current Value and , 0 after function is accumulator initial value
const myTotal = myNums.reduce(function(acc,currVal){
    console.log(`acc : ${acc} and currVal : ${currVal}`)
    return acc + currVal
},0)
console.log(myTotal)

// doing same thing but just using arrow function
const myTotal1 = myNums.reduce( (acc,currVal) => acc + currVal,0)
console.log(myTotal1)


// how can you calculate price in all shoppingCart ....
const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
]

const total = shoppingCart.reduce( (acc , item) => acc + item.price, 0 )
console.log(`total cost : ${total}`)