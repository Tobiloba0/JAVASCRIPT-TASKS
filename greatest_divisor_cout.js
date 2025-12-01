// Function to find greatest divisor (GCD) of two numbers
function greatestDivisor(number1, number2) {
    let GCD = 1;

    for (let count = 1; count <= number1 && count <= number2; count++) {
        if (number1 % count === 0 && number2 % count === 0) {
            GCD = count;
        }
    }

    return GCD;
}

// Test the function
let number1 = 12;
let number2 = 18;

console.log("GCD:", greatestDivisor(number1, number2));  // Output: 6

