const user = {
    username : "Hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)   // The this keyword is used to access properties and methods within the same object
        console.log(this)       // shows current context
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this)   

// arrow function

// 1. basic arrow function (explicit return)
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(5,6))

// 2. implicit return
const add = (num1,num2) => num1 + num2
console.log(add(3,4))

const addThree = (num1,num2,num3) => ( num1 + num2 + num3 )   // think like if we use { } bracket then we need to use return if we use ( ) then no need to return
console.log(addThree(3,4,3))

const object = (num1 , num2) => ({username : "sudhanshu"})   // we need to use parenthesis () to return objects
console.log(object(3,9))
