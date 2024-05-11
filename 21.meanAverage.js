function mean(arr) {
    if(arr.length===0){
        return 0;
    }
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
const result = mean([10, 20, 30]);
console.log(result);
