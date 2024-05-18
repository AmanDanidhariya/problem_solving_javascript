let airline = "TAP Air Portugal";
String.prototype.customIndexOf = function (str) {
  for (let i = 0; i < this.length; i++) {
    if (str.length === 1) {
      if (str === this[i]) {
        return i;
      }
    }else{
        if(str.length > 1){
            if(str[i] === this[i]){
                return i;
            }
        }   
    }
  }
  return -1;
};
console.log(airline.customIndexOf("Air"));
console.log(airline.customIndexOf("z"));
