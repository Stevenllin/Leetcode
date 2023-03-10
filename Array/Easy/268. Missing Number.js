/** method 1
 * Strategy
 * 
 * @sum the sum of each number in array @nums 
 * 
 * this method is to sum up [0, nums.length] then minus @sum
 * 
 * Time complexity is O(1)
*/

var missingNumber = function(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i]
  }
  return ((1 + nums.length)/2) * nums.length - sum
};

/** method 2
 * Strategy
 * 
 * Array method includes or indexOf time complexity is O(n) 
 * 
 * So the time complexity is O(n^2)
*/
var missingNumber = function(nums) {
  let index = 0
  for(let i = 0; i < nums.length; i++){
    if (!nums.includes(index)) {
      return index
    }
    index++
  }
  return nums.length
};