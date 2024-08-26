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
// 朴素解法
var strStr = function (haystack, needle) {
  for (let start = 0; start <= haystack.length; start++) {
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
var strStr = function (haystack, needle) {
  
};
