function camelCase(str) {
  return str
    .split(" ")
    .map((word, i   ) => {
      if (i === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(" ");
}
const result = camelCase("hello world thApa");
console.log(result);
