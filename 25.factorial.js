// factorial number

// 5*4*3*2*1

function factorial(num){
    if(num ===0){
        return 1;
    }
    return num * factorial(num -1);
}
const result = factorial(5);
console.log(result);