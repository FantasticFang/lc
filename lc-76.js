/**
76. Minimum Window Substring
困难
相关标签
相关企业
提示
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
 

Follow up: Could you find an algorithm that runs in O(m + n) time?

 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 处理边界情况
  if (s.length < t.length) {
    return ''
  }
  const count = {} // 用于存储计数，空间复杂度o(n)
  
  for (let i = 0; i < t.length; i++) {
    if (!count[t[i]]) {
      count[t[i]] = 0
    }
    
    count[t[i]]++
  }
  
  function checkRes() {
    for (let key in count) {
      if (count[key] > 0) {
        return false
      }
    }
    
    return true
  }
  
  let start = 0, end = 0, res = ''
  while (end < s.length) {
    while (start < s.length && !count.hasOwnProperty(s[start])) {
      start++
      if (end < start) {
        end = start
      }
    }
    
    if (count.hasOwnProperty(s[end])) {
      count[s[end]]--
    }
    end++

    while(checkRes()) { // 达到符合条件的结果
      if (!res || end - start < res.length) {
        res = s.substring(start, end)
      }
      if (count.hasOwnProperty(s[start])) { 
        count[s[start]]++
      }
      start++
    } 
  }
  
  return res
};

minWindow("bba", 'ab')
