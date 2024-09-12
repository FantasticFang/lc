/**
28. Find the Index of the First Occurrence in a String
简单
相关标签
相关企业
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 
Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 朴素解法，BF算法，复杂度o(m * n)
var strStr = function (haystack, needle) {
  // for (let start = 0; start < haystack.length; start++) {
  for (let start = 0; start <= haystack.length - needle.length; start++) { // 优化一下，当end - start的长度不足以支撑needle的长度时
    let end = start
    while (end - start < needle.length) {
      if (haystack[end] === needle[end - start]) {
        end++
      } else {
        break
      }
    }
    if (end - start === needle.length) {
      return start
    }
  }
  
  return -1
};

// KMP算法
function kmpNext(str) {
  const next = [0] // 初始化，str的第一位的next为0
  const length = str.length
  for (let i = 1, j = next[0]; i < length; i++) {
    while (j > 0 && str[j] !== str[i]) { 
      j = next[j - 1] // 如何理解？
    }
    if (str[j] === str[i]) {
      j++
    }
    next[i] = j
  }
}

var strStr = function (haystack, needle) {
  
};
