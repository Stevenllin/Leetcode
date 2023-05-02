/** method 1 
 * 
 */
 var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  
  while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const number = nums[middle]

    if (number === target) return middle

    if (nums[left] <= number) {
      if (target >= nums[left] && target < number) {
        right = middle
      } else {
        left = middle + 1
      }
    } else {
      if (target > number && target <= nums[right]) {
        left = middle + 1
      } else {
        right = middle
      }
    }
  }
  return -1;
};
