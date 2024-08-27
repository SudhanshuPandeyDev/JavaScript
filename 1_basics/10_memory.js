// JavaScript engines store their data in two places; the Stack Memory and the Heap Memory.
// Stack Memory: Stores primitive data types
// Heap Memory: Stores non-primitives data types

let singerName = "landoncube"
let anotherName = singerName
anotherName = "lilskies"
console.log(singerName)   // output : landoncube
console.log(anotherName)  // output : lilskies

let userOne = {
    email : "user1@google.com",
    upi : "user@ybl"
}
let userTwo = userOne         // both userTwo and userOne are referencing to same object
userTwo.email = "user2@google.com"    // both userTwo and userOne email are going to change because they are referencing to same object
console.log(userOne.email)     // output : user2@google.com
console.log(userTwo.email)     // output : user2@google.com 