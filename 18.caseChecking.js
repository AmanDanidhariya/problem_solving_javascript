function caseCheck(char) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return `${char} is uppercase`;
  } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return `${char} is lowercase`;
  }
}
const result = caseCheck("S");
console.log(result);
