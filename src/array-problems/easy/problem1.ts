// 1. Find the largest three distinct elements in an array
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

let arrProblem1 = [10, 4, 3, 50, 23, 90];
function find3Largest(array: number[]) {
  // find length of the array
  let arrayLength = array.length;

  // throw error if length of array is less than 3
  if (arrayLength < 3) {
    throw new Error('Array is invalid! We are expecting at least 3 elements in the array.')
  }

  // initialize largest 3 numbers to minimum value
  let first = Number.MIN_VALUE;
  let second = Number.MIN_VALUE;
  let third = Number.MIN_VALUE;

  // iterate through the elements
  for (let i = 0; i < arrayLength; i++) {
    if (array[i] > first) {
      third = second;
      second = first;
      first = array[i];
    }

    else if (array[i] > second) {
      third = second;
      second = array[i];
    }

    else if (array[i] > third) {
      third = array[i];
    }
  }

  return `${first}, ${second}, ${third}`;
}

console.log(find3Largest(arrProblem1));





