// 8. Automorphic Number : A number is called an automorphic number if and only if the square of the given number ends with the same number itself. 
// For example, 25, 76 are automorphic numbers because their square is 625 and 5776, respectively and the last two digits of the square represent the number itself.

function isNumberAutoMorphic(num: number): boolean{
    // find the square of the number
    const squareOfTheNumber: number = Math.pow(num, 2);

    // convert the number to string Array
    const stringArray:string[] = squareOfTheNumber.toString().split('');

    // get the length of the string Array
    const lengthOfStringArray: number = stringArray.length;

    // get the last two index of the string array
    let lastTwoIndexString: string = '';
    for(let i = lengthOfStringArray-1; i >0; i--){
        lastTwoIndexString = stringArray[i] + lastTwoIndexString; 
    }

    // convert the last two index string into number
    const actualNumber = parseInt(lastTwoIndexString);

    // return true if actual number and num matches else return false
    return (actualNumber === num) ? true : false;

}

console.log('Is the given Number AutoMorphic? ' + isNumberAutoMorphic(5));
