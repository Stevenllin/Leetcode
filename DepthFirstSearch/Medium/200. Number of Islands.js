/** 練習兩次 */

/** Method 1 
 * 策略：
 * 1.透過 DFS 函數尋找 island，僅檢查當前點為 1。此外，若碰到當前點為 1，則覆寫為 'A'，代表已走過該點。反之，return 函數
 * 
 * 時間複雜度為：O(n^2)
 */
 var numIslands = function(grid) {
  const rows = grid.length
  const columns = grid[0].length

  let result = 0

  for(let row = 0; row < rows; row++){
    for(let column = 0; column < columns; column++){
      if(grid[row][column] === '1'){
        result++
        helper(row, column)  
      }
    }  
  }

  return result

  function helper(i, j){
    if(i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === 'A' || grid[i][j] === '0') return
    if(grid[i][j] === '1'){
      grid[i][j] = 'A'
      helper(i-1, j)
      helper(i+1, j)
      helper(i, j-1)
      helper(i, j+1)
    }
  }
};
