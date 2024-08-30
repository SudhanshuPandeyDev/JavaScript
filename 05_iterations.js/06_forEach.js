// forEach loop in js

const myArray = ["js","ruby","java","python","cpp"]

// printing using forEach with normal function (method 1)
myArray.forEach(function(val1){
    console.log(val1)
})

// printing using forEach with arrow function (method 2)
myArray.forEach( (val2) => {
    console.log(val2)
})

// printing forEach (method 3)
function printMe(item){
    console.log(item)
}
myArray.forEach(printMe)

// we can also add index (optional) and arr (optional) 
myArray.forEach( (item , index , arr) => {
    console.log(item , index , arr)
})