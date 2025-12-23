function isPerfect(numbers){
      const result = [];
            for(int index = 0; index < numbers.length; index++){
                
                const num = numbers[index];

                let isPerfectSquare = false;

                    if(num >= 0){
                        let count = 0;
                        while(count * count <= num){
                             if(count * count == num){
                              isPerfectSquare = true;  
                                break;    
                            }  
                            count++;               
                        }                    
                    }
                    result.push(isPerfectSquare);
                    }     
                return result;      
                }

    const numbers = {4, 9, 25, 49};
    const answer = isPerfect(numbers);

    for(int index = 1; index < answer.length; answer++){
        console.log(answer[index]);

    }
