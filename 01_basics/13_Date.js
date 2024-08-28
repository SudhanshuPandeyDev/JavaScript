// Dates

let myDate = new Date()           // Date is an Object in js
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

let myCreatedDate1 = new Date(2023,0,19)     // in js, months are 0-indexed, meaning they start from 0 when written in digit format
console.log(myCreatedDate1.toDateString()) 

let myCreatedDate2 = new Date(2023,0,19,5,3)    // (5,3) represents 5:03 AM
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("2023-01-29")      // in yy-mm-dd format date starts from 1
console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 = new Date("01-14-2023")         // mm-dd-yy format
console.log(myCreatedDate4.toLocaleString())

let myTimeStamp = Date.now()  
console.log(myTimeStamp)   // captures the current time in milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC) 
console.log(myCreatedDate4.getTime())    // captures the current time in milliseconds since the Unix epoch up to January 14, 2023

// The timestamp is useful for comparing dates (in milliseconds). If you store multiple dates as timestamps, you can sort them easily using numerical sorting.

console.log(Math.floor((Date.now()/1000)))     // to get time in seconds

let newDate = new Date();
console.log(newDate.getMonth())      // months are 0-indexed
console.log(newDate.getMonth() + 1)  // to get 1-indexed months
console.log(newDate.getDay())


// toLocaleString() formats dates, times, and numbers in a localized and customizable way, making your application user-friendly for different regions.
let date = new Date();
console.log(date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
