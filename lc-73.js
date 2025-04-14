/**
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
You must do it in place.

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// o(m + n)
var setZeroes = function(matrix) {
  const row = new Set();
  const column = new Set();
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i)
        column.add(j)
      }
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row.has(i) || column.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
};

// o(1)
// 分别涉及到该点位为0、该点位横向有0、该点位竖向有0、该点位横竖向都有0，以上4个状态的标记
var setZeroes = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        if (matrix[i][0] === 'column') {
          matrix[i][0] = 'row+column'
        }
        if (matrix[0][j] === 'row') {
          matrix[0][j] = 'row+column'
        }
        if (matrix[i][0] !== 0 && matrix[i][0] !== 'row+column') {
          matrix[i][0] = 'row'
        }
        if (matrix[0][j] !== 0 && matrix[0][j] !== 'row+column') {
          matrix[0][j] = 'column'
        }
      }
    }
  }
  
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0 || matrix[i][0] === 'row' || matrix[0][j] === 'column' || matrix[i][0] === 'row+column' || matrix[0][j] === 'row+column') {
        matrix[i][j] = 0
      }
      if (matrix[i][j] === 'row' || matrix[i][j] === 'column' || matrix[i][j] === 'row+column') {
        matrix[i][j] = 0
      }
    }
  }
};

setZeroes([[8,3,6,9,7,8,0,6],[0,3,7,0,0,4,3,8],[5,3,6,7,1,6,2,6],[8,7,2,5,0,6,4,0],[0,2,9,9,3,9,7,3]])