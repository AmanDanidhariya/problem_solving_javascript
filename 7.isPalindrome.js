function isPalindrome(str){
    let lowerStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
    const checkStr= lowerStr.split("").reverse().join("")
    return checkStr === lowerStr
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);