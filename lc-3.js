/**
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
 */
/**
 * @param {string} s
 * @return {number}
 */
/**
 o(n)，空间换时间。
 我的思路：
 1. 扩大窗口：当字符串不重复时，就逐渐扩大窗口
 2. 用flag来记录字符串是否重复
 3. 缩小窗口：当字符串有重复时，记录最大值结果，缩小窗口
 4. 缩小窗口时需要注意flag中的状态维护
 */
var lengthOfLongestSubstring = function(s) {
  const flag = {} // 判定是否重复
  let start = 0, end = 0, res = 0
  
  while (start < s.length || end < s.length) {
    if (!flag[s[end]]) {
      flag[s[end]] = true
      end++
    }
    if (end === s.length || flag[s[end]]) {
      res = Math.max(res, end - start)
      flag[s[start]] = false
      start++
    }
  }
  
  return res
};