// if condition in js
/*
const temp = 41
if(temp === 41){
    console.log("temperature is less than 50")
}
else{
    console.log("temperature is greater than 50")
}
console.log("executed")
*/

// implicit scope
const temp = 500
if(temp > 400) console.log("temperature is greater than 400");

// multiple conditions
const number = 1000
if(number < 500){
    console.log("lesser than 500")
}
else if(number < 750){
    console.log("lesser than 750")
}
else if(number < 900){
    console.log("lesser than 900")
}
else{
    console.log("less than 1200")
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}

if(loggedInFromEmail || loggedInFromEmail){
    console.log("User logged in")
}