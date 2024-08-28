const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)       // modify within the existing arrays
// console.log(marvel_heros[3][2])   // output : batman

console.log(marvel_heros.concat(dc_heros))       // concat method creates a new array
console.log(marvel_heros)

// better way to do same thing like concat and push is spread operator in js(...)
const all_heros = [...marvel_heros , ...dc_heros]
console.log(all_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// how you are going to handle array like this...using flat method
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)