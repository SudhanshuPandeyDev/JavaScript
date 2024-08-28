// const tinderUser = new Object()          --> singleton object
// const tinderUser = {}                    --> non singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sudhanshu"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "sam",
            lastname : "altman"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}
// const obj4 = Object.assign({},obj1,obj2,obj3)     // Object.assign(target,source) here target is {} and source is obj1,obj2,obj3

// best way to merging objects (spread operator)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4)

// when data comes from databases
const users = [
    {
        id: 1,
        email: "sudhanshu@gmail.com"
    },
    {
        id: 2,
        email: "pandey@gmail.com"
    }
]
console.log(users[1].email)

console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

console.log(regularUser.hasOwnProperty("email"))

