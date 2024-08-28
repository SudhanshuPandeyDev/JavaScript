// Object.create() can also be used to create object in javascript (singleton)

// object literals
const mySym = Symbol("key1")

const myObj = {
    name: "sudhanshu",
    "full name": "sudhanshu pandey",
    [mySym] : "myKey1",         // that's how we declare Symbols in javascript
    age: 20,
    location: "jaipur",
    email: "sudhanshu666@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// two methods to access object values
console.log(myObj.email)
console.log(myObj["email"])

console.log(myObj["full name"])
console.log(myObj[mySym])        
console.log(typeof mySym) 

myObj.email = "sudhanshu@chatgpt.com"     // overwriting the old value of email property
console.log(myObj["email"])

// Object.freeze(myObj)       // Object.freeze() is used to prevent modifications to an object.(makes it immutable)
myObj.email = "sudhanshu@microsoft.com"       
console.log(myObj["email"])

myObj.greeting = function(){
    console.log("Hello JS user")
}

myObj.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(myObj.greeting())
console.log(myObj.greeting2())