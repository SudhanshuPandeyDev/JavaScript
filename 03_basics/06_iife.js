// Immediately Invoked Function Expressions (IIFE)
// An Immediately Invoked Function Expression (IIFE) is a JavaScript function that is executed as soon as it is defined.
// IIFE helps in avoiding global scope pollution by encapsulating variables within the function scope


// named iife
(function chai(){
    console.log(`DB CONNECTED`)
})();                // use semicolon to end context in iife

// unnamed iife
( () => {
    console.log(`DB CONNECTED TWO`)
})();

// passing parameter to iife
((Name) => {
    console.log(`DB CONNECTED THREE ${Name}`)
})("sudhanshu")