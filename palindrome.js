const isPalindrome = (word) => {
  return word.toLowerCase() === word.split("").reverse().join("").toLowerCase();
};

console.log(isPalindrome("radar"));
console.log(isPalindrome("level"));
console.log(isPalindrome("knights"));
console.log(isPalindrome("non"));
console.log(isPalindrome("momo"));
console.log(isPalindrome("JavaScript"));
