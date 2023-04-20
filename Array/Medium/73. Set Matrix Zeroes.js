/** method 1 
 * 
 */

var setZeroes = function(matrix) {
  const row = new Set()
  const column = new Set()

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] === 0){
        row.add(i)
        column.add(j)
      }
    }
  }
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
      if(row.has(i) || column.has(j)){
        matrix[i][j] = 0
      }
    }
  }
  return matrix
};