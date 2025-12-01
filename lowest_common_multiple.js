// GCD function
function greatestDivisor(number1, number2) {
    let gcd = 1;

    for (let i = 1; i <= number1 && i <= number2; i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

// LCM function
function lowestMultiple(number1, number2) {
    let gcd = greatestDivisor(number1, number2);
    let LCM = (number1 * number2) / gcd;
    return LCM;
}

// Test
let number1 = 5;
let number2 = 10;

console.log(lowestMultiple(number1, number2));

