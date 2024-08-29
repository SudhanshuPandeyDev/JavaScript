function addTwoNumbers(number1 , number2){
    return number1 + number2
}
const result = addTwoNumbers(3,8)
console.log(result)


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("sudhanshu"))
// console.log(loginUserMessage())   // if we don't pass anything to a function it returns undefined


// In JavaScript, both "" (an empty string) and undefined are considered falsy values
function loginUserMessage2(username){
    if(!username){                // This checks if username is falsy
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())      // if we don't pass anything to a function it returns undefined


// In JavaScript, you can assign default values to function parameters using the assignment operator (`=`) in the function definition, which sets the default if no value or `undefined` is provided.
function defaultValue(name = "sam"){
    return `${name} hello how are you ?`
}
console.log(defaultValue())