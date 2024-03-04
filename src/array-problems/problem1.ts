// Question 1: find the index of the elements of the given array whose sum is 15
const array = [2, 11, 8, 9, 13];
let index1 = 0;
let index2 = 0;

for(let i = 0; i < array.length; i++) {
  for (let j = i+1; j < array.length; j++) {
    if (array[i] + array[j] === 15) {
      index1 = i;
      index2 = j;
    }
  }
}

console.log('index 1 is ' + index1);
console.log('index 2 is ' + index2);