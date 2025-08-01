/**
383. Ransom Note
简单
相关标签
相关企业
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) {
    return false
  }
  const map = {}
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]] === undefined) {
      map[magazine[i]] = 0
    }
    map[magazine[i]]++
  }
  
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]] > 0) {
      map[ransomNote[i]] --
    } else {
      return false
    }
  }
  
  return true
};

canConstruct('aa', 'aab')
