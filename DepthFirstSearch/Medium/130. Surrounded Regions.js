/** method 1 
 * 
 */
var solve = function(board) {
  const row = board.length
  const column = board[0].length
  if (row === 0) return [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i === 0 || j === 0 || i === row-1 || j === column-1) {
        helper(i, j)
      }
    }
  }
  function helper (i, j) {
    if (i < 0 || i > row-1 || j < 0 || j > column-1 || board[i][j] !== 'O') return

    board[i][j] = 'A'
    helper(i+1, j)
    helper(i, j+1)
    helper(i-1, j)
    helper(i, j-1)
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X'
      if (board[i][j] === 'A') board[i][j] = 'O'
    }
  }
};
