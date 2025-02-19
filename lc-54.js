/**
Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let maxRow = matrix.length - 1, maxColumn = matrix[0].length - 1
  let minRow = 0, minColumn = 0
  let direction = 'left-to-right'
  let i = 0, j = 0
  let res = []
  
  while (minRow <= maxRow && minColumn <= maxColumn) {
    if (direction === 'left-to-right') {
      if (j <= maxColumn) {
        res.push(matrix[i][j])
      }
      if (j === maxColumn) {
        direction = 'top-to-bottom'
        minRow++
        i++
      } else {
        j++
      }
    } else if (direction === 'top-to-bottom') {
      if (i <= maxRow) {
        res.push(matrix[i][j])
      }
      if (i === maxRow){
        direction = 'right-to-left'
        maxColumn--
        j--
      } else {
        i++
      }
    } else if (direction === 'right-to-left') {
      if (j >= minColumn) {
        res.push(matrix[i][j])
      }
      if (j === minColumn) {
        direction = 'bottom-to-top'
        maxRow--
        i--
      } else {
        j--
      }
    } else if (direction === 'bottom-to-top') {
      if (i >= minRow) {
        res.push(matrix[i][j])
      }
      if (i === minRow) {
        direction = 'left-to-right'
        minColumn++
        j++
      } else {
        i--
      }
    }
  }
  
  return res
};

var spiralOrder = function(matrix) {
  let maxRow = matrix.length, maxColumn = matrix[0].length
  
  const res = []
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let currentDirection = 0
  let i = 0, j = 0
  
  while (true) {
    if (matrix[i] && matrix[i][j] !== undefined) {
      res.push(matrix[i][j])
    }
    matrix[i][j] = undefined // 改变了原数组，如果不改变原数组，重新创造一个数组记录即可
    
    if (matrix[i + directions[currentDirection][0]] && matrix[i + directions[currentDirection][0]][j + directions[currentDirection][1]] !== undefined) {
      i += directions[currentDirection][0]
      j += directions[currentDirection][1]
    } else {
      currentDirection = (currentDirection + 1) % 4
    }
    
    if (res.length === maxRow * maxColumn) {
      break
    }
  }
  
  return res
}

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])