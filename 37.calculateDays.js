function calculateDays(d1, d2){
    const date1 = new Date(d1);
    const date2= new Date(d2);
    return Math.abs(date2 - date1)/1000/60/60/24;
}
console.log(calculateDays("2024-01-05", "2024-01-31"))