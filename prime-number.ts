// 2 Prime Number : Number should be greater than 1 and divisible by 1 or divisible by itself

function isNumberPrime(num:number):boolean{
    let isNumberPrime: boolean = true;
    if(num>1){
        for(let i= 2; i<num; i++){
            if(num%i === 0){
                isNumberPrime = false;
                console.log(num+ ' is not a prime number'); 
                break;                
            }              
        } 
         if(isNumberPrime){
            console.log(num+ ' is a prime number');
        }
             
    } else{
        console.log(num+ ' is not a prime number');
    }
    return true;
}

isNumberPrime(1);
