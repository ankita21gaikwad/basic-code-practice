// Question 2: find the largest number in the given array
const array2 = [10, 100, 200, 5, 9];

let largestNumber = array2[0];

for (let i = 1; i < array2.length; i++) {
  if (array2[i] > largestNumber) {
    largestNumber = array2[i];
  }
}
console.log(largestNumber);
