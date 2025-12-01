const prompt = require("prompt-sync")();

let userEntry = prompt("Enter a number: ");
let userInput = parseInt((userEntry));

let factorial = 1;

for(let count = 1; count <= userInput; count++){
    factorial = factorial * count;
}
console.log("The factorial of ",userInput, "is", factorial);
