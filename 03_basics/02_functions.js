// The rest operator (...) in JavaScript collects remaining function arguments into an array.

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300))

function calculateCartPrice2(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice2(100,200,300,400,500))


// passing an object to a function.
const user = {
    username: "sudhanshu",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


// passing an array to a function.
const myArray = [10,20,30,40,50]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myArray))
console.log(returnSecondValue([734,999,666]))