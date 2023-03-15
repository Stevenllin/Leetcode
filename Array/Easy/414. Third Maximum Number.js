/** method 1
 * Strategy
 * 
 * @set to store undepulicated number and covert to a new array @sortedArray
 * 
*/
var thirdMax = function(nums) {
  const set = new Set(nums)
  const sortedArray = Array.from(set).sort((a, b) => b - a)

  return sortedArray.length >= 3 ? sortedArray[2] : sortedArray[0]
};