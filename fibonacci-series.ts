// 1.Fibonacci Series : 0,1,1,2,3,5,8,13,21........

function findFibonacciSeries(){
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
for(let i =1; i<8; i++){
   let n3 = n2+n1;
   console.log(n3);
    n1 = n2; 
    n2 = n3;    
}
}


findFibonacciSeries();
