
function quotient(number1, number2){
    if (number2 == 0){
        return 0;
    }
let result = number1 % number2;
return result;
}
let number1 = 10;
let number2 = 3;

console.log(quotient(number1, number2));
