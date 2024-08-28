// slice , splice

const myArr = [0,1,2,3,4,5]
console.log("A",myArr)

// slice() does not modify the original array; it returns a new array.
const myn1 = myArr.slice(1,3)    // from index 1 to 3(excluded)
console.log(myn1)
console.log("B",myArr)

// splice() does modify the original array by adding, removing, or replacing elements.
const myn2 = myArr.splice(1,3)    // from index 1 to 3(included)
console.log("C",myArr)
console.log(myn2)

// slice() is used for non-destructive extraction, while splice() is used for destructive modifications.