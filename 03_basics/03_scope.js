let a = 300
// var c = 200    
if(true){
    let a = 10
    const b = 20
    console.log("INNER : ", a)
    // c = 400      var can also change inside block scope that's why we don't prefer to use it 
}
console.log(a)
// console.log(c)


function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username)     // child function can access parent variables
    }
    // console.log(website)       
    two()
}
one()

if(true){
    const username = "sudhanshu"
    if(username == "sudhanshu"){
        const website = " youtube"
        console.log(username + website)
    }
    // console.log(website)     error cannot access webiste
}


// --------------------------- two different ways to make functions---------------------
console.log(addOne(5))
function addOne(num){
    return num + 1
}

// console.log(addTwo(5))      // shows error cannot access addTwo before initialization
const addTwo = function(num){
    return num + 2
}
