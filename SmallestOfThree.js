// function smallestOfThree(a, b, c) { 

//     if(a < b && a < c){
//         return a;
//     }
//     else if(b < a && b < c){
//         return b;
//     }
//     else if(c < a && c < b){
//         return c;
//     }

//     return a;
// }

function smallestOfThree(a, b, c) { 
    
     let smallestNumber = a;
     if(b < smallestNumber){
         smallestNumber = b;
     }
     if(c < smallestNumber){
         smallestNumber = c;
     }
     return smallestNumber;
}


console.log("smallestOfThree(3, 1, 6)", smallestOfThree(3, 1, 6));
console.log("smallestOfThree(-1, -6, 9)", smallestOfThree(-1, -6, 9));

console.log("smallestOfThree(3, 3, 3)", smallestOfThree(3, 3, 3));
console.log("smallestOfThree(3, 3, 1)", smallestOfThree(3, 3, 1));
console.log("smallestOfThree(3, 3, 4)", smallestOfThree(3, 3, 4));

console.log("smallestOfThree(3, 3, 5)", smallestOfThree(3, 3, 5))

