// function min(arr) {
//   if (arr.length === 0) {
//     throw new Error("array is empty");
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
//   return arr[0];
// }

function min(arr) {
  return arr.reduce((acc, curr) => (acc < curr ? acc : curr), arr[0]);
}

const result = min([5, -3, 0, 12, -7]);
console.log(result);
