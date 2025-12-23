<<<<<<< HEAD
//factorial of a number entered by the user

let number = 5;
let factorial = 1;

for(int count = 1; count < number; count++){
    factorial = count * factorial;

}
=======
function factorial(number){
    let result = 1;
        for(let index = number -1; number > 0; number--){
            result *= number;
        }
    return result;

}
let number = 5;
console.log(factorial(number));   

>>>>>>> b341ff059296942ba6072380f1271757dbf350b4
