/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindrome = function(num) {
  if (num < 0 || (num % 10 === 0 && num !== 0)) {
    return false;
  }

  // Reverse the number
  let reversed = 0;
  let original = num;
  while (original !== 0) {
    const digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
  }

  // Check if the original number and reversed number are equal
  return num === reversed;
}
