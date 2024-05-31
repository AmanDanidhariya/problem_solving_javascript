const obj = {
  name: "aman",
  age: 27,
  city: "rajkot",
};
let entries = Object.entries(obj);
console.log(entries.flat());

const newObject = Object.fromEntries(entries);
console.log(newObject);