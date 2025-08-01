/** 
49. Group Anagrams
中等
相关标签
相关企业
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 
Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// ac部分用例，但超时
var groupAnagrams = function (strs) {
  function isAnagram (s, t) {
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
  
  const results = [[strs[0]]]
  for (let i = 1; i < strs.length; i++) {
    let isAnagramFlag = false
    for (let j = 0; j < results.length; j++) {
      if (isAnagram(results[j][0], strs[i])) {
        isAnagramFlag = true
        results[j].push(strs[i])
        break
      }
    }
    
    if (!isAnagramFlag) {
      results.push([strs[i]])
    }
  }
  
  return results
};

/**
 * 字母排序
 */
var groupAnagrams = function (strs) {
  const resMap = {}
  for (let i = 0; i < strs.length; i++) {
    const strSort = strs[i].split('').sort().join('')
    
    if (resMap[strSort]) {
      resMap[strSort].push(strs[i])
    } else {
      resMap[strSort] = [strs[i]]
    }
  }
  
  const res = []
  for (let key in resMap) {
    res.push(resMap[key])
  }
  
  return res
}
