let x = 3;
const y = x++;   // Postfix Increment Operator (x++):

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
// x is 4.
// y is 3 (because y was assigned the value before x was incremented).

let a = 3;
const b = ++a;   // Prefix Increment Operator (++a):

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
// a is 4.
// b is also 4 (because b was assigned the value after a was incremented).