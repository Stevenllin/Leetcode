/** method 1
 * 
 * @obj an object to store the number of each number in an array @nums
 * 
 * Notice that if obj[nums[i]] is exist which represent the number is duplicated then return true
*/

var containsDuplicate = function(nums) {
  let obj = {}

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      return true
    } else {
      obj[nums[i]] = 1
    }
  }
  return false
};
