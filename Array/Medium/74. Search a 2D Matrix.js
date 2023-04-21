/** method 1 
 * 
 */

var searchMatrix = function(matrix, target) {
  const flatArray = matrix.flat()

  let left = 0
  let right = flatArray.length - 1

  while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const current = flatArray[middle]

    if (current > target) {
      right = middle - 1
    } else if (current < target) {
      left = middle + 1
    } else {
      return true
    }
  }
  return false
};