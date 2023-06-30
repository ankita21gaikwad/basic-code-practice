// 5. Armstrong Number : Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers.

function isNumberArmstrong(num: number): boolean {
    // get the digits of the number in an Array
    let digitArray: number[] = convertNumberIntoDigitsArray(num);

    // logic to find the Armstrong
    let cubeOfNumber: number = 0;
    for (let i = 0; i < digitArray.length; i++) {
        cubeOfNumber = Math.pow(digitArray[i], 3) + cubeOfNumber;
    }

    if (num === cubeOfNumber) {
        console.log(num + ' is an Armstrong Number');
    } else {
        console.log(num + ' is not an Armstrong Number');
    }
    return true;
}

function convertNumberIntoDigitsArray(num: number): number[] {
    // convert num into string and split the digits
    let digits: string[] = num.toString().split('');

    // return all the digits into a number array
    return digits.map(Number);

}

isNumberArmstrong(153);
