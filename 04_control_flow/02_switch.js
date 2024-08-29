// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:                             // use shift + alt + down arrow
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("march")
        break;
    case 4:
        console.log("april")
        break;
    default:
        console.log("default")
        break;
}

// what is fall-through behaviour in javascript ? 
// If you leave out the break statement, the code execution will continue to the next case without checking if the expression matches, which is known as "fall-through".