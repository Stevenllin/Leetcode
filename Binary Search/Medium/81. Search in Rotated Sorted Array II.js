/** method 1 
 * 
 */
var search = function(nums, target) {
  return nums.includes(target)
};

/** method 2
 * 
 */
 var search = function(nums, target) {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const number = nums[middle]

    if (number === target) {
      return true
    } else if (number > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return false
};
