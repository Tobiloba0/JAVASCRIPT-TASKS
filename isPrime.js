
function isPrime(number){
    if (number <= 1){
        return false;
    }
let count = 0;
    for(let index = 1; index <= number; index++){
        if(number % index === 0)
            count++;     
    }
return count == 2;
}

let number = 9;
console.log(isPrime(number));

