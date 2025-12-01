// Function to count the number of digits
function numberOfDigits(number) {
    return number.toString().length;
}

// Function to check if a number is Armstrong
function isArmstrong(userInput) {
    let sum = 0;
    const digits = numberOfDigits(userInput);
    let value = userInput;

    while (value > 0) {
        let lastDigit = value % 10;
        sum += Math.pow(lastDigit, digits);
        value = Math.floor(value / 10); // important: floor division
    }

    return sum === userInput;
}

// Test the function
let number = 153;
console.log(isArmstrong(number));  // Output: true

