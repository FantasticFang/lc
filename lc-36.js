/**
36. Valid Sudoku
中等
相关标签
相关企业
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function checkDuplicate(items) {
  const set = new Set()
  
  for (let item of items) {
    if (item !== ".") {
      if (!set.has(item)) {
        set.add(item)
      } else {
        return true
      }
    }
  }
  
  return false
}

var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++){
    const items = []
    for (let j = 0; j < 9; j++) {
      items.push(board[i][j])
    }
    
    if (checkDuplicate(items)) {
      return false
    }
  }
  
  for (let i = 0; i < 9; i++){
    const items = []
    for (let j = 0; j < 9; j++) {
      items.push(board[j][i])
    }
    
    if (checkDuplicate(items)) {
      return false
    }
  }
  
  for (let i = 0; i < 7; i+=3){
    for (let j = 0; j < 7; j+=3) {
      const items = [
        board[i][j], board[i][j + 1], board[i][j + 2],
        board[i + 1][j], board[i + 1][j + 1], board[i + 1][j + 2],
        board[i + 2][j], board[i + 2][j + 1], board[i + 2][j + 2]
      ]
      if (checkDuplicate(items)) {
        return false
      }
    }
  }
  
  return true
};

isValidSudoku([
  [".", ".", ".", ".", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["9", "3", ".", ".", "2", ".", "4", ".", "."],
  [".", ".", "7", ".", ".", ".", "3", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", "4", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "3", ".", ".", "."],
  [".", ".", ".", ".", ".", "5", "2", ".", "."]
])
