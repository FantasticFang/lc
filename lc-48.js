/**
48. Rotate Image
中等
相关标签
相关企业
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  if (n === 1) {
    return
  }
  
  function rotateOuter(matrix, currentRow, startCol, endCol) {
    if (endCol - startCol < 1) {
      return
    }
    
    // 注意边界值，最后一个值已经在第一次参与旋转
    for (let col = startCol; col < endCol - 1; col++) {
      let i = currentRow, j = col // 旋转起始点
      const rotateStart = matrix[i][j] // 旋转起始值
      for (let k = 0; k < 3; k++) {
        matrix[i][j] = matrix[n - 1 - j][i]
        const tmp = i
        i = n - 1 - j
        j = tmp
      }
      matrix[i][j] = rotateStart
    } 
    
    rotateOuter(matrix, currentRow + 1, startCol + 1, endCol - 1)
  }
  
  rotateOuter(matrix, 0, 0, n)
};

rotate([[1,2,3],[4,5,6],[7,8,9]])