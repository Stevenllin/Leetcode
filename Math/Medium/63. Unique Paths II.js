/** method 1
 * 
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const row = obstacleGrid.length
  const column = obstacleGrid[0].length

  const array = new Array(row+1).fill(0).map(item => new Array(column+1).fill(0))
  array[0][1] = 1
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
       array[i][j] = obstacleGrid[i-1][j-1] === 0 ? array[i-1][j] + array[i][j-1] : 0
    }
  }
  return array[row][column]
};
