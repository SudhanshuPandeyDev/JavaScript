// for...in loop in javascript
// Use for...in to iterate over the keys or indices of an object or array.

const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift"
}

for(const key in myObj){      // for printing keys
    console.log(key)
}
for(const key in myObj){        // for printing keys and values
    console.log(`${key} shortcut is for ${myObj[key]}`)
}


const myArray = ["js","c++","java","python"]
for(const key in myArray){
    console.log(key)                 // only going to print keys
}
for(const key in myArray){
    console.log(myArray[key])        // only going to print values
}

// we can't use for...in loop in Map
// You can't use `for...in` to iterate over a `Map` because it's meant for enumerable properties of objects, not for iterable collections like `Map`.