function isPerfect(number) {
    let perfectNumber = 0;

    for (let count = 1; count < number; count++) {
        if (number % count === 0) {
            perfectNumber += count;
        }
    }

    return perfectNumber === number;
}

let number = 28;
console.log(isPerfect(number));

