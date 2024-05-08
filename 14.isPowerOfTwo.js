function isPowerTwo(num) {
  for (let i = 0; i < num; i++) {
    if (2 ** i === num) {
      return true;
    }
  }
  return false;
}
const result = isPowerTwo(8);
console.log(result);
