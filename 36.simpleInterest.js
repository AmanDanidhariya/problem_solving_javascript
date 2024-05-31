function simpleInterest(amount , rateOfInterest, years){
    return ((amount*rateOfInterest)/100) *3
}
const result = simpleInterest(1000, 5,3);
console.log(result);