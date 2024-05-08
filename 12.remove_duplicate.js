function removeDuplicate(arr){
    // let temp = new Set(arr);
    // return [...temp]

    let stack=[];

    for(let i=0; i< arr.length;i++){
        if(!stack.includes(arr[i])){
            stack.push(arr[i])
        }
    }
    return stack;
}
const result = removeDuplicate([5,6,7,7,8,8,9]);
console.log(result);