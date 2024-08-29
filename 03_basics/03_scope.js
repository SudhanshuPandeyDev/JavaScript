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