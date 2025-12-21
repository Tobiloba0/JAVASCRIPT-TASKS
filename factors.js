function factors(number){
    let count = 0;
        for(let index = 1; index <= number; index++){
            if(number % index == 0){
                count++;
            }
        }
        return count;       
    }

let number = 10;
console.log(factors(number));
