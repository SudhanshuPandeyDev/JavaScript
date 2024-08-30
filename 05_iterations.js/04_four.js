// for...of loop in JavaScript

const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num)
}

const greeting = "hello !"
for(const str of greeting){
    console.log(`each character is ${str}`)
}

// Map in javascript

const map = new Map()
map.set("IN","India")
map.set("US","United states of america")
map.set("Fr","france")
map.set("IN","India")

// console.log(map)

for(const output of map){       // to print whole map
    console.log(output)
}
for(const [key,values] of map){       // to print keys and values diffrenetly (destructure of array)
    console.log(key , "-->" , values)
}