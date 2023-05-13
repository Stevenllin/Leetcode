/** method 1 
 * 
 */
var numIslands = function(grid) {
  const rows = grid.length
  const columns = grid[0].length
  let result = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === '1') {
        result++
        findElement(i, j)
      }
    }
  }
  return result

  function findElement (i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= columns) return
    if (grid[i][j] === 'A' || grid[i][j] === '0') return
    if (grid[i][j] === '1') {
      grid[i][j] = 'A'
      findElement(i+1, j)
      findElement(i-1, j)
      findElement(i, j+1)
      findElement(i, j-1)
    }
  }
};
