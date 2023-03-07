/** Method 1
 * Strategy
 * 
 * @prev is the previous layer
 * @cur is the current layer
 * @index the index of current layer
 * 
 * the method is to create the @cur according to the @prev
 * if @index is equal to the target index @rowIndex then return @cur
 * other set the @prev to @cur and continue with the next loop
*/

var getRow = function(rowIndex) {
  if(rowIndex == 0) return [1]
  if(rowIndex == 1) return [1, 1]

  let prev = [1, 1]
  let index = 2
  while (index <= rowIndex) {
      const cur = [1]
      for (let i = 0; i < prev.length-1; i++){
          cur.push(prev[i]+prev[i+1])
      }
      cur.push(1)
      if (index !== rowIndex) {
          prev = cur
      } else {
          return cur
      }
      index++
  }
};