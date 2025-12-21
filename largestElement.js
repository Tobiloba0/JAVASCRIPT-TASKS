function largest(numbers){
let largest = numbers[0];
        for(let index = 0; index < numbers.length; index++){
            if(numbers[index] > largest){
            largest = numbers[index];
            }
        }
        return largest;
}
let numbers = [12,23,40,10,5,18];
console.log(largest(numbers));
