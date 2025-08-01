/**
242. Valid Anagram
简单
相关标签
相关企业
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false
  }
  const map = {}
  
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0
    }
    map[s[i]]++
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] > 0) {
      map[t[i]]--
    } else {
      return false
    }
  }
  return true
};