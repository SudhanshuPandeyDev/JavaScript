// It compares both the value and the type of two operands, making it a more precise comparison tool than the == (loose equality) operator.

console.log(2 === 2);        // Output: true
console.log('hello' === 'hello'); // Output: true

console.log(2 === '2');      // Output: false (number vs. string)
console.log(true === 1);    // Output: false (boolean vs. number)
