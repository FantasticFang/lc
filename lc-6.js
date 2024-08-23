/**
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 朴素解法，时间复杂度（o(numRows * s.length)），空间复杂度（o(numRows * s.length)）
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s
  }
  let row = 0, col = 0, isVertical = true  // 起点
  const resultArr = []
  for (let i = 0; i < s.length; i++) {
    if (row === 0) {
      isVertical = true
    }
    if (row === numRows - 1) {
      isVertical = false
    }
    if (!resultArr[row]) {
      resultArr[row] = []
    }
    if (isVertical) {
      resultArr[row][col] = s[i]
      row++
    } else {
      resultArr[row][col] = s[i]
      col++
      row--
    }
  }
  
  let resultString = ''
  for (let i = 0; i < numRows; i++) {
    let length = resultArr[i].length
    for (let j = 0; j < length; j++) {
      if (resultArr[i][j]) {
        resultString += resultArr[i][j]
      }
    }
  }

  return resultString
};

// 压缩二维矩阵的length解法，去掉col，col的准确值已不重要，重要的是每一行的顺序
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s
  }
  let row = 0, isVertical = true  // 起点
  const resultArr = []
  for (let i = 0; i < s.length; i++) {
    if (row === 0) {
      isVertical = true
    }
    if (row === numRows - 1) {
      isVertical = false
    }
    if (!resultArr[row]) {
      resultArr[row] = []
    }
    if (isVertical) {
      resultArr[row].push(s[i])
      row++
    } else {
      resultArr[row].push(s[i])
      row--
    }
  }
  
  let resultString = ''
  for (let i = 0; i < numRows; i++) {
    let length = resultArr[i].length
    for (let j = 0; j < length; j++) {
        resultString += resultArr[i][j]
    }
  }

  return resultString
};

// 根据规律直接访问index,时间复杂度o(s.length)，空间复杂度o(1)
var convert = function (s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s
  }
  let resultString = ''
  
  for (let row = 0; row < numRows; row++) {
    resultString += s[row]
    let currentIndex = row
    let i = 1 // 第i周期
    while (true) {
      const firstIndex = -row + i * 2 * (numRows - 1) // 周期内第一个元素
      const secondIndex = row + i * 2 * (numRows - 1) // 周期内第二个元素
      if (firstIndex !== currentIndex && firstIndex < s.length) {
        resultString += s[firstIndex]
        currentIndex = firstIndex
      }
      if (secondIndex !== currentIndex && secondIndex < s.length) {
        resultString += s[secondIndex]
        currentIndex = secondIndex
      }
      if (secondIndex >= s.length) { // 周期内第二个元素超过长度时，即可返回
        break
      }
      i++
    }
  }
  return resultString
};
