/** method 1 
 * 
 */
var uniquePaths = function(m, n) {
  const array = new Array(m+1).fill(1).map(item => new Array(n+1).fill(0))
  for (let i = 1; i < m+1; i++) {
    for (let j = 1; j < n+1; j++) {
      if (i === 1 && j === 1) {
        array[i][j] = 1
      } else {
        array[i][j] = array[i-1][j] + array[i][j-1]
      }
    }
  }
  return array[m][n]
};
