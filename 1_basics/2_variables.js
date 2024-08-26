const accountId = 144553
let accountEmail = "sudhanshu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 122334   not allowed 
accountEmail = "sudhanshu@google.com"
accountPassword = "74564"
accountCity = "bengaluru"  

console.log(accountId)

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])