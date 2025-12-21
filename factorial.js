function factorial(number){
    let result = 1;
        for(let index = number -1; number > 0; number--){
            result *= number;
        }
    return result;

}
let number = 5;
console.log(factorial(number));   

