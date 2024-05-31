// function sortedArray(arr1,arr2){
//     let temp=[];
//      temp.push(...arr1, ...arr2);
//      return temp.flat().sort((a,b)=>a-b);
// }
// const result= sortedArray([[1, 3, 5, 7]],[[2, 4, 6, 8]]);

function sortedArray(arr1, arr2) {
  let temp = [];
  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    temp.push(arr2[j]);
  }
  let sort = temp.flat();
  for (let i = 0; i < sort.length-1; i++) {
    for (let j = 0; j < sort.length-1; j++) {
      if (sort[j] > sort[j+1]) {
        let temp = sort[j];
        sort[j] = sort[j+1];
        sort[j+1] = temp;
      }
    }
  }
  return sort;
}
const result = sortedArray([[1, 3, 5, 7]], [[2, 4, 6, 8]]);
console.log(result);
