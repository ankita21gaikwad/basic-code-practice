// 1. Find the largest three distinct elements in an array
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

let arr = [10, 4, 3, 50, 23, 90];

for (let i = 0; i < arr.length; i++) {
   for (let j = i + 1; j < arr.length; j++) {
     if (arr[j] > arr[i]) {
       let temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     }
   }
}

console.log(`${arr[0]}, ${arr[1]}, ${arr[2]}`);




