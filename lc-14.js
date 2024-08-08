/**
14. Longest Common Prefix
简单
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let length = strs[0].length
  let i = 0
  while (length > 0 && i < strs.length) {
    if (strs[i].substring(0, length) === strs[0].substring(0, length)) {
      i++
    } else {
      length--
    }
  }
  
  return strs[0].substring(0, length)
};