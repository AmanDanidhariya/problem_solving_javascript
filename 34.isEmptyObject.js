function isEmpty(obj) {
  for (let prop in obj)
    if (obj.hasOwnProperty(prop)) {
      return `object is not an empty`;
    }
  return `object is empty`;
}
const result = isEmpty({});
console.log(result);
