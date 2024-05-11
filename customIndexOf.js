let airline = "TAP Air Portugal";
String.prototype.customIndexOf = function (str) {
  for (let i = 0; i < this.length; i++) {
    if (str === this[i]) {
      return i;
    }
  }
  return -1
};
console.log(airline.customIndexOf("i"));
console.log(airline.customIndexOf("z"));
