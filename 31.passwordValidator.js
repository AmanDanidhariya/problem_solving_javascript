function simplePasswordValidator(str) {
  // contains number , lowercase, uppercase , length 8
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmopqrstuvwxyz";
  let hasUpperCase = false;
  let hasLowercase = false;
  let hasNumber = false;

  for (let char of str) {
    if (uppercase.includes(char)) {
      hasUpperCase = true;
    } else if (lowercase.includes(char)) {
      hasLowercase = true;
    } else if (!isNaN(char)) {
      hasNumber = true;
    }
  }

  if (hasLowercase && hasUpperCase && hasNumber && str.length >= 8) {
    return true;
  } else {
    return false;
  }
}
console.log(simplePasswordValidator("kdbldwQ1"));
