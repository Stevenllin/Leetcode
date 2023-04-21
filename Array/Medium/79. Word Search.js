/** method 1 
 * 
 */
 var exist = function(board, word) {
  if (word === "") return true
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === word[0]){
        if(search(0, i, j)) return true
      }
    }
  }
  return false

  function search(index, row, column){
    if(index === word.length) return true
    if(!board[row] || !board[row][column]) return false
    if(board[row][column] !== "#" && board[row][column] === word[index]){
      const target = board[row][column]
      board[row][column] = "#"
      if(search(index+1, row-1, column)) return true
      if(search(index+1, row+1, column)) return true
      if(search(index+1, row, column-1)) return true
      if(search(index+1, row, column+1)) return true
      board[row][column] = target
    }
    return false
  }
};