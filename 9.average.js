function average(arr) {
  return arr.reduce((acc, curr) => acc + curr / arr.length, 0);
}
const result = average([5,10,2,8]);
console.log(result);
