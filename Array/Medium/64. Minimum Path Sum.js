/** method 1 
 * 
 */

var minPathSum = function(grid) {
  if (!grid) return 0
  let row = grid.length
  let column = grid[0].length

  for(let i = 0; i < row; i++){
    for(let j = 0; j < column; j++){
      if (i === 0 && j === 0) continue

      if (i === 0) {
        grid[i][j] = grid[i][j] + grid[i][j-1]
      } else if (j === 0) {
        grid[i][j] = grid[i][j] + grid[i-1][j]
      } else {
        grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j]
      }
    }
  }
  return grid[row-1][column-1]
};
