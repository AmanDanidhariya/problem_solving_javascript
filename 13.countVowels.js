function countVowels(str) {
  let vowels = 0;
  let consonants = 0;
  const vowel = "aeiouAEIOU";
  let splittedStr = str.split(" ").join("");
  for (let i = 0; i < splittedStr.length; i++) {
    if (vowel.includes(splittedStr[i])) {
      vowels++;
    } else {
      consonants++;
    }
  }
  return { vowels: vowels, consonants: consonants };
}
const result = countVowels("thE quIck brOwn fOx");
console.log(result);
