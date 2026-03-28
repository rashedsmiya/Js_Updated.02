function checkIfEvenOrOdd(a){

    return a % 2 === 0 ? "even" : "odd";  // ternary operator   

   
}

// function checkIfEvenOrOdd2(a){
//     return a % 2 === 0 ? "even" : "odd";    
     
// }

console.log(checkIfEvenOrOdd(13));
console.log(checkIfEvenOrOdd(14));
console.log("0 is ", checkIfEvenOrOdd(0));
console.log("02 is ", checkIfEvenOrOdd(2));

console.log("-1 is ", checkIfEvenOrOdd(-1));
console.log("1 is ", checkIfEvenOrOdd(1));
console.log("157 is ", checkIfEvenOrOdd(157));
