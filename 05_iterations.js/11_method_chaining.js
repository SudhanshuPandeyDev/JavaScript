const numbers = [1, 2, 3, 4, 5,6];

const result = numbers
  .map( (num) => num * 10) 
  .map( (num) => num + 1) 
console.log(result);

const res = numbers
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num > 40)

console.log(res)
