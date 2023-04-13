/** method 1 
 * 
 */
var rotate = function(matrix) {
  /**  */
  for(let i = 0; i < Math.floor(matrix.length/2); i++){
    const temp = [...matrix[i]]
    matrix[i] = [...matrix[matrix.length-1-i]]
    matrix[matrix.length-1-i] = temp
  }
  /** Diagonal reversed */
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(j > i){
        const temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }
  return matrix
};
