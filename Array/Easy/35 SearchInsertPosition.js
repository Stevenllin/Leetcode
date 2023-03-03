/** Method 1 Binary Search
 * Strategy
 * 
 * if target is exist in array @nums then array method indexOf can find out the result
 * otherwise usind binary search method and return rightIndex + 1
 * 
 * Notice that while loop condition should contains equal operator to find out when target is smaller than the smallest number in @nums
 * the time complexity could be O(logn)
*/
var searchInsert = function(nums, target) {
  if (nums.indexOf(target) >= 0) return nums.indexOf(target)

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex+rightIndex)/2)
    if (nums[middleIndex] > target) {
      rightIndex = middleIndex - 1
    } else if (nums[middleIndex] < target) {
      leftIndex = middleIndex + 1
    } else {
      return middleIndex;
    }
  }

  return rightIndex + 1
};

/** Method 2 
 * Strategy
 * This method is add target to nums and sort again
 * 
 * the time complexity could be O(n)
*/
var searchInsert = function(nums, target) {
  nums.push(target)
  nums.sort((a, b) => a - b)
  
  return nums.indexOf(target)
};