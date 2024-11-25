/**
30. Substring with Concatenation of All Words

You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated string is a string that exactly contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated string because it is not the concatenation of any permutation of words.
Return an array of the starting indices of all the concatenated substrings in s. You can return the answer in any order.

 

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]

Output: [0,9]

Explanation:

The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]

Output: []

Explanation:

There is no concatenated substri ng.

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]

Output: [6,9,12]

Explanation:

The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"].
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"].
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"].

 

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const step = words[0].length
  const maxLength = step * words.length // 达到阈值的长度
  let start = 0, end = 0
  let flag = {} // 记录每一次使用哪些word的index
  let result = []
  
  // -1：未命中、1：命中未重复、-2：命中并重复
  function checkWord(word) {
    let res = -1
    
    for(let i = 0; i < words.length; i++) {
      if (words[i] === word && !flag.hasOwnProperty(i)) {
        res = i
        return res
      }
      if (words[i] === word && flag.hasOwnProperty(i)) {
        res = -2
      }
    }

    return res
  }
  
  function deleteFlag(start) {  
    for (let key in flag) {
      if (flag[key] === start) {
        delete flag[key]
        return
      }
    }
  }
  
  while (end + step - 1 < s.length) {
    const current = s.substring(end, end + step)
    const index = checkWord(current)
    if (index >= 0) { // 命中
      flag[index] = end
      end += step 
    } else if (index === -1) { // 未命中
      end += step
      start = end
    } else if (index === -2) {  // 命中且重复
      deleteFlag(start)
      start += step
    }
    
    if (end - start === maxLength) {
      result.push(start)
      
      deleteFlag(start)
      start += step
    }
  }
  
  return result
};

findSubstring("barfoofoobarthefoobarman", ["bar","foo","the"])