1.currentDate find
2.currentDate . year & birthdate year
3. age = curyear - Birthyear
4.






function calculateAge(birthdate){
    const birth = new Date(birthdate);
    const currentDate= new Date;
    console.log(currentDate);
    console.log(birth);
    let diff =  ((currentDate - birth) /1000/60/60/24/365).toFixed(2);
    let calculate= diff.split(".")
    return calculate[0] + 'Years ' + calculate[1] + 'Months'
}
//year-month-date
const result = calculateAge("1998-04-27");
console.log(result);