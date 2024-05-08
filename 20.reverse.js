String.prototype.reversed = function () {
  let reversed = "";
  for (let i = this.length - 1; i >= 0; i--) {
    reversed += this[i];
  }
  return reversed;
};
let str = "hello";
const result = str.reversed();
console.log(result);
