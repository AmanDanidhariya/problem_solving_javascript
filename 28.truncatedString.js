function truncateString(str, leng) {
  if (str.length < leng) {
    return str;
  }
  return str.substring(0, leng) + "...";
}
const result = truncateString("amandanidhariya", 6);
console.log(result);
