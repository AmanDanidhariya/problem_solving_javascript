function sum(num) {
  let numArr = Array.from(String(num));
  let temp = 0;
  // using reduce method
  //   return numArr.reduce((acc, curr) => acc + +curr, 0);
  for (let i = 0; i < numArr.length; i++) {
    temp += Number(numArr[i]);
  }
  return temp;
}
const result = sum(123456);
console.log(result);
