/** method 1
 * Strategy
 * 
 * @sum the sum of each number in array @nums 
 * 
 * this method is to sum up [0, nums.length] then minus @sum
*/

var missingNumber = function(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i]
  }
  return ((1 + nums.length)/2) * nums.length - sum
};