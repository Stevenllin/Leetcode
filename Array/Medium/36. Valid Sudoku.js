/** method 1 
 * 
*/
function isValidSudoku(board) {
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      const target = board[i][j]
      if(target !== '.'){
        if (!isValidRow(i, j, target) || !isValidColumn(i, j, target) || !isValidBox(i, j, target)){
          return false
        }
      }
    }
  }
  return true

  function isValidRow(row, column, target){
    for(let i = 0; i < 9; i++){
      if(i !== column){
        if(target === board[row][i]){
          return false
        }
      }
    }
    return true
  }

  function isValidColumn(row, column, target){
    for(let i = 0; i < 9; i++){
      if(i !== row){
        if(target === board[i][column]){
          return false
        }
      }
    }
    return true
  }

  function isValidBox(row, column, target){
    const startRow = row - (row % 3)
    const startColumn = column - (column % 3)

    for(let i = startRow; i < startRow + 3; i++){
      for(let j = startColumn; j < startColumn + 3; j++){
        if(i !== row && j !== column){
          if(target === board[i][j]){
            return false
          }
        }
      }
    }
    return true
  }
};
