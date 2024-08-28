const course = {
    coursename : "javascript",
    price : 999,
    Instructor : "hitesh"
}

// console.log(course.Instructor)  if you want to print this 3-4 times use given below Syntactic sugar
const{coursename} = course
console.log(coursename)
console.log(coursename)

const{coursename: cName} = course     // if you think coursename is big you can write it as cName 
console.log(cName) 

