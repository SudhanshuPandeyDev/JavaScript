const Name = "sudhanshu"
const repoCount = 100

// console.log(Name + repoCount + " Value")  this is outdated syntax 
console.log(`my name is ${Name} and my repoCount is ${repoCount}`)   // string interpolation (modern way)

// both method of declaring string are same
const gameName = new String("call of duty")  
const gameName2 = "god of war"

console.log(gameName[0])
console.log(gameName2[1])

console.log(gameName.length)
console.log(gameName2.toUpperCase())  // Strings are immutable, so methods like toUpperCase() create a new string instead of modifying the original (think of primitive data types which is stored in stack)
console.log(gameName2.charAt(1))
console.log(gameName.indexOf("a"))
console.log(gameName.substring(0,3)) // we can't use negative values in substring
console.log(gameName.slice(-6))   // starts slicing from the sixth-to-last character, which is "f", and continues to the end of the string.
console.log(gameName.slice(-10,-2))  // starts from the tenth-to-last character, "a", and stops just before the second-to-last character, "t"

const newString = "    sudhanshu"
console.log(newString.trim())

const url = "https://hitesh.com/hitesh%20choudhray"
console.log(url.replace("%20","-"))
console.log(url.includes("hite"))

const FName = "first-middle-last"
console.log(FName.split("-"))