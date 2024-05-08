function sumOfSquare(arr) {
  //   let squareArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     squareArr.push((arr[i] *= arr[i]));
  //   }
  return arr.reduce((acc, curr) => acc + curr * curr, 0);
}
const result = sumOfSquare([1, 2, 3]);
console.log(result);
