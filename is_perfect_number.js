function isPerfect(number) {
    let sum = 0;

    // find all proper factors (exclude the number itself)
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;  // true if perfect, false otherwise
}

let number = 28;
console.log(isPerfect(number));

