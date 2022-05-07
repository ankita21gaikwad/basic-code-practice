// 7. Reverse a Number : Eg : Number 789 should return 987

function reverseNumber(num: number): number{

// convert number into an String array
const stringArray:string[] = num.toString().split('');

// get the reversed string
let reversedString: string = '';
for(let i = 0; i < stringArray.length; i++){    
    reversedString = stringArray[i] + reversedString;
}

//convert reversed string into number
 const reversedNumber: number = parseInt(reversedString);

 console.log("Reversed Number is " +reversedNumber);

 return reversedNumber;

}


reverseNumber(5685);
