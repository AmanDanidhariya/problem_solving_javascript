// function arrayEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   return arr1.every((currentElement, index) => currentElement === arr2[index]);
// }
function arrayEqual2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const result = arrayEqual2([], []);
console.log(result);
