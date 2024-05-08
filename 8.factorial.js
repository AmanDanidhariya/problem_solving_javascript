// function factorial(n){
//     if(n===0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// const result = factorial(5);
// console.log(result);
function factorialWithOutRecursion(num) {
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
const result2 = factorialWithOutRecursion(5);
console.log("result2", result2);
