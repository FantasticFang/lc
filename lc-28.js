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

// KMP算法核心-求解相同的前缀和后缀
function kmpNext(str) {
  const next = [0] // 初始化，str的第一位的next为0
  const length = str.length
  for (let i = 1, j = next[0]; i < length; i++) {
    while (j > 0 && str[j] !== str[i]) { // 总增加次数不会超过m，所以总减少次数同样也不会超过m，时间复杂度 <= 2 * m，所以为o(m) 
      j = next[j - 1]
    }
    if (str[j] === str[i]) {
      j++
    }
    next[i] = j // 进入下次循环时，j就代表上一位的前缀函数的值
  }
}

/**
直接利用kmp，解复杂度o(m + n)，空间复杂度o(m + n)
将needle拼接在haystack前面，并使用#号链接，如果发现了next[i] = needle.length，那说明已经找到字符串needle
*/
var strStr = function (haystack, needle) {
  const str = `${needle}#${haystack}`
  const m = needle.length
  const next = [0]
  for (let i = 1, j = next[0]; i < str.length; i++) {
    while (j > 0 && str[i] !== str[j]) {
      j = next[j - 1]
    }
    
    if (str[i] === str[j]) {
      j++
    }
    next[i] = j
    
    if (j === m) {
      return i - m * 2
    }
  }
  
  return -1
};

/**
 * 利用kmp算法的同时，降低空间复杂度
 * 时间复杂度o(m + n), 空间复杂度o(m)
 */
var strStr = function (haystack, needle) {
  let next = [0]
  for (let i = 1, j = next[0]; i < needle.length; i++) {
    while (needle[i] !== needle[j] && j > 0) {
      j = next[j - 1]
    }
    if (needle[i] === needle[j]) {
      j++
    }
    next[i] = j
  }
  
  for (let i = 0, j = next[0]; i < haystack.length;) {  
    while (haystack[i] !== needle[j] && j > 0) {
      j = next[j - 1]
    }    
    if (haystack[i] === needle[j]) {
      i++
      j++
    }
    if (haystack[i] !== needle[j] && j === 0) {
      i++
    }
    
    if (j === needle.length) {
      return i - j
    }
  }
  
  return -1
}

