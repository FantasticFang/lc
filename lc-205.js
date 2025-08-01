/**
205. Isomorphic Strings
简单
相关标签
相关企业
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

Example 4: 

Input: s = "babd", t = "baba"

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 错误case，例如babc和baba，这样就挖法
var isIsomorphic = function (s, t) {
  if (s.length <= 1) {
    return true
  }
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1] && t[i] === t[i - 1]) {
      return false
    } else if (s[i] === s[i - 1] && t[i] !== t[i - 1]) {
      return false
    }
  }
  return true
};


var isIsomorphic = function (s, t) {
  const sMap = {}, tMap = {}
  for (let i = 0; i < s.length; i++) {
    if (!sMap[s[i]]) {
      sMap[s[i]] = t[i]
    } else {
      if (sMap[s[i]] !== t[i]) {
        return false
      }
    }
    
    if (!tMap[t[i]]) {
      tMap[t[i]] = s[i]
    } else {
      if (tMap[t[i]] !== s[i]) {
        return false
      }
    }
  }
  return true
};


isIsomorphic("abcdefghijklmnopqrstuvwxyzva", "abcdefghijklmnopqrstuvwxyzck")