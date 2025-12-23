
function squareNumber(number){
    for(let index = 1; index < number / 2; index++){
        if(index * index == number){
        return true;
        }
    }
    return false;
}

let number = 10;
console.log(squareNumber(number));
