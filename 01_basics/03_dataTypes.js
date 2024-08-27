"use strict";  // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs , not browser

console.log(3 + 3)
console.log("sudhanshu")

let name = "sudhanshu"
let age = 20
let isLoggedIn = false

// 1. Primitive Data Types : Primitive data types are the most basic data types and are immutable. 
// Number
// String
// BigInt -> let big = 1234567890123456789012345678901234567890n;
// Boolean -> true/false
// null -> standalone value
// undefined -> let a; console.log(a); 
// Symbol - > Represents a unique and immutable value used primarily for object property keys. Example: let sym = Symbol('description');

// 2. Object Types: Objects are collections of key-value pairs and are mutable. They can be used to store and manage data.
// Object, Array, Function, Date, Map, Set, WeakMap, WeakSet.

console.log(typeof undefined);    // output : undefined
console.log(typeof null);         // output : object
console.log(typeof "sudhanshu")