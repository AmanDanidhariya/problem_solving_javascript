const airline = "TAP Air Portugal";
String.prototype.mySliceMethod = function (start, end) {
  let newStr = "";
  for (let i = start; i < end; i++) {
    newStr += this[i];
  }
  return newStr;
};
console.log(airline.mySliceMethod(0, 3));
