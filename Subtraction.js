function subtraction(number1, number2){
    if(number2 > number1){
    let extra = number1;
    number1 = number2;
    number2 = extra;

    }  
        return number1 - number2;  
}


let number1 = 18;
let number2 = 8;
    
console.log(subtraction(number1, number2));
