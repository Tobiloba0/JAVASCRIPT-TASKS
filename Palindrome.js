function isPalindrome(number){
    let digit5 = number % 10;
    let digit4 = Math.floor((number % 100) / 10);
    let digit3 = Math.floor((number % 1000) / 100);
    let digit2 = Math.floor((number % 10000) / 1000);
    let digit1 = Math.floor(number / 10000);
        if(digit5 === digit1 && digit4 === digit2){
            return true;
        }
        return false;
    }


let number = 54145;
console.log(isPalindrome(number));
