// sortAscending([5,3,1,8])
function sortAscending(arr) {
  const sortedArray = [...arr];
  console.log(sortedArray.length);

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        let temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }
  return sortedArray;
}
const result = sortAscending([5, 3, 10, 8]);
console.log(result);
