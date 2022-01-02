// 4. Factorial: factorial of a number is multiply the number with the factorial value of the previous number
// eg : factorial of 1 is 1
// factorial of 2 is 2*1 = 2

function findFactorial(num:number):number{
    let factorial:number = 1;
    for(let i = 1; i<=num; i++){
        factorial = i*factorial;
    }
    console.log('Factorial of ' +num+ ' is ' +factorial);
    return factorial;
}

findFactorial(7);
