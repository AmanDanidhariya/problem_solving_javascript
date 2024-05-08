//substring:-The substring(start, end(Excluding)) method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.

// function startsWith(str, subStr) {
//   let lowerStr = str.toLowerCase();
//   let subStringLower = subStr.toLowerCase();
//   return subStringLower === lowerStr.substring(0, subStringLower.length);
// }
function startWith(str , subStr){
    return str.toLowerCase().startsWith(subStr)
}

const result = startWith("Hello world", "hello");
console.log(result);
