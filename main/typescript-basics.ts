// Arrays
// String Array
const names: string[] = ['Mario', 'Luigi', 'Tom'];

names.push('Toad');

console.log('Names are ' + names);

// Number Array
const numbers: number[] = [1, 2, 3, 4];

numbers.push(7);

console.log('Numbers are ' + numbers);

// Mixed Array
const mixedArray: any[] = ['Ankita', 3, 7];
mixedArray.push('Indore', 21, 25);

console.log('Mixed array contains ' + mixedArray);

// Objects
const ninja = {
    name: 'Mario',
    belt: 'black',
    age: 30
}

ninja.age = 40;

console.log('Age of Ninja is ' + ninja.age);

// Union Types
let unionTypeArray: (string | number | boolean)[] = [];
unionTypeArray.push('mario', 12, true);

console.log('Union Type Array contains ' + unionTypeArray);

// Objects
let ninjaOne: object;
ninjaOne = {
    name: 'yoshi',
    age: 30
};


