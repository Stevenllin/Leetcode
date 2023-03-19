/** method 1 
 * 
 * Hint it's a sorted array @nums
 * It's a classic binary search problem.
 * 
 * Time complexity O(logn)
 */

var search = function(nums, target) {
  let bottomIndex = 0
  let topIndex = nums.length - 1

  while(bottomIndex <= topIndex){
    let middleIndex = Math.floor((bottomIndex + topIndex)/2)
    if(nums[middleIndex] === target){
      return middleIndex
    }else if(nums[middleIndex] < target){
      bottomIndex = middleIndex + 1
    }else{
      topIndex = middleIndex - 1
    }
  }
  return -1
};
