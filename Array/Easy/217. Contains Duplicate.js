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

/** method 2
 * @set Set data structure is an object to store unique values of any type
 * 
 * SO if the length of @nums is not equal to the size of @set wnhich represent there are duplicated number in array @nums
*/

var containsDuplicate = function(nums) {
  const set = new Set(nums)

  const setLength = set.size
  const arrayLength = nums.length

  return setLength !== arrayLength
};