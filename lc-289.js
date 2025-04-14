/**
289. Game of Life

According to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population.
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
The next state of the board is determined by applying the above rules simultaneously to every cell in the current state of the m x n grid board. In this process, births and deaths occur simultaneously.

Given the current state of the board, update the board to reflect its next state.

Note that you do not need to return anything.

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  function getNextState(i, j) {
    let liveNeighborsCount = 0
    if (board[i - 1] && (board[i - 1][j - 1] === 1 || board[i - 1][j - 1] === 2)) {
      liveNeighborsCount++
    }
    if (board[i - 1] && (board[i - 1][j] === 1 || board[i - 1][j] === 2)) {
      liveNeighborsCount++
    }
    if (board[i - 1] && (board[i - 1][j + 1] === 1 || board[i - 1][j + 1] === 2)) {
      liveNeighborsCount++
    }
    if (board[i][j - 1] === 1 || board[i][j - 1] === 2) {
      liveNeighborsCount++
    }
    if (board[i][j + 1] === 1) {
      liveNeighborsCount++
    }
    if (board[i + 1] && board[i + 1][j - 1] === 1) {
      liveNeighborsCount++
    }
    if (board[i + 1] && board[i + 1][j] === 1) {
      liveNeighborsCount++
    }
    if (board[i + 1] && board[i + 1][j + 1] === 1) {
      liveNeighborsCount++
    }
    
    if (board[i][j] === 1) {
      if (liveNeighborsCount < 2 || liveNeighborsCount > 3) {
        return 2
      } 
      return 1
    } else {
      if (liveNeighborsCount === 3) {
        return 3
      }
      return 0
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = getNextState(i, j)
    }
  }
  
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 2) {
        board[i][j] = 0
      } 
      if (board[i][j] === 3) {
        board[i][j] = 1
      }
    }
  }
};


gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])