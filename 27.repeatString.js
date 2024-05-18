function repeatStr(str, num){
    let temp="";
    if(num <=1){
        return str;
    }else{
        for(let i=1;i<=num; i++){
            temp+=str;
        }
    }
    return temp;
    
}
const result=repeatStr("a",5);
console.log(result);