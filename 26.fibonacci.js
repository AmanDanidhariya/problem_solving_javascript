function fib(num){
    if(num <=0){
        return
    }
    let stack=[];
    let prev=0; let curr =1;

    for(let i=0; i<num; i++){
        stack.push(prev);
        [prev, curr]=[curr, prev+curr]
    }
    return stack;
}
const result = fib(5);
console.log(result);