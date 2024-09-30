/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  function validateAlphanumeric(a) {
    let flag = false
    if (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90) {
      flag = true
    }
    if (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122) {
      flag = true
    }
    if (a.charCodeAt(0) >= 48 && a.charCodeAt(0) <= 57) {
      flag = true
    }
    return flag
  }
  
  let i = 0, j = s.length - 1
  while (i < j) {
    if (!validateAlphanumeric(s[i])) {
      i++
      continue
    }
    if (!validateAlphanumeric(s[j])) {
      j--
      continue
    }
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++
      j--
    } else {
      return false
    }
  }
  
  return true
};