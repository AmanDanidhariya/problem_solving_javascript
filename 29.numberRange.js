// function range(start, end){
//     let numbers=[];
//     for(let i=start; i <= end;i++){
//         numbers.push(i);
//     }
//     return numbers;
// }
// const result = range(-2 ,2);
// console.log(result);

// recursive approach
function numberRange(start , end , arr=[]){
    if(start <= end){
        arr.push(start);
        return numberRange(start+1, end, arr);
    }
    return arr;
}
const result = numberRange(1 ,7);
console.log(result);